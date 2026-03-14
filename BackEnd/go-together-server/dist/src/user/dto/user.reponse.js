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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserReponse = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const enums_1 = require("../../../prisma/generated/enums");
class UserReponse {
    id;
    email;
    fullName;
    dateOfBirth;
    gender;
    avatar;
    status;
    isVerified;
    createdAt;
    updatedAt;
}
exports.UserReponse = UserReponse;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], UserReponse.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], UserReponse.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], UserReponse.prototype, "fullName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, type: String }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Date)
], UserReponse.prototype, "dateOfBirth", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, description: "0: Nam, 1: Nữ" }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Number)
], UserReponse.prototype, "gender", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, type: String }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], UserReponse.prototype, "avatar", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ enum: enums_1.UserStatus }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], UserReponse.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Boolean)
], UserReponse.prototype, "isVerified", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Date)
], UserReponse.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Date)
], UserReponse.prototype, "updatedAt", void 0);
//# sourceMappingURL=user.reponse.js.map