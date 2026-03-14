import { useCallback, useEffect, useMemo, useState } from 'react';
import {
  ActivityIndicator,
  Pressable,
  RefreshControl,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Body from '../../components/Layout/Body';
import { PRIMARY_COLOR, SECONDARY_COLOR } from '../../constants/color';
import { spendingApi } from './api';

type SpendingOverview = {
  quantity: number;
  totalBudget: number;
  totalSpent: number;
  totalDebt: number;
  totalReceived: number;
};

const SpendingScreen = () => {
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [errorText, setErrorText] = useState('');
  const [overview, setOverview] = useState<SpendingOverview>({
    quantity: 0,
    totalBudget: 0,
    totalSpent: 0,
    totalDebt: 0,
    totalReceived: 0,
  });

  const fetchOverview = useCallback(async () => {
    try {
      setErrorText('');
      const [paymentSummary, budgetSummary] = await Promise.all([
        spendingApi.getPaymentSummary(),
        spendingApi.getBudgetSummary(),
      ]);

      setOverview({
        quantity: budgetSummary.quantity,
        totalBudget: budgetSummary.totalBudget,
        totalSpent: paymentSummary.totalSpent,
        totalDebt: paymentSummary.totalDebt,
        totalReceived: paymentSummary.totalReceived,
      });
    } catch (error: any) {
      setErrorText(
        error?.error || error?.message || 'Không thể tải dữ liệu chi tiêu',
      );
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  }, []);

  useEffect(() => {
    fetchOverview();
  }, [fetchOverview]);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    fetchOverview();
  }, [fetchOverview]);

  const remainingBudget = useMemo(() => {
    return Math.max(overview.totalBudget - overview.totalSpent, 0);
  }, [overview.totalBudget, overview.totalSpent]);

  const spentPercent = useMemo(() => {
    if (!overview.totalBudget) {
      return 0;
    }
    return Math.min(
      Math.round((overview.totalSpent / overview.totalBudget) * 100),
      100,
    );
  }, [overview.totalBudget, overview.totalSpent]);

  const formatCurrency = (value: number) => {
    return `${Math.round(value).toLocaleString('vi-VN')} đ`;
  };

  const formatCompactMoney = (value: number) => {
    const abs = Math.abs(value);

    if (abs >= 1000000000) {
      return `${(value / 1000000000).toFixed(1).replace('.0', '')}B`;
    }
    if (abs >= 1000000) {
      return `${(value / 1000000).toFixed(1).replace('.0', '')}M`;
    }
    if (abs >= 1000) {
      return `${(value / 1000).toFixed(0)}k`;
    }
    return `${value}`;
  };

  return (
    <Body hideHeader={false} title="Chi tiết chi tiêu">
      <ScrollView
        contentContainerStyle={styles.container}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            colors={[PRIMARY_COLOR]}
          />
        }
      >
        {loading ? (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color={PRIMARY_COLOR} />
            <Text style={styles.loadingText}>Đang tải dữ liệu...</Text>
          </View>
        ) : (
          <>
            <View style={styles.card}>
              <Text style={styles.cardTitle}>Tổng quan ngân sách</Text>

              <View style={styles.metaRow}>
                <Text style={styles.metaText}>
                  Đã chi tiêu: {spentPercent}%
                </Text>
                <Text style={styles.metaText}>
                  Tổng ngân sách: {formatCompactMoney(overview.totalBudget)}
                </Text>
              </View>

              <View style={styles.progressTrack}>
                <View
                  style={[styles.progressFill, { width: `${spentPercent}%` }]}
                />
              </View>

              <View style={styles.overviewGrid}>
                <View style={styles.overviewItem}>
                  <Text style={styles.overviewLabel}>Số chuyến đi</Text>
                  <Text style={styles.overviewValue}>{overview.quantity}</Text>
                </View>
                <View style={styles.overviewItem}>
                  <Text style={styles.overviewLabel}>Đã chi</Text>
                  <Text style={styles.overviewValue}>
                    {formatCompactMoney(overview.totalSpent)}
                  </Text>
                </View>
                <View style={styles.overviewItem}>
                  <Text style={styles.overviewLabel}>Còn lại</Text>
                  <Text style={styles.greenValue}>
                    {formatCompactMoney(remainingBudget)}
                  </Text>
                </View>
              </View>
            </View>

            <View style={styles.card}>
              <Text style={styles.cardTitle}>
                Tình trạng thanh toán của bạn
              </Text>

              <View style={[styles.statusRow, styles.neutralBg]}>
                <Text style={styles.statusLabel}>Bạn đã trả</Text>
                <Text style={styles.statusValue}>
                  {formatCompactMoney(overview.totalSpent)}
                </Text>
              </View>

              <View style={[styles.statusRow, styles.debtBg]}>
                <Text style={styles.statusLabel}>Bạn nợ người khác</Text>
                <Text style={styles.debtValue}>
                  {formatCompactMoney(overview.totalDebt)}
                </Text>
              </View>

              <View style={[styles.statusRow, styles.receivedBg]}>
                <Text style={styles.statusLabel}>Người khác nợ bạn</Text>
                <Text style={styles.greenValue}>
                  {formatCompactMoney(overview.totalReceived)}
                </Text>
              </View>

              <View style={styles.totalWrap}>
                <Text style={styles.totalLabel}>Tổng quát</Text>
                <Text style={styles.totalValue}>
                  {formatCurrency(
                    overview.totalSpent +
                      overview.totalDebt +
                      overview.totalReceived,
                  )}
                </Text>
              </View>

              <Pressable style={styles.detailButton}>
                <Text style={styles.detailButtonText}>
                  Xem chi tiết thanh toán
                </Text>
              </Pressable>
            </View>

            {!!errorText && <Text style={styles.errorText}>{errorText}</Text>}
          </>
        )}
      </ScrollView>
    </Body>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    paddingBottom: 30,
    gap: 12,
  },
  loadingContainer: {
    minHeight: 220,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  loadingText: {
    color: '#6B7280',
    fontSize: 14,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    padding: 14,
    gap: 10,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#0F172A',
  },
  metaRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  metaText: {
    color: '#64748B',
    fontSize: 13,
  },
  progressTrack: {
    width: '100%',
    height: 10,
    borderRadius: 99,
    backgroundColor: '#EEF2F7',
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: SECONDARY_COLOR,
    borderRadius: 99,
  },
  overviewGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  overviewItem: {
    width: '31%',
    borderRightWidth: 1,
    borderRightColor: '#F1F5F9',
    paddingRight: 8,
  },
  overviewLabel: {
    color: '#94A3B8',
    fontSize: 12,
    textTransform: 'uppercase',
    marginBottom: 2,
  },
  overviewValue: {
    color: '#111827',
    fontSize: 26,
    fontWeight: '700',
  },
  statusRow: {
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  neutralBg: {
    backgroundColor: '#F1F5F9',
  },
  debtBg: {
    backgroundColor: '#FFEDEF',
  },
  receivedBg: {
    backgroundColor: '#EAFBEE',
  },
  statusLabel: {
    fontSize: 16,
    color: '#334155',
    fontWeight: '500',
  },
  statusValue: {
    fontSize: 28,
    fontWeight: '700',
    color: '#111827',
  },
  debtValue: {
    fontSize: 28,
    fontWeight: '700',
    color: '#EF4444',
  },
  greenValue: {
    fontSize: 28,
    fontWeight: '700',
    color: '#22C55E',
  },
  totalWrap: {
    marginTop: 4,
    borderTopWidth: 1,
    borderTopColor: '#EEF2F7',
    paddingTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  totalLabel: {
    color: '#64748B',
    fontSize: 13,
  },
  totalValue: {
    color: '#0F172A',
    fontSize: 15,
    fontWeight: '700',
  },
  detailButton: {
    marginTop: 4,
    borderRadius: 10,
    backgroundColor: '#DAF4DF',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
  },
  detailButtonText: {
    color: '#0F172A',
    fontSize: 15,
    fontWeight: '700',
  },
  errorText: {
    color: '#DC2626',
    fontSize: 13,
    marginTop: 4,
  },
});

export default SpendingScreen;
