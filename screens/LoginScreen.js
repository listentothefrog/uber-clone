import { Text, TextInput, View, Pressable, Image } from "react-native";
import React from "react";
import tw from "tailwind-react-native-classnames";

const LoginScreen = () => {
  return (
    <View style={tw`flex-1 items-center justify-center bg-white`}>
      <Image
        style={{ width: 100, height: 100, resizeMode: "contain" }}
        source={{ uri: "https://links.papareact.com/gzs" }}
      />
      <View style={tw`p-8 w-full max-w-sm`}>
        <Text style={tw`text-2xl font-bold mb-6 text-black`}>Login</Text>

        <TextInput
          style={tw`w-full bg-gray-200 rounded-md h-12 px-4 mb-4 font-UberMoveBold`}
          placeholderTextColor="#000"
          placeholder="Enter email address"
        />

        <TextInput
          style={tw`w-full bg-gray-200 rounded-md h-12 px-4`}
          placeholderTextColor="#000"
          placeholder="Enter password"
          secureTextEntry
        />
        <View style={tw`flex flex-row justify-end items-center my-8`}>
          <Pressable>
            <Text style={tw`text-black font-bold`}>Reset password</Text>
          </Pressable>
        </View>

        <Pressable
          style={tw`w-full bg-black rounded-full h-12 px-4 mb-4 flex flex-row`}
        >
          <View style={tw`flex-1 flex items-center`}>
            <Text
              style={tw`text-white text-center pt-3 pb-8 w-full text-base font-medium`}
            >
              Login
            </Text>
          </View>
        </Pressable>
        <View style={tw`pt-5 flex w-full items-center flex-row justify-center`}>
          <Text>
            Don't have an account?{" "}
            <Text style={tw`text-blue-600 underline font-bold`}>
              Click here
            </Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;
