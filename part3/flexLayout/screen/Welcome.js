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

const Welcome = ({navigation}) => {
    const [checkInf, setCheckInf] = useState(false)
    const [checkBus, setCheckBus] = useState(false)
    const [checkInd, setCheckInd] = useState(false)
    return (
      <View style={{ flex: 1, backgroundColor: "white" }}>
        <StatusBar barStyle="light-content" />
        <ImageBackground 
            source={require('../img/bg.jpg')}
            resizeMode='cover'
            style={{flex: 1}}
        >
          <View
            style={{
              flexDirection: "row",
              height: '10%',
              alignItems: 'center',
              paddingHorizontal: '2%',
            }}
          >
            <View
              style={{ flex: 3, flexDirection: "row",  alignItems: 'center'}}
            >
              <Image
                source={require("../img/fire.png")}
                style={{
                  width: 35,
                  height: 35,
                }}
              />
              <Text style={{ color: "white", marginLeft: 10, fontSize: 20, fontWeight: 500}}>
                INFLUENCE.CO
              </Text>
            </View>

            <View
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "flex-end",
              }}
            >
              <TouchableOpacity>
                <Image
                  source={require("../img/question.png")}
                  style={{
                    width: 30,
                    height: 30,
                    // tintColor: Khi bạn đặt giá trị cho tintColor,
                    // hình ảnh hoặc biểu tượng sẽ được tô màu
                    // với màu bạn đã chỉ định, thay vì màu gốc của nó
                  }}
                />
              </TouchableOpacity>
             
            </View>
          </View>

          <View
            style={{
                height: '50%',
            }}
          >
            <View 
              style={{
                height: '32%', 
                justifyContent: 'space-around', 
                alignItems: 'center',
                marginBottom: 30
              }}>
                <Text style={{color: 'white', fontSize: 20, fontWeight: 300}}>Welcome to</Text>
                <Text style={{color: 'white', fontSize: 24, fontWeight: 500}}>INFLUENCE.CO!</Text>
                <Text style={{color: 'white', fontSize: 20, fontWeight: 300}}>Please select your account type</Text>
            </View>

            <View
              style={{
                flex: 1,
                borderWidth: 1, 
                paddingHorizontal: '2%'
              }}
            >
                <TouchableOpacity
                  style={{
                    flex: 1, 
                    backgroundColor: checkInf ? 'white': 'transparent', 
                    borderWidth: 1,
                    borderColor: 'white',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: 20,
                    borderRadius: 5,
                    flexDirection: 'row',
                    }}
                  onPress={() => {
                    setCheckBus(false)
                    setCheckInd(false)
                    setCheckInf(!checkInf)
                  }}
                >
                    {checkInf &&  <Image
                            source={require("../img/check.png")}
                            style={{
                            width: 25,
                            height: 25,
                            position: 'absolute',
                            left: '3%'
                            // tintColor: Khi bạn đặt giá trị cho tintColor,
                            // hình ảnh hoặc biểu tượng sẽ được tô màu
                            // với màu bạn đã chỉ định, thay vì màu gốc của nó
                            }}
                        />
                    }
                        <Text style={{color: checkInf? '#098ce5' : 'white', fontSize: 24, fontWeight: 500}}>Influencer</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={{
                    flex: 1, 
                    borderWidth: 1,
                    borderColor: 'white', 
                    justifyContent: 'center', 
                    backgroundColor: checkBus ? 'white': 'transparent', 
                    alignItems: 'center',
                    marginBottom: 20,
                    borderRadius: 5
                  }}

                  onPress={() => {
                    setCheckInd(false)
                    setCheckInf(false)
                    setCheckBus(!checkBus)
                  }}
                >
                    {checkBus &&  <Image
                            source={require("../img/check.png")}
                            style={{
                            width: 25,
                            height: 25,
                            position: 'absolute',
                            left: '3%'
                            // tintColor: Khi bạn đặt giá trị cho tintColor,
                            // hình ảnh hoặc biểu tượng sẽ được tô màu
                            // với màu bạn đã chỉ định, thay vì màu gốc của nó
                            }}
                        />
                    }
                    <Text style={{color: checkBus? '#098ce5' : 'white', fontSize: 24, fontWeight: 500}}>Business</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={{
                    flex: 1, 
                    borderWidth: 1,
                    backgroundColor: checkInd ? 'white': 'transparent', 
                    borderColor: 'white', 
                    justifyContent: 'center', 
                    alignItems: 'center',
                    borderRadius: 5
                  }}

                  onPress={() => {
                    setCheckInf(false)
                    setCheckBus(false)
                    setCheckInd(!checkInd)
                  }}
                >   
                    {checkInd &&  <Image
                            source={require("../img/check.png")}
                            style={{
                            width: 25,
                            height: 25,
                            position: 'absolute',
                            left: '3%'
                            // tintColor: Khi bạn đặt giá trị cho tintColor,
                            // hình ảnh hoặc biểu tượng sẽ được tô màu
                            // với màu bạn đã chỉ định, thay vì màu gốc của nó
                            }}
                        />
                    }
                    <Text style={{color: checkInd ? '#098ce5' :'white', fontSize: 24, fontWeight: 500}}>Individual</Text>
                </TouchableOpacity>
            </View>
          </View>

          <View
             style={{
                flex: 1,
                paddingHorizontal: '2%',
                alignItems: 'center',
                marginTop: '25%'
            }}
          >
            <TouchableOpacity
                  style={{
                    width: '100%',
                    height: 62,
                    borderWidth: 1,
                    borderColor: 'white', 
                    justifyContent: 'center', 
                    alignItems: 'center',
                    borderRadius: 5
                  }}
                  onPress={() => navigation.navigate('main')}
            >

                  <Text style={{color: 'white', fontSize: 24, fontWeight: 500}}>Next</Text>
            </TouchableOpacity>
            <View
                 style={{
                    flex: 1, 
                    justifyContent: 'center', 
                    alignItems: 'center',
                  }}
            >
                <Text style={{color: 'white', fontSize: 18, fontWeight: 400}}>Dont't know what account type to use?</Text>
                <Text style={{color: 'white', fontSize: 18, fontWeight: 300}}>Check out our post.</Text>
            </View>
          </View>
        </ImageBackground>
      </View>
    );
}

export default Welcome