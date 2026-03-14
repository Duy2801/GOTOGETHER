import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ViewStyle } from 'react-native';
import { PRIMARY_COLOR } from '../../constants/color';

interface SimpleFloatingButtonProps {
  onPress: () => void;
  icon?: string;
  backgroundColor?: string;
  size?: number;
  bottom?: number;
  right?: number;
  left?: number;
  position?: 'right' | 'left';
}

const SimpleFloatingButton: React.FC<SimpleFloatingButtonProps> = ({
  onPress,
  icon = '+',
  backgroundColor = PRIMARY_COLOR,
  size = 56,
  bottom = 20,
  right = 20,
  left = 20,
  position = 'right',
}) => {
  const dynamicStyles: ViewStyle = {
    backgroundColor,
    width: size,
    height: size,
    borderRadius: size / 2,
    bottom,
    ...(position === 'right' ? { right } : { left }),
  };

  return (
    <TouchableOpacity
      style={[styles.fab, dynamicStyles]}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <Text style={[styles.fabIcon, { fontSize: size * 0.57 }]}>{icon}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 6,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
  },
  fabIcon: {
    color: 'white',
    fontWeight: '300',
  },
});

export default SimpleFloatingButton;
