import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  Max,
  Min,
  MinLength,
} from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export enum userStatus {
  ACTIVE = "ACTIVE",
  INACTIVE = "INACTIVE",
  BANNED = "BANNED",
}

export class UserCreateDto {
  @ApiProperty({ example: "john.doe@example.com" })
  @IsEmail()
  email: string;

  @ApiProperty({ example: "123456" })
  @IsString()
  @MinLength(6)
  password: string;

  @ApiProperty({ example: "Nguyen van A" })
  @IsString()
  fullName?: string;

  @ApiProperty({ example: "2000-01-01", required: false })
  @IsString()
  dateOfBirth?: string;

  @ApiProperty({ example: 0, description: "0 : Nam , 1: Nữ", required: false })
  @IsOptional()
  @Max(1)
  @Min(0)
  gender?: number;

  @ApiProperty({
    enum: userStatus,
    default: userStatus.ACTIVE,
    required: false,
  })
  @IsOptional()
  @IsEnum(userStatus)
  status?: userStatus;
}
