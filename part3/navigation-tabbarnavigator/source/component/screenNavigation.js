import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome from '../screen/webcome/screen2/Welcome'
import Login from '../screen/webcome/screen2/Login'
import SignUp from '../screen/webcome/screen2/SignUp'
import ForgotPassword from '../screen/webcome/screen2/ForgotPassword'
import UITap from './UITabs';
import Messenger from '../screen/messenger/Messenger'

const Stack = createNativeStackNavigator();

export default RootElement = () =>{
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="welcome" screenOptions={{headerShown: false}}>
          <Stack.Screen name="welcome" component={Welcome}/>
          <Stack.Screen name="login" component={Login}/>
          <Stack.Screen name="signUp" component={SignUp}/>
          <Stack.Screen name="forgot" component={ForgotPassword}/>
          <Stack.Screen name="uiTap" component={UITap}/>
          <Stack.Screen name="messenger" component={Messenger}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
}
