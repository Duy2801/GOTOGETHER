import { IsNumber } from "class-validator";

export class tripAmountQuantityResponse {
  @IsNumber()
  amount: number;

  @IsNumber()
  quantity: number;
}
