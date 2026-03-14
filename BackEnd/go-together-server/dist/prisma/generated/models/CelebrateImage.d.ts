import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type CelebrateImageModel = runtime.Types.Result.DefaultSelection<Prisma.$CelebrateImagePayload>;
export type AggregateCelebrateImage = {
    _count: CelebrateImageCountAggregateOutputType | null;
    _min: CelebrateImageMinAggregateOutputType | null;
    _max: CelebrateImageMaxAggregateOutputType | null;
};
export type CelebrateImageMinAggregateOutputType = {
    id: string | null;
    celebrateId: string | null;
    imageUrl: string | null;
    createdAt: Date | null;
};
export type CelebrateImageMaxAggregateOutputType = {
    id: string | null;
    celebrateId: string | null;
    imageUrl: string | null;
    createdAt: Date | null;
};
export type CelebrateImageCountAggregateOutputType = {
    id: number;
    celebrateId: number;
    imageUrl: number;
    createdAt: number;
    _all: number;
};
export type CelebrateImageMinAggregateInputType = {
    id?: true;
    celebrateId?: true;
    imageUrl?: true;
    createdAt?: true;
};
export type CelebrateImageMaxAggregateInputType = {
    id?: true;
    celebrateId?: true;
    imageUrl?: true;
    createdAt?: true;
};
export type CelebrateImageCountAggregateInputType = {
    id?: true;
    celebrateId?: true;
    imageUrl?: true;
    createdAt?: true;
    _all?: true;
};
export type CelebrateImageAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CelebrateImageWhereInput;
    orderBy?: Prisma.CelebrateImageOrderByWithRelationInput | Prisma.CelebrateImageOrderByWithRelationInput[];
    cursor?: Prisma.CelebrateImageWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | CelebrateImageCountAggregateInputType;
    _min?: CelebrateImageMinAggregateInputType;
    _max?: CelebrateImageMaxAggregateInputType;
};
export type GetCelebrateImageAggregateType<T extends CelebrateImageAggregateArgs> = {
    [P in keyof T & keyof AggregateCelebrateImage]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateCelebrateImage[P]> : Prisma.GetScalarType<T[P], AggregateCelebrateImage[P]>;
};
export type CelebrateImageGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CelebrateImageWhereInput;
    orderBy?: Prisma.CelebrateImageOrderByWithAggregationInput | Prisma.CelebrateImageOrderByWithAggregationInput[];
    by: Prisma.CelebrateImageScalarFieldEnum[] | Prisma.CelebrateImageScalarFieldEnum;
    having?: Prisma.CelebrateImageScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CelebrateImageCountAggregateInputType | true;
    _min?: CelebrateImageMinAggregateInputType;
    _max?: CelebrateImageMaxAggregateInputType;
};
export type CelebrateImageGroupByOutputType = {
    id: string;
    celebrateId: string;
    imageUrl: string;
    createdAt: Date;
    _count: CelebrateImageCountAggregateOutputType | null;
    _min: CelebrateImageMinAggregateOutputType | null;
    _max: CelebrateImageMaxAggregateOutputType | null;
};
type GetCelebrateImageGroupByPayload<T extends CelebrateImageGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<CelebrateImageGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof CelebrateImageGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], CelebrateImageGroupByOutputType[P]> : Prisma.GetScalarType<T[P], CelebrateImageGroupByOutputType[P]>;
}>>;
export type CelebrateImageWhereInput = {
    AND?: Prisma.CelebrateImageWhereInput | Prisma.CelebrateImageWhereInput[];
    OR?: Prisma.CelebrateImageWhereInput[];
    NOT?: Prisma.CelebrateImageWhereInput | Prisma.CelebrateImageWhereInput[];
    id?: Prisma.StringFilter<"CelebrateImage"> | string;
    celebrateId?: Prisma.StringFilter<"CelebrateImage"> | string;
    imageUrl?: Prisma.StringFilter<"CelebrateImage"> | string;
    createdAt?: Prisma.DateTimeFilter<"CelebrateImage"> | Date | string;
    celebrate?: Prisma.XOR<Prisma.CelebrateScalarRelationFilter, Prisma.CelebrateWhereInput>;
};
export type CelebrateImageOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    celebrateId?: Prisma.SortOrder;
    imageUrl?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    celebrate?: Prisma.CelebrateOrderByWithRelationInput;
    _relevance?: Prisma.CelebrateImageOrderByRelevanceInput;
};
export type CelebrateImageWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.CelebrateImageWhereInput | Prisma.CelebrateImageWhereInput[];
    OR?: Prisma.CelebrateImageWhereInput[];
    NOT?: Prisma.CelebrateImageWhereInput | Prisma.CelebrateImageWhereInput[];
    celebrateId?: Prisma.StringFilter<"CelebrateImage"> | string;
    imageUrl?: Prisma.StringFilter<"CelebrateImage"> | string;
    createdAt?: Prisma.DateTimeFilter<"CelebrateImage"> | Date | string;
    celebrate?: Prisma.XOR<Prisma.CelebrateScalarRelationFilter, Prisma.CelebrateWhereInput>;
}, "id">;
export type CelebrateImageOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    celebrateId?: Prisma.SortOrder;
    imageUrl?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.CelebrateImageCountOrderByAggregateInput;
    _max?: Prisma.CelebrateImageMaxOrderByAggregateInput;
    _min?: Prisma.CelebrateImageMinOrderByAggregateInput;
};
export type CelebrateImageScalarWhereWithAggregatesInput = {
    AND?: Prisma.CelebrateImageScalarWhereWithAggregatesInput | Prisma.CelebrateImageScalarWhereWithAggregatesInput[];
    OR?: Prisma.CelebrateImageScalarWhereWithAggregatesInput[];
    NOT?: Prisma.CelebrateImageScalarWhereWithAggregatesInput | Prisma.CelebrateImageScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"CelebrateImage"> | string;
    celebrateId?: Prisma.StringWithAggregatesFilter<"CelebrateImage"> | string;
    imageUrl?: Prisma.StringWithAggregatesFilter<"CelebrateImage"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"CelebrateImage"> | Date | string;
};
export type CelebrateImageCreateInput = {
    id?: string;
    imageUrl: string;
    createdAt?: Date | string;
    celebrate: Prisma.CelebrateCreateNestedOneWithoutImagesInput;
};
export type CelebrateImageUncheckedCreateInput = {
    id?: string;
    celebrateId: string;
    imageUrl: string;
    createdAt?: Date | string;
};
export type CelebrateImageUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    imageUrl?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    celebrate?: Prisma.CelebrateUpdateOneRequiredWithoutImagesNestedInput;
};
export type CelebrateImageUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    celebrateId?: Prisma.StringFieldUpdateOperationsInput | string;
    imageUrl?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CelebrateImageCreateManyInput = {
    id?: string;
    celebrateId: string;
    imageUrl: string;
    createdAt?: Date | string;
};
export type CelebrateImageUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    imageUrl?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CelebrateImageUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    celebrateId?: Prisma.StringFieldUpdateOperationsInput | string;
    imageUrl?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CelebrateImageListRelationFilter = {
    every?: Prisma.CelebrateImageWhereInput;
    some?: Prisma.CelebrateImageWhereInput;
    none?: Prisma.CelebrateImageWhereInput;
};
export type CelebrateImageOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type CelebrateImageOrderByRelevanceInput = {
    fields: Prisma.CelebrateImageOrderByRelevanceFieldEnum | Prisma.CelebrateImageOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type CelebrateImageCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    celebrateId?: Prisma.SortOrder;
    imageUrl?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type CelebrateImageMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    celebrateId?: Prisma.SortOrder;
    imageUrl?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type CelebrateImageMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    celebrateId?: Prisma.SortOrder;
    imageUrl?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type CelebrateImageCreateNestedManyWithoutCelebrateInput = {
    create?: Prisma.XOR<Prisma.CelebrateImageCreateWithoutCelebrateInput, Prisma.CelebrateImageUncheckedCreateWithoutCelebrateInput> | Prisma.CelebrateImageCreateWithoutCelebrateInput[] | Prisma.CelebrateImageUncheckedCreateWithoutCelebrateInput[];
    connectOrCreate?: Prisma.CelebrateImageCreateOrConnectWithoutCelebrateInput | Prisma.CelebrateImageCreateOrConnectWithoutCelebrateInput[];
    createMany?: Prisma.CelebrateImageCreateManyCelebrateInputEnvelope;
    connect?: Prisma.CelebrateImageWhereUniqueInput | Prisma.CelebrateImageWhereUniqueInput[];
};
export type CelebrateImageUncheckedCreateNestedManyWithoutCelebrateInput = {
    create?: Prisma.XOR<Prisma.CelebrateImageCreateWithoutCelebrateInput, Prisma.CelebrateImageUncheckedCreateWithoutCelebrateInput> | Prisma.CelebrateImageCreateWithoutCelebrateInput[] | Prisma.CelebrateImageUncheckedCreateWithoutCelebrateInput[];
    connectOrCreate?: Prisma.CelebrateImageCreateOrConnectWithoutCelebrateInput | Prisma.CelebrateImageCreateOrConnectWithoutCelebrateInput[];
    createMany?: Prisma.CelebrateImageCreateManyCelebrateInputEnvelope;
    connect?: Prisma.CelebrateImageWhereUniqueInput | Prisma.CelebrateImageWhereUniqueInput[];
};
export type CelebrateImageUpdateManyWithoutCelebrateNestedInput = {
    create?: Prisma.XOR<Prisma.CelebrateImageCreateWithoutCelebrateInput, Prisma.CelebrateImageUncheckedCreateWithoutCelebrateInput> | Prisma.CelebrateImageCreateWithoutCelebrateInput[] | Prisma.CelebrateImageUncheckedCreateWithoutCelebrateInput[];
    connectOrCreate?: Prisma.CelebrateImageCreateOrConnectWithoutCelebrateInput | Prisma.CelebrateImageCreateOrConnectWithoutCelebrateInput[];
    upsert?: Prisma.CelebrateImageUpsertWithWhereUniqueWithoutCelebrateInput | Prisma.CelebrateImageUpsertWithWhereUniqueWithoutCelebrateInput[];
    createMany?: Prisma.CelebrateImageCreateManyCelebrateInputEnvelope;
    set?: Prisma.CelebrateImageWhereUniqueInput | Prisma.CelebrateImageWhereUniqueInput[];
    disconnect?: Prisma.CelebrateImageWhereUniqueInput | Prisma.CelebrateImageWhereUniqueInput[];
    delete?: Prisma.CelebrateImageWhereUniqueInput | Prisma.CelebrateImageWhereUniqueInput[];
    connect?: Prisma.CelebrateImageWhereUniqueInput | Prisma.CelebrateImageWhereUniqueInput[];
    update?: Prisma.CelebrateImageUpdateWithWhereUniqueWithoutCelebrateInput | Prisma.CelebrateImageUpdateWithWhereUniqueWithoutCelebrateInput[];
    updateMany?: Prisma.CelebrateImageUpdateManyWithWhereWithoutCelebrateInput | Prisma.CelebrateImageUpdateManyWithWhereWithoutCelebrateInput[];
    deleteMany?: Prisma.CelebrateImageScalarWhereInput | Prisma.CelebrateImageScalarWhereInput[];
};
export type CelebrateImageUncheckedUpdateManyWithoutCelebrateNestedInput = {
    create?: Prisma.XOR<Prisma.CelebrateImageCreateWithoutCelebrateInput, Prisma.CelebrateImageUncheckedCreateWithoutCelebrateInput> | Prisma.CelebrateImageCreateWithoutCelebrateInput[] | Prisma.CelebrateImageUncheckedCreateWithoutCelebrateInput[];
    connectOrCreate?: Prisma.CelebrateImageCreateOrConnectWithoutCelebrateInput | Prisma.CelebrateImageCreateOrConnectWithoutCelebrateInput[];
    upsert?: Prisma.CelebrateImageUpsertWithWhereUniqueWithoutCelebrateInput | Prisma.CelebrateImageUpsertWithWhereUniqueWithoutCelebrateInput[];
    createMany?: Prisma.CelebrateImageCreateManyCelebrateInputEnvelope;
    set?: Prisma.CelebrateImageWhereUniqueInput | Prisma.CelebrateImageWhereUniqueInput[];
    disconnect?: Prisma.CelebrateImageWhereUniqueInput | Prisma.CelebrateImageWhereUniqueInput[];
    delete?: Prisma.CelebrateImageWhereUniqueInput | Prisma.CelebrateImageWhereUniqueInput[];
    connect?: Prisma.CelebrateImageWhereUniqueInput | Prisma.CelebrateImageWhereUniqueInput[];
    update?: Prisma.CelebrateImageUpdateWithWhereUniqueWithoutCelebrateInput | Prisma.CelebrateImageUpdateWithWhereUniqueWithoutCelebrateInput[];
    updateMany?: Prisma.CelebrateImageUpdateManyWithWhereWithoutCelebrateInput | Prisma.CelebrateImageUpdateManyWithWhereWithoutCelebrateInput[];
    deleteMany?: Prisma.CelebrateImageScalarWhereInput | Prisma.CelebrateImageScalarWhereInput[];
};
export type CelebrateImageCreateWithoutCelebrateInput = {
    id?: string;
    imageUrl: string;
    createdAt?: Date | string;
};
export type CelebrateImageUncheckedCreateWithoutCelebrateInput = {
    id?: string;
    imageUrl: string;
    createdAt?: Date | string;
};
export type CelebrateImageCreateOrConnectWithoutCelebrateInput = {
    where: Prisma.CelebrateImageWhereUniqueInput;
    create: Prisma.XOR<Prisma.CelebrateImageCreateWithoutCelebrateInput, Prisma.CelebrateImageUncheckedCreateWithoutCelebrateInput>;
};
export type CelebrateImageCreateManyCelebrateInputEnvelope = {
    data: Prisma.CelebrateImageCreateManyCelebrateInput | Prisma.CelebrateImageCreateManyCelebrateInput[];
    skipDuplicates?: boolean;
};
export type CelebrateImageUpsertWithWhereUniqueWithoutCelebrateInput = {
    where: Prisma.CelebrateImageWhereUniqueInput;
    update: Prisma.XOR<Prisma.CelebrateImageUpdateWithoutCelebrateInput, Prisma.CelebrateImageUncheckedUpdateWithoutCelebrateInput>;
    create: Prisma.XOR<Prisma.CelebrateImageCreateWithoutCelebrateInput, Prisma.CelebrateImageUncheckedCreateWithoutCelebrateInput>;
};
export type CelebrateImageUpdateWithWhereUniqueWithoutCelebrateInput = {
    where: Prisma.CelebrateImageWhereUniqueInput;
    data: Prisma.XOR<Prisma.CelebrateImageUpdateWithoutCelebrateInput, Prisma.CelebrateImageUncheckedUpdateWithoutCelebrateInput>;
};
export type CelebrateImageUpdateManyWithWhereWithoutCelebrateInput = {
    where: Prisma.CelebrateImageScalarWhereInput;
    data: Prisma.XOR<Prisma.CelebrateImageUpdateManyMutationInput, Prisma.CelebrateImageUncheckedUpdateManyWithoutCelebrateInput>;
};
export type CelebrateImageScalarWhereInput = {
    AND?: Prisma.CelebrateImageScalarWhereInput | Prisma.CelebrateImageScalarWhereInput[];
    OR?: Prisma.CelebrateImageScalarWhereInput[];
    NOT?: Prisma.CelebrateImageScalarWhereInput | Prisma.CelebrateImageScalarWhereInput[];
    id?: Prisma.StringFilter<"CelebrateImage"> | string;
    celebrateId?: Prisma.StringFilter<"CelebrateImage"> | string;
    imageUrl?: Prisma.StringFilter<"CelebrateImage"> | string;
    createdAt?: Prisma.DateTimeFilter<"CelebrateImage"> | Date | string;
};
export type CelebrateImageCreateManyCelebrateInput = {
    id?: string;
    imageUrl: string;
    createdAt?: Date | string;
};
export type CelebrateImageUpdateWithoutCelebrateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    imageUrl?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CelebrateImageUncheckedUpdateWithoutCelebrateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    imageUrl?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CelebrateImageUncheckedUpdateManyWithoutCelebrateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    imageUrl?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CelebrateImageSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    celebrateId?: boolean;
    imageUrl?: boolean;
    createdAt?: boolean;
    celebrate?: boolean | Prisma.CelebrateDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["celebrateImage"]>;
export type CelebrateImageSelectScalar = {
    id?: boolean;
    celebrateId?: boolean;
    imageUrl?: boolean;
    createdAt?: boolean;
};
export type CelebrateImageOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "celebrateId" | "imageUrl" | "createdAt", ExtArgs["result"]["celebrateImage"]>;
export type CelebrateImageInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    celebrate?: boolean | Prisma.CelebrateDefaultArgs<ExtArgs>;
};
export type $CelebrateImagePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "CelebrateImage";
    objects: {
        celebrate: Prisma.$CelebratePayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        celebrateId: string;
        imageUrl: string;
        createdAt: Date;
    }, ExtArgs["result"]["celebrateImage"]>;
    composites: {};
};
export type CelebrateImageGetPayload<S extends boolean | null | undefined | CelebrateImageDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$CelebrateImagePayload, S>;
export type CelebrateImageCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<CelebrateImageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: CelebrateImageCountAggregateInputType | true;
};
export interface CelebrateImageDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['CelebrateImage'];
        meta: {
            name: 'CelebrateImage';
        };
    };
    findUnique<T extends CelebrateImageFindUniqueArgs>(args: Prisma.SelectSubset<T, CelebrateImageFindUniqueArgs<ExtArgs>>): Prisma.Prisma__CelebrateImageClient<runtime.Types.Result.GetResult<Prisma.$CelebrateImagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends CelebrateImageFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, CelebrateImageFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__CelebrateImageClient<runtime.Types.Result.GetResult<Prisma.$CelebrateImagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends CelebrateImageFindFirstArgs>(args?: Prisma.SelectSubset<T, CelebrateImageFindFirstArgs<ExtArgs>>): Prisma.Prisma__CelebrateImageClient<runtime.Types.Result.GetResult<Prisma.$CelebrateImagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends CelebrateImageFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, CelebrateImageFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__CelebrateImageClient<runtime.Types.Result.GetResult<Prisma.$CelebrateImagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends CelebrateImageFindManyArgs>(args?: Prisma.SelectSubset<T, CelebrateImageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CelebrateImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends CelebrateImageCreateArgs>(args: Prisma.SelectSubset<T, CelebrateImageCreateArgs<ExtArgs>>): Prisma.Prisma__CelebrateImageClient<runtime.Types.Result.GetResult<Prisma.$CelebrateImagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends CelebrateImageCreateManyArgs>(args?: Prisma.SelectSubset<T, CelebrateImageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    delete<T extends CelebrateImageDeleteArgs>(args: Prisma.SelectSubset<T, CelebrateImageDeleteArgs<ExtArgs>>): Prisma.Prisma__CelebrateImageClient<runtime.Types.Result.GetResult<Prisma.$CelebrateImagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends CelebrateImageUpdateArgs>(args: Prisma.SelectSubset<T, CelebrateImageUpdateArgs<ExtArgs>>): Prisma.Prisma__CelebrateImageClient<runtime.Types.Result.GetResult<Prisma.$CelebrateImagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends CelebrateImageDeleteManyArgs>(args?: Prisma.SelectSubset<T, CelebrateImageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends CelebrateImageUpdateManyArgs>(args: Prisma.SelectSubset<T, CelebrateImageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    upsert<T extends CelebrateImageUpsertArgs>(args: Prisma.SelectSubset<T, CelebrateImageUpsertArgs<ExtArgs>>): Prisma.Prisma__CelebrateImageClient<runtime.Types.Result.GetResult<Prisma.$CelebrateImagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends CelebrateImageCountArgs>(args?: Prisma.Subset<T, CelebrateImageCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], CelebrateImageCountAggregateOutputType> : number>;
    aggregate<T extends CelebrateImageAggregateArgs>(args: Prisma.Subset<T, CelebrateImageAggregateArgs>): Prisma.PrismaPromise<GetCelebrateImageAggregateType<T>>;
    groupBy<T extends CelebrateImageGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: CelebrateImageGroupByArgs['orderBy'];
    } : {
        orderBy?: CelebrateImageGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, CelebrateImageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCelebrateImageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: CelebrateImageFieldRefs;
}
export interface Prisma__CelebrateImageClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    celebrate<T extends Prisma.CelebrateDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.CelebrateDefaultArgs<ExtArgs>>): Prisma.Prisma__CelebrateClient<runtime.Types.Result.GetResult<Prisma.$CelebratePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface CelebrateImageFieldRefs {
    readonly id: Prisma.FieldRef<"CelebrateImage", 'String'>;
    readonly celebrateId: Prisma.FieldRef<"CelebrateImage", 'String'>;
    readonly imageUrl: Prisma.FieldRef<"CelebrateImage", 'String'>;
    readonly createdAt: Prisma.FieldRef<"CelebrateImage", 'DateTime'>;
}
export type CelebrateImageFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CelebrateImageSelect<ExtArgs> | null;
    omit?: Prisma.CelebrateImageOmit<ExtArgs> | null;
    include?: Prisma.CelebrateImageInclude<ExtArgs> | null;
    where: Prisma.CelebrateImageWhereUniqueInput;
};
export type CelebrateImageFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CelebrateImageSelect<ExtArgs> | null;
    omit?: Prisma.CelebrateImageOmit<ExtArgs> | null;
    include?: Prisma.CelebrateImageInclude<ExtArgs> | null;
    where: Prisma.CelebrateImageWhereUniqueInput;
};
export type CelebrateImageFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type CelebrateImageFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type CelebrateImageFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type CelebrateImageCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CelebrateImageSelect<ExtArgs> | null;
    omit?: Prisma.CelebrateImageOmit<ExtArgs> | null;
    include?: Prisma.CelebrateImageInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CelebrateImageCreateInput, Prisma.CelebrateImageUncheckedCreateInput>;
};
export type CelebrateImageCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.CelebrateImageCreateManyInput | Prisma.CelebrateImageCreateManyInput[];
    skipDuplicates?: boolean;
};
export type CelebrateImageUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CelebrateImageSelect<ExtArgs> | null;
    omit?: Prisma.CelebrateImageOmit<ExtArgs> | null;
    include?: Prisma.CelebrateImageInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CelebrateImageUpdateInput, Prisma.CelebrateImageUncheckedUpdateInput>;
    where: Prisma.CelebrateImageWhereUniqueInput;
};
export type CelebrateImageUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.CelebrateImageUpdateManyMutationInput, Prisma.CelebrateImageUncheckedUpdateManyInput>;
    where?: Prisma.CelebrateImageWhereInput;
    limit?: number;
};
export type CelebrateImageUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CelebrateImageSelect<ExtArgs> | null;
    omit?: Prisma.CelebrateImageOmit<ExtArgs> | null;
    include?: Prisma.CelebrateImageInclude<ExtArgs> | null;
    where: Prisma.CelebrateImageWhereUniqueInput;
    create: Prisma.XOR<Prisma.CelebrateImageCreateInput, Prisma.CelebrateImageUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.CelebrateImageUpdateInput, Prisma.CelebrateImageUncheckedUpdateInput>;
};
export type CelebrateImageDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CelebrateImageSelect<ExtArgs> | null;
    omit?: Prisma.CelebrateImageOmit<ExtArgs> | null;
    include?: Prisma.CelebrateImageInclude<ExtArgs> | null;
    where: Prisma.CelebrateImageWhereUniqueInput;
};
export type CelebrateImageDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CelebrateImageWhereInput;
    limit?: number;
};
export type CelebrateImageDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CelebrateImageSelect<ExtArgs> | null;
    omit?: Prisma.CelebrateImageOmit<ExtArgs> | null;
    include?: Prisma.CelebrateImageInclude<ExtArgs> | null;
};
export {};
