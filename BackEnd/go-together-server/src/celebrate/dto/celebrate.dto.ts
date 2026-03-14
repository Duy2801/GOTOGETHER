import {} from "@nestjs/common";
import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreateCelebrateDTO {
  @ApiProperty({ example: "trip-uuid" })
  @IsString()
  tripId: string;

  @ApiProperty({ example: "2026-04-01" })
  @IsString()
  date: string;

  @ApiProperty({ example: "Tuyet voi " })
  @IsString()
  description: string;

  @ApiProperty({ example: "" })
  @IsString()
  images: string[];
}
