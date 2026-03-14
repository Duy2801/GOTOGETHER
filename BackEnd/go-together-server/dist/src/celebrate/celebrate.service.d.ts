import { PrismaService } from "src/prisma/prisma.service";
import { CreateCelebrateDTO } from "./dto/celebrate.dto";
import { UpdateCelebrateDTO } from "./dto/update-celebrate.dto";
export declare class CelebrateService {
    private prisma;
    constructor(prisma: PrismaService);
    getAllCelebrate(userId: string): Promise<({
        trip: {
            id: string;
            images: string | null;
            name: string;
            startDate: Date;
            endDate: Date;
            status: import("../../prisma/generated/enums").TripStatus;
        };
        user: {
            id: string;
            fullName: string | null;
            avatar: string | null;
        };
        images: {
            id: string;
            createdAt: Date;
            celebrateId: string;
            imageUrl: string;
        }[];
    } & {
        id: string;
        tripId: string;
        userId: string;
        description: string | null;
        date: Date;
        createdAt: Date;
    })[]>;
    createCelebrate(userId: string, data: CreateCelebrateDTO): Promise<{
        images: {
            id: string;
            createdAt: Date;
            celebrateId: string;
            imageUrl: string;
        }[];
    } & {
        id: string;
        tripId: string;
        userId: string;
        description: string | null;
        date: Date;
        createdAt: Date;
    }>;
    updateCelebrate(celebrateId: string, userId: string, data: UpdateCelebrateDTO): Promise<{
        images: {
            id: string;
            createdAt: Date;
            celebrateId: string;
            imageUrl: string;
        }[];
    } & {
        id: string;
        tripId: string;
        userId: string;
        description: string | null;
        date: Date;
        createdAt: Date;
    }>;
}
