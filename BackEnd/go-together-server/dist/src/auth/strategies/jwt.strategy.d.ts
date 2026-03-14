import { ConfigService } from "@nestjs/config";
import { Strategy } from "passport-jwt";
import { PrismaService } from "src/prisma/prisma.service";
declare const JwtStrategy_base: new (...args: [opt: import("passport-jwt").StrategyOptionsWithRequest] | [opt: import("passport-jwt").StrategyOptionsWithoutRequest]) => Strategy & {
    validate(...args: any[]): unknown;
};
export declare class JwtStrategy extends JwtStrategy_base {
    prismaService: PrismaService;
    constructor(configService: ConfigService, prismaService: PrismaService);
    validate(payload: {
        sub: string;
        email: string;
    }): Promise<{
        userId: string;
        email: string;
        roles: any[];
        permissions: any[];
    }>;
}
export {};
