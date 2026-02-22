import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View } from 'react-native';
import { create } from 'react-test-renderer';
import { SCREEN_NAME } from '../../../constants/screenName';
import SettingScreen from '../../../features/setting/SettingScreen';

const Stack = createNativeStackNavigator();

const SettingStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={SCREEN_NAME.SETTING}
      screenOptions={{
        headerStyle: {},
      }}
    >
      <Stack.Screen
        name={SCREEN_NAME.SETTING}
        component={SettingScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};
export default SettingStack;
