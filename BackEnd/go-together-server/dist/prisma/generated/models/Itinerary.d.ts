import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type ItineraryModel = runtime.Types.Result.DefaultSelection<Prisma.$ItineraryPayload>;
export type AggregateItinerary = {
    _count: ItineraryCountAggregateOutputType | null;
    _min: ItineraryMinAggregateOutputType | null;
    _max: ItineraryMaxAggregateOutputType | null;
};
export type ItineraryMinAggregateOutputType = {
    id: string | null;
    tripId: string | null;
    date: Date | null;
    title: string | null;
    description: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ItineraryMaxAggregateOutputType = {
    id: string | null;
    tripId: string | null;
    date: Date | null;
    title: string | null;
    description: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ItineraryCountAggregateOutputType = {
    id: number;
    tripId: number;
    date: number;
    title: number;
    description: number;
    activities: number;
    photos: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type ItineraryMinAggregateInputType = {
    id?: true;
    tripId?: true;
    date?: true;
    title?: true;
    description?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ItineraryMaxAggregateInputType = {
    id?: true;
    tripId?: true;
    date?: true;
    title?: true;
    description?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ItineraryCountAggregateInputType = {
    id?: true;
    tripId?: true;
    date?: true;
    title?: true;
    description?: true;
    activities?: true;
    photos?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type ItineraryAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ItineraryWhereInput;
    orderBy?: Prisma.ItineraryOrderByWithRelationInput | Prisma.ItineraryOrderByWithRelationInput[];
    cursor?: Prisma.ItineraryWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ItineraryCountAggregateInputType;
    _min?: ItineraryMinAggregateInputType;
    _max?: ItineraryMaxAggregateInputType;
};
export type GetItineraryAggregateType<T extends ItineraryAggregateArgs> = {
    [P in keyof T & keyof AggregateItinerary]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateItinerary[P]> : Prisma.GetScalarType<T[P], AggregateItinerary[P]>;
};
export type ItineraryGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ItineraryWhereInput;
    orderBy?: Prisma.ItineraryOrderByWithAggregationInput | Prisma.ItineraryOrderByWithAggregationInput[];
    by: Prisma.ItineraryScalarFieldEnum[] | Prisma.ItineraryScalarFieldEnum;
    having?: Prisma.ItineraryScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ItineraryCountAggregateInputType | true;
    _min?: ItineraryMinAggregateInputType;
    _max?: ItineraryMaxAggregateInputType;
};
export type ItineraryGroupByOutputType = {
    id: string;
    tripId: string;
    date: Date;
    title: string;
    description: string | null;
    activities: runtime.JsonValue | null;
    photos: runtime.JsonValue | null;
    createdAt: Date;
    updatedAt: Date;
    _count: ItineraryCountAggregateOutputType | null;
    _min: ItineraryMinAggregateOutputType | null;
    _max: ItineraryMaxAggregateOutputType | null;
};
type GetItineraryGroupByPayload<T extends ItineraryGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ItineraryGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ItineraryGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ItineraryGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ItineraryGroupByOutputType[P]>;
}>>;
export type ItineraryWhereInput = {
    AND?: Prisma.ItineraryWhereInput | Prisma.ItineraryWhereInput[];
    OR?: Prisma.ItineraryWhereInput[];
    NOT?: Prisma.ItineraryWhereInput | Prisma.ItineraryWhereInput[];
    id?: Prisma.StringFilter<"Itinerary"> | string;
    tripId?: Prisma.StringFilter<"Itinerary"> | string;
    date?: Prisma.DateTimeFilter<"Itinerary"> | Date | string;
    title?: Prisma.StringFilter<"Itinerary"> | string;
    description?: Prisma.StringNullableFilter<"Itinerary"> | string | null;
    activities?: Prisma.JsonNullableFilter<"Itinerary">;
    photos?: Prisma.JsonNullableFilter<"Itinerary">;
    createdAt?: Prisma.DateTimeFilter<"Itinerary"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Itinerary"> | Date | string;
    trip?: Prisma.XOR<Prisma.TripScalarRelationFilter, Prisma.TripWhereInput>;
};
export type ItineraryOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    tripId?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    activities?: Prisma.SortOrderInput | Prisma.SortOrder;
    photos?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    trip?: Prisma.TripOrderByWithRelationInput;
    _relevance?: Prisma.ItineraryOrderByRelevanceInput;
};
export type ItineraryWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.ItineraryWhereInput | Prisma.ItineraryWhereInput[];
    OR?: Prisma.ItineraryWhereInput[];
    NOT?: Prisma.ItineraryWhereInput | Prisma.ItineraryWhereInput[];
    tripId?: Prisma.StringFilter<"Itinerary"> | string;
    date?: Prisma.DateTimeFilter<"Itinerary"> | Date | string;
    title?: Prisma.StringFilter<"Itinerary"> | string;
    description?: Prisma.StringNullableFilter<"Itinerary"> | string | null;
    activities?: Prisma.JsonNullableFilter<"Itinerary">;
    photos?: Prisma.JsonNullableFilter<"Itinerary">;
    createdAt?: Prisma.DateTimeFilter<"Itinerary"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Itinerary"> | Date | string;
    trip?: Prisma.XOR<Prisma.TripScalarRelationFilter, Prisma.TripWhereInput>;
}, "id">;
export type ItineraryOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    tripId?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    activities?: Prisma.SortOrderInput | Prisma.SortOrder;
    photos?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.ItineraryCountOrderByAggregateInput;
    _max?: Prisma.ItineraryMaxOrderByAggregateInput;
    _min?: Prisma.ItineraryMinOrderByAggregateInput;
};
export type ItineraryScalarWhereWithAggregatesInput = {
    AND?: Prisma.ItineraryScalarWhereWithAggregatesInput | Prisma.ItineraryScalarWhereWithAggregatesInput[];
    OR?: Prisma.ItineraryScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ItineraryScalarWhereWithAggregatesInput | Prisma.ItineraryScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Itinerary"> | string;
    tripId?: Prisma.StringWithAggregatesFilter<"Itinerary"> | string;
    date?: Prisma.DateTimeWithAggregatesFilter<"Itinerary"> | Date | string;
    title?: Prisma.StringWithAggregatesFilter<"Itinerary"> | string;
    description?: Prisma.StringNullableWithAggregatesFilter<"Itinerary"> | string | null;
    activities?: Prisma.JsonNullableWithAggregatesFilter<"Itinerary">;
    photos?: Prisma.JsonNullableWithAggregatesFilter<"Itinerary">;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Itinerary"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Itinerary"> | Date | string;
};
export type ItineraryCreateInput = {
    id?: string;
    date: Date | string;
    title: string;
    description?: string | null;
    activities?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    photos?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    trip: Prisma.TripCreateNestedOneWithoutItinerariesInput;
};
export type ItineraryUncheckedCreateInput = {
    id?: string;
    tripId: string;
    date: Date | string;
    title: string;
    description?: string | null;
    activities?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    photos?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ItineraryUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    activities?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    photos?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    trip?: Prisma.TripUpdateOneRequiredWithoutItinerariesNestedInput;
};
export type ItineraryUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tripId?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    activities?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    photos?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ItineraryCreateManyInput = {
    id?: string;
    tripId: string;
    date: Date | string;
    title: string;
    description?: string | null;
    activities?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    photos?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ItineraryUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    activities?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    photos?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ItineraryUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tripId?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    activities?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    photos?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ItineraryListRelationFilter = {
    every?: Prisma.ItineraryWhereInput;
    some?: Prisma.ItineraryWhereInput;
    none?: Prisma.ItineraryWhereInput;
};
export type ItineraryOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ItineraryOrderByRelevanceInput = {
    fields: Prisma.ItineraryOrderByRelevanceFieldEnum | Prisma.ItineraryOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type ItineraryCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    tripId?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    activities?: Prisma.SortOrder;
    photos?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ItineraryMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    tripId?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ItineraryMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    tripId?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ItineraryCreateNestedManyWithoutTripInput = {
    create?: Prisma.XOR<Prisma.ItineraryCreateWithoutTripInput, Prisma.ItineraryUncheckedCreateWithoutTripInput> | Prisma.ItineraryCreateWithoutTripInput[] | Prisma.ItineraryUncheckedCreateWithoutTripInput[];
    connectOrCreate?: Prisma.ItineraryCreateOrConnectWithoutTripInput | Prisma.ItineraryCreateOrConnectWithoutTripInput[];
    createMany?: Prisma.ItineraryCreateManyTripInputEnvelope;
    connect?: Prisma.ItineraryWhereUniqueInput | Prisma.ItineraryWhereUniqueInput[];
};
export type ItineraryUncheckedCreateNestedManyWithoutTripInput = {
    create?: Prisma.XOR<Prisma.ItineraryCreateWithoutTripInput, Prisma.ItineraryUncheckedCreateWithoutTripInput> | Prisma.ItineraryCreateWithoutTripInput[] | Prisma.ItineraryUncheckedCreateWithoutTripInput[];
    connectOrCreate?: Prisma.ItineraryCreateOrConnectWithoutTripInput | Prisma.ItineraryCreateOrConnectWithoutTripInput[];
    createMany?: Prisma.ItineraryCreateManyTripInputEnvelope;
    connect?: Prisma.ItineraryWhereUniqueInput | Prisma.ItineraryWhereUniqueInput[];
};
export type ItineraryUpdateManyWithoutTripNestedInput = {
    create?: Prisma.XOR<Prisma.ItineraryCreateWithoutTripInput, Prisma.ItineraryUncheckedCreateWithoutTripInput> | Prisma.ItineraryCreateWithoutTripInput[] | Prisma.ItineraryUncheckedCreateWithoutTripInput[];
    connectOrCreate?: Prisma.ItineraryCreateOrConnectWithoutTripInput | Prisma.ItineraryCreateOrConnectWithoutTripInput[];
    upsert?: Prisma.ItineraryUpsertWithWhereUniqueWithoutTripInput | Prisma.ItineraryUpsertWithWhereUniqueWithoutTripInput[];
    createMany?: Prisma.ItineraryCreateManyTripInputEnvelope;
    set?: Prisma.ItineraryWhereUniqueInput | Prisma.ItineraryWhereUniqueInput[];
    disconnect?: Prisma.ItineraryWhereUniqueInput | Prisma.ItineraryWhereUniqueInput[];
    delete?: Prisma.ItineraryWhereUniqueInput | Prisma.ItineraryWhereUniqueInput[];
    connect?: Prisma.ItineraryWhereUniqueInput | Prisma.ItineraryWhereUniqueInput[];
    update?: Prisma.ItineraryUpdateWithWhereUniqueWithoutTripInput | Prisma.ItineraryUpdateWithWhereUniqueWithoutTripInput[];
    updateMany?: Prisma.ItineraryUpdateManyWithWhereWithoutTripInput | Prisma.ItineraryUpdateManyWithWhereWithoutTripInput[];
    deleteMany?: Prisma.ItineraryScalarWhereInput | Prisma.ItineraryScalarWhereInput[];
};
export type ItineraryUncheckedUpdateManyWithoutTripNestedInput = {
    create?: Prisma.XOR<Prisma.ItineraryCreateWithoutTripInput, Prisma.ItineraryUncheckedCreateWithoutTripInput> | Prisma.ItineraryCreateWithoutTripInput[] | Prisma.ItineraryUncheckedCreateWithoutTripInput[];
    connectOrCreate?: Prisma.ItineraryCreateOrConnectWithoutTripInput | Prisma.ItineraryCreateOrConnectWithoutTripInput[];
    upsert?: Prisma.ItineraryUpsertWithWhereUniqueWithoutTripInput | Prisma.ItineraryUpsertWithWhereUniqueWithoutTripInput[];
    createMany?: Prisma.ItineraryCreateManyTripInputEnvelope;
    set?: Prisma.ItineraryWhereUniqueInput | Prisma.ItineraryWhereUniqueInput[];
    disconnect?: Prisma.ItineraryWhereUniqueInput | Prisma.ItineraryWhereUniqueInput[];
    delete?: Prisma.ItineraryWhereUniqueInput | Prisma.ItineraryWhereUniqueInput[];
    connect?: Prisma.ItineraryWhereUniqueInput | Prisma.ItineraryWhereUniqueInput[];
    update?: Prisma.ItineraryUpdateWithWhereUniqueWithoutTripInput | Prisma.ItineraryUpdateWithWhereUniqueWithoutTripInput[];
    updateMany?: Prisma.ItineraryUpdateManyWithWhereWithoutTripInput | Prisma.ItineraryUpdateManyWithWhereWithoutTripInput[];
    deleteMany?: Prisma.ItineraryScalarWhereInput | Prisma.ItineraryScalarWhereInput[];
};
export type ItineraryCreateWithoutTripInput = {
    id?: string;
    date: Date | string;
    title: string;
    description?: string | null;
    activities?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    photos?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ItineraryUncheckedCreateWithoutTripInput = {
    id?: string;
    date: Date | string;
    title: string;
    description?: string | null;
    activities?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    photos?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ItineraryCreateOrConnectWithoutTripInput = {
    where: Prisma.ItineraryWhereUniqueInput;
    create: Prisma.XOR<Prisma.ItineraryCreateWithoutTripInput, Prisma.ItineraryUncheckedCreateWithoutTripInput>;
};
export type ItineraryCreateManyTripInputEnvelope = {
    data: Prisma.ItineraryCreateManyTripInput | Prisma.ItineraryCreateManyTripInput[];
    skipDuplicates?: boolean;
};
export type ItineraryUpsertWithWhereUniqueWithoutTripInput = {
    where: Prisma.ItineraryWhereUniqueInput;
    update: Prisma.XOR<Prisma.ItineraryUpdateWithoutTripInput, Prisma.ItineraryUncheckedUpdateWithoutTripInput>;
    create: Prisma.XOR<Prisma.ItineraryCreateWithoutTripInput, Prisma.ItineraryUncheckedCreateWithoutTripInput>;
};
export type ItineraryUpdateWithWhereUniqueWithoutTripInput = {
    where: Prisma.ItineraryWhereUniqueInput;
    data: Prisma.XOR<Prisma.ItineraryUpdateWithoutTripInput, Prisma.ItineraryUncheckedUpdateWithoutTripInput>;
};
export type ItineraryUpdateManyWithWhereWithoutTripInput = {
    where: Prisma.ItineraryScalarWhereInput;
    data: Prisma.XOR<Prisma.ItineraryUpdateManyMutationInput, Prisma.ItineraryUncheckedUpdateManyWithoutTripInput>;
};
export type ItineraryScalarWhereInput = {
    AND?: Prisma.ItineraryScalarWhereInput | Prisma.ItineraryScalarWhereInput[];
    OR?: Prisma.ItineraryScalarWhereInput[];
    NOT?: Prisma.ItineraryScalarWhereInput | Prisma.ItineraryScalarWhereInput[];
    id?: Prisma.StringFilter<"Itinerary"> | string;
    tripId?: Prisma.StringFilter<"Itinerary"> | string;
    date?: Prisma.DateTimeFilter<"Itinerary"> | Date | string;
    title?: Prisma.StringFilter<"Itinerary"> | string;
    description?: Prisma.StringNullableFilter<"Itinerary"> | string | null;
    activities?: Prisma.JsonNullableFilter<"Itinerary">;
    photos?: Prisma.JsonNullableFilter<"Itinerary">;
    createdAt?: Prisma.DateTimeFilter<"Itinerary"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Itinerary"> | Date | string;
};
export type ItineraryCreateManyTripInput = {
    id?: string;
    date: Date | string;
    title: string;
    description?: string | null;
    activities?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    photos?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ItineraryUpdateWithoutTripInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    activities?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    photos?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ItineraryUncheckedUpdateWithoutTripInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    activities?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    photos?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ItineraryUncheckedUpdateManyWithoutTripInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    activities?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    photos?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ItinerarySelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    tripId?: boolean;
    date?: boolean;
    title?: boolean;
    description?: boolean;
    activities?: boolean;
    photos?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    trip?: boolean | Prisma.TripDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["itinerary"]>;
export type ItinerarySelectScalar = {
    id?: boolean;
    tripId?: boolean;
    date?: boolean;
    title?: boolean;
    description?: boolean;
    activities?: boolean;
    photos?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type ItineraryOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "tripId" | "date" | "title" | "description" | "activities" | "photos" | "createdAt" | "updatedAt", ExtArgs["result"]["itinerary"]>;
export type ItineraryInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    trip?: boolean | Prisma.TripDefaultArgs<ExtArgs>;
};
export type $ItineraryPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Itinerary";
    objects: {
        trip: Prisma.$TripPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        tripId: string;
        date: Date;
        title: string;
        description: string | null;
        activities: runtime.JsonValue | null;
        photos: runtime.JsonValue | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["itinerary"]>;
    composites: {};
};
export type ItineraryGetPayload<S extends boolean | null | undefined | ItineraryDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ItineraryPayload, S>;
export type ItineraryCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ItineraryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ItineraryCountAggregateInputType | true;
};
export interface ItineraryDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Itinerary'];
        meta: {
            name: 'Itinerary';
        };
    };
    findUnique<T extends ItineraryFindUniqueArgs>(args: Prisma.SelectSubset<T, ItineraryFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ItineraryClient<runtime.Types.Result.GetResult<Prisma.$ItineraryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ItineraryFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ItineraryFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ItineraryClient<runtime.Types.Result.GetResult<Prisma.$ItineraryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ItineraryFindFirstArgs>(args?: Prisma.SelectSubset<T, ItineraryFindFirstArgs<ExtArgs>>): Prisma.Prisma__ItineraryClient<runtime.Types.Result.GetResult<Prisma.$ItineraryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ItineraryFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ItineraryFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ItineraryClient<runtime.Types.Result.GetResult<Prisma.$ItineraryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ItineraryFindManyArgs>(args?: Prisma.SelectSubset<T, ItineraryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ItineraryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ItineraryCreateArgs>(args: Prisma.SelectSubset<T, ItineraryCreateArgs<ExtArgs>>): Prisma.Prisma__ItineraryClient<runtime.Types.Result.GetResult<Prisma.$ItineraryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ItineraryCreateManyArgs>(args?: Prisma.SelectSubset<T, ItineraryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    delete<T extends ItineraryDeleteArgs>(args: Prisma.SelectSubset<T, ItineraryDeleteArgs<ExtArgs>>): Prisma.Prisma__ItineraryClient<runtime.Types.Result.GetResult<Prisma.$ItineraryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ItineraryUpdateArgs>(args: Prisma.SelectSubset<T, ItineraryUpdateArgs<ExtArgs>>): Prisma.Prisma__ItineraryClient<runtime.Types.Result.GetResult<Prisma.$ItineraryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ItineraryDeleteManyArgs>(args?: Prisma.SelectSubset<T, ItineraryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ItineraryUpdateManyArgs>(args: Prisma.SelectSubset<T, ItineraryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    upsert<T extends ItineraryUpsertArgs>(args: Prisma.SelectSubset<T, ItineraryUpsertArgs<ExtArgs>>): Prisma.Prisma__ItineraryClient<runtime.Types.Result.GetResult<Prisma.$ItineraryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ItineraryCountArgs>(args?: Prisma.Subset<T, ItineraryCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ItineraryCountAggregateOutputType> : number>;
    aggregate<T extends ItineraryAggregateArgs>(args: Prisma.Subset<T, ItineraryAggregateArgs>): Prisma.PrismaPromise<GetItineraryAggregateType<T>>;
    groupBy<T extends ItineraryGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ItineraryGroupByArgs['orderBy'];
    } : {
        orderBy?: ItineraryGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ItineraryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetItineraryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ItineraryFieldRefs;
}
export interface Prisma__ItineraryClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    trip<T extends Prisma.TripDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.TripDefaultArgs<ExtArgs>>): Prisma.Prisma__TripClient<runtime.Types.Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ItineraryFieldRefs {
    readonly id: Prisma.FieldRef<"Itinerary", 'String'>;
    readonly tripId: Prisma.FieldRef<"Itinerary", 'String'>;
    readonly date: Prisma.FieldRef<"Itinerary", 'DateTime'>;
    readonly title: Prisma.FieldRef<"Itinerary", 'String'>;
    readonly description: Prisma.FieldRef<"Itinerary", 'String'>;
    readonly activities: Prisma.FieldRef<"Itinerary", 'Json'>;
    readonly photos: Prisma.FieldRef<"Itinerary", 'Json'>;
    readonly createdAt: Prisma.FieldRef<"Itinerary", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Itinerary", 'DateTime'>;
}
export type ItineraryFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ItinerarySelect<ExtArgs> | null;
    omit?: Prisma.ItineraryOmit<ExtArgs> | null;
    include?: Prisma.ItineraryInclude<ExtArgs> | null;
    where: Prisma.ItineraryWhereUniqueInput;
};
export type ItineraryFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ItinerarySelect<ExtArgs> | null;
    omit?: Prisma.ItineraryOmit<ExtArgs> | null;
    include?: Prisma.ItineraryInclude<ExtArgs> | null;
    where: Prisma.ItineraryWhereUniqueInput;
};
export type ItineraryFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ItineraryFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ItineraryFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ItineraryCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ItinerarySelect<ExtArgs> | null;
    omit?: Prisma.ItineraryOmit<ExtArgs> | null;
    include?: Prisma.ItineraryInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ItineraryCreateInput, Prisma.ItineraryUncheckedCreateInput>;
};
export type ItineraryCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ItineraryCreateManyInput | Prisma.ItineraryCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ItineraryUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ItinerarySelect<ExtArgs> | null;
    omit?: Prisma.ItineraryOmit<ExtArgs> | null;
    include?: Prisma.ItineraryInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ItineraryUpdateInput, Prisma.ItineraryUncheckedUpdateInput>;
    where: Prisma.ItineraryWhereUniqueInput;
};
export type ItineraryUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ItineraryUpdateManyMutationInput, Prisma.ItineraryUncheckedUpdateManyInput>;
    where?: Prisma.ItineraryWhereInput;
    limit?: number;
};
export type ItineraryUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ItinerarySelect<ExtArgs> | null;
    omit?: Prisma.ItineraryOmit<ExtArgs> | null;
    include?: Prisma.ItineraryInclude<ExtArgs> | null;
    where: Prisma.ItineraryWhereUniqueInput;
    create: Prisma.XOR<Prisma.ItineraryCreateInput, Prisma.ItineraryUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ItineraryUpdateInput, Prisma.ItineraryUncheckedUpdateInput>;
};
export type ItineraryDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ItinerarySelect<ExtArgs> | null;
    omit?: Prisma.ItineraryOmit<ExtArgs> | null;
    include?: Prisma.ItineraryInclude<ExtArgs> | null;
    where: Prisma.ItineraryWhereUniqueInput;
};
export type ItineraryDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ItineraryWhereInput;
    limit?: number;
};
export type ItineraryDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ItinerarySelect<ExtArgs> | null;
    omit?: Prisma.ItineraryOmit<ExtArgs> | null;
    include?: Prisma.ItineraryInclude<ExtArgs> | null;
};
export {};
