import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { SECONDARY_COLOR } from '../../constants/color';

interface ButtonProps {
  title: string;
  onPress: () => void;
  color?: string;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  color = SECONDARY_COLOR,
  disabled = false,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.button,
        {
          backgroundColor: color,
          padding: 20,
          borderRadius: 20,
          opacity: disabled ? 0.5 : 1,
        },
      ]}
      disabled={disabled}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: SECONDARY_COLOR,
    padding: 20,
    marginHorizontal: 30,
    marginBottom: 50,
    marginVertical: 20,
  },
  text: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
export default Button;
