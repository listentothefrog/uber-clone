import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "tailwind-react-native-classnames";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_API_KEY } from "@env";

const NavigationCard = () => {
  const currentHour = new Date().getHours();
  let greetingMessage;

  if (currentHour < 12) {
    greetingMessage = "Good Morning";
  } else if (currentHour < 18) {
    greetingMessage = "Good Afternoon";
  } else {
    greetingMessage = "Good Evening";
  }

  return (
    <SafeAreaView style={tw`bg-white flex-1`}>
      <Text style={tw`text-center text-xl`}>{greetingMessage}</Text>
      <View style={tw`border-t border-gray-200 flex-shrink mt-3`}>
        <GooglePlacesAutocomplete
          placeholder="Where to?"
          nearbyPlacesAPI="GooglePlacesSearch"
          debounce={400}
          minLength={2}
          fetchDetails={true}
          returnKeyType={"search"}
          onFail={(error) => console.error(error)}
          query={{
            key: GOOGLE_MAPS_API_KEY,
            language: "en",
          }}
          styles={tw`w-full bg-gray-200 rounded-md h-12 px-4`}
          enablePoweredByContainer={false}
        />
      </View>
    </SafeAreaView>
  );
};

export default NavigationCard;

const styles = StyleSheet.create({});
