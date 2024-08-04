import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

export default function App() {
  return (
    // Trong React Native, SafeAreaView là một thành phần 
    // được cung cấp sẵn giúp đảm bảo rằng nội dung của ứng dụng 
    // của bạn sẽ hiển thị đúng trên mọi thiết bị và không bị che 
    // khuất bởi thanh tiêu đề, thanh trạng thái hoặc các phần khác 
    // của giao diện người dùng.
    <SafeAreaView style={styles.container}>
      {/* <StatusBar style='auto'></StatusBar> */}
      <View style={{width: '100%', height: '100%'}}>
          {/* first row */}
          <View style={{width: '100%', height: '16.6%', borderWidth: 1, borderColor: 'black', flexDirection: 'row'}}>
            {/* Ô vuông chứa hình màu đỏ */}
            <View style = {{height: '100%', flex: 1, borderRightWidth: 1, borderColor: 'black', justifyContent: 'center', alignItems: 'center'}}>
              {/* Ô vuông màu đó có bo góc */}
              <View style = {{width: '80%', height: '80%', backgroundColor: 'red', borderRadius: 10}}></View>
            </View>

            {/* Hình chữ nhật chứa chữ */}
            <View style = {{height: '100%', flex: 2}}>
              <Text style={{marginTop: 12, marginLeft: 20, fontSize: 20}}>Tôi tên là Trần Thế Bảo</Text>
            </View>
          </View>

          {/* second row */}
          <View style = {{width: '100%',  height: '16.6%', borderWidth: 1, borderTopWidth: 0, flexDirection: 'row'}}>
            {/* regtangle chứa text */}
            <View style={{flex: 2, borderRightWidth: 1, justifyContent: 'center', alignItems: 'center'}}>
              <Text style={{fontSize: 24, fontWeight: 600, }}>Text nằm ở giữa</Text>
            </View>
            {/* regtangle chứa 2 ô */}
            <View style={{flex: 1}}>
              <View style = {{flex: 1, backgroundColor: 'green'}}></View>
              <View style = {{flex: 1, backgroundColor: 'blue'}}></View>
            </View>
          </View>

          {/* third row */}
          <View style = {{width: '100%',  height: '16.6%', borderWidth: 1, borderTopWidth: 0, flexDirection: 'row'}}>
            <View style = {{flex : 1, backgroundColor : '#EFCC0F', borderRightWidth: 1}}></View>
            <View style = {{flex : 1, backgroundColor : '#0FBBEF', borderRightWidth: 1}}></View>
            <View style = {{flex : 1, backgroundColor : 'cyan'}}></View>
          </View>

          {/* four row */}
          <View style ={{width: '100%', flex: 1, justifyContent: 'center', alignItems: 'center', position: 'relative'}}>
            <View style = {{width : '70%', height: '70%', backgroundColor: 'violet'}}></View>
            {/* aspectRatio: 1, width: '25%': ô vuông này có width là 25% mà aspectRatio = 1 thì height = width luôn
            nhưng ko phải là 25% đâu bởi vì nếu height = 25% thẻ cha thì height < width */}
            <View style = {{position: 'absolute', top: '10%', right: '10%', aspectRatio: 1, width: '25%', backgroundColor: 'red'}}></View>
          </View>

          {/* five row */}
          <View style = {{width: '100%', height: '16.6%', borderWidth: 1, justifyContent: 'space-around', alignItems: 'center', flexDirection: 'row'}}>
            <View style = {{width: '40%', height: '40%', backgroundColor: 'gray', borderWidth: 4, borderColor: 'red', borderRadius: 30, justifyContent: 'center', alignItems: 'center'}}>
              <Text style={{fontSize: 22, fontWeight: 500, color: 'white'}}>Save</Text>
            </View>
            <View style = {{width: '40%', height: '40%', backgroundColor: 'blue', borderWidth: 4, borderColor: 'red', borderRadius: 30, justifyContent: 'center', alignItems: 'center'}}>
              <Text style={{fontSize: 22, fontWeight: 500, color: 'white'}}>Cancel</Text>
            </View>
          </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
