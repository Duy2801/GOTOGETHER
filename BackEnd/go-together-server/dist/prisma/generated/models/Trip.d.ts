import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type TripModel = runtime.Types.Result.DefaultSelection<Prisma.$TripPayload>;
export type AggregateTrip = {
    _count: TripCountAggregateOutputType | null;
    _avg: TripAvgAggregateOutputType | null;
    _sum: TripSumAggregateOutputType | null;
    _min: TripMinAggregateOutputType | null;
    _max: TripMaxAggregateOutputType | null;
};
export type TripAvgAggregateOutputType = {
    totalBudget: runtime.Decimal | null;
};
export type TripSumAggregateOutputType = {
    totalBudget: runtime.Decimal | null;
};
export type TripMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    startDate: Date | null;
    endDate: Date | null;
    totalBudget: runtime.Decimal | null;
    status: $Enums.TripStatus | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    images: string | null;
};
export type TripMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    startDate: Date | null;
    endDate: Date | null;
    totalBudget: runtime.Decimal | null;
    status: $Enums.TripStatus | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    images: string | null;
};
export type TripCountAggregateOutputType = {
    id: number;
    name: number;
    startDate: number;
    endDate: number;
    totalBudget: number;
    status: number;
    createdAt: number;
    updatedAt: number;
    images: number;
    _all: number;
};
export type TripAvgAggregateInputType = {
    totalBudget?: true;
};
export type TripSumAggregateInputType = {
    totalBudget?: true;
};
export type TripMinAggregateInputType = {
    id?: true;
    name?: true;
    startDate?: true;
    endDate?: true;
    totalBudget?: true;
    status?: true;
    createdAt?: true;
    updatedAt?: true;
    images?: true;
};
export type TripMaxAggregateInputType = {
    id?: true;
    name?: true;
    startDate?: true;
    endDate?: true;
    totalBudget?: true;
    status?: true;
    createdAt?: true;
    updatedAt?: true;
    images?: true;
};
export type TripCountAggregateInputType = {
    id?: true;
    name?: true;
    startDate?: true;
    endDate?: true;
    totalBudget?: true;
    status?: true;
    createdAt?: true;
    updatedAt?: true;
    images?: true;
    _all?: true;
};
export type TripAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TripWhereInput;
    orderBy?: Prisma.TripOrderByWithRelationInput | Prisma.TripOrderByWithRelationInput[];
    cursor?: Prisma.TripWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | TripCountAggregateInputType;
    _avg?: TripAvgAggregateInputType;
    _sum?: TripSumAggregateInputType;
    _min?: TripMinAggregateInputType;
    _max?: TripMaxAggregateInputType;
};
export type GetTripAggregateType<T extends TripAggregateArgs> = {
    [P in keyof T & keyof AggregateTrip]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateTrip[P]> : Prisma.GetScalarType<T[P], AggregateTrip[P]>;
};
export type TripGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TripWhereInput;
    orderBy?: Prisma.TripOrderByWithAggregationInput | Prisma.TripOrderByWithAggregationInput[];
    by: Prisma.TripScalarFieldEnum[] | Prisma.TripScalarFieldEnum;
    having?: Prisma.TripScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: TripCountAggregateInputType | true;
    _avg?: TripAvgAggregateInputType;
    _sum?: TripSumAggregateInputType;
    _min?: TripMinAggregateInputType;
    _max?: TripMaxAggregateInputType;
};
export type TripGroupByOutputType = {
    id: string;
    name: string;
    startDate: Date;
    endDate: Date;
    totalBudget: runtime.Decimal | null;
    status: $Enums.TripStatus;
    createdAt: Date;
    updatedAt: Date;
    images: string | null;
    _count: TripCountAggregateOutputType | null;
    _avg: TripAvgAggregateOutputType | null;
    _sum: TripSumAggregateOutputType | null;
    _min: TripMinAggregateOutputType | null;
    _max: TripMaxAggregateOutputType | null;
};
type GetTripGroupByPayload<T extends TripGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<TripGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof TripGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], TripGroupByOutputType[P]> : Prisma.GetScalarType<T[P], TripGroupByOutputType[P]>;
}>>;
export type TripWhereInput = {
    AND?: Prisma.TripWhereInput | Prisma.TripWhereInput[];
    OR?: Prisma.TripWhereInput[];
    NOT?: Prisma.TripWhereInput | Prisma.TripWhereInput[];
    id?: Prisma.StringFilter<"Trip"> | string;
    name?: Prisma.StringFilter<"Trip"> | string;
    startDate?: Prisma.DateTimeFilter<"Trip"> | Date | string;
    endDate?: Prisma.DateTimeFilter<"Trip"> | Date | string;
    totalBudget?: Prisma.DecimalNullableFilter<"Trip"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: Prisma.EnumTripStatusFilter<"Trip"> | $Enums.TripStatus;
    createdAt?: Prisma.DateTimeFilter<"Trip"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Trip"> | Date | string;
    images?: Prisma.StringNullableFilter<"Trip"> | string | null;
    budgets?: Prisma.BudgetListRelationFilter;
    expenses?: Prisma.ExpenseListRelationFilter;
    itineraries?: Prisma.ItineraryListRelationFilter;
    members?: Prisma.TripMemberListRelationFilter;
    celebrates?: Prisma.CelebrateListRelationFilter;
};
export type TripOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    startDate?: Prisma.SortOrder;
    endDate?: Prisma.SortOrder;
    totalBudget?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    images?: Prisma.SortOrderInput | Prisma.SortOrder;
    budgets?: Prisma.BudgetOrderByRelationAggregateInput;
    expenses?: Prisma.ExpenseOrderByRelationAggregateInput;
    itineraries?: Prisma.ItineraryOrderByRelationAggregateInput;
    members?: Prisma.TripMemberOrderByRelationAggregateInput;
    celebrates?: Prisma.CelebrateOrderByRelationAggregateInput;
    _relevance?: Prisma.TripOrderByRelevanceInput;
};
export type TripWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.TripWhereInput | Prisma.TripWhereInput[];
    OR?: Prisma.TripWhereInput[];
    NOT?: Prisma.TripWhereInput | Prisma.TripWhereInput[];
    name?: Prisma.StringFilter<"Trip"> | string;
    startDate?: Prisma.DateTimeFilter<"Trip"> | Date | string;
    endDate?: Prisma.DateTimeFilter<"Trip"> | Date | string;
    totalBudget?: Prisma.DecimalNullableFilter<"Trip"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: Prisma.EnumTripStatusFilter<"Trip"> | $Enums.TripStatus;
    createdAt?: Prisma.DateTimeFilter<"Trip"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Trip"> | Date | string;
    images?: Prisma.StringNullableFilter<"Trip"> | string | null;
    budgets?: Prisma.BudgetListRelationFilter;
    expenses?: Prisma.ExpenseListRelationFilter;
    itineraries?: Prisma.ItineraryListRelationFilter;
    members?: Prisma.TripMemberListRelationFilter;
    celebrates?: Prisma.CelebrateListRelationFilter;
}, "id">;
export type TripOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    startDate?: Prisma.SortOrder;
    endDate?: Prisma.SortOrder;
    totalBudget?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    images?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.TripCountOrderByAggregateInput;
    _avg?: Prisma.TripAvgOrderByAggregateInput;
    _max?: Prisma.TripMaxOrderByAggregateInput;
    _min?: Prisma.TripMinOrderByAggregateInput;
    _sum?: Prisma.TripSumOrderByAggregateInput;
};
export type TripScalarWhereWithAggregatesInput = {
    AND?: Prisma.TripScalarWhereWithAggregatesInput | Prisma.TripScalarWhereWithAggregatesInput[];
    OR?: Prisma.TripScalarWhereWithAggregatesInput[];
    NOT?: Prisma.TripScalarWhereWithAggregatesInput | Prisma.TripScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Trip"> | string;
    name?: Prisma.StringWithAggregatesFilter<"Trip"> | string;
    startDate?: Prisma.DateTimeWithAggregatesFilter<"Trip"> | Date | string;
    endDate?: Prisma.DateTimeWithAggregatesFilter<"Trip"> | Date | string;
    totalBudget?: Prisma.DecimalNullableWithAggregatesFilter<"Trip"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: Prisma.EnumTripStatusWithAggregatesFilter<"Trip"> | $Enums.TripStatus;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Trip"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Trip"> | Date | string;
    images?: Prisma.StringNullableWithAggregatesFilter<"Trip"> | string | null;
};
export type TripCreateInput = {
    id?: string;
    name: string;
    startDate: Date | string;
    endDate: Date | string;
    totalBudget?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: $Enums.TripStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    images?: string | null;
    budgets?: Prisma.BudgetCreateNestedManyWithoutTripInput;
    expenses?: Prisma.ExpenseCreateNestedManyWithoutTripInput;
    itineraries?: Prisma.ItineraryCreateNestedManyWithoutTripInput;
    members?: Prisma.TripMemberCreateNestedManyWithoutTripInput;
    celebrates?: Prisma.CelebrateCreateNestedManyWithoutTripInput;
};
export type TripUncheckedCreateInput = {
    id?: string;
    name: string;
    startDate: Date | string;
    endDate: Date | string;
    totalBudget?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: $Enums.TripStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    images?: string | null;
    budgets?: Prisma.BudgetUncheckedCreateNestedManyWithoutTripInput;
    expenses?: Prisma.ExpenseUncheckedCreateNestedManyWithoutTripInput;
    itineraries?: Prisma.ItineraryUncheckedCreateNestedManyWithoutTripInput;
    members?: Prisma.TripMemberUncheckedCreateNestedManyWithoutTripInput;
    celebrates?: Prisma.CelebrateUncheckedCreateNestedManyWithoutTripInput;
};
export type TripUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    startDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    totalBudget?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: Prisma.EnumTripStatusFieldUpdateOperationsInput | $Enums.TripStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    images?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    budgets?: Prisma.BudgetUpdateManyWithoutTripNestedInput;
    expenses?: Prisma.ExpenseUpdateManyWithoutTripNestedInput;
    itineraries?: Prisma.ItineraryUpdateManyWithoutTripNestedInput;
    members?: Prisma.TripMemberUpdateManyWithoutTripNestedInput;
    celebrates?: Prisma.CelebrateUpdateManyWithoutTripNestedInput;
};
export type TripUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    startDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    totalBudget?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: Prisma.EnumTripStatusFieldUpdateOperationsInput | $Enums.TripStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    images?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    budgets?: Prisma.BudgetUncheckedUpdateManyWithoutTripNestedInput;
    expenses?: Prisma.ExpenseUncheckedUpdateManyWithoutTripNestedInput;
    itineraries?: Prisma.ItineraryUncheckedUpdateManyWithoutTripNestedInput;
    members?: Prisma.TripMemberUncheckedUpdateManyWithoutTripNestedInput;
    celebrates?: Prisma.CelebrateUncheckedUpdateManyWithoutTripNestedInput;
};
export type TripCreateManyInput = {
    id?: string;
    name: string;
    startDate: Date | string;
    endDate: Date | string;
    totalBudget?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: $Enums.TripStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    images?: string | null;
};
export type TripUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    startDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    totalBudget?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: Prisma.EnumTripStatusFieldUpdateOperationsInput | $Enums.TripStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    images?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type TripUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    startDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    totalBudget?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: Prisma.EnumTripStatusFieldUpdateOperationsInput | $Enums.TripStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    images?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type TripOrderByRelevanceInput = {
    fields: Prisma.TripOrderByRelevanceFieldEnum | Prisma.TripOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type TripCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    startDate?: Prisma.SortOrder;
    endDate?: Prisma.SortOrder;
    totalBudget?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    images?: Prisma.SortOrder;
};
export type TripAvgOrderByAggregateInput = {
    totalBudget?: Prisma.SortOrder;
};
export type TripMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    startDate?: Prisma.SortOrder;
    endDate?: Prisma.SortOrder;
    totalBudget?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    images?: Prisma.SortOrder;
};
export type TripMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    startDate?: Prisma.SortOrder;
    endDate?: Prisma.SortOrder;
    totalBudget?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    images?: Prisma.SortOrder;
};
export type TripSumOrderByAggregateInput = {
    totalBudget?: Prisma.SortOrder;
};
export type TripScalarRelationFilter = {
    is?: Prisma.TripWhereInput;
    isNot?: Prisma.TripWhereInput;
};
export type NullableDecimalFieldUpdateOperationsInput = {
    set?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    increment?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    decrement?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    multiply?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    divide?: runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type EnumTripStatusFieldUpdateOperationsInput = {
    set?: $Enums.TripStatus;
};
export type TripCreateNestedOneWithoutMembersInput = {
    create?: Prisma.XOR<Prisma.TripCreateWithoutMembersInput, Prisma.TripUncheckedCreateWithoutMembersInput>;
    connectOrCreate?: Prisma.TripCreateOrConnectWithoutMembersInput;
    connect?: Prisma.TripWhereUniqueInput;
};
export type TripUpdateOneRequiredWithoutMembersNestedInput = {
    create?: Prisma.XOR<Prisma.TripCreateWithoutMembersInput, Prisma.TripUncheckedCreateWithoutMembersInput>;
    connectOrCreate?: Prisma.TripCreateOrConnectWithoutMembersInput;
    upsert?: Prisma.TripUpsertWithoutMembersInput;
    connect?: Prisma.TripWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.TripUpdateToOneWithWhereWithoutMembersInput, Prisma.TripUpdateWithoutMembersInput>, Prisma.TripUncheckedUpdateWithoutMembersInput>;
};
export type TripCreateNestedOneWithoutExpensesInput = {
    create?: Prisma.XOR<Prisma.TripCreateWithoutExpensesInput, Prisma.TripUncheckedCreateWithoutExpensesInput>;
    connectOrCreate?: Prisma.TripCreateOrConnectWithoutExpensesInput;
    connect?: Prisma.TripWhereUniqueInput;
};
export type TripUpdateOneRequiredWithoutExpensesNestedInput = {
    create?: Prisma.XOR<Prisma.TripCreateWithoutExpensesInput, Prisma.TripUncheckedCreateWithoutExpensesInput>;
    connectOrCreate?: Prisma.TripCreateOrConnectWithoutExpensesInput;
    upsert?: Prisma.TripUpsertWithoutExpensesInput;
    connect?: Prisma.TripWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.TripUpdateToOneWithWhereWithoutExpensesInput, Prisma.TripUpdateWithoutExpensesInput>, Prisma.TripUncheckedUpdateWithoutExpensesInput>;
};
export type TripCreateNestedOneWithoutBudgetsInput = {
    create?: Prisma.XOR<Prisma.TripCreateWithoutBudgetsInput, Prisma.TripUncheckedCreateWithoutBudgetsInput>;
    connectOrCreate?: Prisma.TripCreateOrConnectWithoutBudgetsInput;
    connect?: Prisma.TripWhereUniqueInput;
};
export type TripUpdateOneRequiredWithoutBudgetsNestedInput = {
    create?: Prisma.XOR<Prisma.TripCreateWithoutBudgetsInput, Prisma.TripUncheckedCreateWithoutBudgetsInput>;
    connectOrCreate?: Prisma.TripCreateOrConnectWithoutBudgetsInput;
    upsert?: Prisma.TripUpsertWithoutBudgetsInput;
    connect?: Prisma.TripWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.TripUpdateToOneWithWhereWithoutBudgetsInput, Prisma.TripUpdateWithoutBudgetsInput>, Prisma.TripUncheckedUpdateWithoutBudgetsInput>;
};
export type TripCreateNestedOneWithoutItinerariesInput = {
    create?: Prisma.XOR<Prisma.TripCreateWithoutItinerariesInput, Prisma.TripUncheckedCreateWithoutItinerariesInput>;
    connectOrCreate?: Prisma.TripCreateOrConnectWithoutItinerariesInput;
    connect?: Prisma.TripWhereUniqueInput;
};
export type TripUpdateOneRequiredWithoutItinerariesNestedInput = {
    create?: Prisma.XOR<Prisma.TripCreateWithoutItinerariesInput, Prisma.TripUncheckedCreateWithoutItinerariesInput>;
    connectOrCreate?: Prisma.TripCreateOrConnectWithoutItinerariesInput;
    upsert?: Prisma.TripUpsertWithoutItinerariesInput;
    connect?: Prisma.TripWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.TripUpdateToOneWithWhereWithoutItinerariesInput, Prisma.TripUpdateWithoutItinerariesInput>, Prisma.TripUncheckedUpdateWithoutItinerariesInput>;
};
export type TripCreateNestedOneWithoutCelebratesInput = {
    create?: Prisma.XOR<Prisma.TripCreateWithoutCelebratesInput, Prisma.TripUncheckedCreateWithoutCelebratesInput>;
    connectOrCreate?: Prisma.TripCreateOrConnectWithoutCelebratesInput;
    connect?: Prisma.TripWhereUniqueInput;
};
export type TripUpdateOneRequiredWithoutCelebratesNestedInput = {
    create?: Prisma.XOR<Prisma.TripCreateWithoutCelebratesInput, Prisma.TripUncheckedCreateWithoutCelebratesInput>;
    connectOrCreate?: Prisma.TripCreateOrConnectWithoutCelebratesInput;
    upsert?: Prisma.TripUpsertWithoutCelebratesInput;
    connect?: Prisma.TripWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.TripUpdateToOneWithWhereWithoutCelebratesInput, Prisma.TripUpdateWithoutCelebratesInput>, Prisma.TripUncheckedUpdateWithoutCelebratesInput>;
};
export type TripCreateWithoutMembersInput = {
    id?: string;
    name: string;
    startDate: Date | string;
    endDate: Date | string;
    totalBudget?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: $Enums.TripStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    images?: string | null;
    budgets?: Prisma.BudgetCreateNestedManyWithoutTripInput;
    expenses?: Prisma.ExpenseCreateNestedManyWithoutTripInput;
    itineraries?: Prisma.ItineraryCreateNestedManyWithoutTripInput;
    celebrates?: Prisma.CelebrateCreateNestedManyWithoutTripInput;
};
export type TripUncheckedCreateWithoutMembersInput = {
    id?: string;
    name: string;
    startDate: Date | string;
    endDate: Date | string;
    totalBudget?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: $Enums.TripStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    images?: string | null;
    budgets?: Prisma.BudgetUncheckedCreateNestedManyWithoutTripInput;
    expenses?: Prisma.ExpenseUncheckedCreateNestedManyWithoutTripInput;
    itineraries?: Prisma.ItineraryUncheckedCreateNestedManyWithoutTripInput;
    celebrates?: Prisma.CelebrateUncheckedCreateNestedManyWithoutTripInput;
};
export type TripCreateOrConnectWithoutMembersInput = {
    where: Prisma.TripWhereUniqueInput;
    create: Prisma.XOR<Prisma.TripCreateWithoutMembersInput, Prisma.TripUncheckedCreateWithoutMembersInput>;
};
export type TripUpsertWithoutMembersInput = {
    update: Prisma.XOR<Prisma.TripUpdateWithoutMembersInput, Prisma.TripUncheckedUpdateWithoutMembersInput>;
    create: Prisma.XOR<Prisma.TripCreateWithoutMembersInput, Prisma.TripUncheckedCreateWithoutMembersInput>;
    where?: Prisma.TripWhereInput;
};
export type TripUpdateToOneWithWhereWithoutMembersInput = {
    where?: Prisma.TripWhereInput;
    data: Prisma.XOR<Prisma.TripUpdateWithoutMembersInput, Prisma.TripUncheckedUpdateWithoutMembersInput>;
};
export type TripUpdateWithoutMembersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    startDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    totalBudget?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: Prisma.EnumTripStatusFieldUpdateOperationsInput | $Enums.TripStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    images?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    budgets?: Prisma.BudgetUpdateManyWithoutTripNestedInput;
    expenses?: Prisma.ExpenseUpdateManyWithoutTripNestedInput;
    itineraries?: Prisma.ItineraryUpdateManyWithoutTripNestedInput;
    celebrates?: Prisma.CelebrateUpdateManyWithoutTripNestedInput;
};
export type TripUncheckedUpdateWithoutMembersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    startDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    totalBudget?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: Prisma.EnumTripStatusFieldUpdateOperationsInput | $Enums.TripStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    images?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    budgets?: Prisma.BudgetUncheckedUpdateManyWithoutTripNestedInput;
    expenses?: Prisma.ExpenseUncheckedUpdateManyWithoutTripNestedInput;
    itineraries?: Prisma.ItineraryUncheckedUpdateManyWithoutTripNestedInput;
    celebrates?: Prisma.CelebrateUncheckedUpdateManyWithoutTripNestedInput;
};
export type TripCreateWithoutExpensesInput = {
    id?: string;
    name: string;
    startDate: Date | string;
    endDate: Date | string;
    totalBudget?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: $Enums.TripStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    images?: string | null;
    budgets?: Prisma.BudgetCreateNestedManyWithoutTripInput;
    itineraries?: Prisma.ItineraryCreateNestedManyWithoutTripInput;
    members?: Prisma.TripMemberCreateNestedManyWithoutTripInput;
    celebrates?: Prisma.CelebrateCreateNestedManyWithoutTripInput;
};
export type TripUncheckedCreateWithoutExpensesInput = {
    id?: string;
    name: string;
    startDate: Date | string;
    endDate: Date | string;
    totalBudget?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: $Enums.TripStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    images?: string | null;
    budgets?: Prisma.BudgetUncheckedCreateNestedManyWithoutTripInput;
    itineraries?: Prisma.ItineraryUncheckedCreateNestedManyWithoutTripInput;
    members?: Prisma.TripMemberUncheckedCreateNestedManyWithoutTripInput;
    celebrates?: Prisma.CelebrateUncheckedCreateNestedManyWithoutTripInput;
};
export type TripCreateOrConnectWithoutExpensesInput = {
    where: Prisma.TripWhereUniqueInput;
    create: Prisma.XOR<Prisma.TripCreateWithoutExpensesInput, Prisma.TripUncheckedCreateWithoutExpensesInput>;
};
export type TripUpsertWithoutExpensesInput = {
    update: Prisma.XOR<Prisma.TripUpdateWithoutExpensesInput, Prisma.TripUncheckedUpdateWithoutExpensesInput>;
    create: Prisma.XOR<Prisma.TripCreateWithoutExpensesInput, Prisma.TripUncheckedCreateWithoutExpensesInput>;
    where?: Prisma.TripWhereInput;
};
export type TripUpdateToOneWithWhereWithoutExpensesInput = {
    where?: Prisma.TripWhereInput;
    data: Prisma.XOR<Prisma.TripUpdateWithoutExpensesInput, Prisma.TripUncheckedUpdateWithoutExpensesInput>;
};
export type TripUpdateWithoutExpensesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    startDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    totalBudget?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: Prisma.EnumTripStatusFieldUpdateOperationsInput | $Enums.TripStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    images?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    budgets?: Prisma.BudgetUpdateManyWithoutTripNestedInput;
    itineraries?: Prisma.ItineraryUpdateManyWithoutTripNestedInput;
    members?: Prisma.TripMemberUpdateManyWithoutTripNestedInput;
    celebrates?: Prisma.CelebrateUpdateManyWithoutTripNestedInput;
};
export type TripUncheckedUpdateWithoutExpensesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    startDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    totalBudget?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: Prisma.EnumTripStatusFieldUpdateOperationsInput | $Enums.TripStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    images?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    budgets?: Prisma.BudgetUncheckedUpdateManyWithoutTripNestedInput;
    itineraries?: Prisma.ItineraryUncheckedUpdateManyWithoutTripNestedInput;
    members?: Prisma.TripMemberUncheckedUpdateManyWithoutTripNestedInput;
    celebrates?: Prisma.CelebrateUncheckedUpdateManyWithoutTripNestedInput;
};
export type TripCreateWithoutBudgetsInput = {
    id?: string;
    name: string;
    startDate: Date | string;
    endDate: Date | string;
    totalBudget?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: $Enums.TripStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    images?: string | null;
    expenses?: Prisma.ExpenseCreateNestedManyWithoutTripInput;
    itineraries?: Prisma.ItineraryCreateNestedManyWithoutTripInput;
    members?: Prisma.TripMemberCreateNestedManyWithoutTripInput;
    celebrates?: Prisma.CelebrateCreateNestedManyWithoutTripInput;
};
export type TripUncheckedCreateWithoutBudgetsInput = {
    id?: string;
    name: string;
    startDate: Date | string;
    endDate: Date | string;
    totalBudget?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: $Enums.TripStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    images?: string | null;
    expenses?: Prisma.ExpenseUncheckedCreateNestedManyWithoutTripInput;
    itineraries?: Prisma.ItineraryUncheckedCreateNestedManyWithoutTripInput;
    members?: Prisma.TripMemberUncheckedCreateNestedManyWithoutTripInput;
    celebrates?: Prisma.CelebrateUncheckedCreateNestedManyWithoutTripInput;
};
export type TripCreateOrConnectWithoutBudgetsInput = {
    where: Prisma.TripWhereUniqueInput;
    create: Prisma.XOR<Prisma.TripCreateWithoutBudgetsInput, Prisma.TripUncheckedCreateWithoutBudgetsInput>;
};
export type TripUpsertWithoutBudgetsInput = {
    update: Prisma.XOR<Prisma.TripUpdateWithoutBudgetsInput, Prisma.TripUncheckedUpdateWithoutBudgetsInput>;
    create: Prisma.XOR<Prisma.TripCreateWithoutBudgetsInput, Prisma.TripUncheckedCreateWithoutBudgetsInput>;
    where?: Prisma.TripWhereInput;
};
export type TripUpdateToOneWithWhereWithoutBudgetsInput = {
    where?: Prisma.TripWhereInput;
    data: Prisma.XOR<Prisma.TripUpdateWithoutBudgetsInput, Prisma.TripUncheckedUpdateWithoutBudgetsInput>;
};
export type TripUpdateWithoutBudgetsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    startDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    totalBudget?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: Prisma.EnumTripStatusFieldUpdateOperationsInput | $Enums.TripStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    images?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    expenses?: Prisma.ExpenseUpdateManyWithoutTripNestedInput;
    itineraries?: Prisma.ItineraryUpdateManyWithoutTripNestedInput;
    members?: Prisma.TripMemberUpdateManyWithoutTripNestedInput;
    celebrates?: Prisma.CelebrateUpdateManyWithoutTripNestedInput;
};
export type TripUncheckedUpdateWithoutBudgetsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    startDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    totalBudget?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: Prisma.EnumTripStatusFieldUpdateOperationsInput | $Enums.TripStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    images?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    expenses?: Prisma.ExpenseUncheckedUpdateManyWithoutTripNestedInput;
    itineraries?: Prisma.ItineraryUncheckedUpdateManyWithoutTripNestedInput;
    members?: Prisma.TripMemberUncheckedUpdateManyWithoutTripNestedInput;
    celebrates?: Prisma.CelebrateUncheckedUpdateManyWithoutTripNestedInput;
};
export type TripCreateWithoutItinerariesInput = {
    id?: string;
    name: string;
    startDate: Date | string;
    endDate: Date | string;
    totalBudget?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: $Enums.TripStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    images?: string | null;
    budgets?: Prisma.BudgetCreateNestedManyWithoutTripInput;
    expenses?: Prisma.ExpenseCreateNestedManyWithoutTripInput;
    members?: Prisma.TripMemberCreateNestedManyWithoutTripInput;
    celebrates?: Prisma.CelebrateCreateNestedManyWithoutTripInput;
};
export type TripUncheckedCreateWithoutItinerariesInput = {
    id?: string;
    name: string;
    startDate: Date | string;
    endDate: Date | string;
    totalBudget?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: $Enums.TripStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    images?: string | null;
    budgets?: Prisma.BudgetUncheckedCreateNestedManyWithoutTripInput;
    expenses?: Prisma.ExpenseUncheckedCreateNestedManyWithoutTripInput;
    members?: Prisma.TripMemberUncheckedCreateNestedManyWithoutTripInput;
    celebrates?: Prisma.CelebrateUncheckedCreateNestedManyWithoutTripInput;
};
export type TripCreateOrConnectWithoutItinerariesInput = {
    where: Prisma.TripWhereUniqueInput;
    create: Prisma.XOR<Prisma.TripCreateWithoutItinerariesInput, Prisma.TripUncheckedCreateWithoutItinerariesInput>;
};
export type TripUpsertWithoutItinerariesInput = {
    update: Prisma.XOR<Prisma.TripUpdateWithoutItinerariesInput, Prisma.TripUncheckedUpdateWithoutItinerariesInput>;
    create: Prisma.XOR<Prisma.TripCreateWithoutItinerariesInput, Prisma.TripUncheckedCreateWithoutItinerariesInput>;
    where?: Prisma.TripWhereInput;
};
export type TripUpdateToOneWithWhereWithoutItinerariesInput = {
    where?: Prisma.TripWhereInput;
    data: Prisma.XOR<Prisma.TripUpdateWithoutItinerariesInput, Prisma.TripUncheckedUpdateWithoutItinerariesInput>;
};
export type TripUpdateWithoutItinerariesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    startDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    totalBudget?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: Prisma.EnumTripStatusFieldUpdateOperationsInput | $Enums.TripStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    images?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    budgets?: Prisma.BudgetUpdateManyWithoutTripNestedInput;
    expenses?: Prisma.ExpenseUpdateManyWithoutTripNestedInput;
    members?: Prisma.TripMemberUpdateManyWithoutTripNestedInput;
    celebrates?: Prisma.CelebrateUpdateManyWithoutTripNestedInput;
};
export type TripUncheckedUpdateWithoutItinerariesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    startDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    totalBudget?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: Prisma.EnumTripStatusFieldUpdateOperationsInput | $Enums.TripStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    images?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    budgets?: Prisma.BudgetUncheckedUpdateManyWithoutTripNestedInput;
    expenses?: Prisma.ExpenseUncheckedUpdateManyWithoutTripNestedInput;
    members?: Prisma.TripMemberUncheckedUpdateManyWithoutTripNestedInput;
    celebrates?: Prisma.CelebrateUncheckedUpdateManyWithoutTripNestedInput;
};
export type TripCreateWithoutCelebratesInput = {
    id?: string;
    name: string;
    startDate: Date | string;
    endDate: Date | string;
    totalBudget?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: $Enums.TripStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    images?: string | null;
    budgets?: Prisma.BudgetCreateNestedManyWithoutTripInput;
    expenses?: Prisma.ExpenseCreateNestedManyWithoutTripInput;
    itineraries?: Prisma.ItineraryCreateNestedManyWithoutTripInput;
    members?: Prisma.TripMemberCreateNestedManyWithoutTripInput;
};
export type TripUncheckedCreateWithoutCelebratesInput = {
    id?: string;
    name: string;
    startDate: Date | string;
    endDate: Date | string;
    totalBudget?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: $Enums.TripStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    images?: string | null;
    budgets?: Prisma.BudgetUncheckedCreateNestedManyWithoutTripInput;
    expenses?: Prisma.ExpenseUncheckedCreateNestedManyWithoutTripInput;
    itineraries?: Prisma.ItineraryUncheckedCreateNestedManyWithoutTripInput;
    members?: Prisma.TripMemberUncheckedCreateNestedManyWithoutTripInput;
};
export type TripCreateOrConnectWithoutCelebratesInput = {
    where: Prisma.TripWhereUniqueInput;
    create: Prisma.XOR<Prisma.TripCreateWithoutCelebratesInput, Prisma.TripUncheckedCreateWithoutCelebratesInput>;
};
export type TripUpsertWithoutCelebratesInput = {
    update: Prisma.XOR<Prisma.TripUpdateWithoutCelebratesInput, Prisma.TripUncheckedUpdateWithoutCelebratesInput>;
    create: Prisma.XOR<Prisma.TripCreateWithoutCelebratesInput, Prisma.TripUncheckedCreateWithoutCelebratesInput>;
    where?: Prisma.TripWhereInput;
};
export type TripUpdateToOneWithWhereWithoutCelebratesInput = {
    where?: Prisma.TripWhereInput;
    data: Prisma.XOR<Prisma.TripUpdateWithoutCelebratesInput, Prisma.TripUncheckedUpdateWithoutCelebratesInput>;
};
export type TripUpdateWithoutCelebratesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    startDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    totalBudget?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: Prisma.EnumTripStatusFieldUpdateOperationsInput | $Enums.TripStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    images?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    budgets?: Prisma.BudgetUpdateManyWithoutTripNestedInput;
    expenses?: Prisma.ExpenseUpdateManyWithoutTripNestedInput;
    itineraries?: Prisma.ItineraryUpdateManyWithoutTripNestedInput;
    members?: Prisma.TripMemberUpdateManyWithoutTripNestedInput;
};
export type TripUncheckedUpdateWithoutCelebratesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    startDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    totalBudget?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: Prisma.EnumTripStatusFieldUpdateOperationsInput | $Enums.TripStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    images?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    budgets?: Prisma.BudgetUncheckedUpdateManyWithoutTripNestedInput;
    expenses?: Prisma.ExpenseUncheckedUpdateManyWithoutTripNestedInput;
    itineraries?: Prisma.ItineraryUncheckedUpdateManyWithoutTripNestedInput;
    members?: Prisma.TripMemberUncheckedUpdateManyWithoutTripNestedInput;
};
export type TripCountOutputType = {
    budgets: number;
    expenses: number;
    itineraries: number;
    members: number;
    celebrates: number;
};
export type TripCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    budgets?: boolean | TripCountOutputTypeCountBudgetsArgs;
    expenses?: boolean | TripCountOutputTypeCountExpensesArgs;
    itineraries?: boolean | TripCountOutputTypeCountItinerariesArgs;
    members?: boolean | TripCountOutputTypeCountMembersArgs;
    celebrates?: boolean | TripCountOutputTypeCountCelebratesArgs;
};
export type TripCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TripCountOutputTypeSelect<ExtArgs> | null;
};
export type TripCountOutputTypeCountBudgetsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BudgetWhereInput;
};
export type TripCountOutputTypeCountExpensesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ExpenseWhereInput;
};
export type TripCountOutputTypeCountItinerariesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ItineraryWhereInput;
};
export type TripCountOutputTypeCountMembersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TripMemberWhereInput;
};
export type TripCountOutputTypeCountCelebratesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CelebrateWhereInput;
};
export type TripSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    startDate?: boolean;
    endDate?: boolean;
    totalBudget?: boolean;
    status?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    images?: boolean;
    budgets?: boolean | Prisma.Trip$budgetsArgs<ExtArgs>;
    expenses?: boolean | Prisma.Trip$expensesArgs<ExtArgs>;
    itineraries?: boolean | Prisma.Trip$itinerariesArgs<ExtArgs>;
    members?: boolean | Prisma.Trip$membersArgs<ExtArgs>;
    celebrates?: boolean | Prisma.Trip$celebratesArgs<ExtArgs>;
    _count?: boolean | Prisma.TripCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["trip"]>;
export type TripSelectScalar = {
    id?: boolean;
    name?: boolean;
    startDate?: boolean;
    endDate?: boolean;
    totalBudget?: boolean;
    status?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    images?: boolean;
};
export type TripOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "name" | "startDate" | "endDate" | "totalBudget" | "status" | "createdAt" | "updatedAt" | "images", ExtArgs["result"]["trip"]>;
export type TripInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    budgets?: boolean | Prisma.Trip$budgetsArgs<ExtArgs>;
    expenses?: boolean | Prisma.Trip$expensesArgs<ExtArgs>;
    itineraries?: boolean | Prisma.Trip$itinerariesArgs<ExtArgs>;
    members?: boolean | Prisma.Trip$membersArgs<ExtArgs>;
    celebrates?: boolean | Prisma.Trip$celebratesArgs<ExtArgs>;
    _count?: boolean | Prisma.TripCountOutputTypeDefaultArgs<ExtArgs>;
};
export type $TripPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Trip";
    objects: {
        budgets: Prisma.$BudgetPayload<ExtArgs>[];
        expenses: Prisma.$ExpensePayload<ExtArgs>[];
        itineraries: Prisma.$ItineraryPayload<ExtArgs>[];
        members: Prisma.$TripMemberPayload<ExtArgs>[];
        celebrates: Prisma.$CelebratePayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        name: string;
        startDate: Date;
        endDate: Date;
        totalBudget: runtime.Decimal | null;
        status: $Enums.TripStatus;
        createdAt: Date;
        updatedAt: Date;
        images: string | null;
    }, ExtArgs["result"]["trip"]>;
    composites: {};
};
export type TripGetPayload<S extends boolean | null | undefined | TripDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$TripPayload, S>;
export type TripCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<TripFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: TripCountAggregateInputType | true;
};
export interface TripDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Trip'];
        meta: {
            name: 'Trip';
        };
    };
    findUnique<T extends TripFindUniqueArgs>(args: Prisma.SelectSubset<T, TripFindUniqueArgs<ExtArgs>>): Prisma.Prisma__TripClient<runtime.Types.Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends TripFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, TripFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__TripClient<runtime.Types.Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends TripFindFirstArgs>(args?: Prisma.SelectSubset<T, TripFindFirstArgs<ExtArgs>>): Prisma.Prisma__TripClient<runtime.Types.Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends TripFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, TripFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__TripClient<runtime.Types.Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends TripFindManyArgs>(args?: Prisma.SelectSubset<T, TripFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends TripCreateArgs>(args: Prisma.SelectSubset<T, TripCreateArgs<ExtArgs>>): Prisma.Prisma__TripClient<runtime.Types.Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends TripCreateManyArgs>(args?: Prisma.SelectSubset<T, TripCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    delete<T extends TripDeleteArgs>(args: Prisma.SelectSubset<T, TripDeleteArgs<ExtArgs>>): Prisma.Prisma__TripClient<runtime.Types.Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends TripUpdateArgs>(args: Prisma.SelectSubset<T, TripUpdateArgs<ExtArgs>>): Prisma.Prisma__TripClient<runtime.Types.Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends TripDeleteManyArgs>(args?: Prisma.SelectSubset<T, TripDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends TripUpdateManyArgs>(args: Prisma.SelectSubset<T, TripUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    upsert<T extends TripUpsertArgs>(args: Prisma.SelectSubset<T, TripUpsertArgs<ExtArgs>>): Prisma.Prisma__TripClient<runtime.Types.Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends TripCountArgs>(args?: Prisma.Subset<T, TripCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], TripCountAggregateOutputType> : number>;
    aggregate<T extends TripAggregateArgs>(args: Prisma.Subset<T, TripAggregateArgs>): Prisma.PrismaPromise<GetTripAggregateType<T>>;
    groupBy<T extends TripGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: TripGroupByArgs['orderBy'];
    } : {
        orderBy?: TripGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, TripGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTripGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: TripFieldRefs;
}
export interface Prisma__TripClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    budgets<T extends Prisma.Trip$budgetsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Trip$budgetsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BudgetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    expenses<T extends Prisma.Trip$expensesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Trip$expensesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    itineraries<T extends Prisma.Trip$itinerariesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Trip$itinerariesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ItineraryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    members<T extends Prisma.Trip$membersArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Trip$membersArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TripMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    celebrates<T extends Prisma.Trip$celebratesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Trip$celebratesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CelebratePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface TripFieldRefs {
    readonly id: Prisma.FieldRef<"Trip", 'String'>;
    readonly name: Prisma.FieldRef<"Trip", 'String'>;
    readonly startDate: Prisma.FieldRef<"Trip", 'DateTime'>;
    readonly endDate: Prisma.FieldRef<"Trip", 'DateTime'>;
    readonly totalBudget: Prisma.FieldRef<"Trip", 'Decimal'>;
    readonly status: Prisma.FieldRef<"Trip", 'TripStatus'>;
    readonly createdAt: Prisma.FieldRef<"Trip", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Trip", 'DateTime'>;
    readonly images: Prisma.FieldRef<"Trip", 'String'>;
}
export type TripFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TripSelect<ExtArgs> | null;
    omit?: Prisma.TripOmit<ExtArgs> | null;
    include?: Prisma.TripInclude<ExtArgs> | null;
    where: Prisma.TripWhereUniqueInput;
};
export type TripFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TripSelect<ExtArgs> | null;
    omit?: Prisma.TripOmit<ExtArgs> | null;
    include?: Prisma.TripInclude<ExtArgs> | null;
    where: Prisma.TripWhereUniqueInput;
};
export type TripFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TripSelect<ExtArgs> | null;
    omit?: Prisma.TripOmit<ExtArgs> | null;
    include?: Prisma.TripInclude<ExtArgs> | null;
    where?: Prisma.TripWhereInput;
    orderBy?: Prisma.TripOrderByWithRelationInput | Prisma.TripOrderByWithRelationInput[];
    cursor?: Prisma.TripWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TripScalarFieldEnum | Prisma.TripScalarFieldEnum[];
};
export type TripFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TripSelect<ExtArgs> | null;
    omit?: Prisma.TripOmit<ExtArgs> | null;
    include?: Prisma.TripInclude<ExtArgs> | null;
    where?: Prisma.TripWhereInput;
    orderBy?: Prisma.TripOrderByWithRelationInput | Prisma.TripOrderByWithRelationInput[];
    cursor?: Prisma.TripWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TripScalarFieldEnum | Prisma.TripScalarFieldEnum[];
};
export type TripFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TripSelect<ExtArgs> | null;
    omit?: Prisma.TripOmit<ExtArgs> | null;
    include?: Prisma.TripInclude<ExtArgs> | null;
    where?: Prisma.TripWhereInput;
    orderBy?: Prisma.TripOrderByWithRelationInput | Prisma.TripOrderByWithRelationInput[];
    cursor?: Prisma.TripWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TripScalarFieldEnum | Prisma.TripScalarFieldEnum[];
};
export type TripCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TripSelect<ExtArgs> | null;
    omit?: Prisma.TripOmit<ExtArgs> | null;
    include?: Prisma.TripInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TripCreateInput, Prisma.TripUncheckedCreateInput>;
};
export type TripCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.TripCreateManyInput | Prisma.TripCreateManyInput[];
    skipDuplicates?: boolean;
};
export type TripUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TripSelect<ExtArgs> | null;
    omit?: Prisma.TripOmit<ExtArgs> | null;
    include?: Prisma.TripInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TripUpdateInput, Prisma.TripUncheckedUpdateInput>;
    where: Prisma.TripWhereUniqueInput;
};
export type TripUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.TripUpdateManyMutationInput, Prisma.TripUncheckedUpdateManyInput>;
    where?: Prisma.TripWhereInput;
    limit?: number;
};
export type TripUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TripSelect<ExtArgs> | null;
    omit?: Prisma.TripOmit<ExtArgs> | null;
    include?: Prisma.TripInclude<ExtArgs> | null;
    where: Prisma.TripWhereUniqueInput;
    create: Prisma.XOR<Prisma.TripCreateInput, Prisma.TripUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.TripUpdateInput, Prisma.TripUncheckedUpdateInput>;
};
export type TripDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TripSelect<ExtArgs> | null;
    omit?: Prisma.TripOmit<ExtArgs> | null;
    include?: Prisma.TripInclude<ExtArgs> | null;
    where: Prisma.TripWhereUniqueInput;
};
export type TripDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TripWhereInput;
    limit?: number;
};
export type Trip$budgetsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BudgetSelect<ExtArgs> | null;
    omit?: Prisma.BudgetOmit<ExtArgs> | null;
    include?: Prisma.BudgetInclude<ExtArgs> | null;
    where?: Prisma.BudgetWhereInput;
    orderBy?: Prisma.BudgetOrderByWithRelationInput | Prisma.BudgetOrderByWithRelationInput[];
    cursor?: Prisma.BudgetWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BudgetScalarFieldEnum | Prisma.BudgetScalarFieldEnum[];
};
export type Trip$expensesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type Trip$itinerariesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ItinerarySelect<ExtArgs> | null;
    omit?: Prisma.ItineraryOmit<ExtArgs> | null;
    include?: Prisma.ItineraryInclude<ExtArgs> | null;
    where?: Prisma.ItineraryWhereInput;
    orderBy?: Prisma.ItineraryOrderByWithRelationInput | Prisma.ItineraryOrderByWithRelationInput[];
    cursor?: Prisma.ItineraryWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ItineraryScalarFieldEnum | Prisma.ItineraryScalarFieldEnum[];
};
export type Trip$membersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TripMemberSelect<ExtArgs> | null;
    omit?: Prisma.TripMemberOmit<ExtArgs> | null;
    include?: Prisma.TripMemberInclude<ExtArgs> | null;
    where?: Prisma.TripMemberWhereInput;
    orderBy?: Prisma.TripMemberOrderByWithRelationInput | Prisma.TripMemberOrderByWithRelationInput[];
    cursor?: Prisma.TripMemberWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TripMemberScalarFieldEnum | Prisma.TripMemberScalarFieldEnum[];
};
export type Trip$celebratesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CelebrateSelect<ExtArgs> | null;
    omit?: Prisma.CelebrateOmit<ExtArgs> | null;
    include?: Prisma.CelebrateInclude<ExtArgs> | null;
    where?: Prisma.CelebrateWhereInput;
    orderBy?: Prisma.CelebrateOrderByWithRelationInput | Prisma.CelebrateOrderByWithRelationInput[];
    cursor?: Prisma.CelebrateWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CelebrateScalarFieldEnum | Prisma.CelebrateScalarFieldEnum[];
};
export type TripDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TripSelect<ExtArgs> | null;
    omit?: Prisma.TripOmit<ExtArgs> | null;
    include?: Prisma.TripInclude<ExtArgs> | null;
};
export {};
