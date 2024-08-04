import React from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import Login from './login'
import Home from './home'
import Setting from './setting'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';


// tạo 1 đối tượng Stack giống Stack trong cấu trúc dữ liệu first in last out
// và cả các phương thức pop(number need remove), popToTop(quay lại đầu trang)
const Stack = createNativeStackNavigator();

// tạo 1 đối tượng Taps
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
        <Tab.Screen name="PageHome" component={Home} options={{
         tabBarIcon: () =>{
            return(
              <FontAwesome5 name="home" size={24} color="black" />
            )
         },

        //  tabBarLabel nhận 1 props focused return boolean

         tabBarLabel : ({focused}) => {
          return(
            <Text style={{fontSize: 15, color : focused ? 'blue' : 'black'}}>Home</Text>
          )
          }
        }}/>

        <Tab.Screen name="PageSetting" component={Setting} options={{
          tabBarIcon: () =>{
            return(
              <Ionicons name="settings-outline" size={24} color="black" />
            )
          },
          tabBarLabel : ({focused}) => {
            return(
              <Text style={{fontSize: 15, color : focused ? 'blue' : 'black'}}>Home</Text>
            )
            }

        }}/>
    </Tab.Navigator>
  );
}

export default RootComponent = () => {

  return (
   <NavigationContainer>
      <Stack.Navigator initialRouteName="PageLogin" screenOptions={{headerShown: false}}>
        {/* tạo Stack.Screen để import screen*/}
        <Stack.Screen name="PageLogin" component={Login}/>
        <Stack.Screen name="HomeTabs" component={MyTabs}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}
