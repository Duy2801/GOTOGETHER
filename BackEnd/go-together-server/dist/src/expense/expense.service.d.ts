import { PrismaService } from "src/prisma/prisma.service";
import { TripMemberService } from "src/trip-member/tripmember.service";
import { CreateExpense } from "./dto/create-Expense.dto";
export declare class ExpenseService {
    private prisma;
    private tripMember;
    constructor(prisma: PrismaService, tripMember: TripMemberService);
    getExpenseCategories(userId: string, tripId: string): Promise<{
        id: string;
        name: string;
        icon: string | null;
        color: string | null;
    }[]>;
    getTripExpenses(userId: string, tripId: string, query: any): Promise<{
        expenses: {
            id: any;
            tripId: any;
            amount: number;
            currency: any;
            categoryId: any;
            description: any;
            paidById: any;
            type: any;
            date: any;
            receipt: any;
            isConfirmed: any;
            createdAt: any;
            category: any;
            paidBy: any;
            splits: any;
        }[];
        total: number;
    }>;
    private buildSplits;
    createExpense(userId: string, tripId: string, dto: CreateExpense): Promise<{
        id: any;
        tripId: any;
        amount: number;
        currency: any;
        categoryId: any;
        description: any;
        paidById: any;
        type: any;
        date: any;
        receipt: any;
        isConfirmed: any;
        createdAt: any;
        category: any;
        paidBy: any;
        splits: any;
    }>;
    private toExpenseResponse;
    amountPaid(userId: string): Promise<number>;
    getTotalDebt(userId: string): Promise<number>;
    getTotalReceived(userId: string): Promise<number>;
}
