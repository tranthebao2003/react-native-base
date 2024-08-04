import React from "react"
import Welcome from './screen/Welcome';
import Main from './screen/Main'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()

export default RootComponent = () => {
    return(
      <NavigationContainer>
        <Stack.Navigator initialRouteName="welcome" screenOptions={{headerShown: false}}>
          <Stack.Screen name="welcome" component={Welcome}/>
          <Stack.Screen name="main" component={Main}/>
        </Stack.Navigator>
      </NavigationContainer>
    )
}