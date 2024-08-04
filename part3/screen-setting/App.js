import { StyleSheet, Text, View, StatusBar, ScrollView, Image, Switch} from 'react-native';
import { useState } from 'react';
import UIHeader from './UIHeader';
export default function App() {
  const [isLockApp, setIsLockApp] = useState(false);
  const [isfinger, setIsfinger] = useState(false);
  const [isChangePassword, setIsChangePassword] = useState(false);


  return (
    <View style={styles.container}>
      <StatusBar barStyle="auto" />
      <UIHeader title={"Setting"} />
      <ScrollView style={{ paddingTop: 25, paddingHorizontal: 15 }}>
        {/* common */}
        <View style={{ height: 200, marginBottom: 50 }}>
          <Text style={styles.textHeder}>Common</Text>
          <View style={styles.containerItem}>
            <Image
              source={require("./icon/language.png")}
              resizeMode="cover"
              style={styles.icon}
            />
            <View style={{ marginLeft: 35 }}>
              <Text style={styles.textHeder2}>Language</Text>
              <Text style={styles.textFooter}>English</Text>
            </View>
          </View>

          <View style={styles.containerItem}>
            <Image
              source={require("./icon/environment.png")}
              resizeMode="cover"
              style={styles.icon}
            />
            <View style={{ marginLeft: 35 }}>
              <Text style={styles.textHeder2}>Environment</Text>
              <Text style={styles.textFooter}>Production</Text>
            </View>
          </View>
        </View>

        {/* Account */}
        <View style={{ height: 300, marginBottom: 20  }}>
          <Text style={styles.textHeder}>Account</Text>
          <View style={styles.containerItem}>
            <Image
              source={require("./icon/phone.png")}
              resizeMode="cover"
              style={styles.icon}
            />
            <View style={{ marginLeft: 35, height: 40 }}>
              <Text style={styles.textHeder2}>Phone number</Text>
            </View>
          </View>

          <View style={styles.containerItem}>
            <Image
              source={require("./icon/gmail.png")}
              resizeMode="cover"
              style={[styles.icon, { marginTop: 0 }]}
            />
            <View style={{ marginLeft: 35, height: 40 }}>
              <Text style={styles.textHeder2}>Email</Text>
            </View>
          </View>

          <View style={styles.containerItem}>
            <Image
              source={require("./icon/signOut.png")}
              resizeMode="cover"
              style={[styles.icon, { marginTop: 2 }]}
            />
            <View style={{ marginLeft: 35, height: 40 }}>
              <Text style={styles.textHeder2}>Sign out</Text>
            </View>
          </View>
        </View>

        {/* Security */}
        <View style={{ height: 300, marginBottom: 30 }}>
          <Text style={styles.textHeder}>Security</Text>
          <View style={styles.containerItem}>
            <Image
              source={require("./icon/lockApp.png")}
              resizeMode="cover"
              style={styles.icon}
            />
            <View style={{ marginLeft: 35, height: 40 }}>
              <Text style={styles.textHeder2}>Lock app in background</Text>
            </View>
            <View
              style={{
                height: 40,
                paddingRight: 20,
                flex: 1,
              }}
            >
              <Switch
                trackColor={{ false: "#767577", true: "#fd988a" }}
                thumbColor={isLockApp ? "#f7472e" : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={() => {
                  setIsLockApp(!isLockApp);
                  if (isLockApp == false) {
                    alert("Switch lock app is on");
                  } else {
                    alert("Switch lock app is off");
                  }
                }}
                value={isLockApp}
                style={{ flex: 1, marginBottom: 10 }}
              />
            </View>
          </View>

          <View style={styles.containerItem}>
            <Image
              source={require("./icon/useFingerprint.png")}
              resizeMode="cover"
              style={[styles.icon, { marginTop: 0 }]}
            />
            <View style={{ marginLeft: 35, height: 40 }}>
              <Text style={styles.textHeder2}>Use fingerprint</Text>
            </View>
            <View
              style={{
                height: 40,
                paddingRight: 20,
                flex: 1,
              }}
            >
              <Switch
                trackColor={{ false: "#767577", true: "#fd988a" }}
                thumbColor={isfinger ? "#f7472e" : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={() => {
                  setIsfinger(!isfinger);
                  if (isfinger == false) {
                    alert("Switch use fingerprint is on");
                  } else {
                    alert("Switch use fingerprint is off");
                  }
                }}
                value={isfinger}
                style={{ flex: 1, marginBottom: 10 }}
              />
            </View>
          </View>

          <View style={styles.containerItem}>
            <Image
              source={require("./icon/signOut.png")}
              resizeMode="cover"
              style={[styles.icon, { marginTop: 2 }]}
            />
            <View style={{ marginLeft: 35, height: 40 }}>
              <Text style={styles.textHeder2}>Change password</Text>
            </View>

            <View
              style={{
                height: 40,
                paddingRight: 20,
                flex: 1,
              }}
            >
              <Switch
                trackColor={{ false: "#767577", true: "#fd988a" }}
                thumbColor={isChangePassword ? "#f7472e" : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={() => {
                  setIsChangePassword(!isChangePassword);

                  if (isChangePassword == false) {
                    alert("Switch change password is on");
                  } else {
                    alert("Switch change password is off");
                  }
                }}
                value={isChangePassword}
                style={{ flex: 1, marginBottom: 10 }}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  textHeder: {
    fontSize: 18,
    fontWeight: "700",
    color: "#f7472e",
    marginBottom: 30,
    backgroundColor: '#ffdeda',
    height: 50,
    paddingTop: 13,
    paddingLeft: 10
  },

  containerItem: {
    width: "100%",
    flexDirection: "row",
    paddingVertical: 8,
    borderBottomWidth: 0.3,
    borderBottomColor: '#f7472e',
    marginBottom: 18
  },

  icon: {
    width: 25,
    height: 25,
    marginTop: 3,
    tintColor: "#f7472e",
  },

  textHeder2: {
    fontSize: 18,
    fontWeight: "500",
    color: "#f7472e",
  },

  textFooter: {
    fontSize: 16,
    fontWeight: "300",
  },
});
