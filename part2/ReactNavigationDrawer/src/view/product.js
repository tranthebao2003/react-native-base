import React, {useState} from 'react'
import {
    SafeAreaView,
    View,
    Text,
    TouchableOpacity,
    ImageBackground,
    // thanh trạng thái phía trên màn hình
    StatusBar,
    // Dimensions: width and height của monitor
    Dimensions,
    TextInput
} from 'react-native'

import { AntDesign } from '@expo/vector-icons';

export default Product = ({navigation}) =>{
    return(
        <View>
            <StatusBar style='auto'></StatusBar>
            <SafeAreaView style={{width: '100%', height:'100%', alignItems: 'center'}}>
                {/* header */}
                <View style={{width: '90%', height: '6%', marginTop: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                    {/* icon and 'back */}
                    <TouchableOpacity style={{width: '25%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}
                    
                    onPress={() =>{
                        navigation.goBack()
                        // navigation.pop(2) thì nó sẽ back 2 lần (giống như xóa stack đi)
                    }}
                    >
                        <AntDesign name="left" size={30} color="black" />
                        <Text style={{fontSize: 24, fontWeight: 500}}>Back</Text>
                    </TouchableOpacity>
                </View>

                <Text style={{fontSize: 30, fontWeight: 600, marginTop: 100}}>Product Screen</Text>
            </SafeAreaView>
        </View>
    )
}
