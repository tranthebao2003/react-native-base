import { StyleSheet, Text, View, StatusBar } from "react-native";

function UIHeader(props) {
  const {title} = props
  return (
    <View
      style={{
        height: 60,
        backgroundColor: "#f7472e",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ fontSize: 28, color: "white", fontWeight: 400 }}>
        {title}
      </Text>
    </View>
  );
}

export default UIHeader;
