import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Setting from '../screen/setting/screenSetting';
import ProductGridView from '../screen/producGridView/screenGridView';
import FoodList from '../screen/foodList/screenFoodList';
import Profile from '../screen/profile/Profile';
import Chat from '../screen/chat/screenChat'
import {Image, Text} from 'react-native'
import colors from './colors'

const Tab = createBottomTabNavigator()

function UITap(){
    return (
      <Tab.Navigator
        initialRouteName="product"
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: colors.primary,
          tabBarInactiveTintColor: colors.inactive,
          tabBarStyle: {
            backgroundColor: colors.backgroundSecond,
            height: 52,
            position: 'absolute', bottom: 0,
          },
        
        }}
      >
        <Tab.Screen
          name="Product"
          component={ProductGridView}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <Image
                  source={require("../resource/iconTabs/product.png")}
                  style={{
                    width: 25,
                    height: 25,
                    tintColor: focused ? colors.primary : colors.inactive,
                    marginBottom: -5,
                  }}
                  resizeMode="cover"
                ></Image>
              );
            },

            tabBarLabel: ({ focused }) => {
              return (
                <Text
                  style={{
                    fontSize: 14,
                    color: focused ? colors.primary : colors.inactive,
                    fontWeight: 600,
                  }}
                >
                  Product
                </Text>
              );
            },
          }}
        />
        <Tab.Screen
          name="Food List"
          component={FoodList}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <Image
                  source={require("../resource/iconTabs/foodList.png")}
                  style={{
                    width: 25,
                    height: 25,
                    tintColor: focused ? colors.primary : colors.inactive,
                    marginBottom: -5,
                  }}
                  resizeMode="cover"
                ></Image>
              );
            },
            tabBarLabel: ({ focused }) => {
              return (
                <Text
                  style={{
                    fontSize: 14,
                    color: focused ? colors.primary : colors.inactive,
                    fontWeight: 600,
                  }}
                >
                  Food list
                </Text>
              );
            },
          }}
        />
        <Tab.Screen
          name="Setting"
          component={Setting}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <Image
                  source={require("../resource/iconTabs/setting.png")}
                  style={{
                    width: 25,
                    height: 25,
                    tintColor: focused ? colors.primary : colors.inactive,
                    marginBottom: -5,
                  }}
                  resizeMode="cover"
                ></Image>
              );
            },
            tabBarLabel: ({ focused }) => {
              return (
                <Text
                  style={{
                    fontSize: 14,
                    color: focused ? colors.primary : colors.inactive,
                    fontWeight: 600,
                  }}
                >
                  Setting
                </Text>
              );
            },
          }}
        />

        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <Image
                  source={require("../resource/iconTabs/profile.png")}
                  style={{
                    width: 25,
                    height: 25,
                    tintColor: focused ? colors.primary : colors.inactive,
                    marginBottom: -5,
                  }}
                  resizeMode="cover"
                ></Image>
              );
            },
            tabBarLabel: ({ focused }) => {
              return (
                <Text
                  style={{
                    fontSize: 14,
                    color: focused ? colors.primary : colors.inactive,
                    fontWeight: 600,
                  }}
                >
                  Profile
                </Text>
              );
            },
          }}
        />

<Tab.Screen
          name="Chat"
          component={Chat}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <Image
                  source={require("../resource/iconTabs/chat.png")}
                  style={{
                    width: 25,
                    height: 25,
                    tintColor: focused ? colors.primary : colors.inactive,
                    marginBottom: -5,
                  }}
                  resizeMode="cover"
                ></Image>
              );
            },
            tabBarLabel: ({ focused }) => {
              return (
                <Text
                  style={{
                    fontSize: 14,
                    color: focused ? colors.primary : colors.inactive,
                    fontWeight: 600,
                  }}
                >
                  Chat
                </Text>
              );
            },
          }}
        />
      </Tab.Navigator>
    );
}

export default UITap