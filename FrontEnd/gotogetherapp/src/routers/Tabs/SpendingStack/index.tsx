import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View } from 'react-native';
import { SCREEN_NAME } from '../../../constants/screenName';
import SpendingScreen from '../../../features/spending/SpedingScreen';

const Stack = createNativeStackNavigator();

const SpendingStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={SCREEN_NAME.SPENDING}
      screenOptions={{
        headerStyle: {},
      }}
    >
      <Stack.Screen
        name={SCREEN_NAME.SPENDING}
        component={SpendingScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};
export default SpendingStack;
