
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

import { Feather } from '@expo/vector-icons';

const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height

// Dimensions.get('window(screen)'): nếu là window thì nó tính kích thước màn hình trừ status bar
// còn screen thì nó tính luôn status bar
// const sWidth = Dimensions.get('screen').width
// const sHeight = Dimensions.get('screen').height
// Test: <Text style={{color: 'white'}} >{windowWidth}, {windowHeight}</Text>
// Test: <Text style={{color: 'white'}} >{sWidth}, {sHeight}</Text>

// mỗi screen có 1 props tên là navigation
// thay vì mik chuyền vào (props) rồi sử dụng bằng cách props.navigation thì mik 
// truyền vào theo dạng Destructuring (ko nhớ xem trong react)
export default Login = ({navigation}) =>{
    const [getPasswordVisible, setPasswordVisible] = useState(false)
    return(
        <ImageBackground 
        style ={{height: '100%', width: '100%'}}
        source={require('./../image/bg2.jpg')}
        resizeMode='stretch'
        >
            <StatusBar barStyle='light-content'></StatusBar>
            <SafeAreaView style = {{flex: 1}}>
                <View style={{height: '100%', width: '100%'}}>
                    {/* Email and password */}
                    <View style={{width: '100%', height: '20%', marginTop: 0.3 * windowHeight, alignItems: 'center'}}>
                        {/* Email */}
                        {/* alignItems: 'baseline' căn theo đường cơ sở(là đường ở giữa chữ và border nếu có) */}
                        <View style = {{width: '85%', height: 30, flexDirection : 'row', justifyContent: 'space-between', alignItems: 'baseline', position: 'relative'}}>
                            <Text style = {{color: '#feebad', fontSize: 22, fontWeight: 700}}>Email</Text>
                            <TextInput 
                                style={{height: '100%', width: '60%', textAlign: 'left', borderBottomWidth: 1, borderColor: '#fce4d6',
                                color: '#feebad', fontSize: 22
                                }}
                                
                                placeholder='Email'
                                placeholderTextColor='#fed844'
                                
                                >
                            </TextInput>
                        </View>

                           {/* Password 
                           secureTextEntry trong input nếu là true thì nó sẽ chuyển chữ thành dấu '.'
                           còn false thì nó sẽ hiện chữ
                           */}
                        <View style = {{width: '85%', height: 30, flexDirection : 'row', 
                                    justifyContent: 'space-between', alignItems: 'baseline', marginTop : 20,
                        }}
                        >
                            <Text style = {{color: '#feebad', fontSize: 22,  fontWeight: 700}}>Password</Text>
                            <TextInput 
                            // gán lại getPasswordVisible cho porps secureTextEntry
                            secureTextEntry = {getPasswordVisible}
                            
                            style={{height: '100%', width: '60%', textAlign: 'left', borderBottomWidth: 1, borderColor: '#fce4d6',
                            color: '#feebad', fontSize: 22, paddingRight: 35,
                            }}
                            
                            placeholder='Password'
                            placeholderTextColor='#fed844'>
                            </TextInput>
                            <TouchableOpacity 
                            style ={{position: 'absolute', right: 0, bottom: 0}}
                            
                            // khi click vào mắt thì gọi hàm return setPasswordVisible(!getPasswordVisible) (callBack)
                            // setPasswordVisible(!getPasswordVisible) nó sẽ set lại getPasswordVisible bằng phủ định getPasswordVisible
                            onPress={
                                () => {
                                    setPasswordVisible(!getPasswordVisible)
                                }
                            }
                            >
                                {
                                    // toán tử 3 ngôi (condition ? true : false)
                                    getPasswordVisible == false ? <Feather name="eye" size={22} color="white"/> : 
                                    <Feather name="eye-off" size={24} color="white" />
                                }
                                

                                {/* ở đây ta ko thể test đc bởi vị react nó sẽ ko render ra giá trị boolean */}
                                {/* <Text style={{color:'white', fontSize: 22}}>{getPasswordVisible}</Text> */}
                            </TouchableOpacity>
                            
                        </View>
                       
                    </View>

                    {/* Buttons login and register */}
                    <View style={{width: '100%', height: '20%', marginTop: 0.15 * windowHeight, justifyContent: 'space-around', alignItems: 'center'}}>
                        {/* log in */}
                       <TouchableOpacity 
                       style={{width: '45%', height: '35%', backgroundColor:'#fce4d6', borderRadius: 20, borderWidth: 2, borderColor: '#fce4d6',
                            justifyContent: 'center', alignItems: 'center', borderWidth: 2, borderColor: '#f9965b'
                       }}

                        // thực hiển chuyển trang
                       onPress={
                        () =>{ 
                            // {email: getEmail}): truyền 1 object có key là email và vlue là getEmail đến screen PageHome
                            navigation.navigate('HomeTabs');
                        }
                       }
                       >
                            <Text style={{fontSize: 22, fontWeight: 500, color: '#002640'}}>Đăng nhập</Text>
                       </TouchableOpacity>

                        {/* register */}
                        <TouchableOpacity 
                       style={{width: '45%', height: '35%', backgroundColor:'#bcf8ef', borderRadius: 20, borderWidth: 2, borderColor: '#0bd2b7',
                            justifyContent: 'center', alignItems: 'center'
                       }}
                       >
                            <Text style={{fontSize: 22, fontWeight: 500, color: '#002640'}}>Đăng kí</Text>
                       </TouchableOpacity>
                    </View>
                </View>
            </SafeAreaView>
            
        </ImageBackground>
    )
}