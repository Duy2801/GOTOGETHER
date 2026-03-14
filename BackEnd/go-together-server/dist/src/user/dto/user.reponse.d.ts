import { UserStatus } from "prisma/generated/enums";
export declare class UserReponse {
    id: string;
    email: string;
    fullName: string;
    dateOfBirth?: Date;
    gender?: number;
    avatar?: string;
    status: UserStatus;
    isVerified: boolean;
    createdAt: Date;
    updatedAt: Date;
}
