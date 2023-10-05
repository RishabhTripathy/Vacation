import { View, Text, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import Animated, { FadeInDown } from "react-native-reanimated";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useNavigation } from "@react-navigation/native";

export default function Question3() {
  const [purposeOfTrip, setPurposeOfTrip] = useState("");

  const purposeType = [
    {
      name: "Nightlife",
    },
    {
      name: "Business",
    },
    { name: "Historic" },
    { name: "Shopping" },
    { name: "Any" },
  ];
  const navigation = useNavigation();
  return (
    <View className="bg-teal-800 items-center justify-center h-full flex">
      <View className="mx-4 space-y-9 ">
        <Animated.Text
        className="font-bold"
          entering={FadeInDown.duration(700).springify().damping(12)}
          style={{ fontSize: hp(2.6), color: "white",textAlign:"center" }}
        >
          Any Special Purpose of your trip?
        </Animated.Text>

        <View className="flex gap-4 items-center   ">
          {purposeType.map((e, i) => (
            <TouchableOpacity
              style={{ width: hp(36) }}
              onPress={(e) => {
                setPurposeOfTrip(e.name), navigation.navigate("Question4");
              }}
              key={i}
              className="bg-white p-2   border border-black rounded"
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
