"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CelebrateController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const celebrate_service_1 = require("./celebrate.service");
const jwt_auth_guard_1 = require("./guards/jwt-auth.guard");
let CelebrateController = class CelebrateController {
    celebrateService;
    constructor(celebrateService) {
        this.celebrateService = celebrateService;
    }
    getAllCelebration(req) {
        return this.celebrateService.getAllCelebrate(req.user.id);
    }
};
exports.CelebrateController = CelebrateController;
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Get)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiOperation)({
        summary: "Lấy tất cả celebrate của user (kèm thông tin từng chuyến đi)",
    }),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], CelebrateController.prototype, "getAllCelebration", null);
exports.CelebrateController = CelebrateController = __decorate([
    (0, swagger_1.ApiTags)("Celebrate"),
    (0, common_1.Controller)("celebrate"),
    __metadata("design:paramtypes", [celebrate_service_1.CelebrateService])
], CelebrateController);
//# sourceMappingURL=celebrate.controller.js.map