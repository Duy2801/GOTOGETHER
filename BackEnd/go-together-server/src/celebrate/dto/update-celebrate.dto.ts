import { ApiProperty } from "@nestjs/swagger";
import { IsArray, IsDateString, IsOptional, IsString } from "class-validator";

export class UpdateCelebrateDTO {
  @ApiProperty({ example: "2026-04-02" })
  @IsOptional()
  @IsDateString()
  date?: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  description?: string;

  @ApiProperty()
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  images?: string[];
}
