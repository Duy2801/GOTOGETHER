import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { PrismaModule } from "./prisma/prisma.module";
import { UserModule } from "./user/user.module";
import { AuthModule } from "./auth/auth.module";
import { AppController } from "./app.controller";
import { TripModule } from "./trip/trip.module";
import { CelebrateModule } from "./celebrate/celebrate.module";
import { ExpenseModule } from "./expense/expense.module";
import { TripMemberModule } from "./trip-member/tripmember.module";
import { StorageModule } from "./storage/storage.module";
@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    PrismaModule,
    UserModule,
    AuthModule,
    TripModule,
    CelebrateModule,
    ExpenseModule,
    TripMemberModule,
    StorageModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
