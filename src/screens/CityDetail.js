import {
  View,
  Text,
  StatusBar,
  ScrollView,
  Image,
  FlatList,
} from "react-native";
import Animated, {
  FadeInDown,
  FadeInLeft,
  FadeInRight,
} from "react-native-reanimated";
import React from "react";
import NavigationBar from "../Components/NavigationBar";
import { useRoute } from "@react-navigation/native";
import NotificationBar from "../Components/NotificationBar";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { ClockIcon, SunIcon, TruckIcon } from "react-native-heroicons/outline";
export default function CityDetail() {
  const route = useRoute();
  const { cityData } = route.params;

  const visit = [
    {
      name: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium, praesentium?",
    },
    {
      name: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium, praesentium?",
    },
    {
      name: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium, praesentium?",
    },
    {
      name: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium, praesentium?",
    },
    {
      name: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium, praesentium?",
    },
  ];
  const Do = [
    {
      name: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium, praesentium?",
    },
    {
      name: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium, praesentium?",
    },
    {
      name: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium, praesentium?",
    },
    {
      name: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium, praesentium?",
    },
    {
      name: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium, praesentium?",
    },
  ];
  return (
    <View className="flex-1 items-center  h-full w-full">
      <StatusBar style="dark" />
      {/* LOGO AND NOTIFICATION BAR  */}
      <NotificationBar />
      <ScrollView
        scrollVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 50 }}
        className="space-y-6 w-full  "
      >
        {/* BANNER  */}
        <View className="bg-black flex items-center justify-center">
          <Animated.Image
            sharedTransitionTag={cityData.key}
            source={{ uri: cityData.img }}
            style={{ width: wp(100), height: hp(40), opacity: 0.8 }}
          />

          <Text
            style={{ fontSize: hp(3.8) }}
            className="absolute   font-bold text-white"
          >
            {cityData.title}
          </Text>
        </View>
        {/* DESC  */}
        <View className="mx-4 space-y-4">
          <Text
            style={{ fontSize: hp(2.4) }}
            className="text-center font-semibold"
          >
            Any Sub Heading{" "}
          </Text>
          <Text className="text-left  tracking-widest ">{cityData.desc}</Text>
        </View>
        {/* ENV DETAILS  */}
        <View className="space-y-4">
          <Text
            style={{ fontSize: hp(3) }}
            className="text-center font-extralight underline"
          >
            Environmental Details
          </Text>
          <View className="flex flex-row gap-4 items-center mx-4 my-2 justify-around">
            <Animated.View
              entering={FadeInLeft.duration(700)
                .delay(100)
                .springify()
                .damping(12)}
              className="flex flex-col justify-center items-center rounded-full bg-teal-800 space-y-4  p-4"
            >
              <View>
                <TruckIcon color="white" strokeWidth={3} />
              </View>
              <Text className="text-white font-semibold">6hrs</Text>
            </Animated.View>
            <Animated.View
              entering={FadeInLeft.duration(700)
                .delay(200)
                .springify()
                .damping(12)}
              className="flex flex-col justify-center items-center rounded-full bg-teal-800 space-y-4  p-4"
            >
              <View>
                <SunIcon color="white" strokeWidth={3} />
              </View>
              <Text className="text-white font-semibold">36&deg;</Text>
            </Animated.View>
            <Animated.View
              entering={FadeInLeft.duration(700)
                .delay(300)
                .springify()
                .damping(12)}
              className="flex flex-col justify-center items-center rounded-full bg-teal-800 space-y-4 p-4 "
            >
              <View>
                <ClockIcon color="white" strokeWidth={3} />
              </View>
              <Text className="text-white font-semibold">Xyz</Text>
            </Animated.View>
          </View>
        </View>
        {/* Must Visit  */}
        <View className="space-y-6">
          <Text
            style={{ fontSize: hp(3) }}
            className="text-center font-extralight underline"
          >
            Must Visit
          </Text>
          <View className="mx-4 space-y-4 flex ">
            {visit.map((e, i) => (
              <View key={i} className="flex-row flex justify-center  space-x-2">
                <View
                  style={{ height: hp(1.5), width: hp(1.5) }}
                  className="rounded-full my-auto bg-teal-800"
                ></View>
                <Animated.Text
                  entering={FadeInLeft.duration(700)
                    .delay(100)
                    .springify()
                    .damping(12)}
                  style={{ fontSize: hp(1.7) }}
                  className="font-medium  text-neutral-600"
                >
                  {e.name}
                </Animated.Text>
              </View>
            ))}
          </View>
        </View>
        {/* SPECIALITIES  */}
        <View className="space-y-4 w-full   mx-4">
          <Text
            style={{ fontSize: hp(3) }}
            className="text-center font-extralight underline"
          >
            Specialities
          </Text>

          <FlatList
            data={cityData.tags}
            scrollEnabled={false}
            keyExtractor={(item, index) => `${item}_${index}`}
            numColumns={4}
            renderItem={({ item }) => {
              return (
                <Animated.View
                  entering={FadeInDown.duration(700)
                    .delay(200)
                    .springify()
                    .damping(12)}
                  className="px-4 m-1 py-2 bg-teal-800  shadow-xl rounded-full"
                >
                  <Text
                    style={{ fontSize: hp(1.4) }}
                    className="font-bold text-white"
                  >
                    {item}
                  </Text>
                </Animated.View>
              );
            }}
          />
        </View>
        {/* Must Do  */}
        <View className="space-y-6">
          <Text
            style={{ fontSize: hp(3) }}
            className="text-center font-extralight underline"
          >
            Must Do
          </Text>
          <View className="mx-4 space-y-4 flex ">
            {Do.map((e, i) => (
              <View key={i} className="flex-row flex justify-center  space-x-2">
                <View
                  style={{ height: hp(1.5), width: hp(1.5) }}
                  className="rounded-full my-auto bg-teal-800"
                ></View>
                <Animated.Text
                  entering={FadeInLeft.duration(700)
                    .delay(300)
                    .springify()
                    .damping(12)}
                  style={{ fontSize: hp(1.7) }}
                  className="font-medium  text-neutral-600"
                >
                  {e.name}
                </Animated.Text>
              </View>
            ))}
          </View>
        </View>

        {/* MAP  */}
      </ScrollView>
      <NavigationBar />
    </View>
  );
}
