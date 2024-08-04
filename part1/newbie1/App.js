// import những thành phần sử dụng
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.containerTop}>
          <View style={styles.top}>
            <Text style={styles.topText}>Top left</Text>
          </View>
      </View>
      <View style={styles.containerCenter}>
          <View style={styles.center}>
              <Text style={styles.centerText}>Center</Text>
          </View>
      </View>
      <View style={styles.containerBottom}>
          <View style={styles.bottom}>
              <Text style={styles.bottomText}>Bottom right</Text>
          </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1 nó bao toàn bộ màn hình
    flex: 1,
    backgroundColor: '#e7feff',
  },

  containerTop: {
    flex:1,
    backgroundColor: '#ddebf7'
  },

  top: {
    marginTop:40,
    marginHorizontal: 30,
    backgroundColor: 'pink',
    // paddingVertical: padding top bottom
    paddingVertical: 10,
     // paddingHorizontal: padding left right
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: 'red'
  },

  topText: {
    fontSize: 20,
    fontWeight: '700',
    color: 'blue'
  },

  containerCenter: {
    flex:1,
    backgroundColor: '#fce4d6',
    justifyContent: 'center',
    alignItems: 'center'
  },

  center: {
    width: 150,
    height: 150,
    backgroundColor: "#644e8f",
    borderRadius: 100,
    // căn giữa theo chiều dọc
    justifyContent: 'center',
    // Căn giữa theo chiều ngang
    alignItems:'center'
  },

  centerText:{
    fontSize: 20,
    fontWeight: '700',
    color: 'black'
  },

  containerBottom: {
    flex:1,
    backgroundColor: '#feebad',
    justifyContent: 'flex-end'
  },

  bottom:{
    marginBottom:40,
    marginHorizontal: 30,
    backgroundColor: '#7ee6fd',
    // paddingVertical: padding top bottom
    paddingVertical: 10,
     // paddingHorizontal: padding left right
    paddingHorizontal: 20,
    borderRadius: 50
  },

  bottomText:{
    textAlign: 'right',
    fontSize: 20,
    fontWeight: '700',
    color: 'black'
  }
});
