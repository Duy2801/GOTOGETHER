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
exports.UserCreateDto = exports.userStatus = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
var userStatus;
(function (userStatus) {
    userStatus["ACTIVE"] = "ACTIVE";
    userStatus["INACTIVE"] = "INACTIVE";
    userStatus["BANNED"] = "BANNED";
})(userStatus || (exports.userStatus = userStatus = {}));
class UserCreateDto {
    email;
    password;
    fullName;
    dateOfBirth;
    gender;
    status;
}
exports.UserCreateDto = UserCreateDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: "john.doe@example.com" }),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], UserCreateDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "123456" }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(6),
    __metadata("design:type", String)
], UserCreateDto.prototype, "password", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "Nguyen van A" }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UserCreateDto.prototype, "fullName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "2000-01-01", required: false }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UserCreateDto.prototype, "dateOfBirth", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 0, description: "0 : Nam , 1: Nữ", required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.Max)(1),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], UserCreateDto.prototype, "gender", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        enum: userStatus,
        default: userStatus.ACTIVE,
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(userStatus),
    __metadata("design:type", String)
], UserCreateDto.prototype, "status", void 0);
//# sourceMappingURL=user-create.dto.js.map