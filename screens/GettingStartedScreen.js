import React from "react";
import { Text, View, TouchableOpacity, Image, StyleSheet } from "react-native";
import tw from "tailwind-react-native-classnames";

const GettingStartedScreen = ({ navigation }) => {
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
        <Text style={tw`text-white text-4xl font-bold mb-5`}>
          Welcome to Uber
        </Text>
        <Text style={tw`text-white text-sm mb-5`}>
          Ultimate companion for hassle-free transportation. With intuitive
          features and real-time updates, we connect you to reliable rides at
          your fingertips. Whether you need a quick ride across town or a
          convenient airport transfer, our app ensures a seamless and
          comfortable journey.
        </Text>
        <TouchableOpacity
          style={tw`bg-white py-3 rounded-lg border-white border-2`}
          onPress={() => navigation.navigate("LoginScreen")}
        >
          <Text style={tw`text-black text-lg text-center`}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={tw`border-2 border-white py-3 rounded-lg mt-5 mb-4`}
          onPress={() => navigation.navigate("CreateAccountScreen")}
        >
          <Text style={tw`text-white text-lg text-center`}>
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
    backgroundColor: "rgba(0, 0, 0, 0.7)", // Adjust the opacity to control the darkness of the overlay
  },
});

export default GettingStartedScreen;
