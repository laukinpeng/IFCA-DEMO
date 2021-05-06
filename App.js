import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';
import { LogBox } from 'react-native';

LogBox.ignoreLogs(['Setting a timer']);

import loginScreen from './screens/LoginScreen';
import registerScreen from './screens/RegisterScreen';

const Stack = createStackNavigator();

export default function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName = "Login">
        <Stack.Screen name="Login" component={loginScreen}/>
        <Stack.Screen name="Register" component={registerScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}