import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './homeScreen';
import Exercise1Screen from './Exercise1Screen';
import Exercise2Screen from './Exercise2Screen';
import Exercise3Screen from './Exercise3Screen';
import WeekSummary from "./WeekSummary"

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Exercise1" component={Exercise1Screen} />
        <Stack.Screen name="Exercise2" component={Exercise2Screen} />
        <Stack.Screen name="Exercise3" component={Exercise3Screen} />
        <Stack.Screen name="WeekSummary" component={WeekSummary} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
