import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type TripMemberModel = runtime.Types.Result.DefaultSelection<Prisma.$TripMemberPayload>;
export type AggregateTripMember = {
    _count: TripMemberCountAggregateOutputType | null;
    _min: TripMemberMinAggregateOutputType | null;
    _max: TripMemberMaxAggregateOutputType | null;
};
export type TripMemberMinAggregateOutputType = {
    id: string | null;
    tripId: string | null;
    userId: string | null;
    role: $Enums.MemberRole | null;
    inviteStatus: $Enums.InviteStatus | null;
    joinedAt: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    leftAt: Date | null;
};
export type TripMemberMaxAggregateOutputType = {
    id: string | null;
    tripId: string | null;
    userId: string | null;
    role: $Enums.MemberRole | null;
    inviteStatus: $Enums.InviteStatus | null;
    joinedAt: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    leftAt: Date | null;
};
export type TripMemberCountAggregateOutputType = {
    id: number;
    tripId: number;
    userId: number;
    role: number;
    inviteStatus: number;
    joinedAt: number;
    createdAt: number;
    updatedAt: number;
    leftAt: number;
    _all: number;
};
export type TripMemberMinAggregateInputType = {
    id?: true;
    tripId?: true;
    userId?: true;
    role?: true;
    inviteStatus?: true;
    joinedAt?: true;
    createdAt?: true;
    updatedAt?: true;
    leftAt?: true;
};
export type TripMemberMaxAggregateInputType = {
    id?: true;
    tripId?: true;
    userId?: true;
    role?: true;
    inviteStatus?: true;
    joinedAt?: true;
    createdAt?: true;
    updatedAt?: true;
    leftAt?: true;
};
export type TripMemberCountAggregateInputType = {
    id?: true;
    tripId?: true;
    userId?: true;
    role?: true;
    inviteStatus?: true;
    joinedAt?: true;
    createdAt?: true;
    updatedAt?: true;
    leftAt?: true;
    _all?: true;
};
export type TripMemberAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TripMemberWhereInput;
    orderBy?: Prisma.TripMemberOrderByWithRelationInput | Prisma.TripMemberOrderByWithRelationInput[];
    cursor?: Prisma.TripMemberWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | TripMemberCountAggregateInputType;
    _min?: TripMemberMinAggregateInputType;
    _max?: TripMemberMaxAggregateInputType;
};
export type GetTripMemberAggregateType<T extends TripMemberAggregateArgs> = {
    [P in keyof T & keyof AggregateTripMember]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateTripMember[P]> : Prisma.GetScalarType<T[P], AggregateTripMember[P]>;
};
export type TripMemberGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TripMemberWhereInput;
    orderBy?: Prisma.TripMemberOrderByWithAggregationInput | Prisma.TripMemberOrderByWithAggregationInput[];
    by: Prisma.TripMemberScalarFieldEnum[] | Prisma.TripMemberScalarFieldEnum;
    having?: Prisma.TripMemberScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: TripMemberCountAggregateInputType | true;
    _min?: TripMemberMinAggregateInputType;
    _max?: TripMemberMaxAggregateInputType;
};
export type TripMemberGroupByOutputType = {
    id: string;
    tripId: string;
    userId: string;
    role: $Enums.MemberRole;
    inviteStatus: $Enums.InviteStatus;
    joinedAt: Date | null;
    createdAt: Date;
    updatedAt: Date;
    leftAt: Date | null;
    _count: TripMemberCountAggregateOutputType | null;
    _min: TripMemberMinAggregateOutputType | null;
    _max: TripMemberMaxAggregateOutputType | null;
};
type GetTripMemberGroupByPayload<T extends TripMemberGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<TripMemberGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof TripMemberGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], TripMemberGroupByOutputType[P]> : Prisma.GetScalarType<T[P], TripMemberGroupByOutputType[P]>;
}>>;
export type TripMemberWhereInput = {
    AND?: Prisma.TripMemberWhereInput | Prisma.TripMemberWhereInput[];
    OR?: Prisma.TripMemberWhereInput[];
    NOT?: Prisma.TripMemberWhereInput | Prisma.TripMemberWhereInput[];
    id?: Prisma.StringFilter<"TripMember"> | string;
    tripId?: Prisma.StringFilter<"TripMember"> | string;
    userId?: Prisma.StringFilter<"TripMember"> | string;
    role?: Prisma.EnumMemberRoleFilter<"TripMember"> | $Enums.MemberRole;
    inviteStatus?: Prisma.EnumInviteStatusFilter<"TripMember"> | $Enums.InviteStatus;
    joinedAt?: Prisma.DateTimeNullableFilter<"TripMember"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"TripMember"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"TripMember"> | Date | string;
    leftAt?: Prisma.DateTimeNullableFilter<"TripMember"> | Date | string | null;
    trip?: Prisma.XOR<Prisma.TripScalarRelationFilter, Prisma.TripWhereInput>;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
};
export type TripMemberOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    tripId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    inviteStatus?: Prisma.SortOrder;
    joinedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    leftAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    trip?: Prisma.TripOrderByWithRelationInput;
    user?: Prisma.UserOrderByWithRelationInput;
    _relevance?: Prisma.TripMemberOrderByRelevanceInput;
};
export type TripMemberWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    tripId_userId?: Prisma.TripMemberTripIdUserIdCompoundUniqueInput;
    AND?: Prisma.TripMemberWhereInput | Prisma.TripMemberWhereInput[];
    OR?: Prisma.TripMemberWhereInput[];
    NOT?: Prisma.TripMemberWhereInput | Prisma.TripMemberWhereInput[];
    tripId?: Prisma.StringFilter<"TripMember"> | string;
    userId?: Prisma.StringFilter<"TripMember"> | string;
    role?: Prisma.EnumMemberRoleFilter<"TripMember"> | $Enums.MemberRole;
    inviteStatus?: Prisma.EnumInviteStatusFilter<"TripMember"> | $Enums.InviteStatus;
    joinedAt?: Prisma.DateTimeNullableFilter<"TripMember"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"TripMember"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"TripMember"> | Date | string;
    leftAt?: Prisma.DateTimeNullableFilter<"TripMember"> | Date | string | null;
    trip?: Prisma.XOR<Prisma.TripScalarRelationFilter, Prisma.TripWhereInput>;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
}, "id" | "tripId_userId">;
export type TripMemberOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    tripId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    inviteStatus?: Prisma.SortOrder;
    joinedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    leftAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.TripMemberCountOrderByAggregateInput;
    _max?: Prisma.TripMemberMaxOrderByAggregateInput;
    _min?: Prisma.TripMemberMinOrderByAggregateInput;
};
export type TripMemberScalarWhereWithAggregatesInput = {
    AND?: Prisma.TripMemberScalarWhereWithAggregatesInput | Prisma.TripMemberScalarWhereWithAggregatesInput[];
    OR?: Prisma.TripMemberScalarWhereWithAggregatesInput[];
    NOT?: Prisma.TripMemberScalarWhereWithAggregatesInput | Prisma.TripMemberScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"TripMember"> | string;
    tripId?: Prisma.StringWithAggregatesFilter<"TripMember"> | string;
    userId?: Prisma.StringWithAggregatesFilter<"TripMember"> | string;
    role?: Prisma.EnumMemberRoleWithAggregatesFilter<"TripMember"> | $Enums.MemberRole;
    inviteStatus?: Prisma.EnumInviteStatusWithAggregatesFilter<"TripMember"> | $Enums.InviteStatus;
    joinedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"TripMember"> | Date | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"TripMember"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"TripMember"> | Date | string;
    leftAt?: Prisma.DateTimeNullableWithAggregatesFilter<"TripMember"> | Date | string | null;
};
export type TripMemberCreateInput = {
    id?: string;
    role?: $Enums.MemberRole;
    inviteStatus?: $Enums.InviteStatus;
    joinedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    leftAt?: Date | string | null;
    trip: Prisma.TripCreateNestedOneWithoutMembersInput;
    user: Prisma.UserCreateNestedOneWithoutTripMembersInput;
};
export type TripMemberUncheckedCreateInput = {
    id?: string;
    tripId: string;
    userId: string;
    role?: $Enums.MemberRole;
    inviteStatus?: $Enums.InviteStatus;
    joinedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    leftAt?: Date | string | null;
};
export type TripMemberUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumMemberRoleFieldUpdateOperationsInput | $Enums.MemberRole;
    inviteStatus?: Prisma.EnumInviteStatusFieldUpdateOperationsInput | $Enums.InviteStatus;
    joinedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    leftAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    trip?: Prisma.TripUpdateOneRequiredWithoutMembersNestedInput;
    user?: Prisma.UserUpdateOneRequiredWithoutTripMembersNestedInput;
};
export type TripMemberUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tripId?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumMemberRoleFieldUpdateOperationsInput | $Enums.MemberRole;
    inviteStatus?: Prisma.EnumInviteStatusFieldUpdateOperationsInput | $Enums.InviteStatus;
    joinedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    leftAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type TripMemberCreateManyInput = {
    id?: string;
    tripId: string;
    userId: string;
    role?: $Enums.MemberRole;
    inviteStatus?: $Enums.InviteStatus;
    joinedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    leftAt?: Date | string | null;
};
export type TripMemberUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumMemberRoleFieldUpdateOperationsInput | $Enums.MemberRole;
    inviteStatus?: Prisma.EnumInviteStatusFieldUpdateOperationsInput | $Enums.InviteStatus;
    joinedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    leftAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type TripMemberUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tripId?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumMemberRoleFieldUpdateOperationsInput | $Enums.MemberRole;
    inviteStatus?: Prisma.EnumInviteStatusFieldUpdateOperationsInput | $Enums.InviteStatus;
    joinedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    leftAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type TripMemberListRelationFilter = {
    every?: Prisma.TripMemberWhereInput;
    some?: Prisma.TripMemberWhereInput;
    none?: Prisma.TripMemberWhereInput;
};
export type TripMemberOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type TripMemberOrderByRelevanceInput = {
    fields: Prisma.TripMemberOrderByRelevanceFieldEnum | Prisma.TripMemberOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type TripMemberTripIdUserIdCompoundUniqueInput = {
    tripId: string;
    userId: string;
};
export type TripMemberCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    tripId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    inviteStatus?: Prisma.SortOrder;
    joinedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    leftAt?: Prisma.SortOrder;
};
export type TripMemberMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    tripId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    inviteStatus?: Prisma.SortOrder;
    joinedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    leftAt?: Prisma.SortOrder;
};
export type TripMemberMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    tripId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    inviteStatus?: Prisma.SortOrder;
    joinedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    leftAt?: Prisma.SortOrder;
};
export type TripMemberCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.TripMemberCreateWithoutUserInput, Prisma.TripMemberUncheckedCreateWithoutUserInput> | Prisma.TripMemberCreateWithoutUserInput[] | Prisma.TripMemberUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.TripMemberCreateOrConnectWithoutUserInput | Prisma.TripMemberCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.TripMemberCreateManyUserInputEnvelope;
    connect?: Prisma.TripMemberWhereUniqueInput | Prisma.TripMemberWhereUniqueInput[];
};
export type TripMemberUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.TripMemberCreateWithoutUserInput, Prisma.TripMemberUncheckedCreateWithoutUserInput> | Prisma.TripMemberCreateWithoutUserInput[] | Prisma.TripMemberUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.TripMemberCreateOrConnectWithoutUserInput | Prisma.TripMemberCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.TripMemberCreateManyUserInputEnvelope;
    connect?: Prisma.TripMemberWhereUniqueInput | Prisma.TripMemberWhereUniqueInput[];
};
export type TripMemberUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.TripMemberCreateWithoutUserInput, Prisma.TripMemberUncheckedCreateWithoutUserInput> | Prisma.TripMemberCreateWithoutUserInput[] | Prisma.TripMemberUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.TripMemberCreateOrConnectWithoutUserInput | Prisma.TripMemberCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.TripMemberUpsertWithWhereUniqueWithoutUserInput | Prisma.TripMemberUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.TripMemberCreateManyUserInputEnvelope;
    set?: Prisma.TripMemberWhereUniqueInput | Prisma.TripMemberWhereUniqueInput[];
    disconnect?: Prisma.TripMemberWhereUniqueInput | Prisma.TripMemberWhereUniqueInput[];
    delete?: Prisma.TripMemberWhereUniqueInput | Prisma.TripMemberWhereUniqueInput[];
    connect?: Prisma.TripMemberWhereUniqueInput | Prisma.TripMemberWhereUniqueInput[];
    update?: Prisma.TripMemberUpdateWithWhereUniqueWithoutUserInput | Prisma.TripMemberUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.TripMemberUpdateManyWithWhereWithoutUserInput | Prisma.TripMemberUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.TripMemberScalarWhereInput | Prisma.TripMemberScalarWhereInput[];
};
export type TripMemberUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.TripMemberCreateWithoutUserInput, Prisma.TripMemberUncheckedCreateWithoutUserInput> | Prisma.TripMemberCreateWithoutUserInput[] | Prisma.TripMemberUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.TripMemberCreateOrConnectWithoutUserInput | Prisma.TripMemberCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.TripMemberUpsertWithWhereUniqueWithoutUserInput | Prisma.TripMemberUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.TripMemberCreateManyUserInputEnvelope;
    set?: Prisma.TripMemberWhereUniqueInput | Prisma.TripMemberWhereUniqueInput[];
    disconnect?: Prisma.TripMemberWhereUniqueInput | Prisma.TripMemberWhereUniqueInput[];
    delete?: Prisma.TripMemberWhereUniqueInput | Prisma.TripMemberWhereUniqueInput[];
    connect?: Prisma.TripMemberWhereUniqueInput | Prisma.TripMemberWhereUniqueInput[];
    update?: Prisma.TripMemberUpdateWithWhereUniqueWithoutUserInput | Prisma.TripMemberUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.TripMemberUpdateManyWithWhereWithoutUserInput | Prisma.TripMemberUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.TripMemberScalarWhereInput | Prisma.TripMemberScalarWhereInput[];
};
export type TripMemberCreateNestedManyWithoutTripInput = {
    create?: Prisma.XOR<Prisma.TripMemberCreateWithoutTripInput, Prisma.TripMemberUncheckedCreateWithoutTripInput> | Prisma.TripMemberCreateWithoutTripInput[] | Prisma.TripMemberUncheckedCreateWithoutTripInput[];
    connectOrCreate?: Prisma.TripMemberCreateOrConnectWithoutTripInput | Prisma.TripMemberCreateOrConnectWithoutTripInput[];
    createMany?: Prisma.TripMemberCreateManyTripInputEnvelope;
    connect?: Prisma.TripMemberWhereUniqueInput | Prisma.TripMemberWhereUniqueInput[];
};
export type TripMemberUncheckedCreateNestedManyWithoutTripInput = {
    create?: Prisma.XOR<Prisma.TripMemberCreateWithoutTripInput, Prisma.TripMemberUncheckedCreateWithoutTripInput> | Prisma.TripMemberCreateWithoutTripInput[] | Prisma.TripMemberUncheckedCreateWithoutTripInput[];
    connectOrCreate?: Prisma.TripMemberCreateOrConnectWithoutTripInput | Prisma.TripMemberCreateOrConnectWithoutTripInput[];
    createMany?: Prisma.TripMemberCreateManyTripInputEnvelope;
    connect?: Prisma.TripMemberWhereUniqueInput | Prisma.TripMemberWhereUniqueInput[];
};
export type TripMemberUpdateManyWithoutTripNestedInput = {
    create?: Prisma.XOR<Prisma.TripMemberCreateWithoutTripInput, Prisma.TripMemberUncheckedCreateWithoutTripInput> | Prisma.TripMemberCreateWithoutTripInput[] | Prisma.TripMemberUncheckedCreateWithoutTripInput[];
    connectOrCreate?: Prisma.TripMemberCreateOrConnectWithoutTripInput | Prisma.TripMemberCreateOrConnectWithoutTripInput[];
    upsert?: Prisma.TripMemberUpsertWithWhereUniqueWithoutTripInput | Prisma.TripMemberUpsertWithWhereUniqueWithoutTripInput[];
    createMany?: Prisma.TripMemberCreateManyTripInputEnvelope;
    set?: Prisma.TripMemberWhereUniqueInput | Prisma.TripMemberWhereUniqueInput[];
    disconnect?: Prisma.TripMemberWhereUniqueInput | Prisma.TripMemberWhereUniqueInput[];
    delete?: Prisma.TripMemberWhereUniqueInput | Prisma.TripMemberWhereUniqueInput[];
    connect?: Prisma.TripMemberWhereUniqueInput | Prisma.TripMemberWhereUniqueInput[];
    update?: Prisma.TripMemberUpdateWithWhereUniqueWithoutTripInput | Prisma.TripMemberUpdateWithWhereUniqueWithoutTripInput[];
    updateMany?: Prisma.TripMemberUpdateManyWithWhereWithoutTripInput | Prisma.TripMemberUpdateManyWithWhereWithoutTripInput[];
    deleteMany?: Prisma.TripMemberScalarWhereInput | Prisma.TripMemberScalarWhereInput[];
};
export type TripMemberUncheckedUpdateManyWithoutTripNestedInput = {
    create?: Prisma.XOR<Prisma.TripMemberCreateWithoutTripInput, Prisma.TripMemberUncheckedCreateWithoutTripInput> | Prisma.TripMemberCreateWithoutTripInput[] | Prisma.TripMemberUncheckedCreateWithoutTripInput[];
    connectOrCreate?: Prisma.TripMemberCreateOrConnectWithoutTripInput | Prisma.TripMemberCreateOrConnectWithoutTripInput[];
    upsert?: Prisma.TripMemberUpsertWithWhereUniqueWithoutTripInput | Prisma.TripMemberUpsertWithWhereUniqueWithoutTripInput[];
    createMany?: Prisma.TripMemberCreateManyTripInputEnvelope;
    set?: Prisma.TripMemberWhereUniqueInput | Prisma.TripMemberWhereUniqueInput[];
    disconnect?: Prisma.TripMemberWhereUniqueInput | Prisma.TripMemberWhereUniqueInput[];
    delete?: Prisma.TripMemberWhereUniqueInput | Prisma.TripMemberWhereUniqueInput[];
    connect?: Prisma.TripMemberWhereUniqueInput | Prisma.TripMemberWhereUniqueInput[];
    update?: Prisma.TripMemberUpdateWithWhereUniqueWithoutTripInput | Prisma.TripMemberUpdateWithWhereUniqueWithoutTripInput[];
    updateMany?: Prisma.TripMemberUpdateManyWithWhereWithoutTripInput | Prisma.TripMemberUpdateManyWithWhereWithoutTripInput[];
    deleteMany?: Prisma.TripMemberScalarWhereInput | Prisma.TripMemberScalarWhereInput[];
};
export type EnumMemberRoleFieldUpdateOperationsInput = {
    set?: $Enums.MemberRole;
};
export type EnumInviteStatusFieldUpdateOperationsInput = {
    set?: $Enums.InviteStatus;
};
export type TripMemberCreateWithoutUserInput = {
    id?: string;
    role?: $Enums.MemberRole;
    inviteStatus?: $Enums.InviteStatus;
    joinedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    leftAt?: Date | string | null;
    trip: Prisma.TripCreateNestedOneWithoutMembersInput;
};
export type TripMemberUncheckedCreateWithoutUserInput = {
    id?: string;
    tripId: string;
    role?: $Enums.MemberRole;
    inviteStatus?: $Enums.InviteStatus;
    joinedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    leftAt?: Date | string | null;
};
export type TripMemberCreateOrConnectWithoutUserInput = {
    where: Prisma.TripMemberWhereUniqueInput;
    create: Prisma.XOR<Prisma.TripMemberCreateWithoutUserInput, Prisma.TripMemberUncheckedCreateWithoutUserInput>;
};
export type TripMemberCreateManyUserInputEnvelope = {
    data: Prisma.TripMemberCreateManyUserInput | Prisma.TripMemberCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type TripMemberUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.TripMemberWhereUniqueInput;
    update: Prisma.XOR<Prisma.TripMemberUpdateWithoutUserInput, Prisma.TripMemberUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.TripMemberCreateWithoutUserInput, Prisma.TripMemberUncheckedCreateWithoutUserInput>;
};
export type TripMemberUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.TripMemberWhereUniqueInput;
    data: Prisma.XOR<Prisma.TripMemberUpdateWithoutUserInput, Prisma.TripMemberUncheckedUpdateWithoutUserInput>;
};
export type TripMemberUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.TripMemberScalarWhereInput;
    data: Prisma.XOR<Prisma.TripMemberUpdateManyMutationInput, Prisma.TripMemberUncheckedUpdateManyWithoutUserInput>;
};
export type TripMemberScalarWhereInput = {
    AND?: Prisma.TripMemberScalarWhereInput | Prisma.TripMemberScalarWhereInput[];
    OR?: Prisma.TripMemberScalarWhereInput[];
    NOT?: Prisma.TripMemberScalarWhereInput | Prisma.TripMemberScalarWhereInput[];
    id?: Prisma.StringFilter<"TripMember"> | string;
    tripId?: Prisma.StringFilter<"TripMember"> | string;
    userId?: Prisma.StringFilter<"TripMember"> | string;
    role?: Prisma.EnumMemberRoleFilter<"TripMember"> | $Enums.MemberRole;
    inviteStatus?: Prisma.EnumInviteStatusFilter<"TripMember"> | $Enums.InviteStatus;
    joinedAt?: Prisma.DateTimeNullableFilter<"TripMember"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"TripMember"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"TripMember"> | Date | string;
    leftAt?: Prisma.DateTimeNullableFilter<"TripMember"> | Date | string | null;
};
export type TripMemberCreateWithoutTripInput = {
    id?: string;
    role?: $Enums.MemberRole;
    inviteStatus?: $Enums.InviteStatus;
    joinedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    leftAt?: Date | string | null;
    user: Prisma.UserCreateNestedOneWithoutTripMembersInput;
};
export type TripMemberUncheckedCreateWithoutTripInput = {
    id?: string;
    userId: string;
    role?: $Enums.MemberRole;
    inviteStatus?: $Enums.InviteStatus;
    joinedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    leftAt?: Date | string | null;
};
export type TripMemberCreateOrConnectWithoutTripInput = {
    where: Prisma.TripMemberWhereUniqueInput;
    create: Prisma.XOR<Prisma.TripMemberCreateWithoutTripInput, Prisma.TripMemberUncheckedCreateWithoutTripInput>;
};
export type TripMemberCreateManyTripInputEnvelope = {
    data: Prisma.TripMemberCreateManyTripInput | Prisma.TripMemberCreateManyTripInput[];
    skipDuplicates?: boolean;
};
export type TripMemberUpsertWithWhereUniqueWithoutTripInput = {
    where: Prisma.TripMemberWhereUniqueInput;
    update: Prisma.XOR<Prisma.TripMemberUpdateWithoutTripInput, Prisma.TripMemberUncheckedUpdateWithoutTripInput>;
    create: Prisma.XOR<Prisma.TripMemberCreateWithoutTripInput, Prisma.TripMemberUncheckedCreateWithoutTripInput>;
};
export type TripMemberUpdateWithWhereUniqueWithoutTripInput = {
    where: Prisma.TripMemberWhereUniqueInput;
    data: Prisma.XOR<Prisma.TripMemberUpdateWithoutTripInput, Prisma.TripMemberUncheckedUpdateWithoutTripInput>;
};
export type TripMemberUpdateManyWithWhereWithoutTripInput = {
    where: Prisma.TripMemberScalarWhereInput;
    data: Prisma.XOR<Prisma.TripMemberUpdateManyMutationInput, Prisma.TripMemberUncheckedUpdateManyWithoutTripInput>;
};
export type TripMemberCreateManyUserInput = {
    id?: string;
    tripId: string;
    role?: $Enums.MemberRole;
    inviteStatus?: $Enums.InviteStatus;
    joinedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    leftAt?: Date | string | null;
};
export type TripMemberUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumMemberRoleFieldUpdateOperationsInput | $Enums.MemberRole;
    inviteStatus?: Prisma.EnumInviteStatusFieldUpdateOperationsInput | $Enums.InviteStatus;
    joinedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    leftAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    trip?: Prisma.TripUpdateOneRequiredWithoutMembersNestedInput;
};
export type TripMemberUncheckedUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tripId?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumMemberRoleFieldUpdateOperationsInput | $Enums.MemberRole;
    inviteStatus?: Prisma.EnumInviteStatusFieldUpdateOperationsInput | $Enums.InviteStatus;
    joinedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    leftAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type TripMemberUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tripId?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumMemberRoleFieldUpdateOperationsInput | $Enums.MemberRole;
    inviteStatus?: Prisma.EnumInviteStatusFieldUpdateOperationsInput | $Enums.InviteStatus;
    joinedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    leftAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type TripMemberCreateManyTripInput = {
    id?: string;
    userId: string;
    role?: $Enums.MemberRole;
    inviteStatus?: $Enums.InviteStatus;
    joinedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    leftAt?: Date | string | null;
};
export type TripMemberUpdateWithoutTripInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumMemberRoleFieldUpdateOperationsInput | $Enums.MemberRole;
    inviteStatus?: Prisma.EnumInviteStatusFieldUpdateOperationsInput | $Enums.InviteStatus;
    joinedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    leftAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    user?: Prisma.UserUpdateOneRequiredWithoutTripMembersNestedInput;
};
export type TripMemberUncheckedUpdateWithoutTripInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumMemberRoleFieldUpdateOperationsInput | $Enums.MemberRole;
    inviteStatus?: Prisma.EnumInviteStatusFieldUpdateOperationsInput | $Enums.InviteStatus;
    joinedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    leftAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type TripMemberUncheckedUpdateManyWithoutTripInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumMemberRoleFieldUpdateOperationsInput | $Enums.MemberRole;
    inviteStatus?: Prisma.EnumInviteStatusFieldUpdateOperationsInput | $Enums.InviteStatus;
    joinedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    leftAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type TripMemberSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    tripId?: boolean;
    userId?: boolean;
    role?: boolean;
    inviteStatus?: boolean;
    joinedAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    leftAt?: boolean;
    trip?: boolean | Prisma.TripDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["tripMember"]>;
export type TripMemberSelectScalar = {
    id?: boolean;
    tripId?: boolean;
    userId?: boolean;
    role?: boolean;
    inviteStatus?: boolean;
    joinedAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    leftAt?: boolean;
};
export type TripMemberOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "tripId" | "userId" | "role" | "inviteStatus" | "joinedAt" | "createdAt" | "updatedAt" | "leftAt", ExtArgs["result"]["tripMember"]>;
export type TripMemberInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    trip?: boolean | Prisma.TripDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $TripMemberPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "TripMember";
    objects: {
        trip: Prisma.$TripPayload<ExtArgs>;
        user: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        tripId: string;
        userId: string;
        role: $Enums.MemberRole;
        inviteStatus: $Enums.InviteStatus;
        joinedAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
        leftAt: Date | null;
    }, ExtArgs["result"]["tripMember"]>;
    composites: {};
};
export type TripMemberGetPayload<S extends boolean | null | undefined | TripMemberDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$TripMemberPayload, S>;
export type TripMemberCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<TripMemberFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: TripMemberCountAggregateInputType | true;
};
export interface TripMemberDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['TripMember'];
        meta: {
            name: 'TripMember';
        };
    };
    findUnique<T extends TripMemberFindUniqueArgs>(args: Prisma.SelectSubset<T, TripMemberFindUniqueArgs<ExtArgs>>): Prisma.Prisma__TripMemberClient<runtime.Types.Result.GetResult<Prisma.$TripMemberPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends TripMemberFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, TripMemberFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__TripMemberClient<runtime.Types.Result.GetResult<Prisma.$TripMemberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends TripMemberFindFirstArgs>(args?: Prisma.SelectSubset<T, TripMemberFindFirstArgs<ExtArgs>>): Prisma.Prisma__TripMemberClient<runtime.Types.Result.GetResult<Prisma.$TripMemberPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends TripMemberFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, TripMemberFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__TripMemberClient<runtime.Types.Result.GetResult<Prisma.$TripMemberPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends TripMemberFindManyArgs>(args?: Prisma.SelectSubset<T, TripMemberFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TripMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends TripMemberCreateArgs>(args: Prisma.SelectSubset<T, TripMemberCreateArgs<ExtArgs>>): Prisma.Prisma__TripMemberClient<runtime.Types.Result.GetResult<Prisma.$TripMemberPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends TripMemberCreateManyArgs>(args?: Prisma.SelectSubset<T, TripMemberCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    delete<T extends TripMemberDeleteArgs>(args: Prisma.SelectSubset<T, TripMemberDeleteArgs<ExtArgs>>): Prisma.Prisma__TripMemberClient<runtime.Types.Result.GetResult<Prisma.$TripMemberPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends TripMemberUpdateArgs>(args: Prisma.SelectSubset<T, TripMemberUpdateArgs<ExtArgs>>): Prisma.Prisma__TripMemberClient<runtime.Types.Result.GetResult<Prisma.$TripMemberPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends TripMemberDeleteManyArgs>(args?: Prisma.SelectSubset<T, TripMemberDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends TripMemberUpdateManyArgs>(args: Prisma.SelectSubset<T, TripMemberUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    upsert<T extends TripMemberUpsertArgs>(args: Prisma.SelectSubset<T, TripMemberUpsertArgs<ExtArgs>>): Prisma.Prisma__TripMemberClient<runtime.Types.Result.GetResult<Prisma.$TripMemberPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends TripMemberCountArgs>(args?: Prisma.Subset<T, TripMemberCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], TripMemberCountAggregateOutputType> : number>;
    aggregate<T extends TripMemberAggregateArgs>(args: Prisma.Subset<T, TripMemberAggregateArgs>): Prisma.PrismaPromise<GetTripMemberAggregateType<T>>;
    groupBy<T extends TripMemberGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: TripMemberGroupByArgs['orderBy'];
    } : {
        orderBy?: TripMemberGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, TripMemberGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTripMemberGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: TripMemberFieldRefs;
}
export interface Prisma__TripMemberClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    trip<T extends Prisma.TripDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.TripDefaultArgs<ExtArgs>>): Prisma.Prisma__TripClient<runtime.Types.Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface TripMemberFieldRefs {
    readonly id: Prisma.FieldRef<"TripMember", 'String'>;
    readonly tripId: Prisma.FieldRef<"TripMember", 'String'>;
    readonly userId: Prisma.FieldRef<"TripMember", 'String'>;
    readonly role: Prisma.FieldRef<"TripMember", 'MemberRole'>;
    readonly inviteStatus: Prisma.FieldRef<"TripMember", 'InviteStatus'>;
    readonly joinedAt: Prisma.FieldRef<"TripMember", 'DateTime'>;
    readonly createdAt: Prisma.FieldRef<"TripMember", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"TripMember", 'DateTime'>;
    readonly leftAt: Prisma.FieldRef<"TripMember", 'DateTime'>;
}
export type TripMemberFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TripMemberSelect<ExtArgs> | null;
    omit?: Prisma.TripMemberOmit<ExtArgs> | null;
    include?: Prisma.TripMemberInclude<ExtArgs> | null;
    where: Prisma.TripMemberWhereUniqueInput;
};
export type TripMemberFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TripMemberSelect<ExtArgs> | null;
    omit?: Prisma.TripMemberOmit<ExtArgs> | null;
    include?: Prisma.TripMemberInclude<ExtArgs> | null;
    where: Prisma.TripMemberWhereUniqueInput;
};
export type TripMemberFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type TripMemberFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type TripMemberFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type TripMemberCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TripMemberSelect<ExtArgs> | null;
    omit?: Prisma.TripMemberOmit<ExtArgs> | null;
    include?: Prisma.TripMemberInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TripMemberCreateInput, Prisma.TripMemberUncheckedCreateInput>;
};
export type TripMemberCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.TripMemberCreateManyInput | Prisma.TripMemberCreateManyInput[];
    skipDuplicates?: boolean;
};
export type TripMemberUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TripMemberSelect<ExtArgs> | null;
    omit?: Prisma.TripMemberOmit<ExtArgs> | null;
    include?: Prisma.TripMemberInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TripMemberUpdateInput, Prisma.TripMemberUncheckedUpdateInput>;
    where: Prisma.TripMemberWhereUniqueInput;
};
export type TripMemberUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.TripMemberUpdateManyMutationInput, Prisma.TripMemberUncheckedUpdateManyInput>;
    where?: Prisma.TripMemberWhereInput;
    limit?: number;
};
export type TripMemberUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TripMemberSelect<ExtArgs> | null;
    omit?: Prisma.TripMemberOmit<ExtArgs> | null;
    include?: Prisma.TripMemberInclude<ExtArgs> | null;
    where: Prisma.TripMemberWhereUniqueInput;
    create: Prisma.XOR<Prisma.TripMemberCreateInput, Prisma.TripMemberUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.TripMemberUpdateInput, Prisma.TripMemberUncheckedUpdateInput>;
};
export type TripMemberDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TripMemberSelect<ExtArgs> | null;
    omit?: Prisma.TripMemberOmit<ExtArgs> | null;
    include?: Prisma.TripMemberInclude<ExtArgs> | null;
    where: Prisma.TripMemberWhereUniqueInput;
};
export type TripMemberDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TripMemberWhereInput;
    limit?: number;
};
export type TripMemberDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TripMemberSelect<ExtArgs> | null;
    omit?: Prisma.TripMemberOmit<ExtArgs> | null;
    include?: Prisma.TripMemberInclude<ExtArgs> | null;
};
export {};
