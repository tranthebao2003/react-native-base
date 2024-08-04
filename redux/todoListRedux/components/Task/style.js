import {StyleSheet} from 'react-native'
import color from './../../containColor/color'

const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        backgroundColor: color.white,
        marginBottom: 15,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'space-between'
      },
    
      square: {
        width: 48,
        height: 36,
        borderRadius: 100,
        
        alignItems: 'center',
        justifyContent: 'center'
      },

      even:{
        backgroundColor: color.second,
      },

      odd: {
        backgroundColor: color.green,
      },
    
      number: {
        fontSize: 18,
        fontWeight: '700',
        color: color.white
      },
    
      content:{
        // chiếm 80% của thẻ view cha
        width: '80%',
        fontSize: 18,
        fontWeight: '500'
      }
})

export default styles;