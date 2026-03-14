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
const celebrate_dto_1 = require("./dto/celebrate.dto");
const update_celebrate_dto_1 = require("./dto/update-celebrate.dto");
let CelebrateController = class CelebrateController {
    celebrateService;
    constructor(celebrateService) {
        this.celebrateService = celebrateService;
    }
    getAllCelebration(req) {
        return this.celebrateService.getAllCelebrate(req.user.userId);
    }
    createCelebrate(req, dto) {
        return this.celebrateService.createCelebrate(req.user.userId, dto);
    }
    updateCelebrate(req, celebrateId, dto) {
        return this.celebrateService.updateCelebrate(celebrateId, req.user.userId, dto);
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
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Post)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiOperation)({
        summary: "Tạo kỷ niệm mới",
    }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, celebrate_dto_1.CreateCelebrateDTO]),
    __metadata("design:returntype", void 0)
], CelebrateController.prototype, "createCelebrate", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Put)(":celebrateId"),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiOperation)({
        summary: "Cập nhật kỷ niệm",
    }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)("celebrateId")),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, update_celebrate_dto_1.UpdateCelebrateDTO]),
    __metadata("design:returntype", void 0)
], CelebrateController.prototype, "updateCelebrate", null);
exports.CelebrateController = CelebrateController = __decorate([
    (0, swagger_1.ApiTags)("Celebrate"),
    (0, common_1.Controller)("celebrate"),
    __metadata("design:paramtypes", [celebrate_service_1.CelebrateService])
], CelebrateController);
//# sourceMappingURL=celebrate.controller.js.map