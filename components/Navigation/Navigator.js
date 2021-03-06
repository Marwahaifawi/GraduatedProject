import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StartPage from '../Screens/StartPage/StartPage';
import SlideItem from '../Screens/FirstSlides/Slider';
import MainPage from '../Screens/MainPage/MainPage';
import LogIn from '../Screens/LogIn/LogIn';
import SignUp from '../Screens/SignUp/SignUp';
import Dashboard from '../Screens/Dashboard/Dashboard';
import LogInSignUpScreen from '../Screens/LogInSignUpScreen/LogInSignUpScreen';
import ResetPasswordScreen from '../Screens/ResetPasswordScreen/ResetPasswordScreen';
const Stack = createNativeStackNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
         <Stack.Navigator 
         initialRouteName="StartPage"  
         screenOptions={{
            headerShown: false,
          }}>
        <Stack.Screen name="StartPage"   component={StartPage} />
        <Stack.Screen name="SlideItem"   component={SlideItem} />        
        <Stack.Screen name="MainPage"    component={MainPage} />
        <Stack.Screen name="LogIn"       component={LogIn} />
        <Stack.Screen name="LogInSignUpScreen" component={LogInSignUpScreen} />
        <Stack.Screen name="SignUp"    component={SignUp} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen
            name="ResetPasswordScreen"
            component={ResetPasswordScreen}
          />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;