import {
  Text,
  TextInput,
  View,
  Pressable,
  Image,
  Alert,
  StyleSheet,
} from "react-native";
import React, { useEffect } from "react";
import tw from "tailwind-react-native-classnames";
import { useState } from "react";
import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { app } from "../firebase";
import { Link } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import { useFonts } from "expo-font";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const auth = getAuth(app);
  const navigation = useNavigation();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      if (user) {
        navigation.navigate("HomeScreen");
      }
    });
    return unsub;
  });

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

  const handleEmailSignIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
      })
      .catch((error) => {
        let errorMessage = "An error occurred during sign-in.";

        if (error.code === "auth/invalid-email") {
          errorMessage = "Invalid email address.";
        } else if (error.code === "auth/user-disabled") {
          errorMessage = "This user account has been disabled.";
        } else if (error.code === "auth/user-not-found") {
          errorMessage = "User not found. Please check your credentials.";
        } else if (error.code === "auth/wrong-password") {
          errorMessage = "Invalid password.";
        } else if (error.code === "auth/too-many-requests") {
          errorMessage =
            "Too many unsuccessful sign-in attempts. Please try again later.";
        } else if (error.code === "auth/network-request-failed") {
          errorMessage =
            "A network error occurred. Please check your internet connection.";
        } else if (error.code === "auth/expired-action-code") {
          errorMessage =
            "The sign-in link has expired. Please request a new one.";
        } else if (error.code === "auth/operation-not-allowed") {
          errorMessage =
            "Sign-in is currently disabled. Please contact the system administrator.";
        }

        showAlert(errorMessage);
      });

    const showAlert = (message) => {
      Alert.alert("Error", message, [{ text: "OK" }], { cancelable: false });
    };
  };
  return (
    <View style={tw`flex-1 items-center justify-center bg-white`}>
      <Image
        style={{ width: 150, height: 150, resizeMode: "contain" }}
        source={{ uri: "https://links.papareact.com/gzs" }}
      />
      <View style={tw`p-8 w-full max-w-sm`}>
        <Text style={boldText}>Login</Text>
        <TextInput
          style={inputFeilds}
          placeholderTextColor="#000"
          value={email}
          keyboardType="email-address"
          onChangeText={(text) => setEmail(text)}
          placeholder="Enter email address"
        />

        <TextInput
          style={inputFeilds}
          placeholderTextColor="#000"
          value={password}
          onChangeText={(text) => setPassword(text)}
          placeholder="Enter password"
          secureTextEntry
        />
        <View style={tw`flex flex-row justify-end items-center my-8`}>
          <Pressable>
            <Text
              style={{
                fontFamily: "UberMoveBold",
                color: "black",
                fontWeight: "bold",
                fontSize: 16,
              }}
            >
              Reset password
            </Text>
          </Pressable>
        </View>

        <Pressable
          style={tw`w-full bg-black rounded-full h-12 px-4 mb-4 flex flex-row`}
        >
          <View style={tw`flex-1 flex items-center`}>
            <Text onPress={handleEmailSignIn} style={buttonText}>
              Login
            </Text>
          </View>
        </Pressable>
        <View style={tw`pt-5 flex w-full items-center flex-row justify-center`}>
          <Text style={{ fontFamily: "UberMoveMedium", fontSize: 16 }}>
            Don't have an account?{" "}
            <Link to={{ screen: "CreateAccountScreen" }}>
              <Text
                style={{
                  color: "blue",
                  textDecorationLine: "underline",
                  fontFamily: "UberMoveBold",
                  fontWeight: "bold",
                }}
              >
                Click here
              </Text>
            </Link>
          </Text>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;

const boldText = StyleSheet.create({
  ...tw`font-bold mb-6 text-black`,
  fontFamily: "UberMoveBold",
  fontSize: 35,
});

const inputFeilds = StyleSheet.create({
  ...tw`w-full bg-gray-200 rounded-md h-12 px-4 mb-4`,
  fontFamily: "UberMoveBold",
});

const buttonText = StyleSheet.create({
  ...tw`text-white text-center pt-3 pb-8 w-full text-base font-medium`,
  fontFamily: "UberMoveMedium",
});
