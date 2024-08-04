import { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  ScrollView,
} from "react-native";
import colors from "../../component/colors";
import { SafeAreaView } from "react-native-safe-area-context";
import User1 from "../../repositories/User1";
import fontSize from "../../component/fontSize";
import Population from "../../repositories/Population";
import covertDateTimeToString from "../../utilies/DateTime"
import { Dimensions } from "react-native";
import { LineChart } from "react-native-chart-kit";
const screenWidth = Dimensions.get("window").width;

function Profile(props){
    const [user, setUser] = useState({})
    // nó trả về là array thì đặt tên useState là số nhiều
    const [populations, setPopulations] = useState({})
    // call when component loaded
    // ở đây ta dùng useEffect type 2 (nếu quên xem trong reactjs)
    // loại này chỉ load duy nhất 1 lần khi component mounded
    useEffect(() => {
        // hai hàm này sẽ chạy song song nhau và để call api 

        // getUserDetail là function async vì thế nó có 2 
        // promise then, catch
        // then: gọi khi lấy được data trả về
        // catch để bắt lỗi
        User1.getUserDetail()
            .then(responseUser => setUser(responseUser))
    },[])

    const {
      email,
      dateOfBirth,
      gender,
      userId,
      address,
      username,
      url,
      phone,
      registerDate,
    } = user;


    return (
      <SafeAreaView
        style={{ flex: 1, backgroundColor: colors.primarySecond, zIndex: 0 }}
      >
        <StatusBar barStyle="auto"></StatusBar>
        <ScrollView style={{ flex: 1, paddingHorizontal: 25 }}>
          <View
            style={{
              width: "100%",
              height: 120,
              justifyContent: "center",
              alignItems: "center",
              position: "absolute",
              top: 70,
              zIndex: 2,
              overflow: "hidden",
            }}
          >
            <Image
              style={{
                width: 120,
                height: 120,
                borderRadius: 60,
                borderWidth: 6,
                borderColor: "white",
              }}
              resizeMode="cover"
              source={{
                uri: url,
              }}
            />
          </View>

          <View style={styles.containerNamePhone}>
            <Text style={[styles.textLarge, { marginTop: 95 }]}>
              {username}
            </Text>
            <Text style={styles.textMain}>{phone}</Text>

            <View
              style={{
                width: "100%",
                height: 65,
                marginTop: 45,
                flexDirection: "row",
              }}
            >
              <View
                style={{
                  flex: 1,
                  backgroundColor: colors.inactive3,
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "row",
                  marginRight: 10,
                  borderTopRightRadius: 20,
                }}
              >
                <Image
                  style={{
                    width: 30,
                    height: 30,
                    marginRight: 10,
                    tintColor: colors.primary,
                  }}
                  resizeMode="cover"
                  source={require("../../resource/iconProfile/userId.png")}
                />
                <Text style={[styles.textMain, { fontWeight: "500" }]}>
                  {userId}
                </Text>
              </View>

              <View
                style={{
                  flex: 1,
                  backgroundColor: colors.inactive3,
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "row",
                  borderTopLeftRadius: 20,
                }}
              >
                <Image
                  style={{
                    width: 30,
                    height: 30,
                    marginRight: 10,
                    tintColor: colors.primary,
                  }}
                  resizeMode="contain"
                  source={require("../../resource/iconProfile/gender.png")}
                />
                <Text style={[styles.textMain, { fontWeight: "500" }]}>
                  {gender}
                </Text>
              </View>
            </View>
          </View>

          <View
            style={{
              width: "100%",
              height: 500,
              marginTop: 50,
              backgroundColor: "white",
              borderRadius: 20,
              padding: 15,
              marginBottom: 100,
            }}
          >
            <Text style={styles.textLarge}>Profile</Text>
            {/* ở đây thì mik ko nên set height cố định vì 
            như thế khi email nó nhiều thì nó sẽ tràn xuống dưới
            trong khi height không tăng lên đc thì nó rất xấu,
            thay vào đó mik set padding vào trong để height có
            thể tùy chỉnh tùy vào nội dung */}
            <View
              style={{
                width: "100%",
                padding: 20,
                marginTop: 30,
                flexDirection: "row",
                alignItems: "center",
                backgroundColor: colors.primarySecond,
                borderRadius: 6,
              }}
            >
              <Image
                style={{
                  width: 25,
                  height: 25,
                  marginRight: 20,
                  tintColor: colors.primary,
                }}
                resizeMode="cover"
                source={require("../../resource/iconProfile/email.png")}
              />
              <View style={{ flex: 1 }}>
                <Text style={[styles.textLarge, { fontSize: 18 }]}>Email</Text>
                <Text
                  style={[styles.textMain, { fontWeight: 400, color: "black" }]}
                >
                  {email}
                </Text>
              </View>
            </View>

            <View
              style={{
                width: "100%",
                padding: 20,
                marginTop: 20,
                flexDirection: "row",
                alignItems: "center",
                backgroundColor: colors.primarySecond,
                borderRadius: 6,
              }}
            >
              <Image
                style={{
                  width: 25,
                  height: 25,
                  marginRight: 20,
                  tintColor: colors.primary,
                }}
                resizeMode="cover"
                source={require("../../resource/iconProfile/dateOfBirth.png")}
              />
              <View style={{ flex: 1 }}>
                <Text style={[styles.textLarge, { fontSize: 18 }]}>
                  Date Of Birth
                </Text>
                <Text
                  style={[styles.textMain, { fontWeight: 400, color: "black" }]}
                >
                  {covertDateTimeToString(dateOfBirth)}
                </Text>
              </View>
            </View>

            <View
              style={{
                width: "100%",
                padding: 20,
                marginTop: 20,
                flexDirection: "row",
                alignItems: "center",
                backgroundColor: colors.primarySecond,
                borderRadius: 6,
              }}
            >
              <Image
                style={{
                  width: 25,
                  height: 25,
                  marginRight: 20,
                  tintColor: colors.primary,
                }}
                resizeMode="cover"
                source={require("../../resource/iconProfile/address.png")}
              />
              <View style={{ flex: 1, flexWrap: "wrap" }}>
                <Text style={[styles.textLarge, { fontSize: 18 }]}>
                  Address
                </Text>
                <Text
                  style={[styles.textMain, { fontWeight: 400, color: "black" }]}
                >
                  {address}
                </Text>
              </View>
            </View>

            <View
              style={{
                width: "100%",
                padding: 20,
                marginTop: 20,
                flexDirection: "row",
                alignItems: "center",
                backgroundColor: colors.primarySecond,
                borderRadius: 6,
              }}
            >
              <Image
                style={{
                  width: 25,
                  height: 25,
                  marginRight: 20,
                  tintColor: colors.primary,
                }}
                resizeMode="cover"
                source={require("../../resource/iconProfile/date.png")}
              />
              <View style={{ flex: 1 }}>
                <Text style={[styles.textLarge, { fontSize: 18 }]}>
                  Register Date
                </Text>
                <Text
                  style={[styles.textMain, { fontWeight: 400, color: "black" }]}
                >
                  {covertDateTimeToString(registerDate)}
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  containerNamePhone: {
    height: 250,
    width: "100%",
    borderRadius: 20,
    backgroundColor: "white",
    shadowColor: "black",
    shadowOffset: { width: 200, height: 200 },
    shadowOpacity: 0.2,
    elevation: 0.2,
    position: "relative",
    zIndex: 1,
    marginTop: 100,
    top: 0,
    alignItems: "center",
    overflow: "hidden",
  },
  textLarge: {
    fontSize: fontSize.sizeMain,
    fontWeight: '700',
    color: colors.primary
  },
  textMain: {
    fontSize: fontSize.sizeSmall,
    fontWeight: '300',
    color: colors.primary
  },
});

export default Profile
