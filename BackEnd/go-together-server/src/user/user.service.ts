import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { UserCreateDto } from "./dto/user-create.dto";

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async create(dto: UserCreateDto) {
    return await this.prisma.user.create({ data: dto });
  }
  async findByEmail(email: string) {
    return await this.prisma.user.findUnique({ where: { email } });
  }
}
