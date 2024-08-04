import { 
    StyleSheet, 
    Text, 
    View, 
    StatusBar,
    Image,
    ImageBackground,
    TouchableOpacity,
    TextInput,
    ScrollView
} from 'react-native';
import React, { useState } from 'react';
import fontSize from '../../../component/fontSize';

const Login = ({navigation}) => {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <ImageBackground 
            source={require('../../../resource/imgWelcome/background.png')}
            resizeMode='cover'
            style={{flex: 1, width: '100%', height: '110%'}}
        >
          <ScrollView>
           <BannerComponent NavWelcom = {navigation}/>
           <MainComponent NavForgot = {navigation}/>
           <FooterComponent NavSignUp = {navigation}/>
          </ScrollView>
        </ImageBackground>
      </View>
    );
}

// ta sẽ tách thành từng component nhỏ cho những screen có 
// textInput để tránh toàn bộ component đc render khi chỉ có thẻ textInput thay dổi

const BannerComponent = ({NavWelcom}) => {
  const navigationWelcom = () => NavWelcom.pop(1)
  return (
    <View style ={{width: '100%',height: 270, marginBottom: 40}}>
      <View style={styles.containerArrowLeft}>
        <TouchableOpacity onPress={navigationWelcom}>
          <Image
            source={require("../../../resource/imgWelcome/arrowLeft.png")}
            style={styles.arrowLeft}
            resizeMode="contain"
          ></Image>
        </TouchableOpacity>
      </View>

      <View style={styles.containerHeader}>
        <Text style={styles.header}>Hi!</Text>
        <Text style={styles.header}>Welcome Black,</Text>
      </View>
    </View>
  );
}

const MainComponent = ({NavForgot}) => {
  const [visiblePassword, setVisiblePassword] = useState(false)
  const changeIconPassword = () => setVisiblePassword(!visiblePassword)
  const navigationForgot = () => NavForgot.navigate('forgot')
  return (
    <View style={{height: 250, paddingHorizontal: 25}}>
      <View style={styles.containerMain}>
        <View style={styles.containerUserName}>
          {/* nếu autoFocus = {true} thì khi component được gắn thì nó sẽ tự động focus */}
          <TextInput
            style={styles.username}
            placeholder="Username"
            placeholderTextColor="white"
            autoFocus={true}
          ></TextInput>
        </View>

        <View style={styles.containerPassword}>
          <TextInput
            style={styles.password}
            placeholder="Password"
            placeholderTextColor="white"
            secureTextEntry={visiblePassword}
          ></TextInput>
          <TouchableOpacity onPress={changeIconPassword}>
            {visiblePassword ? (
              <Image
                source={require("../../../resource/imgWelcome/eyeHide.png")}
                style={styles.eye}
                resizeMode="contain"
              ></Image>
            ) : (
              <Image
                source={require("../../../resource/imgWelcome/eyeShow.png")}
                style={styles.eye}
                resizeMode="contain"
              ></Image>
            )}
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.containerForgot}
          onPress={navigationForgot}
        >
          <Text style={styles.forgot}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const FooterComponent = ({NavSignUp}) => {
  const navigationSignUp = () => NavSignUp.navigate('signUp')
  const navigationUITap = () => NavSignUp.navigate('uiTap')
  return (
    <View style={{flex: 1,}}>
      <View style={styles.containerBtnLoginFooter}>
        <TouchableOpacity style={styles.btnLogin}>
          <Text style={styles.login} onPress={navigationUITap}>LOGIN</Text>
        </TouchableOpacity>

        <View style={styles.footer}>
          <Text style={styles.footerText}>Don't have a account?</Text>
          <TouchableOpacity onPress={navigationSignUp}>
            <Text style={styles.footerSignUp}>Sign up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  },

  containerArrowLeft: {
    width: '100%',
    height: 150,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 25
  },

  arrowLeft: {
    height: 45,
    width: 45,
    tintColor: 'white'
  },

  containerHeader: {
    height: 120,
    justifyContent: 'center',
    paddingLeft: 25,
  },

  header: {
    fontSize: fontSize.sizeHeader,
    fontWeight: '700',
    color: '#e3e367',
  },

  containerMain: {
    justifyContent: 'center',
    alignItems: 'center'
  },

  containerUserName: {
    width: '100%',
    height: 30,
    borderBottomWidth: 1,
    borderBottomColor: 'white',
    marginBottom: 35,
  },

  username: {
    width: '100%',
    fontSize: 20,
    color: 'white',
  },

  containerPassword: {
    width: '100%',
    height: 30,
    borderBottomWidth: 1,
    borderBottomColor: 'white',
    marginBottom: 15,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  password: {
    fontSize: 20,
    color: 'white',
    width: '85%'
  },

  eye: {
    height: 26,
    width: 26
  },

  containerForgot:{
    justifyContent: 'flex-end',
    width:'100%'
  },

  forgot: {
    fontSize: fontSize.sizeSmall,
    color: '#e3e367',
    alignSelf: 'flex-end'
  },

  containerBtnLoginFooter: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  btnLogin: {
    width: 90*2,
    height: 30*1.6,
    borderRadius: 40,
    backgroundColor: '#e3e367',
    justifyContent: 'center',
    alignItems: 'center',
  },

  login: {
    fontSize: fontSize.sizeMain,
    fontWeight: '700',
    color: 'black'
  },

  footer: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40
  },

  footerText: {
    fontSize: fontSize.sizeSmall,
    color: 'white',
    marginRight: 6
  },

  footerSignUp: {
    fontSize: fontSize.sizeSmall,
    fontWeight: '700',
    color: '#e3e367'
  }
})

export default Login