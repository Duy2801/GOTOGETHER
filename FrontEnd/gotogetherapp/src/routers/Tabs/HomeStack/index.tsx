import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { AVATAR, ICONHELLO, ICONNOTIFICATION } from '../../../assets';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SCREEN_NAME } from '../../../constants/screenName';
import HomeScreen from '../../../features/home/HomeScreen';
import {
  TripDetailScreen,
  AddExpenseScreen,
} from '../../../features/tripdetail';

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={SCREEN_NAME.HOME}
      screenOptions={{
        headerStyle: {},
      }}
    >
      <Stack.Screen
        name={SCREEN_NAME.HOME}
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={SCREEN_NAME.TRIP_DETAIL}
        component={TripDetailScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={SCREEN_NAME.ADD_EXPENSE}
        component={AddExpenseScreen}
        options={{
          headerShown: false,
          presentation: 'transparentModal',
          animation: 'fade',
          contentStyle: { backgroundColor: 'transparent' },
        }}
      />
    </Stack.Navigator>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {},
});
export default HomeStack;
