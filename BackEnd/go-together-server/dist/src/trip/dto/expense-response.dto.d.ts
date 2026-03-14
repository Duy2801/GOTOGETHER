export declare class ExpenseSplitDto {
    id: string;
    userId: string;
    amount: number;
    percentage?: number;
    splitType: string;
    isPaid: boolean;
    user: {
        id: string;
        fullName: string;
        avatar?: string;
    };
}
export declare class ExpenseResponseDto {
    id: string;
    tripId: string;
    amount: number;
    currency: string;
    categoryId: string;
    description?: string;
    paidById: string;
    type: string;
    date: string;
    receipt?: string;
    isConfirmed: boolean;
    createdAt: string;
    category: {
        id: string;
        name: string;
        icon?: string;
        color?: string;
    };
    paidBy: {
        id: string;
        fullName: string;
        avatar?: string;
    };
    splits?: ExpenseSplitDto[];
}
