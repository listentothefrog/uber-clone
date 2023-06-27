import { Text, TextInput, View, Pressable, Image } from "react-native";
import React, { useState, useEffect } from "react";
import tw from "tailwind-react-native-classnames";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { app } from "../firebase";
import { Link, useNavigation } from "@react-navigation/native";

const SignupScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [verifiedPassword, setVerifiedPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
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
  const handleAccountCreation = () => {
    if (password !== verifiedPassword) {
      setErrorMessage("Passwords do not match");
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user.email);
      })
      .catch((error) => {
        let errorMessage = "An error occurred during account creation.";

        if (error.code === "auth/email-already-in-use") {
          errorMessage =
            "The email address is already in use by another account.";
        } else if (error.code === "auth/invalid-email") {
          errorMessage = "Invalid email address.";
        } else if (error.code === "auth/weak-password") {
          errorMessage =
            "The password is too weak. Please choose a stronger password.";
        } else if (error.code === "auth/network-request-failed") {
          errorMessage =
            "A network error occurred. Please check your internet connection.";
        } else {
          errorMessage = error.message;
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
        <Text style={tw`text-2xl font-bold mb-6 text-black`}>
          Create your Uber account
        </Text>
        <TextInput
          style={tw`w-full bg-gray-200 rounded-md h-12 px-4 mb-4`}
          placeholderTextColor="#000"
          value={email}
          keyboardType="email-address"
          onChangeText={(text) => setEmail(text)}
          placeholder="Email"
        />

        <TextInput
          style={tw`w-full bg-gray-200 rounded-md h-12 px-4 mb-4`}
          placeholderTextColor="#000"
          value={password}
          onChangeText={(text) => setPassword(text)}
          placeholder="Password"
          secureTextEntry
        />

        <TextInput
          style={tw`w-full bg-gray-200 rounded-md h-12 px-4 mb-4`}
          placeholderTextColor="#000"
          value={verifiedPassword}
          onChangeText={(text) => setVerifiedPassword(text)}
          placeholder="Verify Password"
          secureTextEntry
        />

        {errorMessage !== "" && (
          <Text style={tw`text-red-500 mb-4 text-sm`}>{errorMessage}</Text>
        )}

        <Pressable
          style={tw`w-full bg-black rounded-full h-12 px-4 mb-4`}
          onPress={handleAccountCreation}
        >
          <View style={tw`flex-1 flex items-center justify-center`}>
            <Text style={tw`text-white text-center text-base font-medium`}>
              Create Account
            </Text>
          </View>
        </Pressable>

        <View style={tw`pt-5 flex w-full items-center flex-row justify-center`}>
          <Text>
            Already have an account?{" "}
            <Link to={{ screen: "LoginScreen" }}>
              <Text style={tw`text-blue-600 underline font-bold`}>Log In</Text>
            </Link>
          </Text>
        </View>
      </View>
    </View>
  );
};

export default SignupScreen;
