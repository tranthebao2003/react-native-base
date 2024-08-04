import { 
    StyleSheet, 
    Text, 
    View, 
    StatusBar,
    Image,
    ImageBackground,
    TouchableOpacity
} from 'react-native';
import React, { useState } from 'react';
import fontSize from '../fontSize';

const Welcome = ({navigation}) => {
    const handleNavigationLogin = () => navigation.navigate('login')
    const handleNavigationSignUp = () => navigation.navigate('signUp')
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
       
        <ImageBackground 
            source={require('../img/background.png')}
            resizeMode='cover'
            style={{flex: 1}}
        >
          <View style={styles.containerLogo}>
            <Image source={require('../img/logo.png')} 
                    style = {styles.logo}
                    resizeMode='contain'
            >
            </Image>
          </View>
         
          <View style={styles.containerTextBottomLogo}>
            <Text style={styles.companyName}>Quản lí hoạt động</Text>
            <Text style={styles.title}>Professional Business</Text>
          </View>

          <View style={styles.ContainerLoginSignUp}>
            {/* login */}
             <TouchableOpacity style={styles.btnLogin}
                onPress={handleNavigationLogin}
             >
              <Text style={styles.loginSignUp}>Login</Text>
             </TouchableOpacity>
            {/* siup */}
             <TouchableOpacity style={styles.btnSignUp}
                onPress={handleNavigationSignUp}
            >
              <Text style={styles.loginSignUp}>Sign Up</Text>
             </TouchableOpacity>
             <Image source={require('../img/arrowUp.png')} 
                    style = {styles.arrowUp}
                    resizeMode='contain'
             >
             </Image>
          </View>
        </ImageBackground>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },

  containerLogo:{
    width: '100%', 
    height: '30%', 
    justifyContent: 'flex-end',
    alignItems: 'center',
  },

  logo: {
    width: 100,
    height: 100,
  },

  containerTextBottomLogo: {
    marginTop: 20,
    height: '25%',
    alignItems: 'center',
  },

  companyName: {
    fontSize: fontSize.sizeLarge,
    fontWeight: '900',
    color: 'white'
  },

  title: {
    color: 'white',
    fontSize: fontSize.sizeSmall,
    fontWeight:'500'
  },

  ContainerLoginSignUp: {
    flex: 1,
    alignItems: 'center',
  },

  btnLogin: {
    width: 90*2,
    height: 30*1.6,
    borderRadius: 40,
    backgroundColor: '#2b8981',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 25
  },

  loginSignUp: {
    fontSize: fontSize.sizeMain,
    fontWeight: '500',
    color: 'white'
  },

  btnSignUp: {
    width: 90*2,
    height: 30*1.6,
    borderRadius: 40,
    borderWidth: 1.5,
    borderColor: '#e3e367',
    justifyContent: 'center',
    alignItems: 'center',
   
  },

  arrowUp: {
    marginTop: 120,
    borderWidth: 2,
    width: 24, 
    height: 24,
    tintColor: '#e3e367'
  }
})

export default Welcome