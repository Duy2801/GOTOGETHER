import { CallHandler, ExecutionContext, NestInterceptor } from "@nestjs/common";
export declare class ResponseInterceptor implements NestInterceptor {
    intercept(ctx: ExecutionContext, next: CallHandler): import("rxjs").Observable<{
        status: boolean;
        data: any;
    }>;
}
