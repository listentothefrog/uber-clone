import { StyleSheet, SafeAreaView, Image, View, Text } from "react-native";
import React, { useEffect } from "react";
import tw from "tailwind-react-native-classnames";
import NavOptions from "../components/NavOptions";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_API_KEY } from "@env";
import { useDispatch } from "react-redux";
import { setDestination, setOrigin } from "../slices/navSlice";
import { useFonts } from "expo-font";

const HomeScreen = () => {
  const dispatch = useDispatch();

  const [fontsLoaded] = useFonts({
    UberMoveMedium: require("../assets/fonts/UberMoveMedium.otf"),
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
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={tw`p-5`}>
        <View style={tw`w-full flex flex-row items-center justify-between`}>
          <Image
            style={{ width: 100, height: 100, resizeMode: "contain" }}
            source={{ uri: "https://links.papareact.com/gzs" }}
          />

          <Text style={accountTextStyle}>Your Account</Text>
        </View>
        <GooglePlacesAutocomplete
          placeholder="Where from?"
          nearbyPlacesAPI="GooglePlacesSearch"
          debounce={400}
          onPress={(data, details = null) => {
            dispatch(
              setOrigin({
                loaction: details.geometry.location,
                description: data.description,
              })
            );
            dispatch(setDestination(null));
          }}
          minLength={2}
          fetchDetails={true}
          returnKeyType={"search"}
          onFail={(error) => console.error(error)}
          query={{
            key: GOOGLE_MAPS_API_KEY,
            language: "en",
          }}
          styles={autocompleteStyles}
          enablePoweredByContainer={false}
        />
        <NavOptions />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const accountTextStyle = StyleSheet.create({
  ...tw`text-lg underline`,
  fontFamily: "UberMoveMedium",
});

const autocompleteStyles = StyleSheet.create({
  container: {
    flex: 0,
    width: "100%",
  },
  textInputContainer: {
    backgroundColor: "transparent",
    borderTopWidth: 0,
    borderBottomWidth: 0,
    paddingHorizontal: 10,
  },
  textInput: {
    height: 50,
    borderRadius: 5,
    fontSize: 18,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: "#ddd",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    marginTop: 20,
    fontFamily: "UberMoveMedium",
  },
  predefinedPlacesDescription: {
    color: "#1faadb",
  },
});
