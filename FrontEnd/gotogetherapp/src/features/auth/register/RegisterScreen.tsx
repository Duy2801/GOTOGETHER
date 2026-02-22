import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Body from '../../../components/Layout/Body';
import { LOGO } from '../../../assets';
import { useNavigation } from '@react-navigation/native';
import { SECONDARY_COLOR } from '../../../constants/color';
import { useState } from 'react';
import Button from '../../../components/Button/Button';

const RegisterScreen = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const navigation = useNavigation<any>();
  return (
    <Body hideHeader>
      <View style={styles.container}>
        <View style={styles.card}>
          <Image style={styles.imageLogo} source={LOGO.MAIN} />
          <Text style={styles.title}>Đăng ký</Text>
        </View>
        <View>
          <TextInput
            style={styles.input}
            placeholder="Email"
            // placeholderTextColor={'black'}
          />
          <View style={styles.containerPassword}>
            <TextInput
              style={styles.inputPassword}
              placeholder="Mật khẩu"
              secureTextEntry={!showPassword}
            />

            <TouchableOpacity
              style={styles.eyeContainer}
              onPress={handleShowPassword}
            >
              <Text style={styles.eye}>{showPassword ? '🙈' : '👁️'}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.containerPassword}>
            <TextInput
              style={styles.inputPassword}
              placeholder="Nhập lại mật khẩu"
              secureTextEntry={!showPassword}
            />

            <TouchableOpacity
              style={styles.eyeContainer}
              onPress={handleShowPassword}
            >
              <Text style={styles.eye}>{showPassword ? '🙈' : '👁️'}</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.buttonWrapper}>
          <Button
            title="Đăng ký"
            onPress={() => navigation.navigate('Login')}
          />
        </View>
        <View style={styles.footerText}>
          <Text>Nếu bạn đã có tài khoản thì hãy,</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.loginText}>Đăng nhập ngay</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Body>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    margin: 20,
    borderRadius: 10,
    paddingHorizontal: 30,
  },
  card: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: -20,
  },
  imageLogo: {
    width: 250,
    height: 250,
  },
  buttonWrapper: {
    marginTop: 30,
  },
  footerText: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  loginText: {
    color: SECONDARY_COLOR,
    fontWeight: 'bold',
    marginLeft: 5,
  },
  input: {
    width: 300,
    height: 50,
    borderBottomWidth: 1,
    borderRadius: 10,
    borderColor: '#636363',
    marginTop: 30,
    paddingHorizontal: 10,
    opacity: 0.8,
  },
  containerPassword: {
    position: 'relative',
    marginTop: 30,
  },
  inputPassword: {
    width: 300,
    height: 50,
    borderBottomWidth: 1,
    borderRadius: 10,
    borderColor: '#636363',
    paddingHorizontal: 10,
    opacity: 0.8,
  },
  eyeContainer: {
    position: 'absolute',
    right: 20,
    top: 15,
  },
  eye: {
    fontSize: 18,
  },
});
export default RegisterScreen;
