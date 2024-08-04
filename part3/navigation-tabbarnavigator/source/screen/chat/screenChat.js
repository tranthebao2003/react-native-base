import { useState } from 'react';
import { StyleSheet, Text, View, StatusBar,Image, FlatList, TouchableOpacity, TextInput } from 'react-native';
import colors from '../../component/colors';
import UIHeader from '../../component/UIHeader';
import ChatItem from './ChatItem'


const Chat = ({navigation}) => {
    const [users, setUsers] = useState([
      {
        url: 'https://randomuser.me/api/portraits/men/70.jpg',
        name: 'Amanda weler',
        message: 'hello, how are you',
        numberOfUnreadMessages: 2
      },
      {
        url: 'https://randomuser.me/api/portraits/men/30.jpg',
        name: 'The bao',
        message: 'hello, how are you',
        numberOfUnreadMessages: 0
      },
      {
        url: 'https://randomuser.me/api/portraits/men/40.jpg',
        name: 'Amanda weler',
        message: 'hello, how are you',
        numberOfUnreadMessages: 99
      },
      {
        url: 'https://randomuser.me/api/portraits/men/50.jpg',
        name: 'Amanda weler',
        message: 'hello, how are you',
        numberOfUnreadMessages: 9
      },
      {
        url: 'https://randomuser.me/api/portraits/men/10.jpg',
        name: 'Amanda weler',
        message: 'hello, how are you',
        numberOfUnreadMessages: 4
      },
      {
        url: 'https://randomuser.me/api/portraits/men/20.jpg',
        name: 'Nguyễn văn x',
        message: 'hello, how are you',
        numberOfUnreadMessages: 3
      },
      {
        url: 'https://randomuser.me/api/portraits/men/90.jpg',
        name: 'Amanda weler',
        message: 'hello, how are you',
        numberOfUnreadMessages: 0
      },
    ])
    
    return (
      <View style={{ flex: 1, backgroundColor: colors.backgroundSecond }}>
        <StatusBar barStyle="default"></StatusBar>
        <UIHeader
          title={"Notification"}
          leftIconName={"back"}
          rightIconName={"search"}
          onPressLeftIcon={() => {
            alert("press left icon screen chat");
          }}
          onPressRightIcon={() => {
            alert("press right icon screen chat");
          }}
        />

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            padding: 20,
            paddingHorizontal: 15,
            width: "100%",
          }}
        >
          <Text
            style={{ color: colors.primary, fontSize: 16, fontWeight: 500 }}
          >
            6 messages unread
          </Text>
          <TouchableOpacity
            onPress={() => {
              alert("you pressed delete");
            }}
          >
            <Image
              source={require("../../resource/screenChat/trashCan.png")}
              resizeMode="cover"
              style={{ width: 22, height: 22, tintColor: colors.primary }}
            />
          </TouchableOpacity>
        </View>

        <FlatList
          style={{
            flex: 1,
            marginBottom: 35
          }}
          data={users}
          keyExtractor={(item) => item.url}
          renderItem={({item}) => {
            return (
              <ChatItem
                user={item}
                // khi nhấn vào từng item trong chat
                // thì nó sẽ navigation sang screen messenger của user đó
                // đồng thời truyền infomation của user đó vào
                // message đó lun
                onPressItem={() => {
                  navigation.navigate('messenger', {user: item})
                }}
              />
            );
          }}
        />
      </View>
    );
}

export default Chat