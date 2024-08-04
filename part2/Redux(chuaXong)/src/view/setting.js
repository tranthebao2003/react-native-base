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

export default Setting = ({navigation}) =>{
    return(
        <View>
            <StatusBar style='auto'></StatusBar>
            <SafeAreaView style={{width: '100%', height:'100%', alignItems: 'center'}}>
                {/* header */}
                <View style={{width: '90%', height: '6%', marginTop: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                    {/* icon and 'back */}
                    <TouchableOpacity style={{width: '25%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}
                    
                    onPress={() =>{
                        navigation.pop(1)
                        // navigation.pop(2) thì nó sẽ back 2 lần (giống như xóa stack đi)
                    }}
                    >
                        <AntDesign name="left" size={30} color="black" />
                        <Text style={{fontSize: 24, fontWeight: 500}}>Back</Text>
                    </TouchableOpacity>
                </View>

                <Text style={{fontSize: 30, fontWeight: 600, marginTop: 100}}>Setting Screen</Text>
                <TouchableOpacity style={{width: 150, height:55, borderWidth: 2, marginTop: 80, borderRadius: 60, justifyContent: 'center', alignItems: 'center'}}
                
                onPress={() =>{
                    // không quan tâm đã qua bao nhiu trang nhưng khi sử dụng method
                    // popToTop thì nó sẽ quay trở lại trang đầu
                    navigation.popToTop()
                }}
                >
                    <Text style={{fontSize: 24, fontWeight: 600}}>Logout</Text>
                </TouchableOpacity>
            </SafeAreaView>
        </View>
    )
}
