import { Text, View, Image, TouchableOpacity } from "react-native";
import colors from "../../component/colors";

const FoodItem = (props) => {
  const { name, url, status, price, website, socialNetworks } = props.food; // destructuring an object
  const { onPressItem } = props;
  const { facebook, twitter, instagram } = socialNetworks;

  const statusColor = (status) => {
    if (status.toLowerCase().trim() == "opening now") {
      return colors.success;
    } else if (status.toLowerCase().trim() == "comming soon") {
      return colors.warning;
    } else {
      return colors.alert;
    }
  };
  return (
    <TouchableOpacity
      onPress={onPressItem}
      style={{
        height: 250,
        paddingHorizontal: 10,
        paddingTop: 20,
        flexDirection: "row",
      }}
    >
      <Image
        style={{
          height: 100,
          width: 100,
          borderRadius: 10,
          marginRight: 15,
        }}
        resizeMode="cover"
        source={{
          uri: url,
        }}
      />

      <View style={{ flex: 1, marginTop: -8 }}>
        <Text
          style={{
            color: colors.primary,
            fontSize: 22,
            fontWeight: 500,
          }}
        >
          {name}
        </Text>
        <View
          style={{
            height: 1,
            backgroundColor: colors.primary,
            width: "100%",
          }}
        />
        <View style={{ flexDirection: "row" }}>
          <Text
            style={{
              color: colors.inactive,
              fontSize: 20,
              marginRight: 6,
            }}
          >
            Status:
          </Text>

          <Text
            style={{
              color: statusColor(status),
              fontSize: 20,
            }}
          >
            {status}
          </Text>
        </View>
        <Text
          style={{
            color: colors.inactive,
            fontSize: 20,
          }}
        >
          Price: {price}$
        </Text>

        <Text
          style={{
            color: colors.inactive,
            fontSize: 20,
          }}
        >
          Website: {website}
        </Text>

        <View
          style={{
            flexDirection: "row",
            width: 80,
            marginTop: 8,
            marginLeft: -4,
          }}
        >
          {facebook != undefined && (
            <Image
              source={require("../../resource/iconFoodList/socialIcon/facebook.png")}
              resizeMode="contain"
              style={{
                height: 20,
                width: 20,
                tintColor: colors.inactive,
                marginRight: 8,
              }}
            />
          )}

          {twitter != undefined && (
            <Image
              source={require("../../resource/iconFoodList/socialIcon/twitter.png")}
              resizeMode="contain"
              style={{
                height: 20,
                width: 20,
                tintColor: colors.inactive,
                marginRight: 8,
              }}
            />
          )}

          {instagram != undefined && (
            <Image
              source={require("../../resource/iconFoodList/socialIcon/instagram.png")}
              resizeMode="contain"
              style={{ height: 20, width: 20, tintColor: colors.inactive }}
            />
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default FoodItem;
