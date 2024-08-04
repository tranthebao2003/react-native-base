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

export default Home = ({navigation, route}) =>{
    /*route là một đối tượng mô tả về màn hình hiện tại trong React Navigation.
    route.params là một đối tượng chứa các tham số được truyền vào màn hình từ 
    màn hình trước đó qua hàm navigation.navigate.

    Với câu lệnh const { email }= route.params, chúng ta đang sử dụng cú pháp 
    destructuring của JavaScript để lấy giá trị của tham số email từ đối tượng
    route.params và gán vào biến email. Điều này giúp chúng ta có thể sử dụng giá 
    trị của tham số email dễ dàng trong màn hình hiện tại.
    */

    // email: nó phải giống cái key của object mà mik truyền vào (quên thì xem destructuring f8)
    const {email} = route.params
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
                    <TouchableOpacity  
                    onPress={() =>{
                        navigation.navigate('PageSetting')
                    }}
                    >
                        <AntDesign name="setting" size={30} color="black" />
                    </TouchableOpacity>
                </View>

                <Text style={{fontSize: 30, fontWeight: 600, marginTop: 100}}>Home Screen</Text>
                <Text style={{fontSize: 24, fontWeight: 400, marginTop: 20}}>Email: {email}</Text>

            </SafeAreaView>
        </View>
        
    )
}



