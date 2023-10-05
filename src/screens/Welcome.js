import { View, Text, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { StatusBar } from "react-native";
import { Pressable } from "react-native";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import Animated, {
  FadeInDown,
  FadeInLeft,
  FadeInRight,
} from "react-native-reanimated";
import { useNavigation } from "@react-navigation/native";

export default function Welcome() {
  const [showWelcome, setShowWelcome] = useState(true);

  const [showComponents, setShowComponents] = useState(false);

  useEffect(() => {
    const welcomeTimer = setTimeout(() => {
      setShowWelcome(false);
      setShowComponents(true);

      return () => {
        clearTimeout(componentsTimer);
      };
    }, 2000);
  }, []);

  const navigation = useNavigation();
  return (
    <View className="bg-teal-800 items-center justify-center h-full flex">
      <StatusBar style="dark" />
      {showWelcome && (
        <Text style={{ fontSize: hp(3.6), color: "white", fontWeight: "bold" }}>
          Welcome
        </Text>
      )}
      {showComponents && (
        <View className="mx-4 space-y-9 ">
          <Animated.Text
            entering={FadeInDown.duration(700).springify().damping(12)}
            style={{ fontSize: hp(2.6), color: "white" }}
          >
            Explore Your Best Vacation Spot ! 
          </Animated.Text>
          <View className="m-auto">
            <Pressable
              className="flex  bg-white rounded  p-4  shadow-xl   gap-1  items-center justify-center flex-row"
              onPress={() => {
                navigation.navigate("Home");
              }}
            >
              <Animated.Text
                entering={FadeInLeft.delay(100).duration(700).springify()}
                className=" font-semibold "
                style={{ fontSize: hp(1.8) }}
              >
                Explore
              </Animated.Text>
              <Animated.View entering={FadeInRight.delay(100).duration(700).springify()}>
                <ArrowRightIcon strokeWidth={4} size={hp(2)} color="black" />
              </Animated.View>
            </Pressable>
          </View>
        </View>
      )}

        
    </View>
  );
}
