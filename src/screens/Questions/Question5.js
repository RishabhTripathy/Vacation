import { View, Text, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import Animated, { FadeInDown } from "react-native-reanimated";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useNavigation } from "@react-navigation/native";

export default function Question5() {
  const [travelType, setTravelType] = useState("");
  const travelTime = [
    {
      name: "0 hrs-04 hrs",
    },
    {
      name: "04 hrs-08 hrs",
    },
    { name: "08 hrs or Above" },
  ];
  const navigation = useNavigation();
  return (
    <View className="bg-teal-800 items-center justify-center h-full flex">
      <View className="mx-4 space-y-9 ">
        <Animated.Text
        className="font-black"
          entering={FadeInDown.duration(700).springify().damping(12)}
          style={{ fontSize: hp(2.6), color: "white",textAlign:"center" }}
        >
          How much distance are you Willing To Travel?
        </Animated.Text>

        <View className="flex gap-4 items-center   ">
          {travelTime.map((e, i) => (
            <TouchableOpacity
              style={{ width: hp(36) }}
              onPress={(e) => {
                setTravelType(e.name);
                navigation.navigate("Home");
              }}
              key={i}
              className="bg-white p-2  "
            >
              <Text style={{ fontSize: hp(2) }} className="text-center text-black/80">
                {e.name} 
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </View>
  );
}
