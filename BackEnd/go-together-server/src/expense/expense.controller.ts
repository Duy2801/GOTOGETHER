import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  Req,
  UseGuards,
} from "@nestjs/common";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { JwtAuthGuard } from "src/auth/guards/jwt-auth.guard";
import { PrismaService } from "src/prisma/prisma.service";
import { ExpenseService } from "./expense.service";
import { CreateExpense } from "./dto/create-Expense.dto";

@Controller("trips/:tripId/expenses")
@ApiTags("Expenses")
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
export class ExpenseController {
  constructor(private expenseService: ExpenseService) {}

  @Get("categories")
  getExpenseCategories(@Req() req: Request, @Param("tripId") tripId: string) {
    const userId = (req as any).user.userId;
    return this.expenseService.getExpenseCategories(userId, tripId);
  }

  @Get()
  getTripExpenses(
    @Req() req: Request,
    @Param("tripId") tripId: string,
    @Query("categoryId") categoryId?: string,
    @Query("fromDate") fromDate?: string,
    @Query("toDate") toDate?: string,
    @Query("page") page?: number,
    @Query("limit") limit?: number,
  ) {
    const userId = (req as any).user.userId;
    return this.expenseService.getTripExpenses(userId, tripId, {
      categoryId,
      fromDate,
      toDate,
      page: Number(page),
      limit: Number(limit),
    });
  }
  @Post()
  createExpense(
    @Req() req: Request,
    @Param("tripId") tripId: string,
    @Body() dto: CreateExpense,
  ) {
    const userId = (req as any).user.userId;
    return this.expenseService.createExpense(userId, tripId, dto);
  }
  @Get("total-spent")
  amountPaid(@Req() req: Request) {
    const userId = (req as any).user.userId;
    return this.expenseService.amountPaid(userId);
  }
  @Get("total-debt")
  getTotalDebt(@Req() req: Request) {
    const userId = (req as any).user.userId;
    return this.expenseService.getTotalDebt(userId);
  }
  @Get("total-received")
  getTotalReceived(@Req() req: Request) {
    const userId = (req as any).user.userId;
    return this.expenseService.getTotalReceived(userId);
  }
}
