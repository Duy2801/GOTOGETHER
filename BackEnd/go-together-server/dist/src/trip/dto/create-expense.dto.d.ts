declare class CustomSplitDto {
    userId: string;
    amount: number;
}
export declare class CreateExpenseDto {
    amount: number;
    currency?: string;
    categoryId: string;
    description?: string;
    paidById: string;
    splitType: "EQUAL" | "CUSTOM" | "PERCENTAGE";
    participants: string[];
    date?: string;
    receipt?: string;
    customSplits?: CustomSplitDto[];
}
export {};
