import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type ExpenseModel = runtime.Types.Result.DefaultSelection<Prisma.$ExpensePayload>;
export type AggregateExpense = {
    _count: ExpenseCountAggregateOutputType | null;
    _avg: ExpenseAvgAggregateOutputType | null;
    _sum: ExpenseSumAggregateOutputType | null;
    _min: ExpenseMinAggregateOutputType | null;
    _max: ExpenseMaxAggregateOutputType | null;
};
export type ExpenseAvgAggregateOutputType = {
    amount: runtime.Decimal | null;
};
export type ExpenseSumAggregateOutputType = {
    amount: runtime.Decimal | null;
};
export type ExpenseMinAggregateOutputType = {
    id: string | null;
    tripId: string | null;
    amount: runtime.Decimal | null;
    currency: string | null;
    categoryId: string | null;
    description: string | null;
    paidById: string | null;
    type: $Enums.ExpenseType | null;
    date: Date | null;
    receipt: string | null;
    isConfirmed: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ExpenseMaxAggregateOutputType = {
    id: string | null;
    tripId: string | null;
    amount: runtime.Decimal | null;
    currency: string | null;
    categoryId: string | null;
    description: string | null;
    paidById: string | null;
    type: $Enums.ExpenseType | null;
    date: Date | null;
    receipt: string | null;
    isConfirmed: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ExpenseCountAggregateOutputType = {
    id: number;
    tripId: number;
    amount: number;
    currency: number;
    categoryId: number;
    description: number;
    paidById: number;
    type: number;
    date: number;
    receipt: number;
    isConfirmed: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type ExpenseAvgAggregateInputType = {
    amount?: true;
};
export type ExpenseSumAggregateInputType = {
    amount?: true;
};
export type ExpenseMinAggregateInputType = {
    id?: true;
    tripId?: true;
    amount?: true;
    currency?: true;
    categoryId?: true;
    description?: true;
    paidById?: true;
    type?: true;
    date?: true;
    receipt?: true;
    isConfirmed?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ExpenseMaxAggregateInputType = {
    id?: true;
    tripId?: true;
    amount?: true;
    currency?: true;
    categoryId?: true;
    description?: true;
    paidById?: true;
    type?: true;
    date?: true;
    receipt?: true;
    isConfirmed?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ExpenseCountAggregateInputType = {
    id?: true;
    tripId?: true;
    amount?: true;
    currency?: true;
    categoryId?: true;
    description?: true;
    paidById?: true;
    type?: true;
    date?: true;
    receipt?: true;
    isConfirmed?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type ExpenseAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ExpenseWhereInput;
    orderBy?: Prisma.ExpenseOrderByWithRelationInput | Prisma.ExpenseOrderByWithRelationInput[];
    cursor?: Prisma.ExpenseWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ExpenseCountAggregateInputType;
    _avg?: ExpenseAvgAggregateInputType;
    _sum?: ExpenseSumAggregateInputType;
    _min?: ExpenseMinAggregateInputType;
    _max?: ExpenseMaxAggregateInputType;
};
export type GetExpenseAggregateType<T extends ExpenseAggregateArgs> = {
    [P in keyof T & keyof AggregateExpense]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateExpense[P]> : Prisma.GetScalarType<T[P], AggregateExpense[P]>;
};
export type ExpenseGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ExpenseWhereInput;
    orderBy?: Prisma.ExpenseOrderByWithAggregationInput | Prisma.ExpenseOrderByWithAggregationInput[];
    by: Prisma.ExpenseScalarFieldEnum[] | Prisma.ExpenseScalarFieldEnum;
    having?: Prisma.ExpenseScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ExpenseCountAggregateInputType | true;
    _avg?: ExpenseAvgAggregateInputType;
    _sum?: ExpenseSumAggregateInputType;
    _min?: ExpenseMinAggregateInputType;
    _max?: ExpenseMaxAggregateInputType;
};
export type ExpenseGroupByOutputType = {
    id: string;
    tripId: string;
    amount: runtime.Decimal;
    currency: string;
    categoryId: string;
    description: string | null;
    paidById: string;
    type: $Enums.ExpenseType;
    date: Date;
    receipt: string | null;
    isConfirmed: boolean;
    createdAt: Date;
    updatedAt: Date;
    _count: ExpenseCountAggregateOutputType | null;
    _avg: ExpenseAvgAggregateOutputType | null;
    _sum: ExpenseSumAggregateOutputType | null;
    _min: ExpenseMinAggregateOutputType | null;
    _max: ExpenseMaxAggregateOutputType | null;
};
type GetExpenseGroupByPayload<T extends ExpenseGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ExpenseGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ExpenseGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ExpenseGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ExpenseGroupByOutputType[P]>;
}>>;
export type ExpenseWhereInput = {
    AND?: Prisma.ExpenseWhereInput | Prisma.ExpenseWhereInput[];
    OR?: Prisma.ExpenseWhereInput[];
    NOT?: Prisma.ExpenseWhereInput | Prisma.ExpenseWhereInput[];
    id?: Prisma.StringFilter<"Expense"> | string;
    tripId?: Prisma.StringFilter<"Expense"> | string;
    amount?: Prisma.DecimalFilter<"Expense"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: Prisma.StringFilter<"Expense"> | string;
    categoryId?: Prisma.StringFilter<"Expense"> | string;
    description?: Prisma.StringNullableFilter<"Expense"> | string | null;
    paidById?: Prisma.StringFilter<"Expense"> | string;
    type?: Prisma.EnumExpenseTypeFilter<"Expense"> | $Enums.ExpenseType;
    date?: Prisma.DateTimeFilter<"Expense"> | Date | string;
    receipt?: Prisma.StringNullableFilter<"Expense"> | string | null;
    isConfirmed?: Prisma.BoolFilter<"Expense"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"Expense"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Expense"> | Date | string;
    splits?: Prisma.ExpenseSplitListRelationFilter;
    category?: Prisma.XOR<Prisma.CategoryScalarRelationFilter, Prisma.CategoryWhereInput>;
    paidBy?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    trip?: Prisma.XOR<Prisma.TripScalarRelationFilter, Prisma.TripWhereInput>;
};
export type ExpenseOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    tripId?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    currency?: Prisma.SortOrder;
    categoryId?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    paidById?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    receipt?: Prisma.SortOrderInput | Prisma.SortOrder;
    isConfirmed?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    splits?: Prisma.ExpenseSplitOrderByRelationAggregateInput;
    category?: Prisma.CategoryOrderByWithRelationInput;
    paidBy?: Prisma.UserOrderByWithRelationInput;
    trip?: Prisma.TripOrderByWithRelationInput;
    _relevance?: Prisma.ExpenseOrderByRelevanceInput;
};
export type ExpenseWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.ExpenseWhereInput | Prisma.ExpenseWhereInput[];
    OR?: Prisma.ExpenseWhereInput[];
    NOT?: Prisma.ExpenseWhereInput | Prisma.ExpenseWhereInput[];
    tripId?: Prisma.StringFilter<"Expense"> | string;
    amount?: Prisma.DecimalFilter<"Expense"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: Prisma.StringFilter<"Expense"> | string;
    categoryId?: Prisma.StringFilter<"Expense"> | string;
    description?: Prisma.StringNullableFilter<"Expense"> | string | null;
    paidById?: Prisma.StringFilter<"Expense"> | string;
    type?: Prisma.EnumExpenseTypeFilter<"Expense"> | $Enums.ExpenseType;
    date?: Prisma.DateTimeFilter<"Expense"> | Date | string;
    receipt?: Prisma.StringNullableFilter<"Expense"> | string | null;
    isConfirmed?: Prisma.BoolFilter<"Expense"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"Expense"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Expense"> | Date | string;
    splits?: Prisma.ExpenseSplitListRelationFilter;
    category?: Prisma.XOR<Prisma.CategoryScalarRelationFilter, Prisma.CategoryWhereInput>;
    paidBy?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    trip?: Prisma.XOR<Prisma.TripScalarRelationFilter, Prisma.TripWhereInput>;
}, "id">;
export type ExpenseOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    tripId?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    currency?: Prisma.SortOrder;
    categoryId?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    paidById?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    receipt?: Prisma.SortOrderInput | Prisma.SortOrder;
    isConfirmed?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.ExpenseCountOrderByAggregateInput;
    _avg?: Prisma.ExpenseAvgOrderByAggregateInput;
    _max?: Prisma.ExpenseMaxOrderByAggregateInput;
    _min?: Prisma.ExpenseMinOrderByAggregateInput;
    _sum?: Prisma.ExpenseSumOrderByAggregateInput;
};
export type ExpenseScalarWhereWithAggregatesInput = {
    AND?: Prisma.ExpenseScalarWhereWithAggregatesInput | Prisma.ExpenseScalarWhereWithAggregatesInput[];
    OR?: Prisma.ExpenseScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ExpenseScalarWhereWithAggregatesInput | Prisma.ExpenseScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Expense"> | string;
    tripId?: Prisma.StringWithAggregatesFilter<"Expense"> | string;
    amount?: Prisma.DecimalWithAggregatesFilter<"Expense"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: Prisma.StringWithAggregatesFilter<"Expense"> | string;
    categoryId?: Prisma.StringWithAggregatesFilter<"Expense"> | string;
    description?: Prisma.StringNullableWithAggregatesFilter<"Expense"> | string | null;
    paidById?: Prisma.StringWithAggregatesFilter<"Expense"> | string;
    type?: Prisma.EnumExpenseTypeWithAggregatesFilter<"Expense"> | $Enums.ExpenseType;
    date?: Prisma.DateTimeWithAggregatesFilter<"Expense"> | Date | string;
    receipt?: Prisma.StringNullableWithAggregatesFilter<"Expense"> | string | null;
    isConfirmed?: Prisma.BoolWithAggregatesFilter<"Expense"> | boolean;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Expense"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Expense"> | Date | string;
};
export type ExpenseCreateInput = {
    id?: string;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: string;
    description?: string | null;
    type?: $Enums.ExpenseType;
    date?: Date | string;
    receipt?: string | null;
    isConfirmed?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    splits?: Prisma.ExpenseSplitCreateNestedManyWithoutExpenseInput;
    category: Prisma.CategoryCreateNestedOneWithoutExpensesInput;
    paidBy: Prisma.UserCreateNestedOneWithoutExpensesInput;
    trip: Prisma.TripCreateNestedOneWithoutExpensesInput;
};
export type ExpenseUncheckedCreateInput = {
    id?: string;
    tripId: string;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: string;
    categoryId: string;
    description?: string | null;
    paidById: string;
    type?: $Enums.ExpenseType;
    date?: Date | string;
    receipt?: string | null;
    isConfirmed?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    splits?: Prisma.ExpenseSplitUncheckedCreateNestedManyWithoutExpenseInput;
};
export type ExpenseUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    type?: Prisma.EnumExpenseTypeFieldUpdateOperationsInput | $Enums.ExpenseType;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    receipt?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isConfirmed?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    splits?: Prisma.ExpenseSplitUpdateManyWithoutExpenseNestedInput;
    category?: Prisma.CategoryUpdateOneRequiredWithoutExpensesNestedInput;
    paidBy?: Prisma.UserUpdateOneRequiredWithoutExpensesNestedInput;
    trip?: Prisma.TripUpdateOneRequiredWithoutExpensesNestedInput;
};
export type ExpenseUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tripId?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    categoryId?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paidById?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumExpenseTypeFieldUpdateOperationsInput | $Enums.ExpenseType;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    receipt?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isConfirmed?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    splits?: Prisma.ExpenseSplitUncheckedUpdateManyWithoutExpenseNestedInput;
};
export type ExpenseCreateManyInput = {
    id?: string;
    tripId: string;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: string;
    categoryId: string;
    description?: string | null;
    paidById: string;
    type?: $Enums.ExpenseType;
    date?: Date | string;
    receipt?: string | null;
    isConfirmed?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ExpenseUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    type?: Prisma.EnumExpenseTypeFieldUpdateOperationsInput | $Enums.ExpenseType;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    receipt?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isConfirmed?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ExpenseUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tripId?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    categoryId?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paidById?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumExpenseTypeFieldUpdateOperationsInput | $Enums.ExpenseType;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    receipt?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isConfirmed?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ExpenseListRelationFilter = {
    every?: Prisma.ExpenseWhereInput;
    some?: Prisma.ExpenseWhereInput;
    none?: Prisma.ExpenseWhereInput;
};
export type ExpenseOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ExpenseOrderByRelevanceInput = {
    fields: Prisma.ExpenseOrderByRelevanceFieldEnum | Prisma.ExpenseOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type ExpenseCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    tripId?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    currency?: Prisma.SortOrder;
    categoryId?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    paidById?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    receipt?: Prisma.SortOrder;
    isConfirmed?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ExpenseAvgOrderByAggregateInput = {
    amount?: Prisma.SortOrder;
};
export type ExpenseMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    tripId?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    currency?: Prisma.SortOrder;
    categoryId?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    paidById?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    receipt?: Prisma.SortOrder;
    isConfirmed?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ExpenseMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    tripId?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    currency?: Prisma.SortOrder;
    categoryId?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    paidById?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    receipt?: Prisma.SortOrder;
    isConfirmed?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ExpenseSumOrderByAggregateInput = {
    amount?: Prisma.SortOrder;
};
export type ExpenseScalarRelationFilter = {
    is?: Prisma.ExpenseWhereInput;
    isNot?: Prisma.ExpenseWhereInput;
};
export type ExpenseCreateNestedManyWithoutPaidByInput = {
    create?: Prisma.XOR<Prisma.ExpenseCreateWithoutPaidByInput, Prisma.ExpenseUncheckedCreateWithoutPaidByInput> | Prisma.ExpenseCreateWithoutPaidByInput[] | Prisma.ExpenseUncheckedCreateWithoutPaidByInput[];
    connectOrCreate?: Prisma.ExpenseCreateOrConnectWithoutPaidByInput | Prisma.ExpenseCreateOrConnectWithoutPaidByInput[];
    createMany?: Prisma.ExpenseCreateManyPaidByInputEnvelope;
    connect?: Prisma.ExpenseWhereUniqueInput | Prisma.ExpenseWhereUniqueInput[];
};
export type ExpenseUncheckedCreateNestedManyWithoutPaidByInput = {
    create?: Prisma.XOR<Prisma.ExpenseCreateWithoutPaidByInput, Prisma.ExpenseUncheckedCreateWithoutPaidByInput> | Prisma.ExpenseCreateWithoutPaidByInput[] | Prisma.ExpenseUncheckedCreateWithoutPaidByInput[];
    connectOrCreate?: Prisma.ExpenseCreateOrConnectWithoutPaidByInput | Prisma.ExpenseCreateOrConnectWithoutPaidByInput[];
    createMany?: Prisma.ExpenseCreateManyPaidByInputEnvelope;
    connect?: Prisma.ExpenseWhereUniqueInput | Prisma.ExpenseWhereUniqueInput[];
};
export type ExpenseUpdateManyWithoutPaidByNestedInput = {
    create?: Prisma.XOR<Prisma.ExpenseCreateWithoutPaidByInput, Prisma.ExpenseUncheckedCreateWithoutPaidByInput> | Prisma.ExpenseCreateWithoutPaidByInput[] | Prisma.ExpenseUncheckedCreateWithoutPaidByInput[];
    connectOrCreate?: Prisma.ExpenseCreateOrConnectWithoutPaidByInput | Prisma.ExpenseCreateOrConnectWithoutPaidByInput[];
    upsert?: Prisma.ExpenseUpsertWithWhereUniqueWithoutPaidByInput | Prisma.ExpenseUpsertWithWhereUniqueWithoutPaidByInput[];
    createMany?: Prisma.ExpenseCreateManyPaidByInputEnvelope;
    set?: Prisma.ExpenseWhereUniqueInput | Prisma.ExpenseWhereUniqueInput[];
    disconnect?: Prisma.ExpenseWhereUniqueInput | Prisma.ExpenseWhereUniqueInput[];
    delete?: Prisma.ExpenseWhereUniqueInput | Prisma.ExpenseWhereUniqueInput[];
    connect?: Prisma.ExpenseWhereUniqueInput | Prisma.ExpenseWhereUniqueInput[];
    update?: Prisma.ExpenseUpdateWithWhereUniqueWithoutPaidByInput | Prisma.ExpenseUpdateWithWhereUniqueWithoutPaidByInput[];
    updateMany?: Prisma.ExpenseUpdateManyWithWhereWithoutPaidByInput | Prisma.ExpenseUpdateManyWithWhereWithoutPaidByInput[];
    deleteMany?: Prisma.ExpenseScalarWhereInput | Prisma.ExpenseScalarWhereInput[];
};
export type ExpenseUncheckedUpdateManyWithoutPaidByNestedInput = {
    create?: Prisma.XOR<Prisma.ExpenseCreateWithoutPaidByInput, Prisma.ExpenseUncheckedCreateWithoutPaidByInput> | Prisma.ExpenseCreateWithoutPaidByInput[] | Prisma.ExpenseUncheckedCreateWithoutPaidByInput[];
    connectOrCreate?: Prisma.ExpenseCreateOrConnectWithoutPaidByInput | Prisma.ExpenseCreateOrConnectWithoutPaidByInput[];
    upsert?: Prisma.ExpenseUpsertWithWhereUniqueWithoutPaidByInput | Prisma.ExpenseUpsertWithWhereUniqueWithoutPaidByInput[];
    createMany?: Prisma.ExpenseCreateManyPaidByInputEnvelope;
    set?: Prisma.ExpenseWhereUniqueInput | Prisma.ExpenseWhereUniqueInput[];
    disconnect?: Prisma.ExpenseWhereUniqueInput | Prisma.ExpenseWhereUniqueInput[];
    delete?: Prisma.ExpenseWhereUniqueInput | Prisma.ExpenseWhereUniqueInput[];
    connect?: Prisma.ExpenseWhereUniqueInput | Prisma.ExpenseWhereUniqueInput[];
    update?: Prisma.ExpenseUpdateWithWhereUniqueWithoutPaidByInput | Prisma.ExpenseUpdateWithWhereUniqueWithoutPaidByInput[];
    updateMany?: Prisma.ExpenseUpdateManyWithWhereWithoutPaidByInput | Prisma.ExpenseUpdateManyWithWhereWithoutPaidByInput[];
    deleteMany?: Prisma.ExpenseScalarWhereInput | Prisma.ExpenseScalarWhereInput[];
};
export type ExpenseCreateNestedManyWithoutTripInput = {
    create?: Prisma.XOR<Prisma.ExpenseCreateWithoutTripInput, Prisma.ExpenseUncheckedCreateWithoutTripInput> | Prisma.ExpenseCreateWithoutTripInput[] | Prisma.ExpenseUncheckedCreateWithoutTripInput[];
    connectOrCreate?: Prisma.ExpenseCreateOrConnectWithoutTripInput | Prisma.ExpenseCreateOrConnectWithoutTripInput[];
    createMany?: Prisma.ExpenseCreateManyTripInputEnvelope;
    connect?: Prisma.ExpenseWhereUniqueInput | Prisma.ExpenseWhereUniqueInput[];
};
export type ExpenseUncheckedCreateNestedManyWithoutTripInput = {
    create?: Prisma.XOR<Prisma.ExpenseCreateWithoutTripInput, Prisma.ExpenseUncheckedCreateWithoutTripInput> | Prisma.ExpenseCreateWithoutTripInput[] | Prisma.ExpenseUncheckedCreateWithoutTripInput[];
    connectOrCreate?: Prisma.ExpenseCreateOrConnectWithoutTripInput | Prisma.ExpenseCreateOrConnectWithoutTripInput[];
    createMany?: Prisma.ExpenseCreateManyTripInputEnvelope;
    connect?: Prisma.ExpenseWhereUniqueInput | Prisma.ExpenseWhereUniqueInput[];
};
export type ExpenseUpdateManyWithoutTripNestedInput = {
    create?: Prisma.XOR<Prisma.ExpenseCreateWithoutTripInput, Prisma.ExpenseUncheckedCreateWithoutTripInput> | Prisma.ExpenseCreateWithoutTripInput[] | Prisma.ExpenseUncheckedCreateWithoutTripInput[];
    connectOrCreate?: Prisma.ExpenseCreateOrConnectWithoutTripInput | Prisma.ExpenseCreateOrConnectWithoutTripInput[];
    upsert?: Prisma.ExpenseUpsertWithWhereUniqueWithoutTripInput | Prisma.ExpenseUpsertWithWhereUniqueWithoutTripInput[];
    createMany?: Prisma.ExpenseCreateManyTripInputEnvelope;
    set?: Prisma.ExpenseWhereUniqueInput | Prisma.ExpenseWhereUniqueInput[];
    disconnect?: Prisma.ExpenseWhereUniqueInput | Prisma.ExpenseWhereUniqueInput[];
    delete?: Prisma.ExpenseWhereUniqueInput | Prisma.ExpenseWhereUniqueInput[];
    connect?: Prisma.ExpenseWhereUniqueInput | Prisma.ExpenseWhereUniqueInput[];
    update?: Prisma.ExpenseUpdateWithWhereUniqueWithoutTripInput | Prisma.ExpenseUpdateWithWhereUniqueWithoutTripInput[];
    updateMany?: Prisma.ExpenseUpdateManyWithWhereWithoutTripInput | Prisma.ExpenseUpdateManyWithWhereWithoutTripInput[];
    deleteMany?: Prisma.ExpenseScalarWhereInput | Prisma.ExpenseScalarWhereInput[];
};
export type ExpenseUncheckedUpdateManyWithoutTripNestedInput = {
    create?: Prisma.XOR<Prisma.ExpenseCreateWithoutTripInput, Prisma.ExpenseUncheckedCreateWithoutTripInput> | Prisma.ExpenseCreateWithoutTripInput[] | Prisma.ExpenseUncheckedCreateWithoutTripInput[];
    connectOrCreate?: Prisma.ExpenseCreateOrConnectWithoutTripInput | Prisma.ExpenseCreateOrConnectWithoutTripInput[];
    upsert?: Prisma.ExpenseUpsertWithWhereUniqueWithoutTripInput | Prisma.ExpenseUpsertWithWhereUniqueWithoutTripInput[];
    createMany?: Prisma.ExpenseCreateManyTripInputEnvelope;
    set?: Prisma.ExpenseWhereUniqueInput | Prisma.ExpenseWhereUniqueInput[];
    disconnect?: Prisma.ExpenseWhereUniqueInput | Prisma.ExpenseWhereUniqueInput[];
    delete?: Prisma.ExpenseWhereUniqueInput | Prisma.ExpenseWhereUniqueInput[];
    connect?: Prisma.ExpenseWhereUniqueInput | Prisma.ExpenseWhereUniqueInput[];
    update?: Prisma.ExpenseUpdateWithWhereUniqueWithoutTripInput | Prisma.ExpenseUpdateWithWhereUniqueWithoutTripInput[];
    updateMany?: Prisma.ExpenseUpdateManyWithWhereWithoutTripInput | Prisma.ExpenseUpdateManyWithWhereWithoutTripInput[];
    deleteMany?: Prisma.ExpenseScalarWhereInput | Prisma.ExpenseScalarWhereInput[];
};
export type ExpenseCreateNestedManyWithoutCategoryInput = {
    create?: Prisma.XOR<Prisma.ExpenseCreateWithoutCategoryInput, Prisma.ExpenseUncheckedCreateWithoutCategoryInput> | Prisma.ExpenseCreateWithoutCategoryInput[] | Prisma.ExpenseUncheckedCreateWithoutCategoryInput[];
    connectOrCreate?: Prisma.ExpenseCreateOrConnectWithoutCategoryInput | Prisma.ExpenseCreateOrConnectWithoutCategoryInput[];
    createMany?: Prisma.ExpenseCreateManyCategoryInputEnvelope;
    connect?: Prisma.ExpenseWhereUniqueInput | Prisma.ExpenseWhereUniqueInput[];
};
export type ExpenseUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: Prisma.XOR<Prisma.ExpenseCreateWithoutCategoryInput, Prisma.ExpenseUncheckedCreateWithoutCategoryInput> | Prisma.ExpenseCreateWithoutCategoryInput[] | Prisma.ExpenseUncheckedCreateWithoutCategoryInput[];
    connectOrCreate?: Prisma.ExpenseCreateOrConnectWithoutCategoryInput | Prisma.ExpenseCreateOrConnectWithoutCategoryInput[];
    createMany?: Prisma.ExpenseCreateManyCategoryInputEnvelope;
    connect?: Prisma.ExpenseWhereUniqueInput | Prisma.ExpenseWhereUniqueInput[];
};
export type ExpenseUpdateManyWithoutCategoryNestedInput = {
    create?: Prisma.XOR<Prisma.ExpenseCreateWithoutCategoryInput, Prisma.ExpenseUncheckedCreateWithoutCategoryInput> | Prisma.ExpenseCreateWithoutCategoryInput[] | Prisma.ExpenseUncheckedCreateWithoutCategoryInput[];
    connectOrCreate?: Prisma.ExpenseCreateOrConnectWithoutCategoryInput | Prisma.ExpenseCreateOrConnectWithoutCategoryInput[];
    upsert?: Prisma.ExpenseUpsertWithWhereUniqueWithoutCategoryInput | Prisma.ExpenseUpsertWithWhereUniqueWithoutCategoryInput[];
    createMany?: Prisma.ExpenseCreateManyCategoryInputEnvelope;
    set?: Prisma.ExpenseWhereUniqueInput | Prisma.ExpenseWhereUniqueInput[];
    disconnect?: Prisma.ExpenseWhereUniqueInput | Prisma.ExpenseWhereUniqueInput[];
    delete?: Prisma.ExpenseWhereUniqueInput | Prisma.ExpenseWhereUniqueInput[];
    connect?: Prisma.ExpenseWhereUniqueInput | Prisma.ExpenseWhereUniqueInput[];
    update?: Prisma.ExpenseUpdateWithWhereUniqueWithoutCategoryInput | Prisma.ExpenseUpdateWithWhereUniqueWithoutCategoryInput[];
    updateMany?: Prisma.ExpenseUpdateManyWithWhereWithoutCategoryInput | Prisma.ExpenseUpdateManyWithWhereWithoutCategoryInput[];
    deleteMany?: Prisma.ExpenseScalarWhereInput | Prisma.ExpenseScalarWhereInput[];
};
export type ExpenseUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: Prisma.XOR<Prisma.ExpenseCreateWithoutCategoryInput, Prisma.ExpenseUncheckedCreateWithoutCategoryInput> | Prisma.ExpenseCreateWithoutCategoryInput[] | Prisma.ExpenseUncheckedCreateWithoutCategoryInput[];
    connectOrCreate?: Prisma.ExpenseCreateOrConnectWithoutCategoryInput | Prisma.ExpenseCreateOrConnectWithoutCategoryInput[];
    upsert?: Prisma.ExpenseUpsertWithWhereUniqueWithoutCategoryInput | Prisma.ExpenseUpsertWithWhereUniqueWithoutCategoryInput[];
    createMany?: Prisma.ExpenseCreateManyCategoryInputEnvelope;
    set?: Prisma.ExpenseWhereUniqueInput | Prisma.ExpenseWhereUniqueInput[];
    disconnect?: Prisma.ExpenseWhereUniqueInput | Prisma.ExpenseWhereUniqueInput[];
    delete?: Prisma.ExpenseWhereUniqueInput | Prisma.ExpenseWhereUniqueInput[];
    connect?: Prisma.ExpenseWhereUniqueInput | Prisma.ExpenseWhereUniqueInput[];
    update?: Prisma.ExpenseUpdateWithWhereUniqueWithoutCategoryInput | Prisma.ExpenseUpdateWithWhereUniqueWithoutCategoryInput[];
    updateMany?: Prisma.ExpenseUpdateManyWithWhereWithoutCategoryInput | Prisma.ExpenseUpdateManyWithWhereWithoutCategoryInput[];
    deleteMany?: Prisma.ExpenseScalarWhereInput | Prisma.ExpenseScalarWhereInput[];
};
export type DecimalFieldUpdateOperationsInput = {
    set?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    increment?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    decrement?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    multiply?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    divide?: runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type EnumExpenseTypeFieldUpdateOperationsInput = {
    set?: $Enums.ExpenseType;
};
export type ExpenseCreateNestedOneWithoutSplitsInput = {
    create?: Prisma.XOR<Prisma.ExpenseCreateWithoutSplitsInput, Prisma.ExpenseUncheckedCreateWithoutSplitsInput>;
    connectOrCreate?: Prisma.ExpenseCreateOrConnectWithoutSplitsInput;
    connect?: Prisma.ExpenseWhereUniqueInput;
};
export type ExpenseUpdateOneRequiredWithoutSplitsNestedInput = {
    create?: Prisma.XOR<Prisma.ExpenseCreateWithoutSplitsInput, Prisma.ExpenseUncheckedCreateWithoutSplitsInput>;
    connectOrCreate?: Prisma.ExpenseCreateOrConnectWithoutSplitsInput;
    upsert?: Prisma.ExpenseUpsertWithoutSplitsInput;
    connect?: Prisma.ExpenseWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ExpenseUpdateToOneWithWhereWithoutSplitsInput, Prisma.ExpenseUpdateWithoutSplitsInput>, Prisma.ExpenseUncheckedUpdateWithoutSplitsInput>;
};
export type ExpenseCreateWithoutPaidByInput = {
    id?: string;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: string;
    description?: string | null;
    type?: $Enums.ExpenseType;
    date?: Date | string;
    receipt?: string | null;
    isConfirmed?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    splits?: Prisma.ExpenseSplitCreateNestedManyWithoutExpenseInput;
    category: Prisma.CategoryCreateNestedOneWithoutExpensesInput;
    trip: Prisma.TripCreateNestedOneWithoutExpensesInput;
};
export type ExpenseUncheckedCreateWithoutPaidByInput = {
    id?: string;
    tripId: string;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: string;
    categoryId: string;
    description?: string | null;
    type?: $Enums.ExpenseType;
    date?: Date | string;
    receipt?: string | null;
    isConfirmed?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    splits?: Prisma.ExpenseSplitUncheckedCreateNestedManyWithoutExpenseInput;
};
export type ExpenseCreateOrConnectWithoutPaidByInput = {
    where: Prisma.ExpenseWhereUniqueInput;
    create: Prisma.XOR<Prisma.ExpenseCreateWithoutPaidByInput, Prisma.ExpenseUncheckedCreateWithoutPaidByInput>;
};
export type ExpenseCreateManyPaidByInputEnvelope = {
    data: Prisma.ExpenseCreateManyPaidByInput | Prisma.ExpenseCreateManyPaidByInput[];
    skipDuplicates?: boolean;
};
export type ExpenseUpsertWithWhereUniqueWithoutPaidByInput = {
    where: Prisma.ExpenseWhereUniqueInput;
    update: Prisma.XOR<Prisma.ExpenseUpdateWithoutPaidByInput, Prisma.ExpenseUncheckedUpdateWithoutPaidByInput>;
    create: Prisma.XOR<Prisma.ExpenseCreateWithoutPaidByInput, Prisma.ExpenseUncheckedCreateWithoutPaidByInput>;
};
export type ExpenseUpdateWithWhereUniqueWithoutPaidByInput = {
    where: Prisma.ExpenseWhereUniqueInput;
    data: Prisma.XOR<Prisma.ExpenseUpdateWithoutPaidByInput, Prisma.ExpenseUncheckedUpdateWithoutPaidByInput>;
};
export type ExpenseUpdateManyWithWhereWithoutPaidByInput = {
    where: Prisma.ExpenseScalarWhereInput;
    data: Prisma.XOR<Prisma.ExpenseUpdateManyMutationInput, Prisma.ExpenseUncheckedUpdateManyWithoutPaidByInput>;
};
export type ExpenseScalarWhereInput = {
    AND?: Prisma.ExpenseScalarWhereInput | Prisma.ExpenseScalarWhereInput[];
    OR?: Prisma.ExpenseScalarWhereInput[];
    NOT?: Prisma.ExpenseScalarWhereInput | Prisma.ExpenseScalarWhereInput[];
    id?: Prisma.StringFilter<"Expense"> | string;
    tripId?: Prisma.StringFilter<"Expense"> | string;
    amount?: Prisma.DecimalFilter<"Expense"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: Prisma.StringFilter<"Expense"> | string;
    categoryId?: Prisma.StringFilter<"Expense"> | string;
    description?: Prisma.StringNullableFilter<"Expense"> | string | null;
    paidById?: Prisma.StringFilter<"Expense"> | string;
    type?: Prisma.EnumExpenseTypeFilter<"Expense"> | $Enums.ExpenseType;
    date?: Prisma.DateTimeFilter<"Expense"> | Date | string;
    receipt?: Prisma.StringNullableFilter<"Expense"> | string | null;
    isConfirmed?: Prisma.BoolFilter<"Expense"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"Expense"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Expense"> | Date | string;
};
export type ExpenseCreateWithoutTripInput = {
    id?: string;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: string;
    description?: string | null;
    type?: $Enums.ExpenseType;
    date?: Date | string;
    receipt?: string | null;
    isConfirmed?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    splits?: Prisma.ExpenseSplitCreateNestedManyWithoutExpenseInput;
    category: Prisma.CategoryCreateNestedOneWithoutExpensesInput;
    paidBy: Prisma.UserCreateNestedOneWithoutExpensesInput;
};
export type ExpenseUncheckedCreateWithoutTripInput = {
    id?: string;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: string;
    categoryId: string;
    description?: string | null;
    paidById: string;
    type?: $Enums.ExpenseType;
    date?: Date | string;
    receipt?: string | null;
    isConfirmed?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    splits?: Prisma.ExpenseSplitUncheckedCreateNestedManyWithoutExpenseInput;
};
export type ExpenseCreateOrConnectWithoutTripInput = {
    where: Prisma.ExpenseWhereUniqueInput;
    create: Prisma.XOR<Prisma.ExpenseCreateWithoutTripInput, Prisma.ExpenseUncheckedCreateWithoutTripInput>;
};
export type ExpenseCreateManyTripInputEnvelope = {
    data: Prisma.ExpenseCreateManyTripInput | Prisma.ExpenseCreateManyTripInput[];
    skipDuplicates?: boolean;
};
export type ExpenseUpsertWithWhereUniqueWithoutTripInput = {
    where: Prisma.ExpenseWhereUniqueInput;
    update: Prisma.XOR<Prisma.ExpenseUpdateWithoutTripInput, Prisma.ExpenseUncheckedUpdateWithoutTripInput>;
    create: Prisma.XOR<Prisma.ExpenseCreateWithoutTripInput, Prisma.ExpenseUncheckedCreateWithoutTripInput>;
};
export type ExpenseUpdateWithWhereUniqueWithoutTripInput = {
    where: Prisma.ExpenseWhereUniqueInput;
    data: Prisma.XOR<Prisma.ExpenseUpdateWithoutTripInput, Prisma.ExpenseUncheckedUpdateWithoutTripInput>;
};
export type ExpenseUpdateManyWithWhereWithoutTripInput = {
    where: Prisma.ExpenseScalarWhereInput;
    data: Prisma.XOR<Prisma.ExpenseUpdateManyMutationInput, Prisma.ExpenseUncheckedUpdateManyWithoutTripInput>;
};
export type ExpenseCreateWithoutCategoryInput = {
    id?: string;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: string;
    description?: string | null;
    type?: $Enums.ExpenseType;
    date?: Date | string;
    receipt?: string | null;
    isConfirmed?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    splits?: Prisma.ExpenseSplitCreateNestedManyWithoutExpenseInput;
    paidBy: Prisma.UserCreateNestedOneWithoutExpensesInput;
    trip: Prisma.TripCreateNestedOneWithoutExpensesInput;
};
export type ExpenseUncheckedCreateWithoutCategoryInput = {
    id?: string;
    tripId: string;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: string;
    description?: string | null;
    paidById: string;
    type?: $Enums.ExpenseType;
    date?: Date | string;
    receipt?: string | null;
    isConfirmed?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    splits?: Prisma.ExpenseSplitUncheckedCreateNestedManyWithoutExpenseInput;
};
export type ExpenseCreateOrConnectWithoutCategoryInput = {
    where: Prisma.ExpenseWhereUniqueInput;
    create: Prisma.XOR<Prisma.ExpenseCreateWithoutCategoryInput, Prisma.ExpenseUncheckedCreateWithoutCategoryInput>;
};
export type ExpenseCreateManyCategoryInputEnvelope = {
    data: Prisma.ExpenseCreateManyCategoryInput | Prisma.ExpenseCreateManyCategoryInput[];
    skipDuplicates?: boolean;
};
export type ExpenseUpsertWithWhereUniqueWithoutCategoryInput = {
    where: Prisma.ExpenseWhereUniqueInput;
    update: Prisma.XOR<Prisma.ExpenseUpdateWithoutCategoryInput, Prisma.ExpenseUncheckedUpdateWithoutCategoryInput>;
    create: Prisma.XOR<Prisma.ExpenseCreateWithoutCategoryInput, Prisma.ExpenseUncheckedCreateWithoutCategoryInput>;
};
export type ExpenseUpdateWithWhereUniqueWithoutCategoryInput = {
    where: Prisma.ExpenseWhereUniqueInput;
    data: Prisma.XOR<Prisma.ExpenseUpdateWithoutCategoryInput, Prisma.ExpenseUncheckedUpdateWithoutCategoryInput>;
};
export type ExpenseUpdateManyWithWhereWithoutCategoryInput = {
    where: Prisma.ExpenseScalarWhereInput;
    data: Prisma.XOR<Prisma.ExpenseUpdateManyMutationInput, Prisma.ExpenseUncheckedUpdateManyWithoutCategoryInput>;
};
export type ExpenseCreateWithoutSplitsInput = {
    id?: string;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: string;
    description?: string | null;
    type?: $Enums.ExpenseType;
    date?: Date | string;
    receipt?: string | null;
    isConfirmed?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    category: Prisma.CategoryCreateNestedOneWithoutExpensesInput;
    paidBy: Prisma.UserCreateNestedOneWithoutExpensesInput;
    trip: Prisma.TripCreateNestedOneWithoutExpensesInput;
};
export type ExpenseUncheckedCreateWithoutSplitsInput = {
    id?: string;
    tripId: string;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: string;
    categoryId: string;
    description?: string | null;
    paidById: string;
    type?: $Enums.ExpenseType;
    date?: Date | string;
    receipt?: string | null;
    isConfirmed?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ExpenseCreateOrConnectWithoutSplitsInput = {
    where: Prisma.ExpenseWhereUniqueInput;
    create: Prisma.XOR<Prisma.ExpenseCreateWithoutSplitsInput, Prisma.ExpenseUncheckedCreateWithoutSplitsInput>;
};
export type ExpenseUpsertWithoutSplitsInput = {
    update: Prisma.XOR<Prisma.ExpenseUpdateWithoutSplitsInput, Prisma.ExpenseUncheckedUpdateWithoutSplitsInput>;
    create: Prisma.XOR<Prisma.ExpenseCreateWithoutSplitsInput, Prisma.ExpenseUncheckedCreateWithoutSplitsInput>;
    where?: Prisma.ExpenseWhereInput;
};
export type ExpenseUpdateToOneWithWhereWithoutSplitsInput = {
    where?: Prisma.ExpenseWhereInput;
    data: Prisma.XOR<Prisma.ExpenseUpdateWithoutSplitsInput, Prisma.ExpenseUncheckedUpdateWithoutSplitsInput>;
};
export type ExpenseUpdateWithoutSplitsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    type?: Prisma.EnumExpenseTypeFieldUpdateOperationsInput | $Enums.ExpenseType;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    receipt?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isConfirmed?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    category?: Prisma.CategoryUpdateOneRequiredWithoutExpensesNestedInput;
    paidBy?: Prisma.UserUpdateOneRequiredWithoutExpensesNestedInput;
    trip?: Prisma.TripUpdateOneRequiredWithoutExpensesNestedInput;
};
export type ExpenseUncheckedUpdateWithoutSplitsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tripId?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    categoryId?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paidById?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumExpenseTypeFieldUpdateOperationsInput | $Enums.ExpenseType;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    receipt?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isConfirmed?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ExpenseCreateManyPaidByInput = {
    id?: string;
    tripId: string;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: string;
    categoryId: string;
    description?: string | null;
    type?: $Enums.ExpenseType;
    date?: Date | string;
    receipt?: string | null;
    isConfirmed?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ExpenseUpdateWithoutPaidByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    type?: Prisma.EnumExpenseTypeFieldUpdateOperationsInput | $Enums.ExpenseType;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    receipt?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isConfirmed?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    splits?: Prisma.ExpenseSplitUpdateManyWithoutExpenseNestedInput;
    category?: Prisma.CategoryUpdateOneRequiredWithoutExpensesNestedInput;
    trip?: Prisma.TripUpdateOneRequiredWithoutExpensesNestedInput;
};
export type ExpenseUncheckedUpdateWithoutPaidByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tripId?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    categoryId?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    type?: Prisma.EnumExpenseTypeFieldUpdateOperationsInput | $Enums.ExpenseType;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    receipt?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isConfirmed?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    splits?: Prisma.ExpenseSplitUncheckedUpdateManyWithoutExpenseNestedInput;
};
export type ExpenseUncheckedUpdateManyWithoutPaidByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tripId?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    categoryId?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    type?: Prisma.EnumExpenseTypeFieldUpdateOperationsInput | $Enums.ExpenseType;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    receipt?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isConfirmed?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ExpenseCreateManyTripInput = {
    id?: string;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: string;
    categoryId: string;
    description?: string | null;
    paidById: string;
    type?: $Enums.ExpenseType;
    date?: Date | string;
    receipt?: string | null;
    isConfirmed?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ExpenseUpdateWithoutTripInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    type?: Prisma.EnumExpenseTypeFieldUpdateOperationsInput | $Enums.ExpenseType;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    receipt?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isConfirmed?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    splits?: Prisma.ExpenseSplitUpdateManyWithoutExpenseNestedInput;
    category?: Prisma.CategoryUpdateOneRequiredWithoutExpensesNestedInput;
    paidBy?: Prisma.UserUpdateOneRequiredWithoutExpensesNestedInput;
};
export type ExpenseUncheckedUpdateWithoutTripInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    categoryId?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paidById?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumExpenseTypeFieldUpdateOperationsInput | $Enums.ExpenseType;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    receipt?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isConfirmed?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    splits?: Prisma.ExpenseSplitUncheckedUpdateManyWithoutExpenseNestedInput;
};
export type ExpenseUncheckedUpdateManyWithoutTripInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    categoryId?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paidById?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumExpenseTypeFieldUpdateOperationsInput | $Enums.ExpenseType;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    receipt?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isConfirmed?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ExpenseCreateManyCategoryInput = {
    id?: string;
    tripId: string;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: string;
    description?: string | null;
    paidById: string;
    type?: $Enums.ExpenseType;
    date?: Date | string;
    receipt?: string | null;
    isConfirmed?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ExpenseUpdateWithoutCategoryInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    type?: Prisma.EnumExpenseTypeFieldUpdateOperationsInput | $Enums.ExpenseType;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    receipt?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isConfirmed?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    splits?: Prisma.ExpenseSplitUpdateManyWithoutExpenseNestedInput;
    paidBy?: Prisma.UserUpdateOneRequiredWithoutExpensesNestedInput;
    trip?: Prisma.TripUpdateOneRequiredWithoutExpensesNestedInput;
};
export type ExpenseUncheckedUpdateWithoutCategoryInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tripId?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paidById?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumExpenseTypeFieldUpdateOperationsInput | $Enums.ExpenseType;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    receipt?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isConfirmed?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    splits?: Prisma.ExpenseSplitUncheckedUpdateManyWithoutExpenseNestedInput;
};
export type ExpenseUncheckedUpdateManyWithoutCategoryInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tripId?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paidById?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumExpenseTypeFieldUpdateOperationsInput | $Enums.ExpenseType;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    receipt?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isConfirmed?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ExpenseCountOutputType = {
    splits: number;
};
export type ExpenseCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    splits?: boolean | ExpenseCountOutputTypeCountSplitsArgs;
};
export type ExpenseCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ExpenseCountOutputTypeSelect<ExtArgs> | null;
};
export type ExpenseCountOutputTypeCountSplitsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ExpenseSplitWhereInput;
};
export type ExpenseSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    tripId?: boolean;
    amount?: boolean;
    currency?: boolean;
    categoryId?: boolean;
    description?: boolean;
    paidById?: boolean;
    type?: boolean;
    date?: boolean;
    receipt?: boolean;
    isConfirmed?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    splits?: boolean | Prisma.Expense$splitsArgs<ExtArgs>;
    category?: boolean | Prisma.CategoryDefaultArgs<ExtArgs>;
    paidBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    trip?: boolean | Prisma.TripDefaultArgs<ExtArgs>;
    _count?: boolean | Prisma.ExpenseCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["expense"]>;
export type ExpenseSelectScalar = {
    id?: boolean;
    tripId?: boolean;
    amount?: boolean;
    currency?: boolean;
    categoryId?: boolean;
    description?: boolean;
    paidById?: boolean;
    type?: boolean;
    date?: boolean;
    receipt?: boolean;
    isConfirmed?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type ExpenseOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "tripId" | "amount" | "currency" | "categoryId" | "description" | "paidById" | "type" | "date" | "receipt" | "isConfirmed" | "createdAt" | "updatedAt", ExtArgs["result"]["expense"]>;
export type ExpenseInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    splits?: boolean | Prisma.Expense$splitsArgs<ExtArgs>;
    category?: boolean | Prisma.CategoryDefaultArgs<ExtArgs>;
    paidBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    trip?: boolean | Prisma.TripDefaultArgs<ExtArgs>;
    _count?: boolean | Prisma.ExpenseCountOutputTypeDefaultArgs<ExtArgs>;
};
export type $ExpensePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Expense";
    objects: {
        splits: Prisma.$ExpenseSplitPayload<ExtArgs>[];
        category: Prisma.$CategoryPayload<ExtArgs>;
        paidBy: Prisma.$UserPayload<ExtArgs>;
        trip: Prisma.$TripPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        tripId: string;
        amount: runtime.Decimal;
        currency: string;
        categoryId: string;
        description: string | null;
        paidById: string;
        type: $Enums.ExpenseType;
        date: Date;
        receipt: string | null;
        isConfirmed: boolean;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["expense"]>;
    composites: {};
};
export type ExpenseGetPayload<S extends boolean | null | undefined | ExpenseDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ExpensePayload, S>;
export type ExpenseCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ExpenseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ExpenseCountAggregateInputType | true;
};
export interface ExpenseDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Expense'];
        meta: {
            name: 'Expense';
        };
    };
    findUnique<T extends ExpenseFindUniqueArgs>(args: Prisma.SelectSubset<T, ExpenseFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ExpenseClient<runtime.Types.Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ExpenseFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ExpenseFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ExpenseClient<runtime.Types.Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ExpenseFindFirstArgs>(args?: Prisma.SelectSubset<T, ExpenseFindFirstArgs<ExtArgs>>): Prisma.Prisma__ExpenseClient<runtime.Types.Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ExpenseFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ExpenseFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ExpenseClient<runtime.Types.Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ExpenseFindManyArgs>(args?: Prisma.SelectSubset<T, ExpenseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ExpenseCreateArgs>(args: Prisma.SelectSubset<T, ExpenseCreateArgs<ExtArgs>>): Prisma.Prisma__ExpenseClient<runtime.Types.Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ExpenseCreateManyArgs>(args?: Prisma.SelectSubset<T, ExpenseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    delete<T extends ExpenseDeleteArgs>(args: Prisma.SelectSubset<T, ExpenseDeleteArgs<ExtArgs>>): Prisma.Prisma__ExpenseClient<runtime.Types.Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ExpenseUpdateArgs>(args: Prisma.SelectSubset<T, ExpenseUpdateArgs<ExtArgs>>): Prisma.Prisma__ExpenseClient<runtime.Types.Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ExpenseDeleteManyArgs>(args?: Prisma.SelectSubset<T, ExpenseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ExpenseUpdateManyArgs>(args: Prisma.SelectSubset<T, ExpenseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    upsert<T extends ExpenseUpsertArgs>(args: Prisma.SelectSubset<T, ExpenseUpsertArgs<ExtArgs>>): Prisma.Prisma__ExpenseClient<runtime.Types.Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ExpenseCountArgs>(args?: Prisma.Subset<T, ExpenseCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ExpenseCountAggregateOutputType> : number>;
    aggregate<T extends ExpenseAggregateArgs>(args: Prisma.Subset<T, ExpenseAggregateArgs>): Prisma.PrismaPromise<GetExpenseAggregateType<T>>;
    groupBy<T extends ExpenseGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ExpenseGroupByArgs['orderBy'];
    } : {
        orderBy?: ExpenseGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ExpenseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExpenseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ExpenseFieldRefs;
}
export interface Prisma__ExpenseClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    splits<T extends Prisma.Expense$splitsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Expense$splitsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ExpenseSplitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    category<T extends Prisma.CategoryDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.CategoryDefaultArgs<ExtArgs>>): Prisma.Prisma__CategoryClient<runtime.Types.Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    paidBy<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    trip<T extends Prisma.TripDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.TripDefaultArgs<ExtArgs>>): Prisma.Prisma__TripClient<runtime.Types.Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ExpenseFieldRefs {
    readonly id: Prisma.FieldRef<"Expense", 'String'>;
    readonly tripId: Prisma.FieldRef<"Expense", 'String'>;
    readonly amount: Prisma.FieldRef<"Expense", 'Decimal'>;
    readonly currency: Prisma.FieldRef<"Expense", 'String'>;
    readonly categoryId: Prisma.FieldRef<"Expense", 'String'>;
    readonly description: Prisma.FieldRef<"Expense", 'String'>;
    readonly paidById: Prisma.FieldRef<"Expense", 'String'>;
    readonly type: Prisma.FieldRef<"Expense", 'ExpenseType'>;
    readonly date: Prisma.FieldRef<"Expense", 'DateTime'>;
    readonly receipt: Prisma.FieldRef<"Expense", 'String'>;
    readonly isConfirmed: Prisma.FieldRef<"Expense", 'Boolean'>;
    readonly createdAt: Prisma.FieldRef<"Expense", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Expense", 'DateTime'>;
}
export type ExpenseFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ExpenseSelect<ExtArgs> | null;
    omit?: Prisma.ExpenseOmit<ExtArgs> | null;
    include?: Prisma.ExpenseInclude<ExtArgs> | null;
    where: Prisma.ExpenseWhereUniqueInput;
};
export type ExpenseFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ExpenseSelect<ExtArgs> | null;
    omit?: Prisma.ExpenseOmit<ExtArgs> | null;
    include?: Prisma.ExpenseInclude<ExtArgs> | null;
    where: Prisma.ExpenseWhereUniqueInput;
};
export type ExpenseFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ExpenseSelect<ExtArgs> | null;
    omit?: Prisma.ExpenseOmit<ExtArgs> | null;
    include?: Prisma.ExpenseInclude<ExtArgs> | null;
    where?: Prisma.ExpenseWhereInput;
    orderBy?: Prisma.ExpenseOrderByWithRelationInput | Prisma.ExpenseOrderByWithRelationInput[];
    cursor?: Prisma.ExpenseWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ExpenseScalarFieldEnum | Prisma.ExpenseScalarFieldEnum[];
};
export type ExpenseFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ExpenseSelect<ExtArgs> | null;
    omit?: Prisma.ExpenseOmit<ExtArgs> | null;
    include?: Prisma.ExpenseInclude<ExtArgs> | null;
    where?: Prisma.ExpenseWhereInput;
    orderBy?: Prisma.ExpenseOrderByWithRelationInput | Prisma.ExpenseOrderByWithRelationInput[];
    cursor?: Prisma.ExpenseWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ExpenseScalarFieldEnum | Prisma.ExpenseScalarFieldEnum[];
};
export type ExpenseFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ExpenseSelect<ExtArgs> | null;
    omit?: Prisma.ExpenseOmit<ExtArgs> | null;
    include?: Prisma.ExpenseInclude<ExtArgs> | null;
    where?: Prisma.ExpenseWhereInput;
    orderBy?: Prisma.ExpenseOrderByWithRelationInput | Prisma.ExpenseOrderByWithRelationInput[];
    cursor?: Prisma.ExpenseWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ExpenseScalarFieldEnum | Prisma.ExpenseScalarFieldEnum[];
};
export type ExpenseCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ExpenseSelect<ExtArgs> | null;
    omit?: Prisma.ExpenseOmit<ExtArgs> | null;
    include?: Prisma.ExpenseInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ExpenseCreateInput, Prisma.ExpenseUncheckedCreateInput>;
};
export type ExpenseCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ExpenseCreateManyInput | Prisma.ExpenseCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ExpenseUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ExpenseSelect<ExtArgs> | null;
    omit?: Prisma.ExpenseOmit<ExtArgs> | null;
    include?: Prisma.ExpenseInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ExpenseUpdateInput, Prisma.ExpenseUncheckedUpdateInput>;
    where: Prisma.ExpenseWhereUniqueInput;
};
export type ExpenseUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ExpenseUpdateManyMutationInput, Prisma.ExpenseUncheckedUpdateManyInput>;
    where?: Prisma.ExpenseWhereInput;
    limit?: number;
};
export type ExpenseUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ExpenseSelect<ExtArgs> | null;
    omit?: Prisma.ExpenseOmit<ExtArgs> | null;
    include?: Prisma.ExpenseInclude<ExtArgs> | null;
    where: Prisma.ExpenseWhereUniqueInput;
    create: Prisma.XOR<Prisma.ExpenseCreateInput, Prisma.ExpenseUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ExpenseUpdateInput, Prisma.ExpenseUncheckedUpdateInput>;
};
export type ExpenseDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ExpenseSelect<ExtArgs> | null;
    omit?: Prisma.ExpenseOmit<ExtArgs> | null;
    include?: Prisma.ExpenseInclude<ExtArgs> | null;
    where: Prisma.ExpenseWhereUniqueInput;
};
export type ExpenseDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ExpenseWhereInput;
    limit?: number;
};
export type Expense$splitsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ExpenseDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ExpenseSelect<ExtArgs> | null;
    omit?: Prisma.ExpenseOmit<ExtArgs> | null;
    include?: Prisma.ExpenseInclude<ExtArgs> | null;
};
export {};
