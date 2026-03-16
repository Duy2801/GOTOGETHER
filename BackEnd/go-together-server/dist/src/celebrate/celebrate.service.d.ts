import { PrismaService } from "src/prisma/prisma.service";
import { CreateCelebrateDTO } from "./dto/celebrate.dto";
import { UpdateCelebrateDTO } from "./dto/update-celebrate.dto";
export declare class CelebrateService {
    private prisma;
    constructor(prisma: PrismaService);
    getAllCelebrate(userId: string): Promise<({
        images: {
            id: string;
            createdAt: Date;
            celebrateId: string;
            imageUrl: string;
        }[];
        trip: {
            images: string | null;
            id: string;
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
    } & {
        description: string | null;
        tripId: string;
        date: Date;
        id: string;
        userId: string;
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
        description: string | null;
        tripId: string;
        date: Date;
        id: string;
        userId: string;
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
        description: string | null;
        tripId: string;
        date: Date;
        id: string;
        userId: string;
        createdAt: Date;
    }>;
}
