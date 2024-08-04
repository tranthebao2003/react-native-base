import {
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import FiveStars from "./FiveStars";
import colors from '../../component/colors';

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
        borderWidth: 1,
        borderColor: colors.primary,
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
              fontSize: 16,
              marginRight: 15,
              fontWeight: 400,
              color: colors.primary,
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
        <Text style={{ fontSize: 16, fontWeight: 500, color: colors.primary}}>
          {item.productName}
        </Text>
        {/* specification: giá trị trong mảng specifications
                index chính là chỉ số trong mảng
            */}
        {item.specifications.map((specification, index) => {
          return (
            <Text key={index} style={{ fontSize: 14 }}>
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
              source={require("../../resource/iconProduct/iconHeart/heartEmpty.png")}
              style={{
                width: 20,
                height: 20,
                marginRight: 6,
              }}
              resizeMode="cover"
            ></Image>
          ) : (
            <Image
              source={require("../../resource/iconProduct/iconHeart/heart.png")}
              style={{
                width: 20,
                height: 20,
                marginRight: 6,
              }}
              resizeMode="cover"
            ></Image>
          )}
          <Text
            style={{
              fontSize: 12,
              width: "70%",
              color:
                item.isSaved == false || item.isSaved == undefined
                  ? "black"
                  : colors.primary,
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

          <Text style={{ color: colors.primary, fontWeight: 500, fontSize: 12}}>
            {item.reviews} reviews
          </Text>
        </View>
      </View>
    </View>
  );
}

export default GridItem;
