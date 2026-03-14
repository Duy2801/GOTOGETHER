import { IsIn, IsNotEmpty } from "class-validator";

export class RespondInvitationDto {
  @IsNotEmpty()
  @IsIn(["ACCEPTED", "REJECTED"])
  status: "ACCEPTED" | "REJECTED";
}