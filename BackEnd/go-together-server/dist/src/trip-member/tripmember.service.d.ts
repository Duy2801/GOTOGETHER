import { PrismaService } from "src/prisma/prisma.service";
export declare class TripMemberService {
    private prisma;
    constructor(prisma: PrismaService);
    ensureTripMember(userId: string, tripId: string): Promise<void>;
    ensureTripOwner(userId: string, tripId: string): Promise<void>;
    inviteMember(ownerId: string, tripId: string, email: string): Promise<{
        user: {
            id: string;
            email: string;
            fullName: string | null;
            avatar: string | null;
        };
    } & {
        id: string;
        role: import("../../prisma/generated/enums").MemberRole;
        inviteStatus: import("../../prisma/generated/enums").InviteStatus;
        joinedAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
        tripId: string;
        userId: string;
    }>;
    repondInitation(userId: string, tripId: string, status: "ACCEPTED" | "REJECTED"): Promise<{
        id: string;
        role: import("../../prisma/generated/enums").MemberRole;
        inviteStatus: import("../../prisma/generated/enums").InviteStatus;
        joinedAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
        tripId: string;
        userId: string;
    }>;
    getTripMembers(userId: string, tripId: string): Promise<({
        user: {
            id: string;
            email: string;
            fullName: string | null;
            avatar: string | null;
        };
    } & {
        id: string;
        role: import("../../prisma/generated/enums").MemberRole;
        inviteStatus: import("../../prisma/generated/enums").InviteStatus;
        joinedAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
        tripId: string;
        userId: string;
    })[]>;
}
