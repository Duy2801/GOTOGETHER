import { api, ApiError } from '../../api';

export interface Trip {
  id: string;
  name: string;
  startDate: string;
  endDate: string;
  totalBudget?: string;
  status: 'UPCOMING' | 'ONGOING' | 'COMPLETED' | 'ARCHIVED';
  images?: string;
  memberCount?: number;
  createdAt?: string;
  updatedAt?: string;
  members?: {
    role: 'OWNER' | 'MEMBER';
    inviteStatus: 'PENDING' | 'ACCEPTED' | 'REJECTED';
  }[];
}
export interface TripsResponse {
  status: boolean;
  data: {
    trips: Trip[];
    total: number;
    page: number;
    limit: number;
  };
}
export interface User {
  email: string;
}

export interface createTripPayload {
  name: string;
  startDate: string;
  endDate: string;
  totalBudget?: number;
  images?: string;
}
export interface CreateTripResponse {
  status: boolean;
  data: Trip;
}

export interface RespondInvitationPayload {
  status: 'ACCEPTED' | 'REJECTED';
}

export const tripApi = {
  getTrips: async (params?: {
    status?: string;
    page?: number;
    limit?: number;
  }): Promise<TripsResponse> => {
    try {
      const response = await api.get('/trips', { params });
      return response as unknown as TripsResponse;
    } catch (error) {
      throw error as ApiError;
    }
  },

  createTrip: async (
    patload: createTripPayload,
  ): Promise<CreateTripResponse> => {
    try {
      const response = await api.post('/trips', patload);
      return response as unknown as CreateTripResponse;
    } catch (error) {
      throw error as ApiError;
    }
  },

  respondInvitation: async (
    tripId: string,
    payload: RespondInvitationPayload,
  ): Promise<{ status: boolean }> => {
    try {
      const response = await api.post(`/tripMember/${tripId}/respond`, payload);
      return response as unknown as { status: boolean };
    } catch (error) {
      throw error as ApiError;
    }
  },
};
