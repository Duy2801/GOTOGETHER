import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Alert,
  ActivityIndicator,
} from 'react-native';
import { SECONDARY_COLOR } from '../../constants/color';
import { useDispatch } from 'react-redux';
import { logout } from '../../reducers/loginReducer';
import { useNavigation } from '@react-navigation/native';
import { SCREEN_NAME } from '../../constants/screenName';
import Toast from 'react-native-toast-message';
import { apiLogout } from './api';
import React from 'react';

const SettingScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation<any>();
  const [isLoggingOut, setIsLoggingOut] = React.useState(false);
  const handleLogout = () => {
    Alert.alert('Đăng xuất', 'Bạn có chắc chắn muốn đăng xuất?', [
      {
        text: 'Hủy',
        style: 'cancel',
      },
      {
        text: 'Đăng xuất',
        style: 'destructive',
        onPress: performLogout,
      },
    ]);
  };
  const performLogout = async () => {
    setIsLoggingOut(true);
    try {
      await apiLogout();

      dispatch(logout());

      navigation.reset({
        index: 0,
        routes: [{ name: SCREEN_NAME.LOGIN }],
      });
    } catch (error: any) {
      console.log('Logout API failed:', error);
    } finally {
      setIsLoggingOut(false);
    }
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.btn, isLoggingOut && styles.btnDisabled]}
        onPress={handleLogout}
        disabled={isLoggingOut}
      >
        {isLoggingOut ? (
          <ActivityIndicator color="#fff" />
        ) : (
          <Text style={styles.btnText}>Đăng xuất</Text>
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  btn: {
    backgroundColor: SECONDARY_COLOR,
    padding: 15,
    borderRadius: 10,
    minWidth: 150,
    alignItems: 'center',
  },
  btnDisabled: {
    opacity: 0.6,
  },
  btnText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default SettingScreen;
