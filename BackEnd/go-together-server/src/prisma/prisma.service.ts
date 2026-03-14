import { Injectable, OnModuleInit } from "@nestjs/common";
import { PrismaClient } from "prisma/generated/client";
import { ConfigService } from "@nestjs/config";
import { PrismaMariaDb } from "@prisma/adapter-mariadb";
@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  constructor(private configService: ConfigService) {
    const adapter = new PrismaMariaDb({
      host: configService.get("DB_HOST"),
      port: Number(configService.get("DB_PORT")),
      user: configService.get("DB_USER"),
      password: configService.get("DB_PASS"),
      database: configService.get("DB_NAME"),
    });
    super({
      adapter,
    });
  }
  async onModuleInit() {
    await this.$connect();
  }
}
