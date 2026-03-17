import {} from "@nestjs/common";
import { BudgetService } from "./budget.service";

export class BudgetController {
  constructor(private budgetService: BudgetService) {}
  
}
