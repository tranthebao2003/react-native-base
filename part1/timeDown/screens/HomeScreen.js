import { Text, StyleSheet, View, Dimensions, Image, TouchableOpacity} from 'react-native'
import { AntDesign, FontAwesome} from '@expo/vector-icons';
import { useEffect, useState } from 'react';
const {width, height} = Dimensions.get('screen')
const HomeScreen = () => {
    // dòng lệnh const {width, height} = Dimensions.get('screen')
    //  sẽ lấy kích thước chiều rộng và chiều cao của màn hình, 
    // và sau đó gán giá trị của chúng vào hai hằng số width và height
    
    const [number, setNumber] = useState(60)
    const [action, setAction] = useState(false)

    useEffect(() => {
        let interval

        // nếu action = false thì ko chạy interval ngược lại action = true thì chạy
        if(action == true && number > 0){
            // mỗi 1000ms thì nó là setNumber lại 1 lần bằng cách sử dụng hàm ở trong
            interval = setInterval(() => {
                setNumber(preTime => preTime - 1)
            }, 1000);
        }
        
        return() =>{
            clearInterval(interval)
        }
    }, [number, action])

    const handlePlay = () => {
        setAction(true)
    }

    const handlePause = () => {
        setAction(false)
    }   

    const handleRefresh = () => {
        setAction(false)
        setNumber(60)
    }

    return (
      <View style={styles.container}>
        <Image style={styles.imgBg} src = {'https://antimatter.vn/wp-content/uploads/2022/10/Hinh-nen-dien-thoai-dep-nhat.jpg'}/>
        
        <View style={styles.viewBody}>
            <Text style={styles.text}>{number}</Text>

            <View style={styles.viewBtn}>
                <TouchableOpacity style={styles.button} onPress={handlePlay}>
                    <AntDesign name="play" size={44} color="white" />
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={handlePause}>
                    <AntDesign name="pausecircle" size={44} color="white" />
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={handleRefresh}>
                    <FontAwesome name="refresh" size={44} color="white" />
                </TouchableOpacity>
            </View>
        </View>
      </View>
    )
}


const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'black'
    },

    viewBody:{
        flex: 1,
        justifyContent: 'space-around'
    },

    text: {
        color: 'white',
        textAlign: 'center',
        fontSize: 140,
        fontWeight: 'bold'
    },

    imgBg: {
        width: width,
        height: height,
        position: 'absolute',
        opacity: 0.4
    },

    viewBtn: {
        flexDirection:'row',
        // khác vs space-around cách 2 đầu 1 khoảng nhỏ thì space-evenly chia khoảng cách
        // giữa những phần tử đều bằng nhau hết kể cả 2 đầu
        justifyContent: 'space-evenly'
    },

    button:{
        width: 60,
        height: 60,
        borderRadius: 50,
        backgroundColor: '#015b98',
        justifyContent: 'center',
        alignItems: 'center'
    }
})
export default HomeScreen