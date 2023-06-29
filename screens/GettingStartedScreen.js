import React, { useEffect } from "react";
import { Text, View, TouchableOpacity, Image, StyleSheet } from "react-native";
import tw from "tailwind-react-native-classnames";
import { useFonts } from "expo-font";
const GettingStartedScreen = ({ navigation }) => {
  const [fontsLoaded] = useFonts({
    UberMoveMedium: require("../assets/fonts/UberMoveMedium.otf"),
    UberMoveBold: require("../assets/fonts/UberMoveBold.otf"),
  });

  useEffect(() => {
    if (!fontsLoaded) {
      return;
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  return (
    <View style={tw`flex-1 justify-center items-center`}>
      <Image
        source={{
          uri: "https://images.unsplash.com/photo-1631700710313-2b4dd0de504c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=736&q=80",
        }}
        style={styles.backgroundImage}
        resizeMode="cover"
      />
      <View style={styles.overlay}>
        <Text style={boldText}>Welcome to Uber</Text>
        <Text style={descriptionText}>
          Ultimate companion for hassle-free transportation. With intuitive
          features and real-time updates, we connect you to reliable rides at
          your fingertips. Whether you need a quick ride across town or a
          convenient airport transfer, our app ensures a seamless and
          comfortable journey.
        </Text>
        <TouchableOpacity
          style={loginButton}
          onPress={() => navigation.navigate("LoginScreen")}
        >
          <Text
            style={{
              fontFamily: "UberMoveMedium",
              color: "black",
              textAlign: "center",
              fontSize: 18,
            }}
          >
            Login
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={accountButton}
          onPress={() => navigation.navigate("CreateAccountScreen")}
        >
          <Text
            style={{
              fontFamily: "UberMoveMedium",
              color: "white",
              textAlign: "center",
              fontSize: 18,
            }}
          >
            Create an Account
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: "100%",
    opacity: 0.7,
  },
  overlay: {
    ...tw`absolute top-0 bottom-0 left-0 right-0 p-5 w-full h-full flex flex-col justify-end`,
    backgroundColor: "rgba(0, 0, 0, 0.7)",
  },
});

const boldText = StyleSheet.create({
  ...tw`text-white font-bold mb-5`,
  fontFamily: "UberMoveBold",
  fontSize: 45,
});

const descriptionText = StyleSheet.create({
  ...tw`text-white mb-5`,
  fontFamily: "UberMoveMedium",
  fontSize: 16,
});

const loginButton = StyleSheet.create({
  ...tw`bg-white py-3 rounded-lg border-white border-2`,
  fontFamily: "UberMoveMedium",
});

const accountButton = StyleSheet.create({
  ...tw`border-2 border-white py-3 rounded-lg mt-5 mb-4`,
  fontFamily: "UberMoveMedium",
});

export default GettingStartedScreen;
