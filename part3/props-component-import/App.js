import { StyleSheet, Text, View, StatusBar } from 'react-native';
import Welcome from './screen/Welcome';
import React from 'react';

const fakeProducts = [
   {
    productName : 'iphone 11',
    year: 2021
   },
   {
    productName : 'iphone 12',
    year: 2025
   },
   {
    productName : 'iphone 13',
    year: 2026
   },
   {
    productName : 'iphone 14',
    year: 2027
   },
]

export default function App() {
  return (
    <View>
      <StatusBar barStyle='light-content'/>
      <Welcome 
        x = {10} 
        y = {22}
        person = {{
          name: 'Tran the bao',
          age: 18,
          email: 'nbkbvohoc@gmail.com'
        }}
        products={fakeProducts}
      />
    </View>
  );
}


