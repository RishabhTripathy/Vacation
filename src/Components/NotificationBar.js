import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { ChevronDownIcon, UserIcon } from "react-native-heroicons/outline";
import { useNavigation } from "@react-navigation/native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
export default function NotificationBar() {
  const navigation = useNavigation();
  return (
    <View
      style={{ width: wp(100) }}
      className="flex flex-row bg-teal-900   px-4 pt-16 pb-4 justify-between items-center "
    >
      <View className="flex flex-row gap-1  rounded   items-center   justify-around ">
        <Text style={{ fontSize: hp(2) }} className="font-bold  text-white">
          Location
        </Text>
        <ChevronDownIcon size={hp(2.5)} strokeWidth={2} color="white" />
      </View>
      <TouchableOpacity className="">
        <UserIcon size={hp(3.6)} color="white" />
      </TouchableOpacity>
    </View>
  );
}
