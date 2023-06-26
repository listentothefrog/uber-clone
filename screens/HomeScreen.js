import { StyleSheet, SafeAreaView, Image, View } from "react-native";
import React from "react";
import tw from "tailwind-react-native-classnames";
import NavOptions from "../components/NavOptions";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_API_KEY } from "@env";
import { useDispatch } from "react-redux";
import { setDestination, setOrigin } from "../slices/navSlice";

const HomeScreen = () => {
  const dispatch = useDispatch();
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={tw`p-5`}>
        <Image
          style={{ width: 100, height: 100, resizeMode: "contain" }}
          source={{ uri: "https://links.papareact.com/gzs" }}
        />
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
          styles={{
            container: {
              flex: 0,
            },
            textInput: {
              fontSize: 15,
            },
          }}
          enablePoweredByContainer={false}
        />
        <NavOptions />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  text: {
    color: "blue",
  },
});
