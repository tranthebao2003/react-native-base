import { 
    StyleSheet, 
    Text, 
    View, 
    StatusBar,
    Image,
    ImageBackground,
    TouchableOpacity,
    TextInput,
    ScrollView,
    Dimensions
} from 'react-native';
import React, { useEffect, useState } from 'react';
import fontSize from '../../../component/fontSize';
import {
  auth,
  firebaseDatabase,
  createUserWithEmailAndPassword,
} from "../../../firebase/firebase";

const heightScreen = Dimensions.get('screen').height

const SignUp = ({navigation}) => { 
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <ImageBackground
          source={require("../../../resource/imgWelcome/background.png")}
          resizeMode="cover"
          style={{ flex: 1, width: "100%", height: 850 }}
        >
          <ScrollView
            style={{ width: "100%", height: "200%" }}
            contentContainerStyle={{ flexGrow: 1 }}
          >
            <BannerComponent navWelcom={navigation} />
            <SignUpComponent/>
          </ScrollView>
        </ImageBackground>
      </View>
    );
}

const BannerComponent =({navWelcom}) => {
  const navigationWelcom = () => navWelcom.pop(1)
  return (
    <View style={{width: '100%', height: 1/6 * heightScreen, marginBottom: 170}}>
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
        <Text style={styles.header}>Create!</Text>
        <Text style={styles.header}>New Account</Text>
      </View>
    </View>
  );
}

const SignUpComponent = () => {
  const [email, onChangeEmail] = useState('')
  const [isValidEmail, setValidEmail] = useState(false)

  const [phone, onChangePhone] = useState('')
  const [isValidPhone, setValidPhone] = useState(false)

  const [password, onChangePassword] = useState('')
  const [confirmPassword, onChangeConfirmPassword] = useState('')
  const [matchPassword, setMatchPassword] = useState(false)

  
  const [visiblePassword, setVisiblePassword] = useState(false)
  const changeIconPassword = () => setVisiblePassword(!visiblePassword)

  const [visibleConfirmPassword, setVisibleConfirmPassword] = useState(false)
  const changeVisibleConfirmPassword = () => setVisibleConfirmPassword(!visibleConfirmPassword)

  const [disableSignUp, setDisableSignUp] = useState(false)

  useEffect(() => {
    const xx = auth
  }, [])

  const verifyEmail = (email) => {
    let regex = new RegExp(/([!#-'*+-9=?A-Z^-~-]+(\.[!#-'*+-9=?A-Z^-~-]+)*|"([]!#-[^-~ \t]|(\\[\t -~]))+")@([!#-'*+-9=?A-Z^-~-]+(\.[!#-'*+-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])/)
    if(regex.test(email)){ //todo
      return true
    } 
    return false
  }

  // regex này để bắt sđt có đầu 84 or 0 và phải có 11 chữ số nếu đầu 84
  // và 10 chữ số nếu đầu 0
  const verifyPhoneNumber = (phone) => {
    let regex = new RegExp(/([\+84|84|0]+(3|5|7|8|9|1[2|6|8|9]))+([0-9]{8})\b/)
    if(regex.test(phone)){ // todo
      return true
    }
    return false
  }

  useEffect(() => {
    if (isValidEmail == false || isValidPhone == false || password !== confirmPassword) {
      setDisableSignUp(true);
    } else{
      setDisableSignUp(false);
    }
    
  }, [isValidEmail, isValidPhone, password, confirmPassword]);

  return (
    <View style={styles.containerMain}>
      <View style={styles.containerUserName}>
        <TextInput
          style={styles.username}
          placeholder="Email"
          placeholderTextColor="white"
          // khi text trong text input thay đổi thì nó sẽ kích hoạt event này
          onChangeText={(email) => {
            onChangeEmail(email);
            const isValid = verifyEmail(email);
            isValid ? setValidEmail(true) : setValidEmail(false);
          }}
          // value này để hiển thị lên user
          value={email}
          autoFocus={true}
        ></TextInput>

        {isValidEmail === false ? (
          <Text
            style={{
              height: 30,
              fontSize: 20,
              color: "#ff5252",
              fontWeight: "500",
              marginTop: 8,
            }}
          >
            Email is invalid
          </Text>
        ) : (
          ""
        )}
      </View>

      <View style={styles.containerUserName}>
        <TextInput
          style={styles.username}
          placeholder="Phone"
          placeholderTextColor="white"
          keyboardType="number-pad"
          onChangeText={(phone) => {
            onChangePhone(phone);

            const isValid = verifyPhoneNumber(phone);
            isValid === true ? setValidPhone(true) : setValidPhone(false);
          }}
          // value: này là để hiển thị lên màn hình cho user
          value={phone}
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
          onChangeText={(password) => {
            onChangePassword(password)
            const isValid = (password === confirmPassword) ? true : false;
            isValid === true ? setMatchPassword(true) : setMatchPassword(false);
          }}
          value={password}
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

      <View style={styles.containerPassword}>
        <TextInput
          style={styles.password}
          placeholder="Confirm Password"
          placeholderTextColor="white"
          secureTextEntry={visibleConfirmPassword}
          onChangeText={(cfPassword) => {
            onChangeConfirmPassword(cfPassword)
            const isValid = (password === cfPassword) ? true : false;
            isValid === true ? setMatchPassword(true) : setMatchPassword(false);
          }}
          value={confirmPassword}
        ></TextInput>

        <TouchableOpacity onPress={changeVisibleConfirmPassword}>
          {visibleConfirmPassword ? (
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

        {matchPassword === false ? (
          <Text
            style={{
              height: 30,
              fontSize: 20,
              color: "#ff5252",
              fontWeight: "500",
              marginTop: 8,
              position: 'absolute',
              top: 28
            }}
          >
            Not match password
          </Text>
        ) : (
          ""
        )}
      </View>

      {/* btnSignUp */}
      <View style={styles.containerBtnSignUpFooter}>
        
        <TouchableOpacity
          disabled={disableSignUp}
          style={[styles.btnSignUp, {backgroundColor: disableSignUp ? '#d6d6d6': '#e3e367'}]}
          onPress={() => {
            createUserWithEmailAndPassword(
              auth,
              email,
              password
            )
              .then((userCredential) => {
                const user = userCredential.user;
              })
              .catch((error) => {
                alert(`cannot signin, error: ${error.message}`);
              });
          }}
        >
          {/* {console.log(disableSignUp)} */}
          <Text style={styles.signUp}>SIGN UP</Text>
        </TouchableOpacity>
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
    fontSize: fontSize.sizeHeader,
    fontWeight: '700',
    color: '#e3e367',
  },

  containerMain: {
    flex: 1,
    paddingHorizontal: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },

  containerUserName: {
    width: '100%',
    height: 30,
    borderBottomWidth: 1,
    borderBottomColor: 'white',
    marginBottom: 60,
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
    marginBottom: 60,
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