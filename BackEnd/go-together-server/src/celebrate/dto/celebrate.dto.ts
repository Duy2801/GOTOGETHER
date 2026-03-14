import { ApiProperty } from "@nestjs/swagger";
import { IsArray, IsDateString, IsOptional, IsString } from "class-validator";

export class CreateCelebrateDTO {
  @ApiProperty({ example: "trip-uuid" })
  @IsString()
  tripId: string;

  @ApiProperty({ example: "2026-04-01" })
  @IsDateString()
  date: string;

  @ApiProperty({ example: "Tuyet voi " })
  @IsString()
  description: string;

  @ApiProperty({ example: ["https://.../image.jpg"], required: false })
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  images?: string[];
}
