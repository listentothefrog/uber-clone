import { Text, Image, TouchableOpacity, View, FlatList } from "react-native";
import React from "react";

const data = [
  {
    id: "123",
    title: "Get a ride",
    image: "https://links.papareact.com/3pn",
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
  return (
    <View>
      <FlatList
        data={data}
        horizontal
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity>
            <View>
              <Image
                style={{ width: 120, height: 120, resizeMode: "contain" }}
                source={{ uri: item.image }}
              />
              <Text>{item.title}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default NavOptions;
