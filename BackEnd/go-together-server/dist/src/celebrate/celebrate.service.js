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
exports.CelebrateService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let CelebrateService = class CelebrateService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getAllCelebrate(userId) {
        const celebrate = this.prisma.celebrate.findFirst({
            where: { userId },
            include: {
                trip: {
                    select: {
                        id: true,
                        name: true,
                        startDate: true,
                        endDate: true,
                        images: true,
                        status: true,
                    },
                },
                user: {
                    select: {
                        id: true,
                        fullName: true,
                        avatar: true,
                    },
                },
            },
            orderBy: { date: "asc" },
        });
        return celebrate;
    }
    async createCelebrate(userId, data) {
        const celebrate = await this.prisma.celebrate.create({
            data: {
                userId,
                tripId: data.tripId,
                description: data.description,
                date: data.date,
                images: {
                    create: data.images.map((img) => ({
                        imageUrl: img,
                    })),
                },
            },
            include: {
                images: true,
            },
        });
        return celebrate;
    }
    async updateCelebrate(celebrateId, userId, data) {
        const celebrate = await this.prisma.celebrate.findUnique({
            where: { id: celebrateId },
        });
        if (!celebrate)
            throw new common_1.NotFoundException("Celebrate not found");
        if (celebrate.userId !== userId)
            throw new common_1.ForbiddenException("celebrate.forbidden");
        return this.prisma.celebrate.update({
            where: { id: celebrateId },
            data: {
                ...(data.date && { date: new Date(data.date) }),
                ...(data.description !== undefined && {
                    description: data.description,
                }),
                ...(data.images && {
                    images: {
                        deleteMany: {},
                        create: data.images.map((img) => ({
                            imageUrl: img,
                        })),
                    },
                }),
            },
            include: {
                images: true,
            },
        });
    }
};
exports.CelebrateService = CelebrateService;
exports.CelebrateService = CelebrateService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], CelebrateService);
//# sourceMappingURL=celebrate.service.js.map