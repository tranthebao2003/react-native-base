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
import { SimpleLineIcons } from '@expo/vector-icons';

export default Home = ({navigation, route}) =>{
    return(
        <View>
            <StatusBar style='auto'></StatusBar>
            <SafeAreaView style={{width: '100%', height:'100%', alignItems: 'center'}}>
                {/* header */}
                <View style={{width: '90%', height: '6%', marginTop: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                    {/* icon and 'back */}
                    <TouchableOpacity style={{width: '25%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}
                    onPress={() =>{
                        // nó sẽ mở menu ra
                        navigation.openDrawer()
                    }}
                    >
                        <SimpleLineIcons name="menu" size={24} color="black" />
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

            </SafeAreaView>
        </View>
        
    )
}



