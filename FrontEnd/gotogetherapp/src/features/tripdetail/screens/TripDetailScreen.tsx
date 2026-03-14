import React, { useState, useEffect, useCallback } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
  RefreshControl,
  Alert,
} from 'react-native';
import { PRIMARY_COLOR, SECONDARY_COLOR } from '../../../constants/color';
import { SCREEN_NAME } from '../../../constants/screenName';
import Body from '../../../components/Layout/Body';
import MemberSection from '../components/MemberSection';
import ExpenseItem from '../components/ExpenseItem';
import AddMemberModal from '../components/AddMemberModal';
import { tripDetailApi, TripDetail, Expense } from '../api';
import SimpleFloatingButton from '../../../components/SimpleFloatingButton';

interface TripDetailScreenProps {
  route: any;
  navigation: any;
}

const TripDetailScreen: React.FC<TripDetailScreenProps> = ({
  route,
  navigation,
}) => {
  const { tripId } = route.params;

  const [tripDetail, setTripDetail] = useState<TripDetail | null>(null);
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [showAddMemberModal, setShowAddMemberModal] = useState(false);

  const fetchTripDetail = async () => {
    try {
      const tripResponse = await tripDetailApi.getTripDetail(tripId);

      if (tripResponse.status) {
        setTripDetail(tripResponse.data);
      }
      try {
        const expensesResponse = await tripDetailApi.getTripExpenses(tripId, {
          limit: 20,
        });
        if (expensesResponse.status) {
          setExpenses(expensesResponse.data.expenses);
        }
      } catch (expenseError: any) {}
    } catch (error: any) {
      Alert.alert('Lỗi', error?.error || 'Không thể tải thông tin chuyến đi');
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    fetchTripDetail();
  }, [tripId]);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    fetchTripDetail();
  }, [tripId]);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('vi-VN', {
      day: '2-digit',
      month: '2-digit',
    });
  };

  const calculateDays = (startDate: string, endDate: string) => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const diffTime = Math.abs(end.getTime() - start.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays + 1;
  };
  const calculateTotalExpense = () => {
    return expenses.reduce(
      (total, expense) => total + Number(expense.amount),
      0,
    );
  };

  const acceptedMembers =
    tripDetail?.members?.filter(member => member.inviteStatus === 'ACCEPTED') ||
    [];

  const ownerMember =
    tripDetail?.members?.find(
      member => member.role === 'OWNER' && member.inviteStatus === 'ACCEPTED',
    ) || null;

  const handleAddExpense = () => {
    navigation.navigate(SCREEN_NAME.ADD_EXPENSE, {
      tripId,
      onExpenseAdded: () => {
        fetchTripDetail();
      },
    });
  };

  const handleInviteMember = async (email: string) => {
    try {
      console.log('Inviting member:', email, 'to trip:', tripId);
      const response = await tripDetailApi.inviteMember(tripId, { email });
      console.log('Invite response:', response);

      if (response.status) {
        Alert.alert(
          'Thành công',
          `Đã gửi lời mời đến ${email}. Họ cần chấp nhận lời mời để tham gia chuyến đi.`,
        );
        fetchTripDetail();
      }
    } catch (error: any) {
      console.error('Error inviting member:', error);
      const errorMessage =
        error?.message || error?.error || 'Không thể mời thành viên';

      if (errorMessage.includes('chi tiêu')) {
        Alert.alert(
          'Không thể thêm thành viên',
          'Không thể thêm thành viên khi đã có chi tiêu trong chuyến đi.',
        );
      } else if (
        errorMessage.includes('email') ||
        errorMessage.includes('người dùng')
      ) {
        Alert.alert(
          'Không tìm thấy',
          'Không tìm thấy người dùng với email này. Vui lòng kiểm tra lại.',
        );
      } else if (errorMessage.includes('đã là thành viên')) {
        Alert.alert('Thông báo', 'Người dùng đã là thành viên của chuyến đi.');
      } else if (errorMessage.includes('lời mời đã được gửi')) {
        Alert.alert('Thông báo', 'Lời mời đã được gửi trước đó.');
      } else if (
        errorMessage.includes('không thuộc chuyến đi') ||
        errorMessage.includes('không có quyền')
      ) {
        Alert.alert(
          'Lỗi',
          'Bạn không có quyền mời thành viên vào chuyến đi này. Chỉ chủ chuyến đi mới có quyền này.',
        );
      } else {
        Alert.alert('Lỗi', errorMessage);
      }

      throw error;
    }
  };

  if (loading) {
    return (
      <Body
        hideHeader={false}
        title="Chi tiết chuyến đi"
        backgroundColor="#f0f5f1"
      >
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color={PRIMARY_COLOR} />
          <Text style={styles.loadingText}>Đang tải...</Text>
        </View>
      </Body>
    );
  }

  if (!tripDetail) {
    return (
      <Body
        hideHeader={false}
        title="Chi tiết chuyến đi"
        backgroundColor="#f0f5f1"
      >
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>
            Không tìm thấy thông tin chuyến đi
          </Text>
          <TouchableOpacity
            style={styles.retryButton}
            onPress={fetchTripDetail}
          >
            <Text style={styles.retryText}>Thử lại</Text>
          </TouchableOpacity>
        </View>
      </Body>
    );
  }

  return (
    <Body
      hideHeader={false}
      title="Chi tiết chuyến đi"
      backgroundColor="#f0f5f1"
    >
      <ScrollView
        style={styles.content}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <View style={styles.tripCard}>
          <View style={styles.tripinformation}>
            <View style={styles.chipContainer}>
              <Text style={styles.chipText}>{tripDetail.name}</Text>
            </View>
            {ownerMember ? (
              <View style={styles.ownerBadge}>
                <Text style={styles.ownerBadgeIcon}>👑</Text>
                <Text style={styles.ownerBadgeText}>
                  Chủ chuyến: {ownerMember.fullName}
                </Text>
              </View>
            ) : (
              <View style={styles.ownerBadge}>
                <Text style={styles.ownerBadgeText}>Thành viên</Text>
              </View>
            )}

            <Text style={styles.tripDate}>
              📅 {formatDate(tripDetail.startDate)} -{' '}
              {formatDate(tripDetail.endDate)} •{' '}
              {calculateDays(tripDetail.startDate, tripDetail.endDate)} ngày
            </Text>

            {acceptedMembers.length > 0 && (
              <MemberSection
                members={acceptedMembers}
                onAddMember={() => {
                  setShowAddMemberModal(true);
                }}
                onViewAll={() => {
                  Alert.alert('Thông báo', 'Chức năng đang phát triển');
                }}
              />
            )}
          </View>
          <View style={styles.expensesContrainer}>
            <View style={styles.budgetSection}>
              <Text style={styles.budgetLabel}>Chi tiêu gần đây</Text>
              <Text style={styles.budgetAmount}>
                {calculateTotalExpense().toLocaleString('vi-VN')} đ
              </Text>
            </View>
            {expenses.length > 0 ? (
              <View style={styles.expensesList}>
                {expenses.map(expense => (
                  <ExpenseItem key={expense.id} expense={expense} />
                ))}
              </View>
            ) : (
              <View style={styles.emptyContainer}>
                <Text style={styles.emptyText}>Chưa có chi tiêu nào</Text>
                <Text style={styles.emptySubText}>
                  Nhấn nút + để thêm chi tiêu mới
                </Text>
              </View>
            )}
          </View>
        </View>

        <View style={{ height: 100 }} />
      </ScrollView>

      <AddMemberModal
        visible={showAddMemberModal}
        onClose={() => setShowAddMemberModal(false)}
        onSubmit={handleInviteMember}
      />
      <SimpleFloatingButton
        onPress={handleAddExpense}
        icon="+"
        backgroundColor={SECONDARY_COLOR}
        size={56}
        bottom={20}
        right={20}
        position="right"
      />
    </Body>
  );
};

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    marginTop: 12,
    fontSize: 16,
    color: '#666',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  errorText: {
    fontSize: 16,
    color: '#666',
    marginBottom: 16,
    textAlign: 'center',
  },
  tripinformation: {
    padding: 16,
    borderRadius: 12,
    marginBottom: 40,
    marginLeft: 8,
    marginRight: 8,
  },
  retryButton: {
    backgroundColor: PRIMARY_COLOR,
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
  },
  retryText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  content: {
    flex: 1,
  },
  tripCard: {
    // margin: 8,
    // padding: 8,
  },
  chipContainer: {
    flexDirection: 'row',
    marginBottom: 12,
  },
  chip: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
  },
  chipActive: {
    backgroundColor: PRIMARY_COLOR,
  },
  chipText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  ownerBadge: {
    alignSelf: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 12,
    backgroundColor: '#FFF4D6',
    marginBottom: 10,
  },
  ownerBadgeIcon: {
    fontSize: 12,
    marginRight: 4,
  },
  ownerBadgeText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#8A5A00',
  },
  tripTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  tripDate: {
    fontSize: 16,
    marginBottom: 16,
    fontWeight: 'bold',
  },
  budgetSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 8,
  },
  budgetLabel: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  budgetAmount: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  expensesList: {
    paddingTop: 8,
  },
  expensesContrainer: {
    backgroundColor: 'white',
    padding: 8,
    height: '100%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  emptyContainer: {
    alignItems: 'center',
    padding: 40,
  },
  emptyText: {
    fontSize: 16,
    color: '#999',
    marginBottom: 8,
  },
  emptySubText: {
    fontSize: 14,
    color: '#BBB',
  },
  addButton: {
    position: 'absolute',
    bottom: 24,
    right: 24,
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: PRIMARY_COLOR,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  addButtonText: {
    fontSize: 32,
    color: 'white',
    fontWeight: '300',
  },
});

export default TripDetailScreen;
