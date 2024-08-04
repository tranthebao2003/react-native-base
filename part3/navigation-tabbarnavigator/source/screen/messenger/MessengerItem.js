import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  FlatList,
  TouchableOpacity,
  TextInput,
} from "react-native";
import {screenWidth} from '../../utilies/Device'
import colors from "../../component/colors";
import fontSize from "../../component/fontSize";

const MessengerItem = (props) => {
  const { onPress } = props;
  // phân giải những thuộc tính có bên trong item
  const { url, isSender, messengers, timestamp , showUrl} = props.item;
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        flexDirection: "row",
        paddingVertical: "3%",
        justifyContent: "center",
      }}
    >
      {/* paddingRight là element bên trong cách container bên phải
      vậy thì đáng lẽ cái view ở dưới phải là paddingLeft: '21%' mới đúng
      nhưng do mình dùng flexDirection: "row-reverse" nên nó phải là paddingRight */}
      {isSender == true ? (
        <View
          style={{
            width: screenWidth * (3 / 4),
            flexDirection: "row-reverse",
            alignItems: "center",
            paddingRight: "20%",
          }}
        >
          <View
            style={[
              styles.containerMessItem,
              { backgroundColor: colors.backgroundMess },
            ]}
          >
            <Text
              style={{
                fontSize: fontSize.sizeMain * 0.8,
                fontWeight: 400,
              }}
            >
              {messengers}
            </Text>
          </View>
        </View>
      ) : (
        <View
          style={{
            width: screenWidth * (6 / 7),
            flexDirection: "row",
            alignItems: "center",
            paddingRight: "17%",
          }}
        >
          {showUrl == true ? (
            <Image
              source={{ uri: url }}
              resizeMode="cover"
              style={[styles.image, { marginRight: "6%" }]}
            />
          ) : (
            <View style={{ width: 35, height: 35, borderRadius: 50, marginLeft: "6%" }}></View>
          )}

          <View style={styles.containerMessItem}>
            <Text
              style={{
                fontSize: fontSize.sizeMain * 0.8,
                fontWeight: 400,
              }}
            >
              {messengers}
            </Text>
          </View>
        </View>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  containerMessItem: {
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "white",
    shadowColor: "black",
    shadowOffset: { width: 600, height: 600 },
    shadowOpacity: 0.5,
    elevation: 1.5,
    padding: 15,
    borderRadius: 20,
  },

  image: {
    width: 35,
    height: 35,
    borderRadius: 50,
  },
});

export default MessengerItem;
