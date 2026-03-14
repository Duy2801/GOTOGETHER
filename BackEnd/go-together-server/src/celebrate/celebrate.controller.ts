import { Controller, Get, Req, UseGuards } from "@nestjs/common";
import { ApiBearerAuth, ApiOperation, ApiTags } from "@nestjs/swagger";
import { CelebrateService } from "./celebrate.service";
import { JwtAuthGuard } from "./guards/jwt-auth.guard";
@ApiTags("Celebrate")
@Controller("celebrate")
export class CelebrateController {
  constructor(private celebrateService: CelebrateService) {}
  @ApiBearerAuth()
  @Get()
  @UseGuards(JwtAuthGuard)
  @ApiOperation({
    summary: "Lấy tất cả celebrate của user (kèm thông tin từng chuyến đi)",
  })
  getAllCelebration(@Req() req: any) {
    return this.celebrateService.getAllCelebrate(req.user.id);
  }
}
