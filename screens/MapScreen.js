import { View } from "react-native";
import React from "react";
import tw from "tailwind-react-native-classnames";
import Map from "../components/Map";
import NavigationCard from "../components/NavigationCard";
import RideOptionsCard from "../components/RideOptionsCard";
import { createStackNavigator } from "@react-navigation/stack";

const MapScreen = () => {
  const Stack = createStackNavigator();
  return (
    <View style={tw`bg-white h-full`}>
      <View style={tw`h-1/2`}>
        <Stack.Navigator>
          <Stack.Screen
            name="NavigateCard"
            component={NavigationCard}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="RideOptionsCard"
            component={RideOptionsCard}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </View>
      <View style={tw`h-1/2`}>
        <Map />
      </View>
    </View>
  );
};

export default MapScreen;
