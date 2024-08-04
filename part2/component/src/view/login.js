import { useState } from "react";
import { SafeAreaView, Text, StatusBar, View, TouchableOpacity, TextInput, ScrollView, StyleSheet} from "react-native";
import { Fontisto } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const SIGN_IN = 'SIGN_IN'
const GET_STARTED = 'GET_STARTED'

export default Login = () => {
    // khi cai usestate này thay đổi thì nó thay đổi toàn bộ trang
    // vì usestate này nằm trong hàm chứa toàn bộ component khác
    const [page, setPage] = useState(SIGN_IN)
    return(
        <View style={{flex: 1, backgroundColor: '#ededed', borderWidth: 1}}>
            <StatusBar barStyle="light-content" style={{borderWidth: 10}}/>

            {/* scrollEventThrottle={16}: scroll cho mượt giá trị mặc định là 16 */}
            <ScrollView style={{flex: 1}} scrollEventThrottle={16}>
                <View style={{flex: 1}}>
                    {/* // props = {} */}
                    <BannerComponent page = {page} setPage={setPage}/>
                    {page === SIGN_IN ?  <MainComponent/>: <View style={{width: '100%', height: '30%'}}></View>}
                    <LastComponent/>
                </View>
            </ScrollView>
            
        </View>
    )
}

// còn vụ password nhấp vào mắt thay đổi biểu tượng và password ẩn hiện (xem lại bài cũ)

// nhận {props} bằng destructurign
const BannerComponent = ({page, setPage}) => {
    return(
        <View style = {{height: '20%', width: '100%'}}>
             {/* banner */}
            <View style={styles.banner}>
                <Text style={{fontSize: 50, fontWeight: 600, color: '#fff'}}>wasty</Text>
                <Text style={{fontSize: 16, color: 'white', fontWeight: 600}}>think for nature</Text>
            </View>
            {/* two btn */}
            <View style={{height: 50, flexDirection: 'row'}}>
                <TouchableOpacity style={styles.btnSignInGetStarted}
                    onPress={() => setPage(SIGN_IN)}
                    // nếu user đang ở trang sign in thì sẽ ko bấm vào đc sign in nữa
                    disabled = {page === SIGN_IN ? true : false}
                >
                    <Text style={{fontSize: 20, fontWeight: 500, color: '#129d5a'}}>Sign In</Text>
                    {page === SIGN_IN ? <View style= {styles.textSignInGetStarted}></View>: ""}
                </TouchableOpacity>

                <TouchableOpacity style={styles.btnSignInGetStarted}
                    onPress={() => setPage(GET_STARTED)}
                    // nếu user đang ở trang get started thì sẽ ko bấm vào đc get started nữa
                    disabled = {page === GET_STARTED ? true : false}
                >
                    <Text style={{fontSize: 20, fontWeight: 500, color: '#129d5a'}}>Get Started</Text>
                    {page === GET_STARTED ? <View style= {styles.textSignInGetStarted}></View>: ""}
                </TouchableOpacity>
            </View>
        </View>
    )
}

const MainComponent = () => {
    // khi useState này thay đổi thì chỉ component này được thay đổi thôi
    const [visiblePassword, setVisiblePassword] = useState(true)
    return(
        <View style={{height: '34%', width: '100%'}}>
            <View style={{marginTop: 40, marginHorizontal: 25}}>
                <View style={{flexDirection: "row", alignItems: 'flex-end', marginBottom: 20}}>
                    <Text style={{fontSize: 26, fontWeight: 800}}>Login in your account</Text>
                    <View style={{width: 8, height: 8, backgroundColor: '#129d5a', marginBottom:6, marginLeft: 5}}></View>
                </View>
                
                {/* input */}
                <View>
                    <View style={{flexDirection: 'row', backgroundColor: 'white', borderRadius: 8, padding: 10, marginBottom: 20,elevation: 10}}>
                        <Fontisto name="email" size={24} color="#129d5a" 
                            style={{position: 'absolute', paddingVertical: 12, paddingLeft: 15}}
                        />
                        <TextInput 
                            style={{width: '85%',
                                    fontSize: 20, 
                                    
                                    paddingLeft: 50
                            }}
                            placeholder="E-mail"
                            placeholderTextColor= '#2b9c65'
                            keyboardType= 'email-address'
                            >
                            
                        </TextInput>
                    </View>
                   

                    <View style={{flexDirection: 'row', backgroundColor: 'white', borderRadius: 8, padding: 10, elevation: 10}}>
                        <Feather name="lock" size={24} color="#129d5a" style={{position: 'absolute', paddingVertical: 12, paddingLeft: 15}} />
                        <TouchableOpacity 
                            style={{position: 'absolute', right: 0, paddingVertical: 12, paddingRight: 15}} 
                            onPress={() => setVisiblePassword(!visiblePassword)}
                        >   
                            {visiblePassword  === true ? 
                                <Feather name="eye-off" size={24} color="#129d5a" /> : 
                                <FontAwesome5 name="eye" size={24} color="#129d5a" />
                            }
                            
                            
                        </TouchableOpacity>
                        
                        <TextInput 
                            style={{width: '85%',
                                    fontSize: 20, 
                                    
                                    paddingLeft: 50
                            }}
                            placeholder="Password"
                            placeholderTextColor= '#2b9c65'
                            secureTextEntry = {visiblePassword}
                            >
            
                        </TextInput>
                    </View>
                    <Text style={{fontSize: 15, fontWeight: 400, alignSelf: 'flex-end', marginVertical: 20}}>Forget password?</Text>
                </View>

                {/* btn */}
                <View style={{width: '100%', height: 40, borderRadius: 20, justifyContent: 'center', alignItems: 'center',
                             backgroundColor: '#129d5a'
                            }}>
                    <TouchableOpacity>
                        <Text style={{color: 'white', fontSize: 16, fontWeight: 500}}>Login</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const LastComponent = () => {
    return(
        <View style={{flex: 1,margin: 80, marginHorizontal: 25}}>
            {/* content */}
            <View style={{width:'100%', height: 20, flexDirection: 'row', alignItems: 'center'}}>
                <View style={{width: '25%', borderTopWidth: 2, borderColor: '#129d5a'}}></View>
                <View style={{flex: 1, alignItems: 'center', marginBottom: 7, height: '100%'}}>
                    <Text style={{fontWeight: 500, fontSize: 16}}>
                        or connect with
                    </Text>
                </View>
                
                <View style={{width: '25%', borderTopWidth: 2, borderColor: '#129d5a'}}></View>
            </View>

            {/* groub btn */}
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 25}}>
                <View style ={styles.cotainerGroupBtnPhanCuoi}>
                    <TouchableOpacity style={styles.groupBtnPhanCuoi}>
                        <AntDesign name="google" size={22} color="#129d5a" style={{marginHorizontal: 20}}/>
                        <Text style={{fontWeight: 600, fontSize: 18, color: 'black'}}>Google</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{height: 40, flex: 1, alignItems: 'center', flexDirection: 'row',
                            backgroundColor: 'white', elevation: 5
                        }}>
                        <AntDesign name="apple1" size={24} color="#129d5a" style={{marginHorizontal: 20}}/>
                        <Text style={{fontWeight: 600, fontSize: 18, color: 'black'}}>Apple</Text>
                    </TouchableOpacity>
                </View>
               
                <View style ={styles.cotainerGroupBtnPhanCuoi}>
                    <TouchableOpacity style={styles.groupBtnPhanCuoi}>
                        <AntDesign name="twitter" size={24} color="#129d5a" style={{marginHorizontal: 20}}/>
                        <Text style={{fontWeight: 600, fontSize: 18, color: '#black'}}>Twitter</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{height: 40, flex: 1, alignItems: 'center', flexDirection: 'row',
                            backgroundColor: 'white', elevation: 5
                        }}>
                        <AntDesign name="facebook-square" size={24} color="#129d5a" style={{marginHorizontal: 20}}/>
                        <Text style={{fontWeight: 600, fontSize: 18, color: 'black'}}>Facebook</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
    
}

const styles = StyleSheet.create({
    banner : {
        width: '100%',
        flex: 1,
        backgroundColor: '#129d5a', 
        justifyContent: 'center', 
        alignItems: 'center', 
        paddingVertical: 20
    },

    btnSignInGetStarted: {
        flex: 1, 
        justifyContent: 'center', 
        alignItems:'center'
    },

    textSignInGetStarted: {
        width: '100%', 
        borderWidth: 1.3, 
        borderBlockColor:'#129d5a', 
        position: 'absolute', 
        bottom: 0
    },

    cotainerGroupBtnPhanCuoi: {
        flexDirection: 'row', 
        width: '100%', 
        justifyContent: 'space-between', 
        marginBottom: 20
    },

    groupBtnPhanCuoi: {
        height: 40, 
        flex: 1, 
        marginRight: 20, 
        alignItems: 'center', 
        flexDirection: 'row',              
        backgroundColor: 'white', 
        elevation: 5
    }
})