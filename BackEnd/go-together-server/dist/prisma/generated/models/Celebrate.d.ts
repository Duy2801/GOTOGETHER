import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type CelebrateModel = runtime.Types.Result.DefaultSelection<Prisma.$CelebratePayload>;
export type AggregateCelebrate = {
    _count: CelebrateCountAggregateOutputType | null;
    _min: CelebrateMinAggregateOutputType | null;
    _max: CelebrateMaxAggregateOutputType | null;
};
export type CelebrateMinAggregateOutputType = {
    id: string | null;
    tripId: string | null;
    userId: string | null;
    description: string | null;
    date: Date | null;
    createdAt: Date | null;
};
export type CelebrateMaxAggregateOutputType = {
    id: string | null;
    tripId: string | null;
    userId: string | null;
    description: string | null;
    date: Date | null;
    createdAt: Date | null;
};
export type CelebrateCountAggregateOutputType = {
    id: number;
    tripId: number;
    userId: number;
    description: number;
    date: number;
    createdAt: number;
    _all: number;
};
export type CelebrateMinAggregateInputType = {
    id?: true;
    tripId?: true;
    userId?: true;
    description?: true;
    date?: true;
    createdAt?: true;
};
export type CelebrateMaxAggregateInputType = {
    id?: true;
    tripId?: true;
    userId?: true;
    description?: true;
    date?: true;
    createdAt?: true;
};
export type CelebrateCountAggregateInputType = {
    id?: true;
    tripId?: true;
    userId?: true;
    description?: true;
    date?: true;
    createdAt?: true;
    _all?: true;
};
export type CelebrateAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CelebrateWhereInput;
    orderBy?: Prisma.CelebrateOrderByWithRelationInput | Prisma.CelebrateOrderByWithRelationInput[];
    cursor?: Prisma.CelebrateWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | CelebrateCountAggregateInputType;
    _min?: CelebrateMinAggregateInputType;
    _max?: CelebrateMaxAggregateInputType;
};
export type GetCelebrateAggregateType<T extends CelebrateAggregateArgs> = {
    [P in keyof T & keyof AggregateCelebrate]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateCelebrate[P]> : Prisma.GetScalarType<T[P], AggregateCelebrate[P]>;
};
export type CelebrateGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CelebrateWhereInput;
    orderBy?: Prisma.CelebrateOrderByWithAggregationInput | Prisma.CelebrateOrderByWithAggregationInput[];
    by: Prisma.CelebrateScalarFieldEnum[] | Prisma.CelebrateScalarFieldEnum;
    having?: Prisma.CelebrateScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CelebrateCountAggregateInputType | true;
    _min?: CelebrateMinAggregateInputType;
    _max?: CelebrateMaxAggregateInputType;
};
export type CelebrateGroupByOutputType = {
    id: string;
    tripId: string;
    userId: string;
    description: string | null;
    date: Date;
    createdAt: Date;
    _count: CelebrateCountAggregateOutputType | null;
    _min: CelebrateMinAggregateOutputType | null;
    _max: CelebrateMaxAggregateOutputType | null;
};
type GetCelebrateGroupByPayload<T extends CelebrateGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<CelebrateGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof CelebrateGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], CelebrateGroupByOutputType[P]> : Prisma.GetScalarType<T[P], CelebrateGroupByOutputType[P]>;
}>>;
export type CelebrateWhereInput = {
    AND?: Prisma.CelebrateWhereInput | Prisma.CelebrateWhereInput[];
    OR?: Prisma.CelebrateWhereInput[];
    NOT?: Prisma.CelebrateWhereInput | Prisma.CelebrateWhereInput[];
    id?: Prisma.StringFilter<"Celebrate"> | string;
    tripId?: Prisma.StringFilter<"Celebrate"> | string;
    userId?: Prisma.StringFilter<"Celebrate"> | string;
    description?: Prisma.StringNullableFilter<"Celebrate"> | string | null;
    date?: Prisma.DateTimeFilter<"Celebrate"> | Date | string;
    createdAt?: Prisma.DateTimeFilter<"Celebrate"> | Date | string;
    trip?: Prisma.XOR<Prisma.TripScalarRelationFilter, Prisma.TripWhereInput>;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    images?: Prisma.CelebrateImageListRelationFilter;
};
export type CelebrateOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    tripId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    date?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    trip?: Prisma.TripOrderByWithRelationInput;
    user?: Prisma.UserOrderByWithRelationInput;
    images?: Prisma.CelebrateImageOrderByRelationAggregateInput;
    _relevance?: Prisma.CelebrateOrderByRelevanceInput;
};
export type CelebrateWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.CelebrateWhereInput | Prisma.CelebrateWhereInput[];
    OR?: Prisma.CelebrateWhereInput[];
    NOT?: Prisma.CelebrateWhereInput | Prisma.CelebrateWhereInput[];
    tripId?: Prisma.StringFilter<"Celebrate"> | string;
    userId?: Prisma.StringFilter<"Celebrate"> | string;
    description?: Prisma.StringNullableFilter<"Celebrate"> | string | null;
    date?: Prisma.DateTimeFilter<"Celebrate"> | Date | string;
    createdAt?: Prisma.DateTimeFilter<"Celebrate"> | Date | string;
    trip?: Prisma.XOR<Prisma.TripScalarRelationFilter, Prisma.TripWhereInput>;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    images?: Prisma.CelebrateImageListRelationFilter;
}, "id">;
export type CelebrateOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    tripId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    date?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.CelebrateCountOrderByAggregateInput;
    _max?: Prisma.CelebrateMaxOrderByAggregateInput;
    _min?: Prisma.CelebrateMinOrderByAggregateInput;
};
export type CelebrateScalarWhereWithAggregatesInput = {
    AND?: Prisma.CelebrateScalarWhereWithAggregatesInput | Prisma.CelebrateScalarWhereWithAggregatesInput[];
    OR?: Prisma.CelebrateScalarWhereWithAggregatesInput[];
    NOT?: Prisma.CelebrateScalarWhereWithAggregatesInput | Prisma.CelebrateScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Celebrate"> | string;
    tripId?: Prisma.StringWithAggregatesFilter<"Celebrate"> | string;
    userId?: Prisma.StringWithAggregatesFilter<"Celebrate"> | string;
    description?: Prisma.StringNullableWithAggregatesFilter<"Celebrate"> | string | null;
    date?: Prisma.DateTimeWithAggregatesFilter<"Celebrate"> | Date | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Celebrate"> | Date | string;
};
export type CelebrateCreateInput = {
    id?: string;
    description?: string | null;
    date: Date | string;
    createdAt?: Date | string;
    trip: Prisma.TripCreateNestedOneWithoutCelebratesInput;
    user: Prisma.UserCreateNestedOneWithoutCelebratesInput;
    images?: Prisma.CelebrateImageCreateNestedManyWithoutCelebrateInput;
};
export type CelebrateUncheckedCreateInput = {
    id?: string;
    tripId: string;
    userId: string;
    description?: string | null;
    date: Date | string;
    createdAt?: Date | string;
    images?: Prisma.CelebrateImageUncheckedCreateNestedManyWithoutCelebrateInput;
};
export type CelebrateUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    trip?: Prisma.TripUpdateOneRequiredWithoutCelebratesNestedInput;
    user?: Prisma.UserUpdateOneRequiredWithoutCelebratesNestedInput;
    images?: Prisma.CelebrateImageUpdateManyWithoutCelebrateNestedInput;
};
export type CelebrateUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tripId?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    images?: Prisma.CelebrateImageUncheckedUpdateManyWithoutCelebrateNestedInput;
};
export type CelebrateCreateManyInput = {
    id?: string;
    tripId: string;
    userId: string;
    description?: string | null;
    date: Date | string;
    createdAt?: Date | string;
};
export type CelebrateUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CelebrateUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tripId?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CelebrateListRelationFilter = {
    every?: Prisma.CelebrateWhereInput;
    some?: Prisma.CelebrateWhereInput;
    none?: Prisma.CelebrateWhereInput;
};
export type CelebrateOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type CelebrateOrderByRelevanceInput = {
    fields: Prisma.CelebrateOrderByRelevanceFieldEnum | Prisma.CelebrateOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type CelebrateCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    tripId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type CelebrateMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    tripId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type CelebrateMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    tripId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type CelebrateScalarRelationFilter = {
    is?: Prisma.CelebrateWhereInput;
    isNot?: Prisma.CelebrateWhereInput;
};
export type CelebrateCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.CelebrateCreateWithoutUserInput, Prisma.CelebrateUncheckedCreateWithoutUserInput> | Prisma.CelebrateCreateWithoutUserInput[] | Prisma.CelebrateUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.CelebrateCreateOrConnectWithoutUserInput | Prisma.CelebrateCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.CelebrateCreateManyUserInputEnvelope;
    connect?: Prisma.CelebrateWhereUniqueInput | Prisma.CelebrateWhereUniqueInput[];
};
export type CelebrateUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.CelebrateCreateWithoutUserInput, Prisma.CelebrateUncheckedCreateWithoutUserInput> | Prisma.CelebrateCreateWithoutUserInput[] | Prisma.CelebrateUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.CelebrateCreateOrConnectWithoutUserInput | Prisma.CelebrateCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.CelebrateCreateManyUserInputEnvelope;
    connect?: Prisma.CelebrateWhereUniqueInput | Prisma.CelebrateWhereUniqueInput[];
};
export type CelebrateUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.CelebrateCreateWithoutUserInput, Prisma.CelebrateUncheckedCreateWithoutUserInput> | Prisma.CelebrateCreateWithoutUserInput[] | Prisma.CelebrateUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.CelebrateCreateOrConnectWithoutUserInput | Prisma.CelebrateCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.CelebrateUpsertWithWhereUniqueWithoutUserInput | Prisma.CelebrateUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.CelebrateCreateManyUserInputEnvelope;
    set?: Prisma.CelebrateWhereUniqueInput | Prisma.CelebrateWhereUniqueInput[];
    disconnect?: Prisma.CelebrateWhereUniqueInput | Prisma.CelebrateWhereUniqueInput[];
    delete?: Prisma.CelebrateWhereUniqueInput | Prisma.CelebrateWhereUniqueInput[];
    connect?: Prisma.CelebrateWhereUniqueInput | Prisma.CelebrateWhereUniqueInput[];
    update?: Prisma.CelebrateUpdateWithWhereUniqueWithoutUserInput | Prisma.CelebrateUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.CelebrateUpdateManyWithWhereWithoutUserInput | Prisma.CelebrateUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.CelebrateScalarWhereInput | Prisma.CelebrateScalarWhereInput[];
};
export type CelebrateUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.CelebrateCreateWithoutUserInput, Prisma.CelebrateUncheckedCreateWithoutUserInput> | Prisma.CelebrateCreateWithoutUserInput[] | Prisma.CelebrateUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.CelebrateCreateOrConnectWithoutUserInput | Prisma.CelebrateCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.CelebrateUpsertWithWhereUniqueWithoutUserInput | Prisma.CelebrateUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.CelebrateCreateManyUserInputEnvelope;
    set?: Prisma.CelebrateWhereUniqueInput | Prisma.CelebrateWhereUniqueInput[];
    disconnect?: Prisma.CelebrateWhereUniqueInput | Prisma.CelebrateWhereUniqueInput[];
    delete?: Prisma.CelebrateWhereUniqueInput | Prisma.CelebrateWhereUniqueInput[];
    connect?: Prisma.CelebrateWhereUniqueInput | Prisma.CelebrateWhereUniqueInput[];
    update?: Prisma.CelebrateUpdateWithWhereUniqueWithoutUserInput | Prisma.CelebrateUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.CelebrateUpdateManyWithWhereWithoutUserInput | Prisma.CelebrateUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.CelebrateScalarWhereInput | Prisma.CelebrateScalarWhereInput[];
};
export type CelebrateCreateNestedManyWithoutTripInput = {
    create?: Prisma.XOR<Prisma.CelebrateCreateWithoutTripInput, Prisma.CelebrateUncheckedCreateWithoutTripInput> | Prisma.CelebrateCreateWithoutTripInput[] | Prisma.CelebrateUncheckedCreateWithoutTripInput[];
    connectOrCreate?: Prisma.CelebrateCreateOrConnectWithoutTripInput | Prisma.CelebrateCreateOrConnectWithoutTripInput[];
    createMany?: Prisma.CelebrateCreateManyTripInputEnvelope;
    connect?: Prisma.CelebrateWhereUniqueInput | Prisma.CelebrateWhereUniqueInput[];
};
export type CelebrateUncheckedCreateNestedManyWithoutTripInput = {
    create?: Prisma.XOR<Prisma.CelebrateCreateWithoutTripInput, Prisma.CelebrateUncheckedCreateWithoutTripInput> | Prisma.CelebrateCreateWithoutTripInput[] | Prisma.CelebrateUncheckedCreateWithoutTripInput[];
    connectOrCreate?: Prisma.CelebrateCreateOrConnectWithoutTripInput | Prisma.CelebrateCreateOrConnectWithoutTripInput[];
    createMany?: Prisma.CelebrateCreateManyTripInputEnvelope;
    connect?: Prisma.CelebrateWhereUniqueInput | Prisma.CelebrateWhereUniqueInput[];
};
export type CelebrateUpdateManyWithoutTripNestedInput = {
    create?: Prisma.XOR<Prisma.CelebrateCreateWithoutTripInput, Prisma.CelebrateUncheckedCreateWithoutTripInput> | Prisma.CelebrateCreateWithoutTripInput[] | Prisma.CelebrateUncheckedCreateWithoutTripInput[];
    connectOrCreate?: Prisma.CelebrateCreateOrConnectWithoutTripInput | Prisma.CelebrateCreateOrConnectWithoutTripInput[];
    upsert?: Prisma.CelebrateUpsertWithWhereUniqueWithoutTripInput | Prisma.CelebrateUpsertWithWhereUniqueWithoutTripInput[];
    createMany?: Prisma.CelebrateCreateManyTripInputEnvelope;
    set?: Prisma.CelebrateWhereUniqueInput | Prisma.CelebrateWhereUniqueInput[];
    disconnect?: Prisma.CelebrateWhereUniqueInput | Prisma.CelebrateWhereUniqueInput[];
    delete?: Prisma.CelebrateWhereUniqueInput | Prisma.CelebrateWhereUniqueInput[];
    connect?: Prisma.CelebrateWhereUniqueInput | Prisma.CelebrateWhereUniqueInput[];
    update?: Prisma.CelebrateUpdateWithWhereUniqueWithoutTripInput | Prisma.CelebrateUpdateWithWhereUniqueWithoutTripInput[];
    updateMany?: Prisma.CelebrateUpdateManyWithWhereWithoutTripInput | Prisma.CelebrateUpdateManyWithWhereWithoutTripInput[];
    deleteMany?: Prisma.CelebrateScalarWhereInput | Prisma.CelebrateScalarWhereInput[];
};
export type CelebrateUncheckedUpdateManyWithoutTripNestedInput = {
    create?: Prisma.XOR<Prisma.CelebrateCreateWithoutTripInput, Prisma.CelebrateUncheckedCreateWithoutTripInput> | Prisma.CelebrateCreateWithoutTripInput[] | Prisma.CelebrateUncheckedCreateWithoutTripInput[];
    connectOrCreate?: Prisma.CelebrateCreateOrConnectWithoutTripInput | Prisma.CelebrateCreateOrConnectWithoutTripInput[];
    upsert?: Prisma.CelebrateUpsertWithWhereUniqueWithoutTripInput | Prisma.CelebrateUpsertWithWhereUniqueWithoutTripInput[];
    createMany?: Prisma.CelebrateCreateManyTripInputEnvelope;
    set?: Prisma.CelebrateWhereUniqueInput | Prisma.CelebrateWhereUniqueInput[];
    disconnect?: Prisma.CelebrateWhereUniqueInput | Prisma.CelebrateWhereUniqueInput[];
    delete?: Prisma.CelebrateWhereUniqueInput | Prisma.CelebrateWhereUniqueInput[];
    connect?: Prisma.CelebrateWhereUniqueInput | Prisma.CelebrateWhereUniqueInput[];
    update?: Prisma.CelebrateUpdateWithWhereUniqueWithoutTripInput | Prisma.CelebrateUpdateWithWhereUniqueWithoutTripInput[];
    updateMany?: Prisma.CelebrateUpdateManyWithWhereWithoutTripInput | Prisma.CelebrateUpdateManyWithWhereWithoutTripInput[];
    deleteMany?: Prisma.CelebrateScalarWhereInput | Prisma.CelebrateScalarWhereInput[];
};
export type CelebrateCreateNestedOneWithoutImagesInput = {
    create?: Prisma.XOR<Prisma.CelebrateCreateWithoutImagesInput, Prisma.CelebrateUncheckedCreateWithoutImagesInput>;
    connectOrCreate?: Prisma.CelebrateCreateOrConnectWithoutImagesInput;
    connect?: Prisma.CelebrateWhereUniqueInput;
};
export type CelebrateUpdateOneRequiredWithoutImagesNestedInput = {
    create?: Prisma.XOR<Prisma.CelebrateCreateWithoutImagesInput, Prisma.CelebrateUncheckedCreateWithoutImagesInput>;
    connectOrCreate?: Prisma.CelebrateCreateOrConnectWithoutImagesInput;
    upsert?: Prisma.CelebrateUpsertWithoutImagesInput;
    connect?: Prisma.CelebrateWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.CelebrateUpdateToOneWithWhereWithoutImagesInput, Prisma.CelebrateUpdateWithoutImagesInput>, Prisma.CelebrateUncheckedUpdateWithoutImagesInput>;
};
export type CelebrateCreateWithoutUserInput = {
    id?: string;
    description?: string | null;
    date: Date | string;
    createdAt?: Date | string;
    trip: Prisma.TripCreateNestedOneWithoutCelebratesInput;
    images?: Prisma.CelebrateImageCreateNestedManyWithoutCelebrateInput;
};
export type CelebrateUncheckedCreateWithoutUserInput = {
    id?: string;
    tripId: string;
    description?: string | null;
    date: Date | string;
    createdAt?: Date | string;
    images?: Prisma.CelebrateImageUncheckedCreateNestedManyWithoutCelebrateInput;
};
export type CelebrateCreateOrConnectWithoutUserInput = {
    where: Prisma.CelebrateWhereUniqueInput;
    create: Prisma.XOR<Prisma.CelebrateCreateWithoutUserInput, Prisma.CelebrateUncheckedCreateWithoutUserInput>;
};
export type CelebrateCreateManyUserInputEnvelope = {
    data: Prisma.CelebrateCreateManyUserInput | Prisma.CelebrateCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type CelebrateUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.CelebrateWhereUniqueInput;
    update: Prisma.XOR<Prisma.CelebrateUpdateWithoutUserInput, Prisma.CelebrateUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.CelebrateCreateWithoutUserInput, Prisma.CelebrateUncheckedCreateWithoutUserInput>;
};
export type CelebrateUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.CelebrateWhereUniqueInput;
    data: Prisma.XOR<Prisma.CelebrateUpdateWithoutUserInput, Prisma.CelebrateUncheckedUpdateWithoutUserInput>;
};
export type CelebrateUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.CelebrateScalarWhereInput;
    data: Prisma.XOR<Prisma.CelebrateUpdateManyMutationInput, Prisma.CelebrateUncheckedUpdateManyWithoutUserInput>;
};
export type CelebrateScalarWhereInput = {
    AND?: Prisma.CelebrateScalarWhereInput | Prisma.CelebrateScalarWhereInput[];
    OR?: Prisma.CelebrateScalarWhereInput[];
    NOT?: Prisma.CelebrateScalarWhereInput | Prisma.CelebrateScalarWhereInput[];
    id?: Prisma.StringFilter<"Celebrate"> | string;
    tripId?: Prisma.StringFilter<"Celebrate"> | string;
    userId?: Prisma.StringFilter<"Celebrate"> | string;
    description?: Prisma.StringNullableFilter<"Celebrate"> | string | null;
    date?: Prisma.DateTimeFilter<"Celebrate"> | Date | string;
    createdAt?: Prisma.DateTimeFilter<"Celebrate"> | Date | string;
};
export type CelebrateCreateWithoutTripInput = {
    id?: string;
    description?: string | null;
    date: Date | string;
    createdAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutCelebratesInput;
    images?: Prisma.CelebrateImageCreateNestedManyWithoutCelebrateInput;
};
export type CelebrateUncheckedCreateWithoutTripInput = {
    id?: string;
    userId: string;
    description?: string | null;
    date: Date | string;
    createdAt?: Date | string;
    images?: Prisma.CelebrateImageUncheckedCreateNestedManyWithoutCelebrateInput;
};
export type CelebrateCreateOrConnectWithoutTripInput = {
    where: Prisma.CelebrateWhereUniqueInput;
    create: Prisma.XOR<Prisma.CelebrateCreateWithoutTripInput, Prisma.CelebrateUncheckedCreateWithoutTripInput>;
};
export type CelebrateCreateManyTripInputEnvelope = {
    data: Prisma.CelebrateCreateManyTripInput | Prisma.CelebrateCreateManyTripInput[];
    skipDuplicates?: boolean;
};
export type CelebrateUpsertWithWhereUniqueWithoutTripInput = {
    where: Prisma.CelebrateWhereUniqueInput;
    update: Prisma.XOR<Prisma.CelebrateUpdateWithoutTripInput, Prisma.CelebrateUncheckedUpdateWithoutTripInput>;
    create: Prisma.XOR<Prisma.CelebrateCreateWithoutTripInput, Prisma.CelebrateUncheckedCreateWithoutTripInput>;
};
export type CelebrateUpdateWithWhereUniqueWithoutTripInput = {
    where: Prisma.CelebrateWhereUniqueInput;
    data: Prisma.XOR<Prisma.CelebrateUpdateWithoutTripInput, Prisma.CelebrateUncheckedUpdateWithoutTripInput>;
};
export type CelebrateUpdateManyWithWhereWithoutTripInput = {
    where: Prisma.CelebrateScalarWhereInput;
    data: Prisma.XOR<Prisma.CelebrateUpdateManyMutationInput, Prisma.CelebrateUncheckedUpdateManyWithoutTripInput>;
};
export type CelebrateCreateWithoutImagesInput = {
    id?: string;
    description?: string | null;
    date: Date | string;
    createdAt?: Date | string;
    trip: Prisma.TripCreateNestedOneWithoutCelebratesInput;
    user: Prisma.UserCreateNestedOneWithoutCelebratesInput;
};
export type CelebrateUncheckedCreateWithoutImagesInput = {
    id?: string;
    tripId: string;
    userId: string;
    description?: string | null;
    date: Date | string;
    createdAt?: Date | string;
};
export type CelebrateCreateOrConnectWithoutImagesInput = {
    where: Prisma.CelebrateWhereUniqueInput;
    create: Prisma.XOR<Prisma.CelebrateCreateWithoutImagesInput, Prisma.CelebrateUncheckedCreateWithoutImagesInput>;
};
export type CelebrateUpsertWithoutImagesInput = {
    update: Prisma.XOR<Prisma.CelebrateUpdateWithoutImagesInput, Prisma.CelebrateUncheckedUpdateWithoutImagesInput>;
    create: Prisma.XOR<Prisma.CelebrateCreateWithoutImagesInput, Prisma.CelebrateUncheckedCreateWithoutImagesInput>;
    where?: Prisma.CelebrateWhereInput;
};
export type CelebrateUpdateToOneWithWhereWithoutImagesInput = {
    where?: Prisma.CelebrateWhereInput;
    data: Prisma.XOR<Prisma.CelebrateUpdateWithoutImagesInput, Prisma.CelebrateUncheckedUpdateWithoutImagesInput>;
};
export type CelebrateUpdateWithoutImagesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    trip?: Prisma.TripUpdateOneRequiredWithoutCelebratesNestedInput;
    user?: Prisma.UserUpdateOneRequiredWithoutCelebratesNestedInput;
};
export type CelebrateUncheckedUpdateWithoutImagesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tripId?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CelebrateCreateManyUserInput = {
    id?: string;
    tripId: string;
    description?: string | null;
    date: Date | string;
    createdAt?: Date | string;
};
export type CelebrateUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    trip?: Prisma.TripUpdateOneRequiredWithoutCelebratesNestedInput;
    images?: Prisma.CelebrateImageUpdateManyWithoutCelebrateNestedInput;
};
export type CelebrateUncheckedUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tripId?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    images?: Prisma.CelebrateImageUncheckedUpdateManyWithoutCelebrateNestedInput;
};
export type CelebrateUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tripId?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CelebrateCreateManyTripInput = {
    id?: string;
    userId: string;
    description?: string | null;
    date: Date | string;
    createdAt?: Date | string;
};
export type CelebrateUpdateWithoutTripInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutCelebratesNestedInput;
    images?: Prisma.CelebrateImageUpdateManyWithoutCelebrateNestedInput;
};
export type CelebrateUncheckedUpdateWithoutTripInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    images?: Prisma.CelebrateImageUncheckedUpdateManyWithoutCelebrateNestedInput;
};
export type CelebrateUncheckedUpdateManyWithoutTripInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CelebrateCountOutputType = {
    images: number;
};
export type CelebrateCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    images?: boolean | CelebrateCountOutputTypeCountImagesArgs;
};
export type CelebrateCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CelebrateCountOutputTypeSelect<ExtArgs> | null;
};
export type CelebrateCountOutputTypeCountImagesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CelebrateImageWhereInput;
};
export type CelebrateSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    tripId?: boolean;
    userId?: boolean;
    description?: boolean;
    date?: boolean;
    createdAt?: boolean;
    trip?: boolean | Prisma.TripDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    images?: boolean | Prisma.Celebrate$imagesArgs<ExtArgs>;
    _count?: boolean | Prisma.CelebrateCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["celebrate"]>;
export type CelebrateSelectScalar = {
    id?: boolean;
    tripId?: boolean;
    userId?: boolean;
    description?: boolean;
    date?: boolean;
    createdAt?: boolean;
};
export type CelebrateOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "tripId" | "userId" | "description" | "date" | "createdAt", ExtArgs["result"]["celebrate"]>;
export type CelebrateInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    trip?: boolean | Prisma.TripDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    images?: boolean | Prisma.Celebrate$imagesArgs<ExtArgs>;
    _count?: boolean | Prisma.CelebrateCountOutputTypeDefaultArgs<ExtArgs>;
};
export type $CelebratePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Celebrate";
    objects: {
        trip: Prisma.$TripPayload<ExtArgs>;
        user: Prisma.$UserPayload<ExtArgs>;
        images: Prisma.$CelebrateImagePayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        tripId: string;
        userId: string;
        description: string | null;
        date: Date;
        createdAt: Date;
    }, ExtArgs["result"]["celebrate"]>;
    composites: {};
};
export type CelebrateGetPayload<S extends boolean | null | undefined | CelebrateDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$CelebratePayload, S>;
export type CelebrateCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<CelebrateFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: CelebrateCountAggregateInputType | true;
};
export interface CelebrateDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Celebrate'];
        meta: {
            name: 'Celebrate';
        };
    };
    findUnique<T extends CelebrateFindUniqueArgs>(args: Prisma.SelectSubset<T, CelebrateFindUniqueArgs<ExtArgs>>): Prisma.Prisma__CelebrateClient<runtime.Types.Result.GetResult<Prisma.$CelebratePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends CelebrateFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, CelebrateFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__CelebrateClient<runtime.Types.Result.GetResult<Prisma.$CelebratePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends CelebrateFindFirstArgs>(args?: Prisma.SelectSubset<T, CelebrateFindFirstArgs<ExtArgs>>): Prisma.Prisma__CelebrateClient<runtime.Types.Result.GetResult<Prisma.$CelebratePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends CelebrateFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, CelebrateFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__CelebrateClient<runtime.Types.Result.GetResult<Prisma.$CelebratePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends CelebrateFindManyArgs>(args?: Prisma.SelectSubset<T, CelebrateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CelebratePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends CelebrateCreateArgs>(args: Prisma.SelectSubset<T, CelebrateCreateArgs<ExtArgs>>): Prisma.Prisma__CelebrateClient<runtime.Types.Result.GetResult<Prisma.$CelebratePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends CelebrateCreateManyArgs>(args?: Prisma.SelectSubset<T, CelebrateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    delete<T extends CelebrateDeleteArgs>(args: Prisma.SelectSubset<T, CelebrateDeleteArgs<ExtArgs>>): Prisma.Prisma__CelebrateClient<runtime.Types.Result.GetResult<Prisma.$CelebratePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends CelebrateUpdateArgs>(args: Prisma.SelectSubset<T, CelebrateUpdateArgs<ExtArgs>>): Prisma.Prisma__CelebrateClient<runtime.Types.Result.GetResult<Prisma.$CelebratePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends CelebrateDeleteManyArgs>(args?: Prisma.SelectSubset<T, CelebrateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends CelebrateUpdateManyArgs>(args: Prisma.SelectSubset<T, CelebrateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    upsert<T extends CelebrateUpsertArgs>(args: Prisma.SelectSubset<T, CelebrateUpsertArgs<ExtArgs>>): Prisma.Prisma__CelebrateClient<runtime.Types.Result.GetResult<Prisma.$CelebratePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends CelebrateCountArgs>(args?: Prisma.Subset<T, CelebrateCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], CelebrateCountAggregateOutputType> : number>;
    aggregate<T extends CelebrateAggregateArgs>(args: Prisma.Subset<T, CelebrateAggregateArgs>): Prisma.PrismaPromise<GetCelebrateAggregateType<T>>;
    groupBy<T extends CelebrateGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: CelebrateGroupByArgs['orderBy'];
    } : {
        orderBy?: CelebrateGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, CelebrateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCelebrateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: CelebrateFieldRefs;
}
export interface Prisma__CelebrateClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    trip<T extends Prisma.TripDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.TripDefaultArgs<ExtArgs>>): Prisma.Prisma__TripClient<runtime.Types.Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    images<T extends Prisma.Celebrate$imagesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Celebrate$imagesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CelebrateImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface CelebrateFieldRefs {
    readonly id: Prisma.FieldRef<"Celebrate", 'String'>;
    readonly tripId: Prisma.FieldRef<"Celebrate", 'String'>;
    readonly userId: Prisma.FieldRef<"Celebrate", 'String'>;
    readonly description: Prisma.FieldRef<"Celebrate", 'String'>;
    readonly date: Prisma.FieldRef<"Celebrate", 'DateTime'>;
    readonly createdAt: Prisma.FieldRef<"Celebrate", 'DateTime'>;
}
export type CelebrateFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CelebrateSelect<ExtArgs> | null;
    omit?: Prisma.CelebrateOmit<ExtArgs> | null;
    include?: Prisma.CelebrateInclude<ExtArgs> | null;
    where: Prisma.CelebrateWhereUniqueInput;
};
export type CelebrateFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CelebrateSelect<ExtArgs> | null;
    omit?: Prisma.CelebrateOmit<ExtArgs> | null;
    include?: Prisma.CelebrateInclude<ExtArgs> | null;
    where: Prisma.CelebrateWhereUniqueInput;
};
export type CelebrateFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type CelebrateFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type CelebrateFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type CelebrateCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CelebrateSelect<ExtArgs> | null;
    omit?: Prisma.CelebrateOmit<ExtArgs> | null;
    include?: Prisma.CelebrateInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CelebrateCreateInput, Prisma.CelebrateUncheckedCreateInput>;
};
export type CelebrateCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.CelebrateCreateManyInput | Prisma.CelebrateCreateManyInput[];
    skipDuplicates?: boolean;
};
export type CelebrateUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CelebrateSelect<ExtArgs> | null;
    omit?: Prisma.CelebrateOmit<ExtArgs> | null;
    include?: Prisma.CelebrateInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CelebrateUpdateInput, Prisma.CelebrateUncheckedUpdateInput>;
    where: Prisma.CelebrateWhereUniqueInput;
};
export type CelebrateUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.CelebrateUpdateManyMutationInput, Prisma.CelebrateUncheckedUpdateManyInput>;
    where?: Prisma.CelebrateWhereInput;
    limit?: number;
};
export type CelebrateUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CelebrateSelect<ExtArgs> | null;
    omit?: Prisma.CelebrateOmit<ExtArgs> | null;
    include?: Prisma.CelebrateInclude<ExtArgs> | null;
    where: Prisma.CelebrateWhereUniqueInput;
    create: Prisma.XOR<Prisma.CelebrateCreateInput, Prisma.CelebrateUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.CelebrateUpdateInput, Prisma.CelebrateUncheckedUpdateInput>;
};
export type CelebrateDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CelebrateSelect<ExtArgs> | null;
    omit?: Prisma.CelebrateOmit<ExtArgs> | null;
    include?: Prisma.CelebrateInclude<ExtArgs> | null;
    where: Prisma.CelebrateWhereUniqueInput;
};
export type CelebrateDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CelebrateWhereInput;
    limit?: number;
};
export type Celebrate$imagesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CelebrateImageSelect<ExtArgs> | null;
    omit?: Prisma.CelebrateImageOmit<ExtArgs> | null;
    include?: Prisma.CelebrateImageInclude<ExtArgs> | null;
    where?: Prisma.CelebrateImageWhereInput;
    orderBy?: Prisma.CelebrateImageOrderByWithRelationInput | Prisma.CelebrateImageOrderByWithRelationInput[];
    cursor?: Prisma.CelebrateImageWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CelebrateImageScalarFieldEnum | Prisma.CelebrateImageScalarFieldEnum[];
};
export type CelebrateDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CelebrateSelect<ExtArgs> | null;
    omit?: Prisma.CelebrateOmit<ExtArgs> | null;
    include?: Prisma.CelebrateInclude<ExtArgs> | null;
};
export {};
