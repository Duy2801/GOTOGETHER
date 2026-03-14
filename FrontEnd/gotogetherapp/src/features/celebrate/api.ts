import { api, ApiError } from '../../api';

export interface CelebrateTrip {
  id: string;
  name: string;
  startDate: string;
  endDate: string;
  images?: string;
  status: 'UPCOMING' | 'ONGOING' | 'COMPLETED' | 'ARCHIVED';
}

export interface CelebrateUser {
  id: string;
  fullName?: string;
  avatar?: string;
}

export interface CelebrateImage {
  id: string;
  imageUrl: string;
  createdAt?: string;
}

export interface CelebrateItem {
  id: string;
  tripId: string;
  userId: string;
  description?: string;
  date: string;
  createdAt?: string;
  trip?: CelebrateTrip;
  user?: CelebrateUser;
  images?: CelebrateImage[];
}

interface CelebrateApiResponse {
  status: boolean;
  data: CelebrateItem | CelebrateItem[] | null;
}

export interface CreateCelebratePayload {
  tripId: string;
  date: string;
  description: string;
  images?: string[];
}

export interface UpdateCelebratePayload {
  date?: string;
  description?: string;
  images?: string[];
}

export const celebrateApi = {
  getCelebrations: async (): Promise<CelebrateItem[]> => {
    try {
      const response = (await api.get('/celebrate')) as CelebrateApiResponse;
      const payload = response?.data;

      if (Array.isArray(payload)) {
        return payload;
      }

      if (payload) {
        return [payload];
      }

      return [];
    } catch (error) {
      throw error as ApiError;
    }
  },

  createCelebrate: async (
    payload: CreateCelebratePayload,
  ): Promise<CelebrateItem> => {
    try {
      const response = (await api.post('/celebrate', payload)) as {
        status: boolean;
        data: CelebrateItem;
      };
      return response.data;
    } catch (error) {
      throw error as ApiError;
    }
  },

  updateCelebrate: async (
    celebrateId: string,
    payload: UpdateCelebratePayload,
  ): Promise<CelebrateItem> => {
    try {
      const response = (await api.put(
        `/celebrate/${celebrateId}`,
        payload,
      )) as {
        status: boolean;
        data: CelebrateItem;
      };
      return response.data;
    } catch (error) {
      throw error as ApiError;
    }
  },
};
