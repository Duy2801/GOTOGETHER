import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View } from 'react-native';
import { SCREEN_NAME } from '../../../constants/screenName';
import CelebrateScreen from '../../../features/celebrate/CelebrateScreen';

const Stack = createNativeStackNavigator();

const CelebrateStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={SCREEN_NAME.CELEBRATE}
      screenOptions={{
        headerStyle: {},
      }}
    >
      <Stack.Screen
        name={SCREEN_NAME.CELEBRATE}
        component={CelebrateScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};
export default CelebrateStack;
