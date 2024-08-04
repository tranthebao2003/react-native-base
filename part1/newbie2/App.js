import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Text style = {[styles.text, styles.topText]}>Top left</Text>
      </View>
       
      <View style={styles.bottom}>
        <View style={styles.bottomLeft}>
          <Text style = {[styles.text, styles.bottomLeftText]}>Bottom left</Text>
        </View>

        <View style={styles.bottomRight}>
          <View style={styles.bottomRightTop}>
              <Text style = {[styles.text, styles.bottomRightTopText]}>Right top</Text>
          </View>
          <View style={styles.bottomRightBottom}>
            <Text style = {[styles.text, styles.bottomRightBottomText]}>Right bottom</Text>
          </View>
        </View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },

  text:{
    fontSize: 24,
    fontWeight: 'bold',
  },

  top: {
    flex: 1,
    backgroundColor: '#f4fe87',
    justifyContent: 'center',
    alignItems: 'center'
  },

  topText: {
    color: '#21a3d0'
  },

  bottom: {
    flex: 1,
    backgroundColor: 'red',
    flexDirection:'row'
  },

  bottomLeft:{
    flex: 1,
    backgroundColor: '#acb9ca',
    justifyContent: 'center',
    alignItems: 'center'
  },

  bottomLeftText:{
    color: 'white'
  },

  bottomRight: {
    flex: 1,
    backgroundColor: 'yellow'
  },

  bottomRightTop: {
    flex: 1,
    backgroundColor: '#fce4d6',
    justifyContent: 'center',
    alignItems: 'center'
  },

  bottomRightTopText: {
    color: 'black',
    
  },

  bottomRightBottom:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  bottomRightBottomText: {
    color: '#644e8f'
  },
});
