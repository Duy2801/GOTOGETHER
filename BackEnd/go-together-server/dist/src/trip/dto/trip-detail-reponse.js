"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TripDetailResponseDto = exports.MemberDto = void 0;
class MemberDto {
    id;
    userId;
    fullName;
    avatar;
    role;
    inviteStatus;
}
exports.MemberDto = MemberDto;
class TripDetailResponseDto {
    id;
    name;
    startDate;
    endDate;
    totalBudget;
    status;
    images;
    createdAt;
    updatedAt;
    members;
    totalExpense;
    memberCount;
}
exports.TripDetailResponseDto = TripDetailResponseDto;
//# sourceMappingURL=trip-detail-reponse.js.map