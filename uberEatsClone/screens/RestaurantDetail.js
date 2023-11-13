import React from "react";
import { View, Text } from "react-native";
import { Divider } from "react-native-elements/dist/divider/Divider";
import About from "../components/restaurantDetail/About";
import MenuItems from "../components/restaurantDetail/MenuItems";
import ViewCart from "../components/restaurantDetail/ViewCart";

const foods = [
  {
    title: "Lasagna",
    description: "With butter lettuce, tomato and sauce bechamel",
    price: "$17.50",
    image: "https://source.unsplash.com/jUPOXXRNdcA/1600x900",
  },
  {
    title: "Tandoori Chicken",
    description: "Some chicken",
    price: "$15.50",
    image: "https://source.unsplash.com/ddZYOtZUnBk/1600x900",
  },
  {
    title: "Some Chicken",
    description: "More chicken",
    price: "$15.50",
    image: "https://source.unsplash.com/bpPTlXWTOvg/1600x900",
  },
];

export default function RestaurantDetail({ route, navigation }) {
  return (
    <View>
      <About route={route} />
      <Divider width={1.8} style={{ marginVertical: 20 }} />
      <MenuItems restaurantName={route.params.name} foods={foods} />
      <ViewCart navigation={navigation} />
    </View>
  );
}
