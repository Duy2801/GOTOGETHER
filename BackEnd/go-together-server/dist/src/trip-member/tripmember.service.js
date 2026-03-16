"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TripMemberService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let TripMemberService = class TripMemberService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async ensureTripMember(userId, tripId) {
        const member = await this.prisma.tripMember.findUnique({
            where: { tripId_userId: { tripId, userId } },
        });
        if (!member || member.inviteStatus !== "ACCEPTED") {
            throw new common_1.ForbiddenException("Bạn không thuộc chuyến đi này");
        }
    }
    async ensureTripOwner(userId, tripId) {
        const member = await this.prisma.tripMember.findUnique({
            where: { tripId_userId: { tripId, userId } },
        });
        if (!member) {
            throw new common_1.ForbiddenException("Bạn không thuộc chuyến đi này");
        }
        if (member.role !== "OWNER") {
            throw new common_1.ForbiddenException("Bạn không có quyền thực hiện thao tác này. Chỉ chủ chuyến đi mới có quyền mời thành viên.");
        }
    }
    async inviteMember(ownerId, tripId, email) {
        console.log(`[InviteMember] User ${ownerId} inviting ${email} to trip ${tripId}`);
        await this.ensureTripOwner(ownerId, tripId);
        const expenseCount = await this.prisma.expense.count({
            where: { tripId },
        });
        console.log(`[InviteMember] Trip has ${expenseCount} expenses`);
        if (expenseCount > 0) {
            throw new common_1.BadRequestException("Không thể thêm thành viên khi đã có chi tiêu trong chuyến đi");
        }
        const inviteUser = await this.prisma.user.findUnique({
            where: { email },
        });
        if (!inviteUser) {
            console.log(`[InviteMember] User not found with email: ${email}`);
            throw new common_1.NotFoundException("Không tìm thấy người dùng với email này");
        }
        console.log(`[InviteMember] Found user: ${inviteUser.id} - ${inviteUser.fullName}`);
        const existingMember = await this.prisma.tripMember.findUnique({
            where: { tripId_userId: { tripId, userId: inviteUser.id } },
        });
        if (existingMember) {
            if (existingMember.inviteStatus === "ACCEPTED") {
                throw new common_1.BadRequestException("Người dùng đã là thành viên");
            }
            if (existingMember.inviteStatus === "PENDING") {
                throw new common_1.BadRequestException("Lời mời đã được gửi trước đó");
            }
        }
        const member = await this.prisma.tripMember.create({
            data: {
                tripId,
                userId: inviteUser.id,
                role: "MEMBER",
                inviteStatus: "PENDING",
            },
            include: {
                user: {
                    select: {
                        id: true,
                        fullName: true,
                        email: true,
                        avatar: true,
                    },
                },
            },
        });
        console.log(`[InviteMember] Successfully created invitation for ${inviteUser.email}`);
        return member;
    }
    async repondInitation(userId, tripId, status) {
        const member = await this.prisma.tripMember.findUnique({
            where: { tripId_userId: { tripId, userId } },
        });
        if (!member) {
            throw new common_1.NotFoundException("Không tìm thấy lời mời");
        }
        if (member.inviteStatus !== "PENDING") {
            throw new common_1.BadRequestException("Lời mời đã được xử lý");
        }
        if (status === "ACCEPTED") {
            const updated = await this.prisma.tripMember.update({
                where: { tripId_userId: { tripId, userId } },
                data: {
                    inviteStatus: "ACCEPTED",
                    joinedAt: new Date(),
                },
            });
            return updated;
        }
        else {
            return await this.prisma.tripMember.delete({
                where: { tripId_userId: { tripId, userId } },
            });
        }
    }
    async getTripMembers(userId, tripId) {
        await this.ensureTripMember(userId, tripId);
        const members = await this.prisma.tripMember.findMany({
            where: { tripId },
            include: {
                user: {
                    select: {
                        id: true,
                        fullName: true,
                        email: true,
                        avatar: true,
                    },
                },
            },
            orderBy: [{ role: "desc" }, { createdAt: "asc" }],
        });
        return members;
    }
    async leaveTrip(userId, tripId) {
        const member = await this.prisma.tripMember.findUnique({
            where: {
                tripId_userId: { tripId, userId },
            },
        });
        if (!member) {
            throw new common_1.NotFoundException("Bạn không thuộc chuyến đi này");
        }
        if (member.leftAt) {
            throw new common_1.BadRequestException("Bạn đã rời chuyến đi trước đó");
        }
        if (member.role === "OWNER") {
            throw new common_1.BadRequestException("Chủ chuyến đi phải chuyển quyền trước khi rời nhóm");
        }
        return this.prisma.tripMember.update({
            where: {
                tripId_userId: { tripId, userId },
            },
            data: {
                leftAt: new Date(),
            },
        });
    }
    async roleChange(userId, tripId, newOwnerId) {
        const currentMember = await this.prisma.tripMember.findUnique({
            where: {
                tripId_userId: { tripId, userId },
            },
        });
        if (!currentMember) {
            throw new Error("Bạn không thuộc chuyến đi này");
        }
        if (currentMember.role !== "OWNER") {
            throw new Error("Chỉ chủ chuyến đi mới được chuyển quyền");
        }
        const newOwner = await this.prisma.tripMember.findUnique({
            where: {
                tripId_userId: { tripId, userId: newOwnerId },
            },
        });
        if (!newOwner) {
            throw new Error("Người này không thuộc chuyến đi");
        }
        if (newOwner.leftAt) {
            throw new Error("Người này đã rời chuyến đi");
        }
        return this.prisma.$transaction([
            this.prisma.tripMember.update({
                where: {
                    tripId_userId: { tripId, userId },
                },
                data: {
                    role: "MEMBER",
                },
            }),
            this.prisma.tripMember.update({
                where: { tripId_userId: { tripId, userId: newOwnerId } },
                data: {
                    role: "OWNER",
                },
            }),
        ]);
    }
};
exports.TripMemberService = TripMemberService;
exports.TripMemberService = TripMemberService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], TripMemberService);
//# sourceMappingURL=tripmember.service.js.map