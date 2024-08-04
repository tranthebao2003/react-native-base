
import { useEffect, useReducer, useRef } from 'react';
import { StyleSheet, Text, View, StatusBar, SafeAreaView, Animated, Easing, Image, TouchableOpacity} from 'react-native';

export default function App() {
  const topMotion = useRef(new Animated.Value(0)).current
  const spinValue = useRef(new Animated.Value(0)).current

  const motion = useRef(new Animated.Value(-100)).current
  useEffect(() => {
    setTimeout(() => {
      // Animated.timing phía dưới là cho marginTop: topMotion trong Animated.View
      // Animated.timing(
      //   topMotion,
      //   {
      //     toValue: 600,
      //     duration: 1000,
      //     useNativeDriver: false 
      //     //  easing: Easing.Những kiểu di chuyển
  
      //     // easing: Easing.linear
      //     // easing: Easing.quad
      //     // easing: Easing.cubic
      //     // easing: Easing.poly(4)
  
      //     // lùi lại 1 chút rồi di chuyển
      //     // easing: Easing.back(0.8)

      //     // di chuyển với vận tốc thay đổi
      //     // https://cubic-bezier.com/#.17,.67,.9,.41 để trợ giúp cho animation
      //     // easing: Easing.bezier(0,1.62,.99,-0.63)

      //     // nảy lên
      //     // easing: Easing.bounce
      //   }
      // ).start()

      // Animated.loop() : những Animated.timing trong đây sẽ lặp lại liên tục
      //  Animated.parallel(): bên trong là 1 cái mảng những animation bên trong sẽ diễn ra song hành
      //  Animated.sequence(): bên trong là 1 cái mảng những animation bên trong sẽ diễn ra lần lượt từ trên xuống dưới
      // luôn luôn để start() ở animation bên ngoài cùng

      // Animated.timing cho animation của cái bell
      Animated.loop(
        Animated.parallel([
          // animation button di chuyển
          Animated.timing(
            motion,
            {
              toValue: 200,
              duration: 2000,
              useNativeDriver: false
            }
          ),
          
          // animation chuông lắc
          Animated.sequence([
            // 1. lắc qua bên trái 45deg
            Animated.timing(
              spinValue,
              {
                toValue: 1,
                duration: 200,
                useNativeDriver: false
              }
            ),
    
            // 2. Lắc qua bên trái 90deg (gấp 2 lần 45deg nên mik tăng gấp đôi tg lên)
            Animated.timing(
              spinValue,
              {
                toValue: -1,
                duration: 400,
                useNativeDriver: false
              }
            ),
    
            // 3. lắc qua bên phải 45deg
    
            // Animated.timing(
            //   spinValue,
            //   {
            //     toValue: 0,
            //     duration: 200,
            //     useNativeDriver: false
            //   }
            // ),
  
            Animated.timing(
              spinValue,
              {
                toValue: 1,
                duration: 400,
                useNativeDriver: false
              }
            ),
  
            Animated.timing(
              spinValue,
              {
                toValue: -1,
                duration: 400,
                useNativeDriver: false
              }
            ),
  
            Animated.timing(
              spinValue,
              {
                toValue: 1,
                duration: 400,
                useNativeDriver: false
              }
            ),
  
            Animated.timing(
              spinValue,
              {
                toValue: -1,
                duration: 400,
                useNativeDriver: false
              }
            ),
  
            Animated.timing(
              spinValue,
              {
                toValue: 0,
                duration: 200,
                useNativeDriver: false
              }
            ),
    
          ])  
        ])
       
       
      ).start()
    }, 1000)
    
  }, [])

  const spin = spinValue.interpolate({
    inputRange: [-1, 0, 1],
    outputRange: ['-45deg', '0deg', '45deg']
  })

  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar barStyle='light-content'/>
      <View style={{flex: 1, borderWidth: 2, borderColor: 'red', justifyContent: 'center', alignItems: 'center'}}>
        <Animated.View style={{transform: [{rotate: spin}], marginTop: topMotion, width: 100, height: 100}}>
          <Image source = {require('./bell.png')} resizeMode='stretch' style={{width: 100, height: 100}}/>
        </Animated.View>

        <Animated.View style={{position: 'absolute', bottom: motion, alignSelf: 'center'}}>
        <TouchableOpacity style={{backgroundColor: 'green', width: 200, height: 50, justifyContent: 'center', marginTop: 50, alignItems: 'center'}}
              onPress={() => Animated.timing(spinValue).stop()}  
          >
            <Text>Click me</Text>
        </TouchableOpacity>
        </Animated.View>
      </View>
    </SafeAreaView>
  );
}

