import {
  IsArray,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  ValidateNested,
} from "class-validator";
import { Type } from "class-transformer";

class CustomSplitDto {
  @IsString()
  userId: string;

  @IsNumber()
  amount: number;
}

export class CreateExpense {
  @IsOptional()
  @IsString()
  tripId?: string;

  @IsNotEmpty()
  @IsNumber()
  amount: number;

  @IsOptional()
  @IsString()
  currency?: string;

  @IsNotEmpty()
  @IsString()
  categoryId: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsNotEmpty()
  @IsString()
  paidById: string;

  @IsOptional()
  @IsString()
  type?: string;

  @IsOptional()
  @IsString()
  date?: string;

  @IsOptional()
  @IsString()
  receipt?: string;

  @IsNotEmpty()
  @IsEnum(["EQUAL", "CUSTOM", "PERCENTAGE"])
  splitType: "EQUAL" | "CUSTOM" | "PERCENTAGE";

  @IsNotEmpty()
  @IsArray()
  participants: string[];

  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => CustomSplitDto)
  customSplits?: CustomSplitDto[];
}
