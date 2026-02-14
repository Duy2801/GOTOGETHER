import {
  useNavigationContainerRef,
  NavigationContainer,
} from '@react-navigation/native';
import { SCREEN_NAME } from '../constants/screenName';
import OnboardingScreen from '../features/onboarding/OnboardingScreen';
import HomeScreen from '../features/home/HomeScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../features/auth/login/LoginScreen';
const Stack = createNativeStackNavigator();

function ApplicationNavigator() {
  const ref = useNavigationContainerRef();

  const router = [
    { name: SCREEN_NAME.ONBOARDING, component: OnboardingScreen },
    { name: SCREEN_NAME.HOME, component: HomeScreen },
    { name: SCREEN_NAME.LOGIN, component: LoginScreen },
  ];

  return (
    <NavigationContainer ref={ref}>
      <Stack.Navigator>
        {router.map(item => (
          <Stack.Screen
            key={item.name}
            name={item.name}
            component={item.component}
            options={{ headerShown: false }}
          />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
    // THieu TOAST
  );
}

export default ApplicationNavigator;
