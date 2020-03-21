import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import IntroOne from '../screens/IntroScreen/IntroOne';
import IntroTwo from '../screens/IntroScreen/IntroTwo';
import IntroProfile from '../screens/IntroScreen/IntroProfile';
const Stack = createStackNavigator();

export default function IntroStack() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="IntroOne" component={IntroOne} />
      <Stack.Screen name="IntroTwo" component={IntroTwo} />
      <Stack.Screen name="IntroProfile" component={IntroProfile} />
    </Stack.Navigator>
  );
}
