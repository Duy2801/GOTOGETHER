declare class CustomSplitDto {
    userId: string;
    amount: number;
}
export declare class CreateExpense {
    tripId?: string;
    amount: number;
    currency?: string;
    categoryId: string;
    description?: string;
    paidById: string;
    type?: string;
    date?: string;
    receipt?: string;
    splitType: "EQUAL" | "CUSTOM" | "PERCENTAGE";
    participants: string[];
    customSplits?: CustomSplitDto[];
}
export {};
