"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExpenseResponseDto = exports.ExpenseSplitDto = void 0;
class ExpenseSplitDto {
    id;
    userId;
    amount;
    percentage;
    splitType;
    isPaid;
    paidAt;
    confirmed;
    confirmedAt;
    user;
}
exports.ExpenseSplitDto = ExpenseSplitDto;
class ExpenseResponseDto {
    id;
    tripId;
    amount;
    currency;
    categoryId;
    description;
    paidById;
    type;
    date;
    receipt;
    isConfirmed;
    createdAt;
    category;
    paidBy;
    splits;
}
exports.ExpenseResponseDto = ExpenseResponseDto;
//# sourceMappingURL=expense-response.dto.js.map