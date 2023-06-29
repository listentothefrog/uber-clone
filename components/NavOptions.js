import {
  Text,
  Image,
  TouchableOpacity,
  View,
  FlatList,
  StyleSheet,
} from "react-native";
import React, { useEffect } from "react";
import tw from "tailwind-react-native-classnames";
import { Icon } from "react-native-elements/dist/icons/Icon";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { selectOrigin } from "../slices/navSlice";
import { useFonts } from "expo-font";
const data = [
  {
    id: "123",
    title: "Get a ride",
    image:
      "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_558,h_372/v1635750805/assets/97/0f9a71-3129-4a0b-8119-3aafbb2ccff3/original/XL_Person_Luggage_2021_0729.png",
    screen: "MapScreen",
  },
  {
    id: "456",
    title: "Order food",
    image: "https://links.papareact.com/28w",
    screen: "EatsScreen",
  },
];
const NavOptions = () => {
  const navigation = useNavigation();
  const origin = useSelector(selectOrigin);

  const [fontsLoaded] = useFonts({
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
  return (
    <View>
      <FlatList
        data={data}
        horizontal
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            disabled={!origin}
            onPress={() => navigation.navigate(item.screen)}
            style={tw`p-2 pl-6 pb-8 pt-4 bg-white border-black border-2 m-2 w-40 rounded-lg`}
          >
            <View style={tw`${!origin && "opacity-40"}`}>
              <Image
                style={{ width: 120, height: 120, resizeMode: "contain" }}
                source={{ uri: item.image }}
              />
              <Text style={styles}>{item.title}</Text>
              <Icon
                style={tw`p-2 bg-black rounded-full w-10 mt-4`}
                name="arrowright"
                color="white"
                type="antdesign"
              ></Icon>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default NavOptions;

const styles = StyleSheet.create({
  ...tw`mt-2 text-lg font-semibold`,
  fontFamily: "UberMoveBold",
});
