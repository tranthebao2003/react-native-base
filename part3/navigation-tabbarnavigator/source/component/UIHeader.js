import { StyleSheet, Text, View, StatusBar,Image, TouchableOpacity} from "react-native";
import colors from "./colors";

function UIHeader(props) {
  const {
    title,
    leftIconName,
    rightIconName,
    onPressLeftIcon,
    onPressRightIcon,
  } = props;
  return (
    <View
      style={{
        height: 60,
        backgroundColor: "#f7472e",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        paddingHorizontal: 20,
        
      }}
    >
      {leftIconName == 'back'? (
        <TouchableOpacity onPress={onPressLeftIcon}>
          <Image
            source={require("../resource/iconUIHeader/leftArrow.png")}
            resizeMode="cover"
            style={{ width: 30, height: 30, tintColor: "white" }}
          />
        </TouchableOpacity>
      ) : (
        <View style = {{width: 50, height: 50}}/>
      )}

      <Text style={{ fontSize: 28, color: "white", fontWeight: 400 }}>
        {title}
      </Text>

      {rightIconName != undefined && rightIconName == 'search'? (
        <TouchableOpacity onPress={onPressRightIcon}>
          <Image
            source={require("../resource/iconUIHeader/search.png")}
            resizeMode="cover"
            style={{ width: 30, height: 30, tintColor: "white" }}
          />
        </TouchableOpacity>
      ) : (
        ''
      )}

      {rightIconName != undefined && rightIconName == 'menu'? (
        <TouchableOpacity onPress={onPressRightIcon}>
          <Image
            source={require("../resource/iconUIHeader/menu.png")}
            resizeMode="cover"
            style={{ width: 30, height: 30, tintColor: "white" }}
          />
        </TouchableOpacity>
      ) : (
        ''
      )}

      {rightIconName == undefined? (
        <View style = {{width: 50, height: 50}}/>
      ): ''}
    </View>
  );
}

export default UIHeader;
