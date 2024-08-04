import { useState } from 'react';
import { StyleSheet, Text, View, StatusBar,Image, FlatList, TouchableOpacity, TextInput } from 'react-native';
import colors from '../../component/colors';
import UIHeader from '../../component/UIHeader';
import MessengerItem from './MessengerItem'


// timestamp (có đơn vị là milisecond)
// timestamp là thời gian được tính từ 1/1/1970 đến thời
// điểm hiện tại và được quy đổi ra thành milisecond
// Xác định thứ tự của tin nhắn
// Đánh dấu thời gian
// Quản lý cuộc trò chuyện
// Phân biệt múi giờ

// sắp xếp đoạn tin nhắn theo timestamp
// isSender == true nghĩa là mình là người gửi thì nó nằm bên phải,
// isSender == false nghĩa là ng khác gửi tới nằm bên trái

// showUrl thằng nào nó gửi 2 lần liên tiếp thì mik sẽ ko show image của
// nó ra nữa
const Messenger = (props) => {
    const [chatHistory, setChatHistory] = useState([
      {
        url: 'https://randomuser.me/api/portraits/men/50.jpg',
        showUrl: true,
        isSender: true,
        messengers: 'helloeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
        timestamp: 1712200103000,
      },
      {
        url: 'https://randomuser.me/api/portraits/men/70.jpg',
        showUrl: true,
        isSender: false,
        messengers: 'how are you?ewwwwwwwwwwwwwwssssssssssssssssssssssssswwwwwwwwwwwwwwwwwwwwwwwwwwssssssssssssssssss',
        timestamp: 1712225603000
      },
      {
        url: 'https://randomuser.me/api/portraits/men/70.jpg',
        showUrl: false,
        isSender: false,
        messengers: 'Im fine thanks you and you',
        timestamp: 1712243303000
      },
      {
        url: 'https://randomuser.me/api/portraits/men/50.jpg',
        showUrl: true,
        isSender: true,
        messengers: 'no3333333333333333333',
        timestamp: 1712243363000
      },
      {
        url: 'https://randomuser.me/api/portraits/men/70.jpg',
        showUrl: true,
        isSender: false,
        messengers: 'lets go out',
        timestamp: 1712243543000
      },
      {
        url: 'https://randomuser.me/api/portraits/men/50.jpg',
        showUrl: true,
        isSender: true,
        messengers: 'ok bro',
        timestamp: 1712256847000
      },
      {
        url: 'https://randomuser.me/api/portraits/men/50.jpg',
        showUrl: true,
        isSender: true,
        messengers: 'ok bro',
        timestamp: 1712256847000
      },
      {
        url: 'https://randomuser.me/api/portraits/men/50.jpg',
        showUrl: true,
        isSender: true,
        messengers: 'tí 9h tao ra',
        timestamp: 1712256847000
      },
      {
        url: 'https://randomuser.me/api/portraits/men/50.jpg',
        showUrl: true,
        isSender: true,
        messengers: 'nhớ chờ t nha fdsssssssssfffffffff',
        timestamp: 1712256847000
      },
    ])

    // rount là props mặc định đc chuyền trong navigate
    // tương tự params chứa thông tin đc truyền bên trong route
    const {url, name} = props.route.params.user
    const {navigate, goBack} = props.navigation
    
    return (
      <View style={{ flex: 1, backgroundColor: colors.backgroundSecond }}>
        <StatusBar barStyle="default"></StatusBar>
        <UIHeader
          title={name}
          leftIconName={"back"}
          rightIconName={"menu"}
          onPressLeftIcon={() => {
            goBack();
          }}
          onPressRightIcon={() => {
            alert("press right icon screen chat");
          }}
        />

        <FlatList
          data={chatHistory}
          keyExtractor={chatHistory.timestamp}
          style={{ flex: 1,}}
          renderItem={({ item }) => (
            <MessengerItem
              item = {item}
              onPress={() => {
                alert(`you press item's ${item.timestamp}`);
              }}
            />
          )}
        />
      </View>
    );
}

export default Messenger