import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { PRIMARY_COLOR, SECONDARY_COLOR } from '../../../constants/color';

interface TripFilterProps {
  selectedFilter: string;
  onFilterChange: (filter: string) => void;
}

const filters = [
  { label: 'Tất cả', value: 'ALL' },
  { label: 'Sắp tới', value: 'UPCOMING' },
  { label: 'Đang diễn ra', value: 'ONGOING' },
  { label: 'Đã hoàn thành', value: 'COMPLETED' },
];

const TripFilter: React.FC<TripFilterProps> = ({
  selectedFilter,
  onFilterChange,
}) => {
  return (
    <View style={styles.container}>
      {filters.map(filter => (
        <TouchableOpacity
          key={filter.value}
          style={[
            styles.filterButton,
            selectedFilter === filter.value && styles.filterButtonActive,
          ]}
          onPress={() => onFilterChange(filter.value)}
        >
          <Text
            style={[
              styles.filterText,
              selectedFilter === filter.value && styles.filterTextActive,
            ]}
          >
            {filter.label}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: 12,
    paddingHorizontal: 4,
  },
  filterButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: PRIMARY_COLOR,
    marginRight: 4,
  },
  filterButtonActive: {
    backgroundColor: SECONDARY_COLOR,
  },
  filterText: {
    fontSize: 13,
    color: '#666',
    fontWeight: '500',
  },
  filterTextActive: {
    color: 'white',
    fontWeight: '600',
  },
});

export default TripFilter;
