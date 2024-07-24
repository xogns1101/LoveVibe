import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignUp from './screens/SignUpScreen';
import HomeScreen from './screens/HomeScreen';
import Intro from './components/Intro';
import TermsScreen from './screens/TermsScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Intro'
          component={Intro}
          options={{ headerShown: false }} // Intro 스크린의 헤더 숨기기
        />
        <Stack.Screen
          name='TermsScreen'
          component={TermsScreen}
          options={{ headerShown: false }} // SignUp 스크린의 헤더 숨기기
        />
        <Stack.Screen
          name='SignUp'
          component={SignUp}
          options={{ headerShown: false }} // SignUp 스크린의 헤더 숨기기
        />
        <Stack.Screen
          name='Home'
          component={HomeScreen}
          options={{ headerShown: false }} // Home 스크린의 헤더 숨기기
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
