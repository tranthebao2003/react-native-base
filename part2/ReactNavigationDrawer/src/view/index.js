import React from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import Login from './login'
import Home from './home'
import Setting from './setting'
import Product from './product'
import Profile from './profile'
import Render from './render'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';



// tạo 1 đối tượng Stack giống Stack trong cấu trúc dữ liệu first in last out
// và cả các phương thức pop(number need remove), popToTop(quay lại đầu trang)
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const HomeDrawer = () => {
  return(
  <Drawer.Navigator initialRouteName="PageHome" screenOptions={{headerShown: false}}>
    <Drawer.Screen name="PageHome" component={Home}/>
    <Drawer.Screen name="PageSetting" component={Setting}/>
    <Drawer.Screen name='PageProduct' component={Product}/>
    <Drawer.Screen name='PageProfile' component={Profile}/>
    <Drawer.Screen name='PageRender' component={Render}/>
  </Drawer.Navigator> 
  )
 
}

export default RootComponent = () => {
  return (
   <NavigationContainer>
      <Stack.Navigator initialRouteName="PageLogin" screenOptions={{headerShown: false}}>
        <Stack.Screen name='Login' component={Login}/>
        <Stack.Screen name='HomeDrawer' component={HomeDrawer}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}
