import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import Header from './components/Header';
import { View } from 'react-native';
import Intro from './components/Intro';
// import ProfileScreen from './screens/ProfileScreen';
// import MatchScreen from './screens/MatchScreen';

const Stack = createStackNavigator();

const App = () => {
  const handleMenuPress = () => {
    console.log('Menu button pressed');
    // 여기에 메뉴 버튼을 눌렀을 때의 동작을 정의하세요
  };
  return (
    <>
      <Intro />
      <View>
        {/* <Header
          title='My App'
          onMenuPress={handleMenuPress}
        /> */}
      </View>
      {/* <NavigationContainer>
        {/* <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen
          name='Login'
          component={LoginScreen}
        />
      </Stack.Navigator> 

        <HomeScreen />
      </NavigationContainer> */}
    </>
  );
};

export default App;
