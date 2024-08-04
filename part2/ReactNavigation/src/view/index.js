import React from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import Login from './login'
import Home from './home'
import Setting from './setting'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

// tạo 1 đối tượng Stack giống Stack trong cấu trúc dữ liệu first in last out
// và cả các phương thức pop(number need remove), popToTop(quay lại đầu trang)
const Stack = createNativeStackNavigator();

export default RootComponent = () => {

  return (
   <NavigationContainer>
       {/* initialRouteName: màn hình ban đầu  */}
       {/*  screenOptions={{headerShown: false}: mất đi cái header screen ở trên */}
      <Stack.Navigator initialRouteName="PageLogin" screenOptions={{headerShown: false}}>
        {/* tạo Stack.Screen để import screen*/}
        <Stack.Screen name="PageLogin" component={Login}/>
        <Stack.Screen name="PageHome" component={Home}/>
        <Stack.Screen name="PageSetting" component={Setting}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}
