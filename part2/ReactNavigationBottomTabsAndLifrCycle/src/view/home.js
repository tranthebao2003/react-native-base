import React, {useState, useEffect} from 'react'
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
    TextInput,
    
} from 'react-native'

import { AntDesign } from '@expo/vector-icons';

const CallAPI = () =>{
   return new Promise ((resolve) => {
    setTimeout(() => {
        resolve({data: 'data'})
        alert('Đã trả về data')
    }, 3000)
   })
}

const getData = async () =>{
    let data =  await CallAPI()
    setData(data)
}

export default Home = ({navigation}) =>{
    const [number, setNumber] = useState(1)
    const [data, setData] = useState({data: null})

    // bắt cái sự kiên khi user mới vào screen này
    // return bắt sự kiện khi user out khỏi màn hình
    useEffect(() =>{
        alert('mới vào màn hình')
        getData(setData)
        return () =>{
            alert('hủy màn hình')
        }
    }, [])

    useEffect(() =>{
        alert('data đươc lấy về'+ data)
    }, [data])

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
                
                <View style={{alignItems: 'center'}}>
                    <Text style={{fontSize: 90, fontWeight: 400, marginTop: 100}}>{number}</Text>

                    {/* count number */}
                    <TouchableOpacity 
                    style ={{width: 160, height: 60, borderWidth: 1, borderRadius: 30, alignItems: 'center', justifyContent: 'center',
                    backgroundColor: '#94d2fd', marginTop: 30
                    }}

                    onPress={() =>{
                        let newValue = number + 1
                        setNumber(newValue)
                    }}
                    >
                        <Text style={{fontSize: 22, fontWeight: 500}}>Count</Text>
                    </TouchableOpacity>

                    {/* reset number */}
                    <TouchableOpacity 
                    style ={{width: 160, height: 60, borderWidth: 1, borderRadius: 30, alignItems: 'center', justifyContent: 'center',
                    backgroundColor: '#94d2fd', marginTop: 30
                    }}

                    onPress={() =>{
                        let newValue = 1
                        setNumber(newValue)
                    }}
                    >
                        <Text style={{fontSize: 22, fontWeight: 500}}>Reset</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </View>
        
    )
}



