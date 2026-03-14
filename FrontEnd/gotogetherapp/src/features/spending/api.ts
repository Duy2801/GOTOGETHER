import { ApiError, api } from '../../api';
import { tripApi } from '../home/api';

const GLOBAL_TRIP_SCOPE = 'all';

type NumberApiResponse = {
  status: boolean;
  data: number;
};

export interface SpendingPaymentSummary {
  totalSpent: number;
  totalDebt: number;
  totalReceived: number;
}

export interface SpendingBudgetSummary {
  quantity: number;
  totalBudget: number;
}

export const spendingApi = {
  getPaymentSummary: async (): Promise<SpendingPaymentSummary> => {
    try {
      const [spentRes, debtRes, receivedRes] = await Promise.all([
        api.get(
          `/trips/${GLOBAL_TRIP_SCOPE}/expenses/total-spent`,
        ) as Promise<NumberApiResponse>,
        api.get(
          `/trips/${GLOBAL_TRIP_SCOPE}/expenses/total-debt`,
        ) as Promise<NumberApiResponse>,
        api.get(
          `/trips/${GLOBAL_TRIP_SCOPE}/expenses/total-received`,
        ) as Promise<NumberApiResponse>,
      ]);

      return {
        totalSpent: Number(spentRes.data ?? 0),
        totalDebt: Number(debtRes.data ?? 0),
        totalReceived: Number(receivedRes.data ?? 0),
      };
    } catch (error) {
      throw error as ApiError;
    }
  },

  getBudgetSummary: async (): Promise<SpendingBudgetSummary> => {
    try {
      const firstPage = await tripApi.getTrips({ page: 1, limit: 1 });
      const totalTrips = Number(firstPage.data.total ?? 0);

      if (!totalTrips) {
        return {
          quantity: 0,
          totalBudget: 0,
        };
      }

      const allTripsRes = await tripApi.getTrips({
        page: 1,
        limit: totalTrips,
      });
      const totalBudget = allTripsRes.data.trips.reduce((sum, trip) => {
        const rawBudget = trip.totalBudget;
        const budget = Number(rawBudget ?? 0);
        return sum + (Number.isFinite(budget) ? budget : 0);
      }, 0);

      return {
        quantity: totalTrips,
        totalBudget,
      };
    } catch (error) {
      throw error as ApiError;
    }
  },
};
