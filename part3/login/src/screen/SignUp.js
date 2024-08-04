import { 
    StyleSheet, 
    Text, 
    View, 
    StatusBar,
    Image,
    ImageBackground,
    TouchableOpacity,
    TextInput,
    KeyboardAvoidingView,
    ScrollView
} from 'react-native';
import React, { useState } from 'react';
import fontSize from '../fontSize';

const SignUp = ({navigation}) => { 
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <ImageBackground
          source={require("../img/background.png")}
          resizeMode="cover"
          style={{ flex: 1, width: "100%", height: 850 }}
        >
          <ScrollView
            style={{ width: "100%", height: "200%" }}
            contentContainerStyle={{ flexGrow: 1 }}
          >
            <BannerComponent navWelcom={navigation} />
            <SignUpComponent/>
            <BtnSignUpComponent/>
          </ScrollView>
        </ImageBackground>
      </View>
    );
}

const BannerComponent =({navWelcom}) => {
  const navigationWelcom = () => navWelcom.pop(1)
  return (
    <View style={{width: '100%',height: 150, marginBottom: 170}}>
      <View style={styles.containerArrowLeft}>
        <TouchableOpacity onPress={navigationWelcom}>
          <Image
            source={require("../img/arrowLeft.png")}
            style={styles.arrowLeft}
            resizeMode="contain"
          ></Image>
        </TouchableOpacity>
      </View>

      <View style={styles.containerHeader}>
        <Text style={styles.header}>Create!</Text>
        <Text style={styles.header}>New Account</Text>
      </View>
    </View>
  );
}

const SignUpComponent = () => {
  const [visiblePassword, setVisiblePassword] = useState(false)
  const changeIconPassword = () => setVisiblePassword(!visiblePassword)

  const [confirmPassword, setConfirmPassword] = useState(false)
  const changeConfirmPassword = () => setConfirmPassword(!confirmPassword)

  const [number, onChangeNumber] = useState('')
  const [isValidPhone, setValidPhone] = useState(true)

  // regex này để bắt sđt có đầu 84 or 0 và phải có 11 chữ số nếu đầu 84
  // và 10 chữ số nếu đầu 0
  const verifyPhoneNumber = (phone) => {
    let regex = new RegExp(/([\+84|84|0]+(3|5|7|8|9|1[2|6|8|9]))+([0-9]{8})\b/)
    if(!phone) return true
    if(regex.test(phone)){ // todo
      return true
    }
    return false
  }
  return (
    <View style={styles.containerMain}>
      <View style={styles.containerUserName}>
        <TextInput
          style={styles.username}
          placeholder="Username"
          placeholderTextColor="white"
          autoFocus={true}
        ></TextInput>
      </View>

      <View style={styles.containerUserName}>
        <TextInput
          style={styles.username}
          placeholder="Phone"
          placeholderTextColor="white"
          keyboardType="number-pad"
          onChangeText={(phone) => {
            console.log(phone);
            onChangeNumber(phone);
            const isValid = verifyPhoneNumber(phone);
            isValid === true ? setValidPhone(true) : setValidPhone(false);
          }}
          // value: này là để hiển thị lên màn hình cho user
          value={number}
        ></TextInput>
        {isValidPhone === false ? (
          <Text
            style={{
              height: 30,
              fontSize: 20,
              color: "#ff5252",
              fontWeight: "500",
              marginTop: 8,
            }}
          >
            Phone is invalid
          </Text>
        ) : (
          ""
        )}
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
              source={require("../img/eyeHide.png")}
              style={styles.eye}
              resizeMode="contain"
            ></Image>
          ) : (
            <Image
              source={require("../img/eyeShow.png")}
              style={styles.eye}
              resizeMode="contain"
            ></Image>
          )}
        </TouchableOpacity>
      </View>

      <View style={styles.containerPassword}>
        <TextInput
          style={styles.password}
          placeholder="Confirm Password"
          placeholderTextColor="white"
          secureTextEntry={confirmPassword}
        ></TextInput>
        <TouchableOpacity onPress={changeConfirmPassword}>
          {confirmPassword ? (
            <Image
              source={require("../img/eyeHide.png")}
              style={styles.eye}
              resizeMode="contain"
            ></Image>
          ) : (
            <Image
              source={require("../img/eyeShow.png")}
              style={styles.eye}
              resizeMode="contain"
            ></Image>
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
}

const BtnSignUpComponent = () => {
  return (
    <View style={styles.containerBtnSignUpFooter}>
      <TouchableOpacity style={styles.btnSignUp}>
        <Text style={styles.signUp}>SIGN UP</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },

  containerArrowLeft: {
    width: '100%',
    height: '100%',
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
    paddingLeft: 25
  },

  header: {
    fontSize: fontSize.sizeHerder,
    fontWeight: '700',
    color: '#e3e367',
  },

  containerMain: {
    height: 260,
    paddingHorizontal: 25,
    justifyContent: 'center',
    alignItems: 'center'
  },

  containerUserName: {
    width: '100%',
    height: 30,
    borderBottomWidth: 1,
    borderBottomColor: 'white',
    marginBottom: 50,
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
    justifyContent: 'space-between',
    marginBottom: 50,
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

  containerBtnSignUpFooter: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  btnSignUp: {
    width: 90*2,
    height: 30*1.6,
    borderRadius: 40,
    backgroundColor: '#e3e367',
    justifyContent: 'center',
    alignItems: 'center',
  },

  signUp: {
    fontSize: fontSize.sizeMain,
    fontWeight: '700',
    color: 'black'
  },
})

export default SignUp