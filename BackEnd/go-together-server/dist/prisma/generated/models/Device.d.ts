import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type DeviceModel = runtime.Types.Result.DefaultSelection<Prisma.$DevicePayload>;
export type AggregateDevice = {
    _count: DeviceCountAggregateOutputType | null;
    _avg: DeviceAvgAggregateOutputType | null;
    _sum: DeviceSumAggregateOutputType | null;
    _min: DeviceMinAggregateOutputType | null;
    _max: DeviceMaxAggregateOutputType | null;
};
export type DeviceAvgAggregateOutputType = {
    id: number | null;
};
export type DeviceSumAggregateOutputType = {
    id: number | null;
};
export type DeviceMinAggregateOutputType = {
    id: number | null;
    deviceId: string | null;
    fcmToken: string | null;
    userId: string | null;
    platform: string | null;
    locale: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type DeviceMaxAggregateOutputType = {
    id: number | null;
    deviceId: string | null;
    fcmToken: string | null;
    userId: string | null;
    platform: string | null;
    locale: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type DeviceCountAggregateOutputType = {
    id: number;
    deviceId: number;
    fcmToken: number;
    userId: number;
    platform: number;
    locale: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type DeviceAvgAggregateInputType = {
    id?: true;
};
export type DeviceSumAggregateInputType = {
    id?: true;
};
export type DeviceMinAggregateInputType = {
    id?: true;
    deviceId?: true;
    fcmToken?: true;
    userId?: true;
    platform?: true;
    locale?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type DeviceMaxAggregateInputType = {
    id?: true;
    deviceId?: true;
    fcmToken?: true;
    userId?: true;
    platform?: true;
    locale?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type DeviceCountAggregateInputType = {
    id?: true;
    deviceId?: true;
    fcmToken?: true;
    userId?: true;
    platform?: true;
    locale?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type DeviceAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DeviceWhereInput;
    orderBy?: Prisma.DeviceOrderByWithRelationInput | Prisma.DeviceOrderByWithRelationInput[];
    cursor?: Prisma.DeviceWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | DeviceCountAggregateInputType;
    _avg?: DeviceAvgAggregateInputType;
    _sum?: DeviceSumAggregateInputType;
    _min?: DeviceMinAggregateInputType;
    _max?: DeviceMaxAggregateInputType;
};
export type GetDeviceAggregateType<T extends DeviceAggregateArgs> = {
    [P in keyof T & keyof AggregateDevice]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateDevice[P]> : Prisma.GetScalarType<T[P], AggregateDevice[P]>;
};
export type DeviceGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DeviceWhereInput;
    orderBy?: Prisma.DeviceOrderByWithAggregationInput | Prisma.DeviceOrderByWithAggregationInput[];
    by: Prisma.DeviceScalarFieldEnum[] | Prisma.DeviceScalarFieldEnum;
    having?: Prisma.DeviceScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: DeviceCountAggregateInputType | true;
    _avg?: DeviceAvgAggregateInputType;
    _sum?: DeviceSumAggregateInputType;
    _min?: DeviceMinAggregateInputType;
    _max?: DeviceMaxAggregateInputType;
};
export type DeviceGroupByOutputType = {
    id: number;
    deviceId: string;
    fcmToken: string;
    userId: string;
    platform: string | null;
    locale: string | null;
    createdAt: Date;
    updatedAt: Date;
    _count: DeviceCountAggregateOutputType | null;
    _avg: DeviceAvgAggregateOutputType | null;
    _sum: DeviceSumAggregateOutputType | null;
    _min: DeviceMinAggregateOutputType | null;
    _max: DeviceMaxAggregateOutputType | null;
};
type GetDeviceGroupByPayload<T extends DeviceGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<DeviceGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof DeviceGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], DeviceGroupByOutputType[P]> : Prisma.GetScalarType<T[P], DeviceGroupByOutputType[P]>;
}>>;
export type DeviceWhereInput = {
    AND?: Prisma.DeviceWhereInput | Prisma.DeviceWhereInput[];
    OR?: Prisma.DeviceWhereInput[];
    NOT?: Prisma.DeviceWhereInput | Prisma.DeviceWhereInput[];
    id?: Prisma.IntFilter<"Device"> | number;
    deviceId?: Prisma.StringFilter<"Device"> | string;
    fcmToken?: Prisma.StringFilter<"Device"> | string;
    userId?: Prisma.StringFilter<"Device"> | string;
    platform?: Prisma.StringNullableFilter<"Device"> | string | null;
    locale?: Prisma.StringNullableFilter<"Device"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Device"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Device"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
};
export type DeviceOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    deviceId?: Prisma.SortOrder;
    fcmToken?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    platform?: Prisma.SortOrderInput | Prisma.SortOrder;
    locale?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    user?: Prisma.UserOrderByWithRelationInput;
    _relevance?: Prisma.DeviceOrderByRelevanceInput;
};
export type DeviceWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.DeviceWhereInput | Prisma.DeviceWhereInput[];
    OR?: Prisma.DeviceWhereInput[];
    NOT?: Prisma.DeviceWhereInput | Prisma.DeviceWhereInput[];
    deviceId?: Prisma.StringFilter<"Device"> | string;
    fcmToken?: Prisma.StringFilter<"Device"> | string;
    userId?: Prisma.StringFilter<"Device"> | string;
    platform?: Prisma.StringNullableFilter<"Device"> | string | null;
    locale?: Prisma.StringNullableFilter<"Device"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Device"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Device"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
}, "id">;
export type DeviceOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    deviceId?: Prisma.SortOrder;
    fcmToken?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    platform?: Prisma.SortOrderInput | Prisma.SortOrder;
    locale?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.DeviceCountOrderByAggregateInput;
    _avg?: Prisma.DeviceAvgOrderByAggregateInput;
    _max?: Prisma.DeviceMaxOrderByAggregateInput;
    _min?: Prisma.DeviceMinOrderByAggregateInput;
    _sum?: Prisma.DeviceSumOrderByAggregateInput;
};
export type DeviceScalarWhereWithAggregatesInput = {
    AND?: Prisma.DeviceScalarWhereWithAggregatesInput | Prisma.DeviceScalarWhereWithAggregatesInput[];
    OR?: Prisma.DeviceScalarWhereWithAggregatesInput[];
    NOT?: Prisma.DeviceScalarWhereWithAggregatesInput | Prisma.DeviceScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Device"> | number;
    deviceId?: Prisma.StringWithAggregatesFilter<"Device"> | string;
    fcmToken?: Prisma.StringWithAggregatesFilter<"Device"> | string;
    userId?: Prisma.StringWithAggregatesFilter<"Device"> | string;
    platform?: Prisma.StringNullableWithAggregatesFilter<"Device"> | string | null;
    locale?: Prisma.StringNullableWithAggregatesFilter<"Device"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Device"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Device"> | Date | string;
};
export type DeviceCreateInput = {
    deviceId: string;
    fcmToken: string;
    platform?: string | null;
    locale?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutDevicesInput;
};
export type DeviceUncheckedCreateInput = {
    id?: number;
    deviceId: string;
    fcmToken: string;
    userId: string;
    platform?: string | null;
    locale?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type DeviceUpdateInput = {
    deviceId?: Prisma.StringFieldUpdateOperationsInput | string;
    fcmToken?: Prisma.StringFieldUpdateOperationsInput | string;
    platform?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    locale?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutDevicesNestedInput;
};
export type DeviceUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    deviceId?: Prisma.StringFieldUpdateOperationsInput | string;
    fcmToken?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    platform?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    locale?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DeviceCreateManyInput = {
    id?: number;
    deviceId: string;
    fcmToken: string;
    userId: string;
    platform?: string | null;
    locale?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type DeviceUpdateManyMutationInput = {
    deviceId?: Prisma.StringFieldUpdateOperationsInput | string;
    fcmToken?: Prisma.StringFieldUpdateOperationsInput | string;
    platform?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    locale?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DeviceUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    deviceId?: Prisma.StringFieldUpdateOperationsInput | string;
    fcmToken?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    platform?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    locale?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DeviceListRelationFilter = {
    every?: Prisma.DeviceWhereInput;
    some?: Prisma.DeviceWhereInput;
    none?: Prisma.DeviceWhereInput;
};
export type DeviceOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type DeviceOrderByRelevanceInput = {
    fields: Prisma.DeviceOrderByRelevanceFieldEnum | Prisma.DeviceOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type DeviceCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    deviceId?: Prisma.SortOrder;
    fcmToken?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    platform?: Prisma.SortOrder;
    locale?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type DeviceAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type DeviceMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    deviceId?: Prisma.SortOrder;
    fcmToken?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    platform?: Prisma.SortOrder;
    locale?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type DeviceMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    deviceId?: Prisma.SortOrder;
    fcmToken?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    platform?: Prisma.SortOrder;
    locale?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type DeviceSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type DeviceCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.DeviceCreateWithoutUserInput, Prisma.DeviceUncheckedCreateWithoutUserInput> | Prisma.DeviceCreateWithoutUserInput[] | Prisma.DeviceUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.DeviceCreateOrConnectWithoutUserInput | Prisma.DeviceCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.DeviceCreateManyUserInputEnvelope;
    connect?: Prisma.DeviceWhereUniqueInput | Prisma.DeviceWhereUniqueInput[];
};
export type DeviceUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.DeviceCreateWithoutUserInput, Prisma.DeviceUncheckedCreateWithoutUserInput> | Prisma.DeviceCreateWithoutUserInput[] | Prisma.DeviceUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.DeviceCreateOrConnectWithoutUserInput | Prisma.DeviceCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.DeviceCreateManyUserInputEnvelope;
    connect?: Prisma.DeviceWhereUniqueInput | Prisma.DeviceWhereUniqueInput[];
};
export type DeviceUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.DeviceCreateWithoutUserInput, Prisma.DeviceUncheckedCreateWithoutUserInput> | Prisma.DeviceCreateWithoutUserInput[] | Prisma.DeviceUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.DeviceCreateOrConnectWithoutUserInput | Prisma.DeviceCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.DeviceUpsertWithWhereUniqueWithoutUserInput | Prisma.DeviceUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.DeviceCreateManyUserInputEnvelope;
    set?: Prisma.DeviceWhereUniqueInput | Prisma.DeviceWhereUniqueInput[];
    disconnect?: Prisma.DeviceWhereUniqueInput | Prisma.DeviceWhereUniqueInput[];
    delete?: Prisma.DeviceWhereUniqueInput | Prisma.DeviceWhereUniqueInput[];
    connect?: Prisma.DeviceWhereUniqueInput | Prisma.DeviceWhereUniqueInput[];
    update?: Prisma.DeviceUpdateWithWhereUniqueWithoutUserInput | Prisma.DeviceUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.DeviceUpdateManyWithWhereWithoutUserInput | Prisma.DeviceUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.DeviceScalarWhereInput | Prisma.DeviceScalarWhereInput[];
};
export type DeviceUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.DeviceCreateWithoutUserInput, Prisma.DeviceUncheckedCreateWithoutUserInput> | Prisma.DeviceCreateWithoutUserInput[] | Prisma.DeviceUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.DeviceCreateOrConnectWithoutUserInput | Prisma.DeviceCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.DeviceUpsertWithWhereUniqueWithoutUserInput | Prisma.DeviceUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.DeviceCreateManyUserInputEnvelope;
    set?: Prisma.DeviceWhereUniqueInput | Prisma.DeviceWhereUniqueInput[];
    disconnect?: Prisma.DeviceWhereUniqueInput | Prisma.DeviceWhereUniqueInput[];
    delete?: Prisma.DeviceWhereUniqueInput | Prisma.DeviceWhereUniqueInput[];
    connect?: Prisma.DeviceWhereUniqueInput | Prisma.DeviceWhereUniqueInput[];
    update?: Prisma.DeviceUpdateWithWhereUniqueWithoutUserInput | Prisma.DeviceUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.DeviceUpdateManyWithWhereWithoutUserInput | Prisma.DeviceUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.DeviceScalarWhereInput | Prisma.DeviceScalarWhereInput[];
};
export type DeviceCreateWithoutUserInput = {
    deviceId: string;
    fcmToken: string;
    platform?: string | null;
    locale?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type DeviceUncheckedCreateWithoutUserInput = {
    id?: number;
    deviceId: string;
    fcmToken: string;
    platform?: string | null;
    locale?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type DeviceCreateOrConnectWithoutUserInput = {
    where: Prisma.DeviceWhereUniqueInput;
    create: Prisma.XOR<Prisma.DeviceCreateWithoutUserInput, Prisma.DeviceUncheckedCreateWithoutUserInput>;
};
export type DeviceCreateManyUserInputEnvelope = {
    data: Prisma.DeviceCreateManyUserInput | Prisma.DeviceCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type DeviceUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.DeviceWhereUniqueInput;
    update: Prisma.XOR<Prisma.DeviceUpdateWithoutUserInput, Prisma.DeviceUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.DeviceCreateWithoutUserInput, Prisma.DeviceUncheckedCreateWithoutUserInput>;
};
export type DeviceUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.DeviceWhereUniqueInput;
    data: Prisma.XOR<Prisma.DeviceUpdateWithoutUserInput, Prisma.DeviceUncheckedUpdateWithoutUserInput>;
};
export type DeviceUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.DeviceScalarWhereInput;
    data: Prisma.XOR<Prisma.DeviceUpdateManyMutationInput, Prisma.DeviceUncheckedUpdateManyWithoutUserInput>;
};
export type DeviceScalarWhereInput = {
    AND?: Prisma.DeviceScalarWhereInput | Prisma.DeviceScalarWhereInput[];
    OR?: Prisma.DeviceScalarWhereInput[];
    NOT?: Prisma.DeviceScalarWhereInput | Prisma.DeviceScalarWhereInput[];
    id?: Prisma.IntFilter<"Device"> | number;
    deviceId?: Prisma.StringFilter<"Device"> | string;
    fcmToken?: Prisma.StringFilter<"Device"> | string;
    userId?: Prisma.StringFilter<"Device"> | string;
    platform?: Prisma.StringNullableFilter<"Device"> | string | null;
    locale?: Prisma.StringNullableFilter<"Device"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Device"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Device"> | Date | string;
};
export type DeviceCreateManyUserInput = {
    id?: number;
    deviceId: string;
    fcmToken: string;
    platform?: string | null;
    locale?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type DeviceUpdateWithoutUserInput = {
    deviceId?: Prisma.StringFieldUpdateOperationsInput | string;
    fcmToken?: Prisma.StringFieldUpdateOperationsInput | string;
    platform?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    locale?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DeviceUncheckedUpdateWithoutUserInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    deviceId?: Prisma.StringFieldUpdateOperationsInput | string;
    fcmToken?: Prisma.StringFieldUpdateOperationsInput | string;
    platform?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    locale?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DeviceUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    deviceId?: Prisma.StringFieldUpdateOperationsInput | string;
    fcmToken?: Prisma.StringFieldUpdateOperationsInput | string;
    platform?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    locale?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DeviceSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    deviceId?: boolean;
    fcmToken?: boolean;
    userId?: boolean;
    platform?: boolean;
    locale?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["device"]>;
export type DeviceSelectScalar = {
    id?: boolean;
    deviceId?: boolean;
    fcmToken?: boolean;
    userId?: boolean;
    platform?: boolean;
    locale?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type DeviceOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "deviceId" | "fcmToken" | "userId" | "platform" | "locale" | "createdAt" | "updatedAt", ExtArgs["result"]["device"]>;
export type DeviceInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $DevicePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Device";
    objects: {
        user: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        deviceId: string;
        fcmToken: string;
        userId: string;
        platform: string | null;
        locale: string | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["device"]>;
    composites: {};
};
export type DeviceGetPayload<S extends boolean | null | undefined | DeviceDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$DevicePayload, S>;
export type DeviceCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<DeviceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: DeviceCountAggregateInputType | true;
};
export interface DeviceDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Device'];
        meta: {
            name: 'Device';
        };
    };
    findUnique<T extends DeviceFindUniqueArgs>(args: Prisma.SelectSubset<T, DeviceFindUniqueArgs<ExtArgs>>): Prisma.Prisma__DeviceClient<runtime.Types.Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends DeviceFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, DeviceFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__DeviceClient<runtime.Types.Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends DeviceFindFirstArgs>(args?: Prisma.SelectSubset<T, DeviceFindFirstArgs<ExtArgs>>): Prisma.Prisma__DeviceClient<runtime.Types.Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends DeviceFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, DeviceFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__DeviceClient<runtime.Types.Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends DeviceFindManyArgs>(args?: Prisma.SelectSubset<T, DeviceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends DeviceCreateArgs>(args: Prisma.SelectSubset<T, DeviceCreateArgs<ExtArgs>>): Prisma.Prisma__DeviceClient<runtime.Types.Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends DeviceCreateManyArgs>(args?: Prisma.SelectSubset<T, DeviceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    delete<T extends DeviceDeleteArgs>(args: Prisma.SelectSubset<T, DeviceDeleteArgs<ExtArgs>>): Prisma.Prisma__DeviceClient<runtime.Types.Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends DeviceUpdateArgs>(args: Prisma.SelectSubset<T, DeviceUpdateArgs<ExtArgs>>): Prisma.Prisma__DeviceClient<runtime.Types.Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends DeviceDeleteManyArgs>(args?: Prisma.SelectSubset<T, DeviceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends DeviceUpdateManyArgs>(args: Prisma.SelectSubset<T, DeviceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    upsert<T extends DeviceUpsertArgs>(args: Prisma.SelectSubset<T, DeviceUpsertArgs<ExtArgs>>): Prisma.Prisma__DeviceClient<runtime.Types.Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends DeviceCountArgs>(args?: Prisma.Subset<T, DeviceCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], DeviceCountAggregateOutputType> : number>;
    aggregate<T extends DeviceAggregateArgs>(args: Prisma.Subset<T, DeviceAggregateArgs>): Prisma.PrismaPromise<GetDeviceAggregateType<T>>;
    groupBy<T extends DeviceGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: DeviceGroupByArgs['orderBy'];
    } : {
        orderBy?: DeviceGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, DeviceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDeviceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: DeviceFieldRefs;
}
export interface Prisma__DeviceClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface DeviceFieldRefs {
    readonly id: Prisma.FieldRef<"Device", 'Int'>;
    readonly deviceId: Prisma.FieldRef<"Device", 'String'>;
    readonly fcmToken: Prisma.FieldRef<"Device", 'String'>;
    readonly userId: Prisma.FieldRef<"Device", 'String'>;
    readonly platform: Prisma.FieldRef<"Device", 'String'>;
    readonly locale: Prisma.FieldRef<"Device", 'String'>;
    readonly createdAt: Prisma.FieldRef<"Device", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Device", 'DateTime'>;
}
export type DeviceFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DeviceSelect<ExtArgs> | null;
    omit?: Prisma.DeviceOmit<ExtArgs> | null;
    include?: Prisma.DeviceInclude<ExtArgs> | null;
    where: Prisma.DeviceWhereUniqueInput;
};
export type DeviceFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DeviceSelect<ExtArgs> | null;
    omit?: Prisma.DeviceOmit<ExtArgs> | null;
    include?: Prisma.DeviceInclude<ExtArgs> | null;
    where: Prisma.DeviceWhereUniqueInput;
};
export type DeviceFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DeviceSelect<ExtArgs> | null;
    omit?: Prisma.DeviceOmit<ExtArgs> | null;
    include?: Prisma.DeviceInclude<ExtArgs> | null;
    where?: Prisma.DeviceWhereInput;
    orderBy?: Prisma.DeviceOrderByWithRelationInput | Prisma.DeviceOrderByWithRelationInput[];
    cursor?: Prisma.DeviceWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.DeviceScalarFieldEnum | Prisma.DeviceScalarFieldEnum[];
};
export type DeviceFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DeviceSelect<ExtArgs> | null;
    omit?: Prisma.DeviceOmit<ExtArgs> | null;
    include?: Prisma.DeviceInclude<ExtArgs> | null;
    where?: Prisma.DeviceWhereInput;
    orderBy?: Prisma.DeviceOrderByWithRelationInput | Prisma.DeviceOrderByWithRelationInput[];
    cursor?: Prisma.DeviceWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.DeviceScalarFieldEnum | Prisma.DeviceScalarFieldEnum[];
};
export type DeviceFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DeviceSelect<ExtArgs> | null;
    omit?: Prisma.DeviceOmit<ExtArgs> | null;
    include?: Prisma.DeviceInclude<ExtArgs> | null;
    where?: Prisma.DeviceWhereInput;
    orderBy?: Prisma.DeviceOrderByWithRelationInput | Prisma.DeviceOrderByWithRelationInput[];
    cursor?: Prisma.DeviceWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.DeviceScalarFieldEnum | Prisma.DeviceScalarFieldEnum[];
};
export type DeviceCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DeviceSelect<ExtArgs> | null;
    omit?: Prisma.DeviceOmit<ExtArgs> | null;
    include?: Prisma.DeviceInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.DeviceCreateInput, Prisma.DeviceUncheckedCreateInput>;
};
export type DeviceCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.DeviceCreateManyInput | Prisma.DeviceCreateManyInput[];
    skipDuplicates?: boolean;
};
export type DeviceUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DeviceSelect<ExtArgs> | null;
    omit?: Prisma.DeviceOmit<ExtArgs> | null;
    include?: Prisma.DeviceInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.DeviceUpdateInput, Prisma.DeviceUncheckedUpdateInput>;
    where: Prisma.DeviceWhereUniqueInput;
};
export type DeviceUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.DeviceUpdateManyMutationInput, Prisma.DeviceUncheckedUpdateManyInput>;
    where?: Prisma.DeviceWhereInput;
    limit?: number;
};
export type DeviceUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DeviceSelect<ExtArgs> | null;
    omit?: Prisma.DeviceOmit<ExtArgs> | null;
    include?: Prisma.DeviceInclude<ExtArgs> | null;
    where: Prisma.DeviceWhereUniqueInput;
    create: Prisma.XOR<Prisma.DeviceCreateInput, Prisma.DeviceUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.DeviceUpdateInput, Prisma.DeviceUncheckedUpdateInput>;
};
export type DeviceDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DeviceSelect<ExtArgs> | null;
    omit?: Prisma.DeviceOmit<ExtArgs> | null;
    include?: Prisma.DeviceInclude<ExtArgs> | null;
    where: Prisma.DeviceWhereUniqueInput;
};
export type DeviceDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DeviceWhereInput;
    limit?: number;
};
export type DeviceDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DeviceSelect<ExtArgs> | null;
    omit?: Prisma.DeviceOmit<ExtArgs> | null;
    include?: Prisma.DeviceInclude<ExtArgs> | null;
};
export {};
