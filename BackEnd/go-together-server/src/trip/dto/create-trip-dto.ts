import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import {
  IsDateString,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from "class-validator";

export class CreateTripDTO {
  @ApiProperty({ example: "Da lat" })
  @IsString()
  name: string;

  @ApiProperty({ example: "2026-04-01" })
  @IsDateString()
  startDate: string;

  @ApiProperty({ example: "2026-05-01" })
  @IsDateString()
  endDate: string;

  @ApiPropertyOptional({ example: 15000000 })
  @IsOptional()
  @IsNumber()
  @Min(0)
  totalBudget?: number;

  @ApiPropertyOptional({ example: "https://..." })
  @IsOptional()
  @IsString()
  images?: string;
}
