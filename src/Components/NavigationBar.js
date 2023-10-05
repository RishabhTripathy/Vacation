import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import {
  BuildingLibraryIcon,
  HomeModernIcon,
} from "react-native-heroicons/outline";
import { useNavigation } from "@react-navigation/native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default function NavigationBar() {
  const navItems = [
    {
      name: "Home",
      icon: HomeModernIcon,
    },
    {
      name: "States",
      icon: BuildingLibraryIcon,
    },
    {
      name: "Top Cities",
      icon: BuildingLibraryIcon,
    },
  ];
  const navigation = useNavigation();
  return (
    <View
      style={{ height: hp(9) }}
      className="bg-black/5    border-black/10 border-y-2 flex  flex-row w-full items-center justify-around"
    >
      {navItems.map((e, i) => {
        const IconComponent = e.icon; 
        return (
          <TouchableOpacity onPress={()=>navigation.navigate(e.name)} key={i} className="flex flex-col mb-4 items-center justify-center space-y-1">
            <IconComponent strokeWidth={2} size={hp(3.2)} className="text-teal-800"/>
            <Text style={{fontSize:hp(1.2)}} className="font-bold ">{e.name}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
