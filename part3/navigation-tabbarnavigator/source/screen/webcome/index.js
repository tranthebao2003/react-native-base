import React from "react"
import Welcome from './screen2/Welcome';
import Login from "./screen2/Login";
import SignUp from "./screen2/SignUp"
import ForgotPassword from "./screen2/ForgotPassword"
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()

export default RootComponent = () => {
    return(
      <NavigationContainer>
        <Stack.Navigator initialRouteName="welcome" screenOptions={{headerShown: false}}>
          <Stack.Screen name="welcome" component={Welcome}/>
          <Stack.Screen name="login" component={Login}/>
          <Stack.Screen name="signUp" component={SignUp}/>
          <Stack.Screen name="forgot" component={ForgotPassword}/>
        </Stack.Navigator>
      </NavigationContainer>
    )
}