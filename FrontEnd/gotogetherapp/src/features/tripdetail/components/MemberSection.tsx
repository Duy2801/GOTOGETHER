import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Member } from '../api';

interface MemberSectionProps {
  members: Member[];
  onAddMember?: () => void;
  onViewAll?: () => void;
}

const MemberSection: React.FC<MemberSectionProps> = ({
  members,
  onAddMember,
  onViewAll,
}) => {
  const displayMembers = members.slice(0, 3);

  const getAvatarColor = (index: number) => {
    const colors = ['#FFB74D', '#64B5F6', '#81C784', '#E57373', '#9575CD'];
    return colors[index % colors.length];
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.label}>Thành viên</Text>
        <TouchableOpacity style={styles.viewAll}>
          <Text style={styles.viewText}>Xem tất cả</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.membersRow}>
        {displayMembers.map((member, index) => (
          <View key={member.id} style={styles.memberItem}>
            <View style={styles.avatarContainer}>
              {member.avatar ? (
                <Image source={{ uri: member.avatar }} style={styles.avatar} />
              ) : (
                <View
                  style={[
                    styles.avatar,
                    { backgroundColor: getAvatarColor(index) },
                  ]}
                >
                  <Text style={styles.avatarText}>
                    {member.fullName?.charAt(0).toUpperCase() || 'U'}
                  </Text>
                </View>
              )}
            </View>
            <Text style={styles.memberName} numberOfLines={1}>
              {member.fullName || 'User'}
            </Text>
          </View>
        ))}

        {onAddMember && (
          <TouchableOpacity style={styles.memberItem} onPress={onAddMember}>
            <View style={styles.addButton}>
              <Text style={styles.addText}>+</Text>
            </View>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 8,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  membersRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  viewAll: {},
  viewText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  memberItem: {
    alignItems: 'center',
    marginRight: 16,
    width: 56,
  },
  avatarContainer: {
    marginBottom: 4,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
  memberName: {
    fontSize: 12,
    color: '#333',
    textAlign: 'center',
  },
  addButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    borderWidth: 2,
    borderColor: '#999',
    borderStyle: 'dashed',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 4,
  },
  addText: {
    fontSize: 24,
    color: '#999',
  },
  viewAllButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#F5F5F5',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 4,
  },
  viewAllText: {
    fontSize: 11,
    color: '#666',
    fontWeight: '500',
  },
});

export default MemberSection;
