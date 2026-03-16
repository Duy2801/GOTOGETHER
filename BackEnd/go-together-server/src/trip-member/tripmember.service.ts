import {
  BadRequestException,
  ForbiddenException,
  Injectable,
  NotFoundException,
} from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class TripMemberService {
  constructor(private prisma: PrismaService) {}

  async ensureTripMember(userId: string, tripId: string) {
    const member = await this.prisma.tripMember.findUnique({
      where: { tripId_userId: { tripId, userId } },
    });
    if (!member || member.inviteStatus !== "ACCEPTED") {
      throw new ForbiddenException("Bạn không thuộc chuyến đi này");
    }
  }
  async ensureTripOwner(userId: string, tripId: string) {
    const member = await this.prisma.tripMember.findUnique({
      where: { tripId_userId: { tripId, userId } },
    });
    if (!member) {
      throw new ForbiddenException("Bạn không thuộc chuyến đi này");
    }
    if (member.role !== "OWNER") {
      throw new ForbiddenException(
        "Bạn không có quyền thực hiện thao tác này. Chỉ chủ chuyến đi mới có quyền mời thành viên.",
      );
    }
  }
  async inviteMember(ownerId: string, tripId: string, email: string) {
    console.log(
      `[InviteMember] User ${ownerId} inviting ${email} to trip ${tripId}`,
    );

    await this.ensureTripOwner(ownerId, tripId);

    const expenseCount = await this.prisma.expense.count({
      where: { tripId },
    });
    console.log(`[InviteMember] Trip has ${expenseCount} expenses`);

    if (expenseCount > 0) {
      throw new BadRequestException(
        "Không thể thêm thành viên khi đã có chi tiêu trong chuyến đi",
      );
    }

    const inviteUser = await this.prisma.user.findUnique({
      where: { email },
    });

    if (!inviteUser) {
      console.log(`[InviteMember] User not found with email: ${email}`);
      throw new NotFoundException("Không tìm thấy người dùng với email này");
    }

    console.log(
      `[InviteMember] Found user: ${inviteUser.id} - ${inviteUser.fullName}`,
    );

    const existingMember = await this.prisma.tripMember.findUnique({
      where: { tripId_userId: { tripId, userId: inviteUser.id } },
    });

    if (existingMember) {
      if (existingMember.inviteStatus === "ACCEPTED") {
        throw new BadRequestException("Người dùng đã là thành viên");
      }
      if (existingMember.inviteStatus === "PENDING") {
        throw new BadRequestException("Lời mời đã được gửi trước đó");
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

    console.log(
      `[InviteMember] Successfully created invitation for ${inviteUser.email}`,
    );
    return member;
  }
  async repondInitation(
    userId: string,
    tripId: string,
    status: "ACCEPTED" | "REJECTED",
  ) {
    const member = await this.prisma.tripMember.findUnique({
      where: { tripId_userId: { tripId, userId } },
    });

    if (!member) {
      throw new NotFoundException("Không tìm thấy lời mời");
    }
    if (member.inviteStatus !== "PENDING") {
      throw new BadRequestException("Lời mời đã được xử lý");
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
    } else {
      return await this.prisma.tripMember.delete({
        where: { tripId_userId: { tripId, userId } },
      });
    }
  }
  async getTripMembers(userId: string, tripId: string) {
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
  async leaveTrip(userId: string, tripId: string) {
    const member = await this.prisma.tripMember.findUnique({
      where: {
        tripId_userId: { tripId, userId },
      },
    });
    if (!member) {
      throw new NotFoundException("Bạn không thuộc chuyến đi này");
    }
    if (member.leftAt) {
      throw new BadRequestException("Bạn đã rời chuyến đi trước đó");
    }
    if (member.role === "OWNER") {
      throw new BadRequestException(
        "Chủ chuyến đi phải chuyển quyền trước khi rời nhóm",
      );
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
  async roleChange(userId: string, tripId: string, newOwnerId: string) {
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
}
