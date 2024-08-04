import { Text, View, Image, TouchableOpacity, StyleSheet} from "react-native";
import colors from "../../component/colors";
import fontSize from '../../component/fontSize';

const ChatItem = (props) => {
    const {url, name, message, numberOfUnreadMessages}  = props.user
    const { onPressItem } = props;

    return (
      <TouchableOpacity style={styles.containerMess} onPress={onPressItem}>
        {numberOfUnreadMessages > 0 && (
          <View style={styles.containerNumberTest}>
            <Text style={styles.numberTest}>{numberOfUnreadMessages}</Text>
          </View>
        )}

        <Image
          source={{ uri: url }}
          resizeMode="cover"
          style={{
            width: 60,
            height: 60,
            borderRadius: 50,
            marginRight: "6%",
          }}
        />
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignSelf: "center",
          }}
        >
          <Text
            style={{
              fontSize: fontSize.sizeMain,
              fontWeight: 700,
            }}
          >
            {name}
          </Text>
          <Text
            style={{
              fontSize: fontSize.sizeMain*0.8,
            }}
          >
            {message}
          </Text>
        </View>

        <View
          style={{
            marginLeft: 10,
            alignItems: "flex-end",
            alignSelf: "center",
          }}
        >
          <Text
            style={{
              fontSize: fontSize.sizeMain * 0.6,
              fontWeight: 300
            }}
          >
            3 phút trước
          </Text>
        </View>
      </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
  containerMess: {
    width: "100%",
    height: 100,
    padding: 15,
    alignItems: "center",
    flexDirection: "row",
    marginBottom: "5%",
    backgroundColor: "white",
    shadowColor: "black",
    shadowOffset: { width: 600, height: 200 },
    shadowOpacity: 0.4,
    elevation: 1.2,
  },

  containerNumberTest: {
    position: "absolute",
    padding: 12,
    zIndex: 9,
    top: "18%",
    left: "16%",
    backgroundColor: colors.primary,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },

  numberTest: {
    position: "absolute",
    zIndex: 10,
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
});

export default ChatItem