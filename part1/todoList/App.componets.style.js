import {StyleSheet} from 'react-native'
import color from './containColor/color';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.background
      },
    
      body: {
        flex: 1,
        paddingTop: 40,
        paddingHorizontal: 20
      },
    
      header:{
        fontSize: 24,
        color: color.primary,
        fontWeight: 'bold',
        marginBottom: 18
      }
})

export default styles;