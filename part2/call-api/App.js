import { useEffect, useState } from "react";
import { SafeAreaView, StatusBar, TouchableOpacity, View, Text, StyleSheet, Dimensions} from "react-native";
import axios from "axios";

const width = Dimensions.get('window').width / 2


export default function App() {

  const [response, setResponse] = useState(null)

  // useEffect(() => {

  // }, [data])

  // dùng fetch để call api
  const getUrlPosts = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(async (res) => {
        // console.log('reponse: ', res)
        // nếu mik setResponse(res) thì nó sẽ bị lỗi vì react child ko chấp nhận object vì vậy mik phải parse sang strng
        setResponse(JSON.stringify(res))
      })
      .catch(error => console.log('Error: ', error))
  }

  // dùng axios để call api (dùng axios có nhiều lợi thế hơn)
  // dùng web postman để kiểm trai api
  const getUrlCommments = async () => {
    try {
      const res = await axios.get('https://jsonplaceholder.typicode.com/comments/')
      setResponse(JSON.stringify(res))
    }
    catch(error) {
      setResponse(JSON.stringify(error.message))
    }
  }

  const getUrlAlbumns = async(id) => {
    try {
      const resAlbumns = await axios.get(`https://jsonplaceholder.typicode.com/albums/${id}`)
      setResponse(JSON.stringify(resAlbumns))
    }
    catch(error) {
      setResponse(JSON.stringify(error.message))
    }
  }

  const getUrlPhotos = () => {
    console.log('calling... Getphotos')
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar barStyle='light-content'></StatusBar>
      <View style={styles.container}>
        <TouchableOpacity 
          style={styles.btn}
          onPress={() => getUrlPosts()}
        >
          <Text style={styles.text}>Posts</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.btn}
          onPress={() => getUrlCommments()}
        >
          <Text style={styles.text}>Comments</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.btn}
          onPress={() => getUrlAlbumns(1)}
        >
          <Text style={styles.text}>Albumns</Text>
        </TouchableOpacity>

        <View style={{marginTop: 30, width: '100%'}}>
          <TouchableOpacity 
            style={styles.btnFinal}
            onPress={() => getUrlPhotos()}
          >
            <Text style={styles.text}>Photos</Text>
          </TouchableOpacity>
        </View>
      </View>
    
      <Text style={{borderWidth: 1, width: '100%', height: 500, fontSize: 22, paddingHorizontal: 10}}>
        {response}
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    flex: 1, 
    justifyContent: 'space-between', 
    flexDirection: 'row', 
    flexWrap: 'wrap'
  },

  btn: {
    width: 120, 
    height: 50,
    borderRadius: 10, 
    borderWidth: 1, 
    borderColor: '#21a3d0',
    justifyContent: 'center', 
    alignItems: 'center',
    
  },

  btnFinal: {
    width: 120, 
    height: 50,
    borderRadius: 10, 
    borderWidth: 1, 
    borderColor: '#21a3d0',
    justifyContent: 'center', 
    alignItems: 'center',
    alignSelf: 'center'
  },

  text: {
    fontSize: 21, 
    color: '#21a3d0'
  }
})


