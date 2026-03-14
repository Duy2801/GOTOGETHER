import {
  IsNotEmpty,
  IsString,
  IsNumber,
  IsEnum,
  IsArray,
  IsOptional,
  ValidateNested,
} from "class-validator";
import { Type } from "class-transformer";

class CustomSplitDto {
  @IsString()
  userId: string;

  @IsNumber()
  amount: number;
}

export class CreateExpenseDto {
  @IsNotEmpty()
  @IsNumber()
  amount: number;

  @IsOptional()
  @IsString()
  currency?: string = "VND";

  @IsNotEmpty()
  @IsString()
  categoryId: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsNotEmpty()
  @IsString()
  paidById: string;

  @IsNotEmpty()
  @IsEnum(["EQUAL", "CUSTOM", "PERCENTAGE"])
  splitType: "EQUAL" | "CUSTOM" | "PERCENTAGE";

  @IsNotEmpty()
  @IsArray()
  participants: string[];

  @IsOptional()
  @IsString()
  date?: string;

  @IsOptional()
  @IsString()
  receipt?: string;

  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => CustomSplitDto)
  customSplits?: CustomSplitDto[];
}
