import React from "react"
import Welcome from './screen/Welcome';
import Login from "./screen/Login";
import SignUp from "./screen/SignUp"
import ForgotPassword from "./screen/ForgotPassword"
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