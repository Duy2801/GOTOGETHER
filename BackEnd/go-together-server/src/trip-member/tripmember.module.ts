import { Module } from "@nestjs/common";
import { TripMemberService } from "./tripmember.service";
import { TripMemberController } from "./tripmember.controller";

@Module({
  imports: [],
  controllers: [TripMemberController],
  providers: [TripMemberService],
  exports: [TripMemberService],
})
export class TripMemberModule {}
