import { View, Text, FlatList, TouchableOpacity, StatusBar } from "react-native";
import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Animated from "react-native-reanimated";
import NotificationBar from "../Components/NotificationBar";
import NavigationBar from "../Components/NavigationBar";

export default function StateDetails() {
  const route = useRoute();
  const { stateData } = route.params;

  console.log(stateData);
  const navigation = useNavigation();

  return (
    <View className="flex-1 items-center justify-center h-full w-full">
      <StatusBar style="dark" />

      {/* LOGO AND NOTIFICATION BAR  */}
      <View className="w-full mb-4">
        <NotificationBar />
      </View>
      {/* GREETINGS  */}
      <View className="mx-4 mb-2 space-y-2">
        <Text
          style={{ fontSize: hp(3) }}
          className="text-neutral-600 font-semibold"
        >
          Explore By
          <Text className="text-teal-600"> Top Cities</Text>.
        </Text>
      </View>

      <FlatList
        data={stateData}
        numColumns={2}
        keyExtractor={(item, index) => `${item}_${index}`}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("CityDetail", { cityData: item })
              }
              style={{ borderRadius: hp(2) }}
              className="flex bg-black  items-center mt-4 justify-center mx-2"
            >
              <Animated.Image
                source={{ uri: item.img }}
                sharedTransitionTag={item.key}
                style={{
                  height: hp(25),
                  width: hp(20),
                  borderRadius: hp(2),
                  opacity: 0.8,
                }}
              />
              <Text
                style={{ fontSize: hp(2.4) }}
                className="absolute text-white font-bold "
              >
                {item.title}
              </Text>
            </TouchableOpacity>
          );
        }}
      />

      <NavigationBar />
    </View>
  );
}
