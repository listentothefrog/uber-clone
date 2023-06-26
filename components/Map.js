import { StyleSheet, Text, View } from "react-native";
import React from "react";
import MapView from "react-native-maps";
import { Marker } from "react-native-maps";
import { useSelector } from "react-redux";
import { selectOrigin } from "../slices/navSlice";

const Map = () => {
  const origin = useSelector(selectOrigin);

  return (
    <View style={styles.container}>
      {origin?.loaction?.lat && origin?.loaction?.lng ? (
        <MapView
          style={styles.map}
          mapType="mutedStandard"
          region={{
            latitude: origin.loaction.lat,
            longitude: origin.loaction.lng,
            latitudeDelta: 0.005,
            longitudeDelta: 0.005,
          }}
        />
      ) : (
        <Text>Loading map...</Text>
      )}
    </View>
  );
};

export default Map;

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: 400,
    width: 400,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
