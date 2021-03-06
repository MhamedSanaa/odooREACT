import React from "react";
import {
  Button,
  Image,
  Keyboard,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";
import Constants from "expo-constants";
import { FontAwesome } from "react-native-vector-icons";
import { scale, scaleVertical } from "./utilities/scale";
import GradientButton from "react-native-gradient-buttons";

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
    paddingBottom: scaleVertical(24),
    paddingHorizontal: scale(16),
    flex: 1,
    backgroundColor: "rgb(245, 245, 245)"
  },
  close: {
    position: "absolute",
    top: Constants.statusBarHeight + 4,
    left: 16,
    zIndex: 1
  },
  header: {
    marginTop: 75,
    alignItems: "center",
    justifyContent: "center"
  },
  image: {
    height: scaleVertical(100),
    resizeMode: "contain"
  },
  all: {
    marginTop: scaleVertical(24),
    flex: 1,
    justifyContent: "center"
  },
  content: {
    justifyContent: "space-between",
    paddingHorizontal: 8,
    paddingVertical: scaleVertical(12)
  },
  input: {
    borderWidth: 0.5,
    borderColor: "#D3D3D3",
    borderRadius: 50,
    padding: 18,
    marginVertical: scaleVertical(6),
    fontWeight: "bold"
  },
  OR: {
    marginVertical: scaleVertical(12),
    fontSize: 16,
    fontWeight: "bold",
    color: "#4A4A4A"
  },
  socialLogin: {
    height: 50,
    paddingVertical: 0,
    paddingHorizontal: 0
  },
  footer: {
    justifyContent: "space-between",
    marginTop: scaleVertical(28),
    paddingHorizontal: 8,
    paddingVertical: scaleVertical(12)
  },
  textRow: {
    flexDirection: "row",
    justifyContent: "center"
  }
});

class SignIn extends React.PureComponent {
  render() {
    const renderIcon = () => (
      <Image
        style={styles.image}
        source={require("./images/logo.png")} // eslint-disable-line global-require
      />
    );

    return (
      <View
        style={styles.screen}
      >
        <View style={styles.header}>{renderIcon()}</View>

        <View style={styles.all}>
          <View rkType="heroImage shadowed" style={styles.content}>
            <TextInput
              textContentType="username"
              placeholder="EMAIL OR USERNAME"
              placeholderTextColor="#707070"
              style={styles.input}
            />
            <TextInput
              textContentType="password"
              secureTextEntry={true}
              placeholder="PASSWORD"
              placeholderTextColor="#707070"
              style={styles.input}
            />
            <GradientButton
              style={{ marginTop: 8 }}
              textStyle={{ fontSize: 20 }}
              text="LOGIN"
              height={50}
              purpleViolet
              impact
            />
          </View>
        </View>
      </View>
    );
  }
}

export default SignIn;
