import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import FiveStars from "./FiveStars";

function GridItem(props) {
  const{item, index, products, onPress} = props
  return (
    <View
      style={{
        marginLeft: index % 2 == 1 ? 0 : 10,
        marginTop: 5,
        // nếu nó là phần tử bị lẻ thì mik sẽ magrin nó thêm 10 để nó bằng thằng trên
        marginRight: products.length == item.id && item.id % 2 == 1 ? 20 : 10,
        marginBottom: 5,
        borderRadius: 20,
        borderWidth: 2,
        borderColor: "#ddebf7",
        // nếu ở đây flex 0.5 thì width của hình left = hình right
        // còn nếu no khuyết 1 bên thì bên còn lại chiếm 1 nửa
        flex: 0.5,
      }}
    >
      <View
        style={{
          flexDirection: "row",
        }}
      >
        <View
          style={{
            width: "100%",
            height: 125,
            flexDirection: "row",
            justifyContent: "space-between",
            paddingTop: 5,
          }}
        >
          <Image
            source={{
              uri: item.url,
            }}
            style={{
              width: 100,
              height: 100,
              borderRadius: 20,
              marginTop: 10,
              marginLeft: 5,
            }}
            resizeMode="contain"
          ></Image>
          <Text
            style={{
              fontSize: 20,
              marginRight: 15,
              fontWeight: 500,
              color: "#ea5b00",
            }}
          >
            ${item.price}
          </Text>
        </View>
      </View>
      <View
        style={{
          width: "100%",
          flex: 1,
          padding: 10,
        }}
      >
        <Text style={{ fontSize: 18, fontWeight: 500, color: "#015b98" }}>
          {item.productName}
        </Text>
        {/* specification: giá trị trong mảng specifications
                index chính là chỉ số trong mảng
            */}
        {item.specifications.map((specification, index) => {
          return (
            <Text key={index} style={{ fontSize: 16 }}>
              * {specification}
            </Text>
          );
        })}
      </View>

      <View
        style={{
          width: "100%",
          height: 80,
          paddingHorizontal: 5,
          flexDirection: "row",
        }}
      >
        <TouchableOpacity
          onPress={onPress}
          style={{
            width: "54%",
            height: "100%",
            justifyContent: "center",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          {item.isSaved == false || item.isSaved == undefined ? (
            <Image
              source={require("./iconHeart/heartEmpty.png")}
              style={{
                width: 25,
                height: 25,
                marginRight: 6,
              }}
              resizeMode="contain"
            ></Image>
          ) : (
            <Image
              source={require("./iconHeart/heart.png")}
              style={{
                width: 25,
                height: 25,
                marginRight: 6,
              }}
              resizeMode="contain"
            ></Image>
          )}
          <Text
            style={{
              fontSize: 14,
              width: "70%",
              color:
                item.isSaved == false || item.isSaved == undefined
                  ? "black"
                  : "#d00101",
            }}
          >
            Save for later
          </Text>
        </TouchableOpacity>

        <View
          style={{
            flex: 1,
            height: "100%",
            alignItems: "flex-end",
            justifyContent: "center",
          }}
        >
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              justifyContent: "flex-end",
              height: "30%",
              alignItems: "center",
            }}
          >
            <FiveStars numberOfStars={item.starts} />
          </View>

          <Text style={{ color: "#015b98", fontWeight: 500 }}>
            {item.reviews} reviews
          </Text>
        </View>
      </View>
    </View>
  );
}

export default GridItem;
