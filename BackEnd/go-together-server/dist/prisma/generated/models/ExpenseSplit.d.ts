import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type ExpenseSplitModel = runtime.Types.Result.DefaultSelection<Prisma.$ExpenseSplitPayload>;
export type AggregateExpenseSplit = {
    _count: ExpenseSplitCountAggregateOutputType | null;
    _avg: ExpenseSplitAvgAggregateOutputType | null;
    _sum: ExpenseSplitSumAggregateOutputType | null;
    _min: ExpenseSplitMinAggregateOutputType | null;
    _max: ExpenseSplitMaxAggregateOutputType | null;
};
export type ExpenseSplitAvgAggregateOutputType = {
    amount: runtime.Decimal | null;
    percentage: runtime.Decimal | null;
};
export type ExpenseSplitSumAggregateOutputType = {
    amount: runtime.Decimal | null;
    percentage: runtime.Decimal | null;
};
export type ExpenseSplitMinAggregateOutputType = {
    id: string | null;
    expenseId: string | null;
    userId: string | null;
    amount: runtime.Decimal | null;
    percentage: runtime.Decimal | null;
    splitType: $Enums.SplitType | null;
    isPaid: boolean | null;
    paidAt: Date | null;
    confirmed: boolean | null;
    confirmedAt: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ExpenseSplitMaxAggregateOutputType = {
    id: string | null;
    expenseId: string | null;
    userId: string | null;
    amount: runtime.Decimal | null;
    percentage: runtime.Decimal | null;
    splitType: $Enums.SplitType | null;
    isPaid: boolean | null;
    paidAt: Date | null;
    confirmed: boolean | null;
    confirmedAt: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ExpenseSplitCountAggregateOutputType = {
    id: number;
    expenseId: number;
    userId: number;
    amount: number;
    percentage: number;
    splitType: number;
    isPaid: number;
    paidAt: number;
    confirmed: number;
    confirmedAt: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type ExpenseSplitAvgAggregateInputType = {
    amount?: true;
    percentage?: true;
};
export type ExpenseSplitSumAggregateInputType = {
    amount?: true;
    percentage?: true;
};
export type ExpenseSplitMinAggregateInputType = {
    id?: true;
    expenseId?: true;
    userId?: true;
    amount?: true;
    percentage?: true;
    splitType?: true;
    isPaid?: true;
    paidAt?: true;
    confirmed?: true;
    confirmedAt?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ExpenseSplitMaxAggregateInputType = {
    id?: true;
    expenseId?: true;
    userId?: true;
    amount?: true;
    percentage?: true;
    splitType?: true;
    isPaid?: true;
    paidAt?: true;
    confirmed?: true;
    confirmedAt?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ExpenseSplitCountAggregateInputType = {
    id?: true;
    expenseId?: true;
    userId?: true;
    amount?: true;
    percentage?: true;
    splitType?: true;
    isPaid?: true;
    paidAt?: true;
    confirmed?: true;
    confirmedAt?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type ExpenseSplitAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ExpenseSplitWhereInput;
    orderBy?: Prisma.ExpenseSplitOrderByWithRelationInput | Prisma.ExpenseSplitOrderByWithRelationInput[];
    cursor?: Prisma.ExpenseSplitWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ExpenseSplitCountAggregateInputType;
    _avg?: ExpenseSplitAvgAggregateInputType;
    _sum?: ExpenseSplitSumAggregateInputType;
    _min?: ExpenseSplitMinAggregateInputType;
    _max?: ExpenseSplitMaxAggregateInputType;
};
export type GetExpenseSplitAggregateType<T extends ExpenseSplitAggregateArgs> = {
    [P in keyof T & keyof AggregateExpenseSplit]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateExpenseSplit[P]> : Prisma.GetScalarType<T[P], AggregateExpenseSplit[P]>;
};
export type ExpenseSplitGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ExpenseSplitWhereInput;
    orderBy?: Prisma.ExpenseSplitOrderByWithAggregationInput | Prisma.ExpenseSplitOrderByWithAggregationInput[];
    by: Prisma.ExpenseSplitScalarFieldEnum[] | Prisma.ExpenseSplitScalarFieldEnum;
    having?: Prisma.ExpenseSplitScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ExpenseSplitCountAggregateInputType | true;
    _avg?: ExpenseSplitAvgAggregateInputType;
    _sum?: ExpenseSplitSumAggregateInputType;
    _min?: ExpenseSplitMinAggregateInputType;
    _max?: ExpenseSplitMaxAggregateInputType;
};
export type ExpenseSplitGroupByOutputType = {
    id: string;
    expenseId: string;
    userId: string;
    amount: runtime.Decimal;
    percentage: runtime.Decimal | null;
    splitType: $Enums.SplitType;
    isPaid: boolean;
    paidAt: Date | null;
    confirmed: boolean;
    confirmedAt: Date | null;
    createdAt: Date;
    updatedAt: Date;
    _count: ExpenseSplitCountAggregateOutputType | null;
    _avg: ExpenseSplitAvgAggregateOutputType | null;
    _sum: ExpenseSplitSumAggregateOutputType | null;
    _min: ExpenseSplitMinAggregateOutputType | null;
    _max: ExpenseSplitMaxAggregateOutputType | null;
};
type GetExpenseSplitGroupByPayload<T extends ExpenseSplitGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ExpenseSplitGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ExpenseSplitGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ExpenseSplitGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ExpenseSplitGroupByOutputType[P]>;
}>>;
export type ExpenseSplitWhereInput = {
    AND?: Prisma.ExpenseSplitWhereInput | Prisma.ExpenseSplitWhereInput[];
    OR?: Prisma.ExpenseSplitWhereInput[];
    NOT?: Prisma.ExpenseSplitWhereInput | Prisma.ExpenseSplitWhereInput[];
    id?: Prisma.StringFilter<"ExpenseSplit"> | string;
    expenseId?: Prisma.StringFilter<"ExpenseSplit"> | string;
    userId?: Prisma.StringFilter<"ExpenseSplit"> | string;
    amount?: Prisma.DecimalFilter<"ExpenseSplit"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    percentage?: Prisma.DecimalNullableFilter<"ExpenseSplit"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    splitType?: Prisma.EnumSplitTypeFilter<"ExpenseSplit"> | $Enums.SplitType;
    isPaid?: Prisma.BoolFilter<"ExpenseSplit"> | boolean;
    paidAt?: Prisma.DateTimeNullableFilter<"ExpenseSplit"> | Date | string | null;
    confirmed?: Prisma.BoolFilter<"ExpenseSplit"> | boolean;
    confirmedAt?: Prisma.DateTimeNullableFilter<"ExpenseSplit"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"ExpenseSplit"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"ExpenseSplit"> | Date | string;
    expense?: Prisma.XOR<Prisma.ExpenseScalarRelationFilter, Prisma.ExpenseWhereInput>;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
};
export type ExpenseSplitOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    expenseId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    percentage?: Prisma.SortOrderInput | Prisma.SortOrder;
    splitType?: Prisma.SortOrder;
    isPaid?: Prisma.SortOrder;
    paidAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    confirmed?: Prisma.SortOrder;
    confirmedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    expense?: Prisma.ExpenseOrderByWithRelationInput;
    user?: Prisma.UserOrderByWithRelationInput;
    _relevance?: Prisma.ExpenseSplitOrderByRelevanceInput;
};
export type ExpenseSplitWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    expenseId_userId?: Prisma.ExpenseSplitExpenseIdUserIdCompoundUniqueInput;
    AND?: Prisma.ExpenseSplitWhereInput | Prisma.ExpenseSplitWhereInput[];
    OR?: Prisma.ExpenseSplitWhereInput[];
    NOT?: Prisma.ExpenseSplitWhereInput | Prisma.ExpenseSplitWhereInput[];
    expenseId?: Prisma.StringFilter<"ExpenseSplit"> | string;
    userId?: Prisma.StringFilter<"ExpenseSplit"> | string;
    amount?: Prisma.DecimalFilter<"ExpenseSplit"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    percentage?: Prisma.DecimalNullableFilter<"ExpenseSplit"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    splitType?: Prisma.EnumSplitTypeFilter<"ExpenseSplit"> | $Enums.SplitType;
    isPaid?: Prisma.BoolFilter<"ExpenseSplit"> | boolean;
    paidAt?: Prisma.DateTimeNullableFilter<"ExpenseSplit"> | Date | string | null;
    confirmed?: Prisma.BoolFilter<"ExpenseSplit"> | boolean;
    confirmedAt?: Prisma.DateTimeNullableFilter<"ExpenseSplit"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"ExpenseSplit"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"ExpenseSplit"> | Date | string;
    expense?: Prisma.XOR<Prisma.ExpenseScalarRelationFilter, Prisma.ExpenseWhereInput>;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
}, "id" | "expenseId_userId">;
export type ExpenseSplitOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    expenseId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    percentage?: Prisma.SortOrderInput | Prisma.SortOrder;
    splitType?: Prisma.SortOrder;
    isPaid?: Prisma.SortOrder;
    paidAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    confirmed?: Prisma.SortOrder;
    confirmedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.ExpenseSplitCountOrderByAggregateInput;
    _avg?: Prisma.ExpenseSplitAvgOrderByAggregateInput;
    _max?: Prisma.ExpenseSplitMaxOrderByAggregateInput;
    _min?: Prisma.ExpenseSplitMinOrderByAggregateInput;
    _sum?: Prisma.ExpenseSplitSumOrderByAggregateInput;
};
export type ExpenseSplitScalarWhereWithAggregatesInput = {
    AND?: Prisma.ExpenseSplitScalarWhereWithAggregatesInput | Prisma.ExpenseSplitScalarWhereWithAggregatesInput[];
    OR?: Prisma.ExpenseSplitScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ExpenseSplitScalarWhereWithAggregatesInput | Prisma.ExpenseSplitScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"ExpenseSplit"> | string;
    expenseId?: Prisma.StringWithAggregatesFilter<"ExpenseSplit"> | string;
    userId?: Prisma.StringWithAggregatesFilter<"ExpenseSplit"> | string;
    amount?: Prisma.DecimalWithAggregatesFilter<"ExpenseSplit"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    percentage?: Prisma.DecimalNullableWithAggregatesFilter<"ExpenseSplit"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    splitType?: Prisma.EnumSplitTypeWithAggregatesFilter<"ExpenseSplit"> | $Enums.SplitType;
    isPaid?: Prisma.BoolWithAggregatesFilter<"ExpenseSplit"> | boolean;
    paidAt?: Prisma.DateTimeNullableWithAggregatesFilter<"ExpenseSplit"> | Date | string | null;
    confirmed?: Prisma.BoolWithAggregatesFilter<"ExpenseSplit"> | boolean;
    confirmedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"ExpenseSplit"> | Date | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"ExpenseSplit"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"ExpenseSplit"> | Date | string;
};
export type ExpenseSplitCreateInput = {
    id?: string;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    percentage?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    splitType?: $Enums.SplitType;
    isPaid?: boolean;
    paidAt?: Date | string | null;
    confirmed?: boolean;
    confirmedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    expense: Prisma.ExpenseCreateNestedOneWithoutSplitsInput;
    user: Prisma.UserCreateNestedOneWithoutExpenseSplitsInput;
};
export type ExpenseSplitUncheckedCreateInput = {
    id?: string;
    expenseId: string;
    userId: string;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    percentage?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    splitType?: $Enums.SplitType;
    isPaid?: boolean;
    paidAt?: Date | string | null;
    confirmed?: boolean;
    confirmedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ExpenseSplitUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    percentage?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    splitType?: Prisma.EnumSplitTypeFieldUpdateOperationsInput | $Enums.SplitType;
    isPaid?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    paidAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    confirmed?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    confirmedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    expense?: Prisma.ExpenseUpdateOneRequiredWithoutSplitsNestedInput;
    user?: Prisma.UserUpdateOneRequiredWithoutExpenseSplitsNestedInput;
};
export type ExpenseSplitUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    expenseId?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    percentage?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    splitType?: Prisma.EnumSplitTypeFieldUpdateOperationsInput | $Enums.SplitType;
    isPaid?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    paidAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    confirmed?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    confirmedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ExpenseSplitCreateManyInput = {
    id?: string;
    expenseId: string;
    userId: string;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    percentage?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    splitType?: $Enums.SplitType;
    isPaid?: boolean;
    paidAt?: Date | string | null;
    confirmed?: boolean;
    confirmedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ExpenseSplitUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    percentage?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    splitType?: Prisma.EnumSplitTypeFieldUpdateOperationsInput | $Enums.SplitType;
    isPaid?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    paidAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    confirmed?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    confirmedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ExpenseSplitUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    expenseId?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    percentage?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    splitType?: Prisma.EnumSplitTypeFieldUpdateOperationsInput | $Enums.SplitType;
    isPaid?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    paidAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    confirmed?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    confirmedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ExpenseSplitListRelationFilter = {
    every?: Prisma.ExpenseSplitWhereInput;
    some?: Prisma.ExpenseSplitWhereInput;
    none?: Prisma.ExpenseSplitWhereInput;
};
export type ExpenseSplitOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ExpenseSplitOrderByRelevanceInput = {
    fields: Prisma.ExpenseSplitOrderByRelevanceFieldEnum | Prisma.ExpenseSplitOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type ExpenseSplitExpenseIdUserIdCompoundUniqueInput = {
    expenseId: string;
    userId: string;
};
export type ExpenseSplitCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    expenseId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    percentage?: Prisma.SortOrder;
    splitType?: Prisma.SortOrder;
    isPaid?: Prisma.SortOrder;
    paidAt?: Prisma.SortOrder;
    confirmed?: Prisma.SortOrder;
    confirmedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ExpenseSplitAvgOrderByAggregateInput = {
    amount?: Prisma.SortOrder;
    percentage?: Prisma.SortOrder;
};
export type ExpenseSplitMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    expenseId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    percentage?: Prisma.SortOrder;
    splitType?: Prisma.SortOrder;
    isPaid?: Prisma.SortOrder;
    paidAt?: Prisma.SortOrder;
    confirmed?: Prisma.SortOrder;
    confirmedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ExpenseSplitMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    expenseId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    percentage?: Prisma.SortOrder;
    splitType?: Prisma.SortOrder;
    isPaid?: Prisma.SortOrder;
    paidAt?: Prisma.SortOrder;
    confirmed?: Prisma.SortOrder;
    confirmedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ExpenseSplitSumOrderByAggregateInput = {
    amount?: Prisma.SortOrder;
    percentage?: Prisma.SortOrder;
};
export type ExpenseSplitCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.ExpenseSplitCreateWithoutUserInput, Prisma.ExpenseSplitUncheckedCreateWithoutUserInput> | Prisma.ExpenseSplitCreateWithoutUserInput[] | Prisma.ExpenseSplitUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.ExpenseSplitCreateOrConnectWithoutUserInput | Prisma.ExpenseSplitCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.ExpenseSplitCreateManyUserInputEnvelope;
    connect?: Prisma.ExpenseSplitWhereUniqueInput | Prisma.ExpenseSplitWhereUniqueInput[];
};
export type ExpenseSplitUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.ExpenseSplitCreateWithoutUserInput, Prisma.ExpenseSplitUncheckedCreateWithoutUserInput> | Prisma.ExpenseSplitCreateWithoutUserInput[] | Prisma.ExpenseSplitUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.ExpenseSplitCreateOrConnectWithoutUserInput | Prisma.ExpenseSplitCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.ExpenseSplitCreateManyUserInputEnvelope;
    connect?: Prisma.ExpenseSplitWhereUniqueInput | Prisma.ExpenseSplitWhereUniqueInput[];
};
export type ExpenseSplitUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.ExpenseSplitCreateWithoutUserInput, Prisma.ExpenseSplitUncheckedCreateWithoutUserInput> | Prisma.ExpenseSplitCreateWithoutUserInput[] | Prisma.ExpenseSplitUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.ExpenseSplitCreateOrConnectWithoutUserInput | Prisma.ExpenseSplitCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.ExpenseSplitUpsertWithWhereUniqueWithoutUserInput | Prisma.ExpenseSplitUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.ExpenseSplitCreateManyUserInputEnvelope;
    set?: Prisma.ExpenseSplitWhereUniqueInput | Prisma.ExpenseSplitWhereUniqueInput[];
    disconnect?: Prisma.ExpenseSplitWhereUniqueInput | Prisma.ExpenseSplitWhereUniqueInput[];
    delete?: Prisma.ExpenseSplitWhereUniqueInput | Prisma.ExpenseSplitWhereUniqueInput[];
    connect?: Prisma.ExpenseSplitWhereUniqueInput | Prisma.ExpenseSplitWhereUniqueInput[];
    update?: Prisma.ExpenseSplitUpdateWithWhereUniqueWithoutUserInput | Prisma.ExpenseSplitUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.ExpenseSplitUpdateManyWithWhereWithoutUserInput | Prisma.ExpenseSplitUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.ExpenseSplitScalarWhereInput | Prisma.ExpenseSplitScalarWhereInput[];
};
export type ExpenseSplitUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.ExpenseSplitCreateWithoutUserInput, Prisma.ExpenseSplitUncheckedCreateWithoutUserInput> | Prisma.ExpenseSplitCreateWithoutUserInput[] | Prisma.ExpenseSplitUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.ExpenseSplitCreateOrConnectWithoutUserInput | Prisma.ExpenseSplitCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.ExpenseSplitUpsertWithWhereUniqueWithoutUserInput | Prisma.ExpenseSplitUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.ExpenseSplitCreateManyUserInputEnvelope;
    set?: Prisma.ExpenseSplitWhereUniqueInput | Prisma.ExpenseSplitWhereUniqueInput[];
    disconnect?: Prisma.ExpenseSplitWhereUniqueInput | Prisma.ExpenseSplitWhereUniqueInput[];
    delete?: Prisma.ExpenseSplitWhereUniqueInput | Prisma.ExpenseSplitWhereUniqueInput[];
    connect?: Prisma.ExpenseSplitWhereUniqueInput | Prisma.ExpenseSplitWhereUniqueInput[];
    update?: Prisma.ExpenseSplitUpdateWithWhereUniqueWithoutUserInput | Prisma.ExpenseSplitUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.ExpenseSplitUpdateManyWithWhereWithoutUserInput | Prisma.ExpenseSplitUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.ExpenseSplitScalarWhereInput | Prisma.ExpenseSplitScalarWhereInput[];
};
export type ExpenseSplitCreateNestedManyWithoutExpenseInput = {
    create?: Prisma.XOR<Prisma.ExpenseSplitCreateWithoutExpenseInput, Prisma.ExpenseSplitUncheckedCreateWithoutExpenseInput> | Prisma.ExpenseSplitCreateWithoutExpenseInput[] | Prisma.ExpenseSplitUncheckedCreateWithoutExpenseInput[];
    connectOrCreate?: Prisma.ExpenseSplitCreateOrConnectWithoutExpenseInput | Prisma.ExpenseSplitCreateOrConnectWithoutExpenseInput[];
    createMany?: Prisma.ExpenseSplitCreateManyExpenseInputEnvelope;
    connect?: Prisma.ExpenseSplitWhereUniqueInput | Prisma.ExpenseSplitWhereUniqueInput[];
};
export type ExpenseSplitUncheckedCreateNestedManyWithoutExpenseInput = {
    create?: Prisma.XOR<Prisma.ExpenseSplitCreateWithoutExpenseInput, Prisma.ExpenseSplitUncheckedCreateWithoutExpenseInput> | Prisma.ExpenseSplitCreateWithoutExpenseInput[] | Prisma.ExpenseSplitUncheckedCreateWithoutExpenseInput[];
    connectOrCreate?: Prisma.ExpenseSplitCreateOrConnectWithoutExpenseInput | Prisma.ExpenseSplitCreateOrConnectWithoutExpenseInput[];
    createMany?: Prisma.ExpenseSplitCreateManyExpenseInputEnvelope;
    connect?: Prisma.ExpenseSplitWhereUniqueInput | Prisma.ExpenseSplitWhereUniqueInput[];
};
export type ExpenseSplitUpdateManyWithoutExpenseNestedInput = {
    create?: Prisma.XOR<Prisma.ExpenseSplitCreateWithoutExpenseInput, Prisma.ExpenseSplitUncheckedCreateWithoutExpenseInput> | Prisma.ExpenseSplitCreateWithoutExpenseInput[] | Prisma.ExpenseSplitUncheckedCreateWithoutExpenseInput[];
    connectOrCreate?: Prisma.ExpenseSplitCreateOrConnectWithoutExpenseInput | Prisma.ExpenseSplitCreateOrConnectWithoutExpenseInput[];
    upsert?: Prisma.ExpenseSplitUpsertWithWhereUniqueWithoutExpenseInput | Prisma.ExpenseSplitUpsertWithWhereUniqueWithoutExpenseInput[];
    createMany?: Prisma.ExpenseSplitCreateManyExpenseInputEnvelope;
    set?: Prisma.ExpenseSplitWhereUniqueInput | Prisma.ExpenseSplitWhereUniqueInput[];
    disconnect?: Prisma.ExpenseSplitWhereUniqueInput | Prisma.ExpenseSplitWhereUniqueInput[];
    delete?: Prisma.ExpenseSplitWhereUniqueInput | Prisma.ExpenseSplitWhereUniqueInput[];
    connect?: Prisma.ExpenseSplitWhereUniqueInput | Prisma.ExpenseSplitWhereUniqueInput[];
    update?: Prisma.ExpenseSplitUpdateWithWhereUniqueWithoutExpenseInput | Prisma.ExpenseSplitUpdateWithWhereUniqueWithoutExpenseInput[];
    updateMany?: Prisma.ExpenseSplitUpdateManyWithWhereWithoutExpenseInput | Prisma.ExpenseSplitUpdateManyWithWhereWithoutExpenseInput[];
    deleteMany?: Prisma.ExpenseSplitScalarWhereInput | Prisma.ExpenseSplitScalarWhereInput[];
};
export type ExpenseSplitUncheckedUpdateManyWithoutExpenseNestedInput = {
    create?: Prisma.XOR<Prisma.ExpenseSplitCreateWithoutExpenseInput, Prisma.ExpenseSplitUncheckedCreateWithoutExpenseInput> | Prisma.ExpenseSplitCreateWithoutExpenseInput[] | Prisma.ExpenseSplitUncheckedCreateWithoutExpenseInput[];
    connectOrCreate?: Prisma.ExpenseSplitCreateOrConnectWithoutExpenseInput | Prisma.ExpenseSplitCreateOrConnectWithoutExpenseInput[];
    upsert?: Prisma.ExpenseSplitUpsertWithWhereUniqueWithoutExpenseInput | Prisma.ExpenseSplitUpsertWithWhereUniqueWithoutExpenseInput[];
    createMany?: Prisma.ExpenseSplitCreateManyExpenseInputEnvelope;
    set?: Prisma.ExpenseSplitWhereUniqueInput | Prisma.ExpenseSplitWhereUniqueInput[];
    disconnect?: Prisma.ExpenseSplitWhereUniqueInput | Prisma.ExpenseSplitWhereUniqueInput[];
    delete?: Prisma.ExpenseSplitWhereUniqueInput | Prisma.ExpenseSplitWhereUniqueInput[];
    connect?: Prisma.ExpenseSplitWhereUniqueInput | Prisma.ExpenseSplitWhereUniqueInput[];
    update?: Prisma.ExpenseSplitUpdateWithWhereUniqueWithoutExpenseInput | Prisma.ExpenseSplitUpdateWithWhereUniqueWithoutExpenseInput[];
    updateMany?: Prisma.ExpenseSplitUpdateManyWithWhereWithoutExpenseInput | Prisma.ExpenseSplitUpdateManyWithWhereWithoutExpenseInput[];
    deleteMany?: Prisma.ExpenseSplitScalarWhereInput | Prisma.ExpenseSplitScalarWhereInput[];
};
export type EnumSplitTypeFieldUpdateOperationsInput = {
    set?: $Enums.SplitType;
};
export type ExpenseSplitCreateWithoutUserInput = {
    id?: string;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    percentage?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    splitType?: $Enums.SplitType;
    isPaid?: boolean;
    paidAt?: Date | string | null;
    confirmed?: boolean;
    confirmedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    expense: Prisma.ExpenseCreateNestedOneWithoutSplitsInput;
};
export type ExpenseSplitUncheckedCreateWithoutUserInput = {
    id?: string;
    expenseId: string;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    percentage?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    splitType?: $Enums.SplitType;
    isPaid?: boolean;
    paidAt?: Date | string | null;
    confirmed?: boolean;
    confirmedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ExpenseSplitCreateOrConnectWithoutUserInput = {
    where: Prisma.ExpenseSplitWhereUniqueInput;
    create: Prisma.XOR<Prisma.ExpenseSplitCreateWithoutUserInput, Prisma.ExpenseSplitUncheckedCreateWithoutUserInput>;
};
export type ExpenseSplitCreateManyUserInputEnvelope = {
    data: Prisma.ExpenseSplitCreateManyUserInput | Prisma.ExpenseSplitCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type ExpenseSplitUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.ExpenseSplitWhereUniqueInput;
    update: Prisma.XOR<Prisma.ExpenseSplitUpdateWithoutUserInput, Prisma.ExpenseSplitUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.ExpenseSplitCreateWithoutUserInput, Prisma.ExpenseSplitUncheckedCreateWithoutUserInput>;
};
export type ExpenseSplitUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.ExpenseSplitWhereUniqueInput;
    data: Prisma.XOR<Prisma.ExpenseSplitUpdateWithoutUserInput, Prisma.ExpenseSplitUncheckedUpdateWithoutUserInput>;
};
export type ExpenseSplitUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.ExpenseSplitScalarWhereInput;
    data: Prisma.XOR<Prisma.ExpenseSplitUpdateManyMutationInput, Prisma.ExpenseSplitUncheckedUpdateManyWithoutUserInput>;
};
export type ExpenseSplitScalarWhereInput = {
    AND?: Prisma.ExpenseSplitScalarWhereInput | Prisma.ExpenseSplitScalarWhereInput[];
    OR?: Prisma.ExpenseSplitScalarWhereInput[];
    NOT?: Prisma.ExpenseSplitScalarWhereInput | Prisma.ExpenseSplitScalarWhereInput[];
    id?: Prisma.StringFilter<"ExpenseSplit"> | string;
    expenseId?: Prisma.StringFilter<"ExpenseSplit"> | string;
    userId?: Prisma.StringFilter<"ExpenseSplit"> | string;
    amount?: Prisma.DecimalFilter<"ExpenseSplit"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    percentage?: Prisma.DecimalNullableFilter<"ExpenseSplit"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    splitType?: Prisma.EnumSplitTypeFilter<"ExpenseSplit"> | $Enums.SplitType;
    isPaid?: Prisma.BoolFilter<"ExpenseSplit"> | boolean;
    paidAt?: Prisma.DateTimeNullableFilter<"ExpenseSplit"> | Date | string | null;
    confirmed?: Prisma.BoolFilter<"ExpenseSplit"> | boolean;
    confirmedAt?: Prisma.DateTimeNullableFilter<"ExpenseSplit"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"ExpenseSplit"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"ExpenseSplit"> | Date | string;
};
export type ExpenseSplitCreateWithoutExpenseInput = {
    id?: string;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    percentage?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    splitType?: $Enums.SplitType;
    isPaid?: boolean;
    paidAt?: Date | string | null;
    confirmed?: boolean;
    confirmedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutExpenseSplitsInput;
};
export type ExpenseSplitUncheckedCreateWithoutExpenseInput = {
    id?: string;
    userId: string;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    percentage?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    splitType?: $Enums.SplitType;
    isPaid?: boolean;
    paidAt?: Date | string | null;
    confirmed?: boolean;
    confirmedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ExpenseSplitCreateOrConnectWithoutExpenseInput = {
    where: Prisma.ExpenseSplitWhereUniqueInput;
    create: Prisma.XOR<Prisma.ExpenseSplitCreateWithoutExpenseInput, Prisma.ExpenseSplitUncheckedCreateWithoutExpenseInput>;
};
export type ExpenseSplitCreateManyExpenseInputEnvelope = {
    data: Prisma.ExpenseSplitCreateManyExpenseInput | Prisma.ExpenseSplitCreateManyExpenseInput[];
    skipDuplicates?: boolean;
};
export type ExpenseSplitUpsertWithWhereUniqueWithoutExpenseInput = {
    where: Prisma.ExpenseSplitWhereUniqueInput;
    update: Prisma.XOR<Prisma.ExpenseSplitUpdateWithoutExpenseInput, Prisma.ExpenseSplitUncheckedUpdateWithoutExpenseInput>;
    create: Prisma.XOR<Prisma.ExpenseSplitCreateWithoutExpenseInput, Prisma.ExpenseSplitUncheckedCreateWithoutExpenseInput>;
};
export type ExpenseSplitUpdateWithWhereUniqueWithoutExpenseInput = {
    where: Prisma.ExpenseSplitWhereUniqueInput;
    data: Prisma.XOR<Prisma.ExpenseSplitUpdateWithoutExpenseInput, Prisma.ExpenseSplitUncheckedUpdateWithoutExpenseInput>;
};
export type ExpenseSplitUpdateManyWithWhereWithoutExpenseInput = {
    where: Prisma.ExpenseSplitScalarWhereInput;
    data: Prisma.XOR<Prisma.ExpenseSplitUpdateManyMutationInput, Prisma.ExpenseSplitUncheckedUpdateManyWithoutExpenseInput>;
};
export type ExpenseSplitCreateManyUserInput = {
    id?: string;
    expenseId: string;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    percentage?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    splitType?: $Enums.SplitType;
    isPaid?: boolean;
    paidAt?: Date | string | null;
    confirmed?: boolean;
    confirmedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ExpenseSplitUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    percentage?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    splitType?: Prisma.EnumSplitTypeFieldUpdateOperationsInput | $Enums.SplitType;
    isPaid?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    paidAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    confirmed?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    confirmedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    expense?: Prisma.ExpenseUpdateOneRequiredWithoutSplitsNestedInput;
};
export type ExpenseSplitUncheckedUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    expenseId?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    percentage?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    splitType?: Prisma.EnumSplitTypeFieldUpdateOperationsInput | $Enums.SplitType;
    isPaid?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    paidAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    confirmed?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    confirmedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ExpenseSplitUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    expenseId?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    percentage?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    splitType?: Prisma.EnumSplitTypeFieldUpdateOperationsInput | $Enums.SplitType;
    isPaid?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    paidAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    confirmed?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    confirmedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ExpenseSplitCreateManyExpenseInput = {
    id?: string;
    userId: string;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    percentage?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    splitType?: $Enums.SplitType;
    isPaid?: boolean;
    paidAt?: Date | string | null;
    confirmed?: boolean;
    confirmedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ExpenseSplitUpdateWithoutExpenseInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    percentage?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    splitType?: Prisma.EnumSplitTypeFieldUpdateOperationsInput | $Enums.SplitType;
    isPaid?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    paidAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    confirmed?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    confirmedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutExpenseSplitsNestedInput;
};
export type ExpenseSplitUncheckedUpdateWithoutExpenseInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    percentage?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    splitType?: Prisma.EnumSplitTypeFieldUpdateOperationsInput | $Enums.SplitType;
    isPaid?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    paidAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    confirmed?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    confirmedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ExpenseSplitUncheckedUpdateManyWithoutExpenseInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    percentage?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    splitType?: Prisma.EnumSplitTypeFieldUpdateOperationsInput | $Enums.SplitType;
    isPaid?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    paidAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    confirmed?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    confirmedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ExpenseSplitSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    expenseId?: boolean;
    userId?: boolean;
    amount?: boolean;
    percentage?: boolean;
    splitType?: boolean;
    isPaid?: boolean;
    paidAt?: boolean;
    confirmed?: boolean;
    confirmedAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    expense?: boolean | Prisma.ExpenseDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["expenseSplit"]>;
export type ExpenseSplitSelectScalar = {
    id?: boolean;
    expenseId?: boolean;
    userId?: boolean;
    amount?: boolean;
    percentage?: boolean;
    splitType?: boolean;
    isPaid?: boolean;
    paidAt?: boolean;
    confirmed?: boolean;
    confirmedAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type ExpenseSplitOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "expenseId" | "userId" | "amount" | "percentage" | "splitType" | "isPaid" | "paidAt" | "confirmed" | "confirmedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["expenseSplit"]>;
export type ExpenseSplitInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    expense?: boolean | Prisma.ExpenseDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $ExpenseSplitPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ExpenseSplit";
    objects: {
        expense: Prisma.$ExpensePayload<ExtArgs>;
        user: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        expenseId: string;
        userId: string;
        amount: runtime.Decimal;
        percentage: runtime.Decimal | null;
        splitType: $Enums.SplitType;
        isPaid: boolean;
        paidAt: Date | null;
        confirmed: boolean;
        confirmedAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["expenseSplit"]>;
    composites: {};
};
export type ExpenseSplitGetPayload<S extends boolean | null | undefined | ExpenseSplitDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ExpenseSplitPayload, S>;
export type ExpenseSplitCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ExpenseSplitFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ExpenseSplitCountAggregateInputType | true;
};
export interface ExpenseSplitDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ExpenseSplit'];
        meta: {
            name: 'ExpenseSplit';
        };
    };
    findUnique<T extends ExpenseSplitFindUniqueArgs>(args: Prisma.SelectSubset<T, ExpenseSplitFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ExpenseSplitClient<runtime.Types.Result.GetResult<Prisma.$ExpenseSplitPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ExpenseSplitFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ExpenseSplitFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ExpenseSplitClient<runtime.Types.Result.GetResult<Prisma.$ExpenseSplitPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ExpenseSplitFindFirstArgs>(args?: Prisma.SelectSubset<T, ExpenseSplitFindFirstArgs<ExtArgs>>): Prisma.Prisma__ExpenseSplitClient<runtime.Types.Result.GetResult<Prisma.$ExpenseSplitPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ExpenseSplitFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ExpenseSplitFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ExpenseSplitClient<runtime.Types.Result.GetResult<Prisma.$ExpenseSplitPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ExpenseSplitFindManyArgs>(args?: Prisma.SelectSubset<T, ExpenseSplitFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ExpenseSplitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ExpenseSplitCreateArgs>(args: Prisma.SelectSubset<T, ExpenseSplitCreateArgs<ExtArgs>>): Prisma.Prisma__ExpenseSplitClient<runtime.Types.Result.GetResult<Prisma.$ExpenseSplitPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ExpenseSplitCreateManyArgs>(args?: Prisma.SelectSubset<T, ExpenseSplitCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    delete<T extends ExpenseSplitDeleteArgs>(args: Prisma.SelectSubset<T, ExpenseSplitDeleteArgs<ExtArgs>>): Prisma.Prisma__ExpenseSplitClient<runtime.Types.Result.GetResult<Prisma.$ExpenseSplitPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ExpenseSplitUpdateArgs>(args: Prisma.SelectSubset<T, ExpenseSplitUpdateArgs<ExtArgs>>): Prisma.Prisma__ExpenseSplitClient<runtime.Types.Result.GetResult<Prisma.$ExpenseSplitPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ExpenseSplitDeleteManyArgs>(args?: Prisma.SelectSubset<T, ExpenseSplitDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ExpenseSplitUpdateManyArgs>(args: Prisma.SelectSubset<T, ExpenseSplitUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    upsert<T extends ExpenseSplitUpsertArgs>(args: Prisma.SelectSubset<T, ExpenseSplitUpsertArgs<ExtArgs>>): Prisma.Prisma__ExpenseSplitClient<runtime.Types.Result.GetResult<Prisma.$ExpenseSplitPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ExpenseSplitCountArgs>(args?: Prisma.Subset<T, ExpenseSplitCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ExpenseSplitCountAggregateOutputType> : number>;
    aggregate<T extends ExpenseSplitAggregateArgs>(args: Prisma.Subset<T, ExpenseSplitAggregateArgs>): Prisma.PrismaPromise<GetExpenseSplitAggregateType<T>>;
    groupBy<T extends ExpenseSplitGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ExpenseSplitGroupByArgs['orderBy'];
    } : {
        orderBy?: ExpenseSplitGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ExpenseSplitGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExpenseSplitGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ExpenseSplitFieldRefs;
}
export interface Prisma__ExpenseSplitClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    expense<T extends Prisma.ExpenseDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ExpenseDefaultArgs<ExtArgs>>): Prisma.Prisma__ExpenseClient<runtime.Types.Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ExpenseSplitFieldRefs {
    readonly id: Prisma.FieldRef<"ExpenseSplit", 'String'>;
    readonly expenseId: Prisma.FieldRef<"ExpenseSplit", 'String'>;
    readonly userId: Prisma.FieldRef<"ExpenseSplit", 'String'>;
    readonly amount: Prisma.FieldRef<"ExpenseSplit", 'Decimal'>;
    readonly percentage: Prisma.FieldRef<"ExpenseSplit", 'Decimal'>;
    readonly splitType: Prisma.FieldRef<"ExpenseSplit", 'SplitType'>;
    readonly isPaid: Prisma.FieldRef<"ExpenseSplit", 'Boolean'>;
    readonly paidAt: Prisma.FieldRef<"ExpenseSplit", 'DateTime'>;
    readonly confirmed: Prisma.FieldRef<"ExpenseSplit", 'Boolean'>;
    readonly confirmedAt: Prisma.FieldRef<"ExpenseSplit", 'DateTime'>;
    readonly createdAt: Prisma.FieldRef<"ExpenseSplit", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"ExpenseSplit", 'DateTime'>;
}
export type ExpenseSplitFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ExpenseSplitSelect<ExtArgs> | null;
    omit?: Prisma.ExpenseSplitOmit<ExtArgs> | null;
    include?: Prisma.ExpenseSplitInclude<ExtArgs> | null;
    where: Prisma.ExpenseSplitWhereUniqueInput;
};
export type ExpenseSplitFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ExpenseSplitSelect<ExtArgs> | null;
    omit?: Prisma.ExpenseSplitOmit<ExtArgs> | null;
    include?: Prisma.ExpenseSplitInclude<ExtArgs> | null;
    where: Prisma.ExpenseSplitWhereUniqueInput;
};
export type ExpenseSplitFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ExpenseSplitSelect<ExtArgs> | null;
    omit?: Prisma.ExpenseSplitOmit<ExtArgs> | null;
    include?: Prisma.ExpenseSplitInclude<ExtArgs> | null;
    where?: Prisma.ExpenseSplitWhereInput;
    orderBy?: Prisma.ExpenseSplitOrderByWithRelationInput | Prisma.ExpenseSplitOrderByWithRelationInput[];
    cursor?: Prisma.ExpenseSplitWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ExpenseSplitScalarFieldEnum | Prisma.ExpenseSplitScalarFieldEnum[];
};
export type ExpenseSplitFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ExpenseSplitSelect<ExtArgs> | null;
    omit?: Prisma.ExpenseSplitOmit<ExtArgs> | null;
    include?: Prisma.ExpenseSplitInclude<ExtArgs> | null;
    where?: Prisma.ExpenseSplitWhereInput;
    orderBy?: Prisma.ExpenseSplitOrderByWithRelationInput | Prisma.ExpenseSplitOrderByWithRelationInput[];
    cursor?: Prisma.ExpenseSplitWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ExpenseSplitScalarFieldEnum | Prisma.ExpenseSplitScalarFieldEnum[];
};
export type ExpenseSplitFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ExpenseSplitSelect<ExtArgs> | null;
    omit?: Prisma.ExpenseSplitOmit<ExtArgs> | null;
    include?: Prisma.ExpenseSplitInclude<ExtArgs> | null;
    where?: Prisma.ExpenseSplitWhereInput;
    orderBy?: Prisma.ExpenseSplitOrderByWithRelationInput | Prisma.ExpenseSplitOrderByWithRelationInput[];
    cursor?: Prisma.ExpenseSplitWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ExpenseSplitScalarFieldEnum | Prisma.ExpenseSplitScalarFieldEnum[];
};
export type ExpenseSplitCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ExpenseSplitSelect<ExtArgs> | null;
    omit?: Prisma.ExpenseSplitOmit<ExtArgs> | null;
    include?: Prisma.ExpenseSplitInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ExpenseSplitCreateInput, Prisma.ExpenseSplitUncheckedCreateInput>;
};
export type ExpenseSplitCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ExpenseSplitCreateManyInput | Prisma.ExpenseSplitCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ExpenseSplitUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ExpenseSplitSelect<ExtArgs> | null;
    omit?: Prisma.ExpenseSplitOmit<ExtArgs> | null;
    include?: Prisma.ExpenseSplitInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ExpenseSplitUpdateInput, Prisma.ExpenseSplitUncheckedUpdateInput>;
    where: Prisma.ExpenseSplitWhereUniqueInput;
};
export type ExpenseSplitUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ExpenseSplitUpdateManyMutationInput, Prisma.ExpenseSplitUncheckedUpdateManyInput>;
    where?: Prisma.ExpenseSplitWhereInput;
    limit?: number;
};
export type ExpenseSplitUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ExpenseSplitSelect<ExtArgs> | null;
    omit?: Prisma.ExpenseSplitOmit<ExtArgs> | null;
    include?: Prisma.ExpenseSplitInclude<ExtArgs> | null;
    where: Prisma.ExpenseSplitWhereUniqueInput;
    create: Prisma.XOR<Prisma.ExpenseSplitCreateInput, Prisma.ExpenseSplitUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ExpenseSplitUpdateInput, Prisma.ExpenseSplitUncheckedUpdateInput>;
};
export type ExpenseSplitDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ExpenseSplitSelect<ExtArgs> | null;
    omit?: Prisma.ExpenseSplitOmit<ExtArgs> | null;
    include?: Prisma.ExpenseSplitInclude<ExtArgs> | null;
    where: Prisma.ExpenseSplitWhereUniqueInput;
};
export type ExpenseSplitDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ExpenseSplitWhereInput;
    limit?: number;
};
export type ExpenseSplitDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ExpenseSplitSelect<ExtArgs> | null;
    omit?: Prisma.ExpenseSplitOmit<ExtArgs> | null;
    include?: Prisma.ExpenseSplitInclude<ExtArgs> | null;
};
export {};
