export declare enum userStatus {
    ACTIVE = "ACTIVE",
    INACTIVE = "INACTIVE",
    BANNED = "BANNED"
}
export declare class UserCreateDto {
    email: string;
    password: string;
    fullName?: string;
    dateOfBirth?: string;
    gender?: number;
    status?: userStatus;
}
