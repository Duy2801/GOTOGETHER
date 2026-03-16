import { CelebrateService } from "./celebrate.service";
import { CreateCelebrateDTO } from "./dto/celebrate.dto";
import { UpdateCelebrateDTO } from "./dto/update-celebrate.dto";
export declare class CelebrateController {
    private celebrateService;
    constructor(celebrateService: CelebrateService);
    getAllCelebration(req: any): Promise<({
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
    createCelebrate(req: any, dto: CreateCelebrateDTO): Promise<{
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
    updateCelebrate(req: any, celebrateId: string, dto: UpdateCelebrateDTO): Promise<{
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
