"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExpenseController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const jwt_auth_guard_1 = require("../auth/guards/jwt-auth.guard");
const expense_service_1 = require("./expense.service");
const create_Expense_dto_1 = require("./dto/create-Expense.dto");
let ExpenseController = class ExpenseController {
    expenseService;
    constructor(expenseService) {
        this.expenseService = expenseService;
    }
    getExpenseCategories(req, tripId) {
        const userId = req.user.userId;
        return this.expenseService.getExpenseCategories(userId, tripId);
    }
    getTripExpenses(req, tripId, categoryId, fromDate, toDate, page, limit) {
        const userId = req.user.userId;
        return this.expenseService.getTripExpenses(userId, tripId, {
            categoryId,
            fromDate,
            toDate,
            page: Number(page),
            limit: Number(limit),
        });
    }
    createExpense(req, tripId, dto) {
        const userId = req.user.userId;
        return this.expenseService.createExpense(userId, tripId, dto);
    }
    amountPaid(req) {
        const userId = req.user.userId;
        return this.expenseService.amountPaid(userId);
    }
    getTotalDebt(req) {
        const userId = req.user.userId;
        return this.expenseService.getTotalDebt(userId);
    }
    getTotalReceived(req) {
        const userId = req.user.userId;
        return this.expenseService.getTotalReceived(userId);
    }
};
exports.ExpenseController = ExpenseController;
__decorate([
    (0, common_1.Get)("categories"),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)("tripId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Request, String]),
    __metadata("design:returntype", void 0)
], ExpenseController.prototype, "getExpenseCategories", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)("tripId")),
    __param(2, (0, common_1.Query)("categoryId")),
    __param(3, (0, common_1.Query)("fromDate")),
    __param(4, (0, common_1.Query)("toDate")),
    __param(5, (0, common_1.Query)("page")),
    __param(6, (0, common_1.Query)("limit")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Request, String, String, String, String, Number, Number]),
    __metadata("design:returntype", void 0)
], ExpenseController.prototype, "getTripExpenses", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)("tripId")),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Request, String, create_Expense_dto_1.CreateExpense]),
    __metadata("design:returntype", void 0)
], ExpenseController.prototype, "createExpense", null);
__decorate([
    (0, common_1.Get)("total-spent"),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Request]),
    __metadata("design:returntype", void 0)
], ExpenseController.prototype, "amountPaid", null);
__decorate([
    (0, common_1.Get)("total-debt"),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Request]),
    __metadata("design:returntype", void 0)
], ExpenseController.prototype, "getTotalDebt", null);
__decorate([
    (0, common_1.Get)("total-received"),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Request]),
    __metadata("design:returntype", void 0)
], ExpenseController.prototype, "getTotalReceived", null);
exports.ExpenseController = ExpenseController = __decorate([
    (0, common_1.Controller)("trips/:tripId/expenses"),
    (0, swagger_1.ApiTags)("Expenses"),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [expense_service_1.ExpenseService])
], ExpenseController);
//# sourceMappingURL=expense.controller.js.map