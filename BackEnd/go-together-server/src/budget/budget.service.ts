import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class BudgetService {
  constructor(private prisma: PrismaService) {}

  
}
