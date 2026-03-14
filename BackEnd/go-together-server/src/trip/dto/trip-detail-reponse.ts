export class MemberDto {
  id: string;
  userId: string;
  fullName: string;
  avatar?: string;
  role: string;
  inviteStatus: string;
}

export class TripDetailResponseDto {
  id: string;
  name: string;
  startDate: Date;
  endDate: Date;
  totalBudget?: number;
  status: string;
  images?: string;
  createdAt: Date;
  updatedAt: Date;
  members: MemberDto[];
  totalExpense?: number;
  memberCount: number;
}
