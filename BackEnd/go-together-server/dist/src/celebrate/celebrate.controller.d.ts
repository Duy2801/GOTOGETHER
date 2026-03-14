import { CelebrateService } from "./celebrate.service";
export declare class CelebrateController {
    private celebrateService;
    constructor(celebrateService: CelebrateService);
    getAllCelebration(req: any): Promise<({
        user: {
            id: string;
            fullName: string | null;
            avatar: string | null;
        };
        trip: {
            id: string;
            status: import("../../prisma/generated/enums").TripStatus;
            name: string;
            startDate: Date;
            endDate: Date;
            images: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        description: string | null;
        userId: string;
        tripId: string;
        date: Date;
    }) | null>;
}
