import React, { useCallback, useEffect, useMemo, useState } from 'react';
import {
  ActivityIndicator,
  Alert,
  Linking,
  RefreshControl,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import FontAwesome6 from '@react-native-vector-icons/fontawesome6';
import { useSelector } from 'react-redux';
import { RootState } from '../../reducers/store';
import { PRIMARY_COLOR } from '../../constants/color';
import { spendingApi } from './api';

const PaymentDetailScreen = ({ navigation }: { navigation: any }) => {
  const currentUser = useSelector((state: RootState) => state.login.user);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [actionLoadingId, setActionLoadingId] = useState<string | null>(null);
  const [errorText, setErrorText] = useState('');
  const [groups, setGroups] = useState<{
    debtGroups: any[];
    receivableGroups: any[];
  }>({
    debtGroups: [],
    receivableGroups: [],
  });

  const fetchData = useCallback(async () => {
    if (!currentUser?.id) {
      setLoading(false);
      setRefreshing(false);
      return;
    }

    try {
      setErrorText('');
      const result = await spendingApi.getPaymentDetailGroups(currentUser.id);
      setGroups(result);
    } catch (error: any) {
      setErrorText(
        error?.error || error?.message || 'Không thể tải chi tiết thanh toán',
      );
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  }, [currentUser?.id]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    fetchData();
  }, [fetchData]);

  const debtTotal = useMemo(
    () => groups.debtGroups.reduce((sum, group) => sum + group.totalAmount, 0),
    [groups.debtGroups],
  );

  const receivableTotal = useMemo(
    () =>
      groups.receivableGroups.reduce(
        (sum, group) => sum + group.totalAmount,
        0,
      ),
    [groups.receivableGroups],
  );

  const formatCompactMoney = (value: number) => {
    const abs = Math.abs(value);

    if (abs >= 1000000) {
      return `${(value / 1000000).toFixed(1).replace('.0', '')}M`;
    }
    if (abs >= 1000) {
      return `${(value / 1000).toFixed(0)}k`;
    }
    return `${Math.round(value)}`;
  };

  const formatMoney = (value: number) =>
    `${Math.round(value).toLocaleString('vi-VN')}đ`;

  const formatDate = (value: string) =>
    new Date(value).toLocaleDateString('vi-VN', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    });

  const handleMarkAsPaid = async (splitId: string) => {
    try {
      setActionLoadingId(splitId);
      await spendingApi.markSplitAsPaid(splitId);
      await fetchData();
      Alert.alert('Thành công', 'Đã đánh dấu khoản này là đã trả.');
    } catch (error: any) {
      Alert.alert(
        'Không thể cập nhật',
        error?.error || error?.message || 'Không thể đánh dấu đã trả.',
      );
    } finally {
      setActionLoadingId(null);
    }
  };

  const handleConfirmReceived = async (splitId: string) => {
    try {
      setActionLoadingId(splitId);
      await spendingApi.confirmSplitReceived(splitId);
      await fetchData();
      Alert.alert('Thành công', 'Đã xác nhận nhận tiền.');
    } catch (error: any) {
      Alert.alert(
        'Không thể xác nhận',
        error?.error || error?.message || 'Không thể xác nhận đã nhận tiền.',
      );
    } finally {
      setActionLoadingId(null);
    }
  };

  const handleRemind = async (name: string, amount: number) => {
    const message = `Nhac ban chuyen minh ${formatMoney(
      amount,
    )} cho khoan chi phi chuyen di. Cam on ${name}.`;
    try {
    } catch {
      Alert.alert('Gợi ý nhắc nợ', message);
    }
  };

  const renderGroupCard = (group: any, type: 'debt' | 'receivable') => {
    const primaryItem = group.items[0];
    const canConfirm = type === 'receivable' && primaryItem?.isPaid;
    const actionLoading = actionLoadingId === primaryItem?.splitId;

    return (
      <View key={group.id} style={styles.personCard}>
        <View style={styles.personHeader}>
          <View style={styles.personIdentity}>
            {group.counterpartyAvatar ? (
              <Image
                source={{ uri: group.counterpartyAvatar }}
                style={styles.avatar}
              />
            ) : (
              <View style={[styles.avatar, styles.avatarFallback]}>
                <Text style={styles.avatarText}>
                  {(group.counterpartyName || 'U').slice(0, 1).toUpperCase()}
                </Text>
              </View>
            )}
            <View style={styles.personMeta}>
              <Text style={styles.personName}>{group.counterpartyName}</Text>
              <Text style={styles.personSubtitle}>
                {canConfirm
                  ? `Da gui tien cho ban`
                  : type === 'debt'
                  ? `Ban dang no ${group.counterpartyName}`
                  : `Giao dich: ${primaryItem?.description || 'Thanh toan'}`}
              </Text>
            </View>
          </View>
          <Text
            style={
              type === 'debt' ? styles.debtAmountText : styles.receiveAmountText
            }
          >
            {type === 'debt' ? '-' : ''}
            {formatCompactMoney(group.totalAmount)}
          </Text>
        </View>

        <View style={styles.detailList}>
          {group.items.slice(0, 3).map((item: any) => (
            <View key={item.splitId} style={styles.detailRow}>
              <Text style={styles.detailLabel} numberOfLines={1}>
                {item.description}
              </Text>
              <Text style={styles.detailAmount}>
                {formatCompactMoney(item.amount)}
              </Text>
            </View>
          ))}
        </View>

        <View style={styles.tripRow}>
          <Text style={styles.tripName}>{primaryItem?.tripName}</Text>
          <Text style={styles.tripDate}>{formatDate(primaryItem?.date)}</Text>
        </View>

        <View style={styles.cardActions}>
          {type === 'debt' ? (
            <TouchableOpacity
              style={styles.primaryActionButton}
              onPress={() => handleMarkAsPaid(primaryItem.splitId)}
              disabled={actionLoading}
            >
              <Text style={styles.primaryActionText}>
                {actionLoading ? 'Đang xử lý...' : 'Đánh dấu đã trả'}
              </Text>
            </TouchableOpacity>
          ) : (
            <>
              <TouchableOpacity
                style={styles.secondaryActionButton}
                onPress={() =>
                  handleRemind(group.counterpartyName, group.totalAmount)
                }
              >
                <Text style={styles.secondaryActionText}>Nhắc nhở</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.confirmActionButton,
                  !canConfirm && styles.confirmActionButtonDisabled,
                ]}
                onPress={() => handleConfirmReceived(primaryItem.splitId)}
                disabled={!canConfirm || actionLoading}
              >
                <Text style={styles.confirmActionText}>
                  {actionLoading ? 'Đang xử lý...' : 'Đã nhận tiền'}
                </Text>
              </TouchableOpacity>
            </>
          )}
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.screen} edges={['top', 'left', 'right']}>
      <View style={styles.headerRow}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <FontAwesome6
            name="angle-left"
            size={18}
            color="#162033"
            iconStyle="solid"
          />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Thanh toán & Nợ</Text>
        <FontAwesome6
          name="clock-rotate-left"
          size={16}
          color="#22C55E"
          iconStyle="solid"
        />
      </View>

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
          <View style={styles.loadingWrap}>
            <ActivityIndicator size="large" color={PRIMARY_COLOR} />
            <Text style={styles.loadingText}>Đang tải dữ liệu...</Text>
          </View>
        ) : (
          <>
            <View style={styles.sectionHeader}>
              <View style={[styles.dot, styles.debtDot]} />
              <Text style={styles.sectionTitle}>Bạn nợ</Text>
              <Text style={styles.sectionDebtAmount}>
                -{formatCompactMoney(debtTotal)}
              </Text>
            </View>

            {groups.debtGroups.length ? (
              groups.debtGroups.map(group => renderGroupCard(group, 'debt'))
            ) : (
              <View style={styles.emptyCard}>
                <Text style={styles.emptyText}>
                  Hiện tại bạn không có khoản nợ nào.
                </Text>
              </View>
            )}

            <View style={styles.sectionHeader}>
              <View style={[styles.dot, styles.receiveDot]} />
              <Text style={styles.sectionTitle}>Người khác nợ bạn</Text>
              <Text style={styles.sectionReceiveAmount}>
                +{formatCompactMoney(receivableTotal)}
              </Text>
            </View>

            {groups.receivableGroups.length ? (
              groups.receivableGroups.map(group =>
                renderGroupCard(group, 'receivable'),
              )
            ) : (
              <View style={styles.emptyCard}>
                <Text style={styles.emptyText}>
                  Chưa có ai nợ bạn ở thời điểm này.
                </Text>
              </View>
            )}

            <View style={styles.tipCard}>
              <View style={styles.tipIconWrap}>
                <FontAwesome6
                  name="circle-info"
                  size={14}
                  color="#22C55E"
                  iconStyle="solid"
                />
              </View>
              <View style={styles.tipTextWrap}>
                <Text style={styles.tipTitle}>Mẹo nhỏ</Text>
                <Text style={styles.tipText}>
                  Bạn có thể gửi tin nhắn nhắc nợ trực tiếp qua Messenger hoặc
                  Zalo bằng nút Nhắc nhở.
                </Text>
              </View>
            </View>

            {!!errorText && <Text style={styles.errorText}>{errorText}</Text>}
          </>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#F6F8FC',
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: 4,
    paddingBottom: 10,
  },
  backButton: {
    width: 32,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#162033',
  },
  container: {
    paddingHorizontal: 16,
    paddingBottom: 30,
    gap: 12,
  },
  loadingWrap: {
    minHeight: 240,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  loadingText: {
    fontSize: 14,
    color: '#64748B',
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginTop: 4,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
  },
  debtDot: {
    backgroundColor: '#F87171',
  },
  receiveDot: {
    backgroundColor: '#84CC16',
  },
  sectionTitle: {
    flex: 1,
    fontSize: 16,
    fontWeight: '700',
    color: '#111827',
  },
  sectionDebtAmount: {
    fontSize: 15,
    fontWeight: '700',
    color: '#FB7185',
  },
  sectionReceiveAmount: {
    fontSize: 15,
    fontWeight: '700',
    color: '#22C55E',
  },
  personCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 12,
    borderWidth: 1,
    borderColor: '#E8EDF5',
    gap: 10,
  },
  personHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  personIdentity: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    flex: 1,
  },
  avatar: {
    width: 42,
    height: 42,
    borderRadius: 21,
  },
  avatarFallback: {
    backgroundColor: '#CBD5E1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#0F172A',
  },
  personMeta: {
    flex: 1,
  },
  personName: {
    fontSize: 15,
    fontWeight: '700',
    color: '#0F172A',
  },
  personSubtitle: {
    marginTop: 2,
    fontSize: 12,
    color: '#64748B',
  },
  debtAmountText: {
    fontSize: 22,
    fontWeight: '700',
    color: '#F43F5E',
  },
  receiveAmountText: {
    fontSize: 22,
    fontWeight: '700',
    color: '#22C55E',
  },
  detailList: {
    gap: 6,
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 12,
  },
  detailLabel: {
    flex: 1,
    fontSize: 13,
    color: '#334155',
  },
  detailAmount: {
    fontSize: 13,
    color: '#334155',
    fontWeight: '600',
  },
  tripRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  tripName: {
    fontSize: 12,
    color: '#64748B',
    fontWeight: '600',
  },
  tripDate: {
    fontSize: 12,
    color: '#94A3B8',
  },
  cardActions: {
    flexDirection: 'row',
    gap: 8,
  },
  primaryActionButton: {
    flex: 1,
    backgroundColor: '#162033',
    borderRadius: 10,
    paddingVertical: 11,
    alignItems: 'center',
  },
  primaryActionText: {
    fontSize: 13,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  secondaryActionButton: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#D7DEE9',
    borderRadius: 10,
    paddingVertical: 11,
    alignItems: 'center',
  },
  secondaryActionText: {
    fontSize: 13,
    fontWeight: '700',
    color: '#475569',
  },
  confirmActionButton: {
    flex: 1,
    backgroundColor: '#1FE05A',
    borderRadius: 10,
    paddingVertical: 11,
    alignItems: 'center',
  },
  confirmActionButtonDisabled: {
    backgroundColor: '#BBF7D0',
  },
  confirmActionText: {
    fontSize: 13,
    fontWeight: '700',
    color: '#063B12',
  },
  tipCard: {
    flexDirection: 'row',
    gap: 10,
    backgroundColor: '#EAFBF0',
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#C7F0D4',
    padding: 14,
  },
  tipIconWrap: {
    paddingTop: 2,
  },
  tipTextWrap: {
    flex: 1,
  },
  tipTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: '#0F8A3B',
    marginBottom: 3,
  },
  tipText: {
    fontSize: 12,
    color: '#4B5563',
    lineHeight: 18,
  },
  emptyCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: '#E8EDF5',
  },
  emptyText: {
    fontSize: 13,
    color: '#64748B',
  },
  errorText: {
    fontSize: 13,
    color: '#DC2626',
  },
});

export default PaymentDetailScreen;
