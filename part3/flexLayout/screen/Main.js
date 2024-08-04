import { 
    StyleSheet, 
    Text, 
    View, 
    StatusBar,
    Image,
    ImageBackground,
    TouchableOpacity,
} from 'react-native';
import React from 'react';

const Main = ({navigation}) => {
    return (
      <View style={{ flex: 1, backgroundColor: "white" }}>
        <StatusBar barStyle="light-content" />
        <ImageBackground
          source={require("../img/bg.jpg")}
          resizeMode="cover"
          style={{ flex: 1 }}
        >
          <View
            style={{
              flexDirection: "row",
              height: "10%",
              alignItems: "center",
              paddingHorizontal: "2%",
            }}
          >
            <View
              style={{ flex: 3, flexDirection: "row", alignItems: "center" }}
            >
              <Image
                source={require("../img/fire.png")}
                style={{
                  width: 35,
                  height: 35,
                }}
              />
              <Text
                style={{
                  color: "white",
                  marginLeft: 10,
                  fontSize: 20,
                  fontWeight: 500,
                }}
              >
                INFLUENCE.CO
              </Text>
            </View>
          </View>
          <TouchableOpacity
            onPress={() => navigation.pop(1)}
          >
            <Image source={require('../img/arrowLeft.png')}
                style={{
                    marginLeft: '2%',
                    width: 30,
                    height: 30,
                }}
            ></Image>
          </TouchableOpacity>

          <View
            style={{
                height: "15%",
                justifyContent: 'center',
                alignItems: 'center'
            }}
          >
                <Text style={{color: 'white', fontSize: 20, fontWeight: 300}}>Account type</Text>
                <Text style={{color: 'white', fontSize: 20, fontWeight: 400}}>Influencer</Text>
          </View>

          <View
            style={{
                height: "50%",
                justifyContent: 'center',
                alignItems: 'center',
               
            }}
          >
               <Image source={require('../img/twoPeople.png')}
                      resizeMode='contain'
                 style={{
                    width: '80%',
                    height: '80%',
                }}
               >
               </Image> 
               <Text style={{color: 'white', fontSize: 24, fontWeight: 400}}>Hi lukepeake</Text>
               <Text style={{color: 'white', width: '80%',fontSize: 18, fontWeight: 300, textAlign: 'center'}}>Your username has been created successfully!</Text>
               
          </View>

          <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', paddingHorizontal: '2%'}}>
                <TouchableOpacity style={{borderWidth: 1,borderColor: 'white', justifyContent: 'center', alignItems: 'center', width: '100%', height: 55, borderRadius: 8}}>
                <Text style={{color: 'white',fontSize: 18, fontWeight: 300}}>Next, Connect Instagram</Text>
                </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    );
}

export default Main