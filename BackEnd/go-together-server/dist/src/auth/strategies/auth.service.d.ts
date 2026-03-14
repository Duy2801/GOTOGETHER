import { registerDTO } from "../dto/register.dto";
import { UserService } from "src/user/user.service";
import { PrismaService } from "src/prisma/prisma.service";
import { RedisService } from "src/redis/redis.service";
import type { Queue } from "bull";
import { loginDTO } from "../dto/login.dto";
import { JwtService } from "@nestjs/jwt";
import { ConfigService } from "@nestjs/config";
import { UserReponse } from "src/user/dto/user.reponse";
export declare class AuthService {
    private userService;
    private prisma;
    private redisservice;
    private jwtService;
    private configService;
    private mailQueue;
    constructor(userService: UserService, prisma: PrismaService, redisservice: RedisService, jwtService: JwtService, configService: ConfigService, mailQueue: Queue);
    generateOtp(): string;
    register(data: registerDTO): Promise<{
        message: string;
    }>;
    login(data: loginDTO): Promise<{
        user: UserReponse;
        accessToken: string;
    }>;
    private signAccessToken;
    private signRefreshToken;
    logout(userId: string, deviceId?: string): Promise<{
        message: string;
    }>;
}
