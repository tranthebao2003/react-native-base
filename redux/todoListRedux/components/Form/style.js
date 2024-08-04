import {StyleSheet} from 'react-native'
// ./../../containColor/color: ./ là dường dẫn tương đối
// ../ 2 lần: ra ngoài 2 cấp (từ style.js in Form thì ra ngoài 2 cấp mới bằng containColor)
import color from './../../containColor/color'

const styles = StyleSheet.create({
    addTask: {
        bottom: 20,
        paddingHorizontal: 20,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    input:{
        height: 44,
        width: '80%',
        backgroundColor: color.white,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: color.primary,
        paddingHorizontal: 10,
        paddingVertical: 10,
        fontSize: 20,
        color: color.text
    },

    iconWarapper: {
        width: 44,
        height: 44,
        backgroundColor: color.primary,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        borderColor: color.white
    },

    icon: {
        fontSize: 22,
        color: color.white
    }
})

export default styles
