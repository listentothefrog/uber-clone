import { StyleSheet, Text, View } from "react-native";
import React from "react";
import MapView from "react-native-maps";
import { Marker } from "react-native-maps";
import tw from "tailwind-react-native-classnames";

const Map = () => {
  return (
    <MapView
      styles={tw`flex-1`}
      initialRegion={{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
    />
  );
};

export default Map;
