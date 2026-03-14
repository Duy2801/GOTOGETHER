import { Module } from "@nestjs/common";
import { CelebrateController } from "./celebrate.controller";
import { CelebrateService } from "./celebrate.service";

@Module({
  imports: [],
  controllers: [CelebrateController],
  providers: [CelebrateService],
})
export class CelebrateModule {}
