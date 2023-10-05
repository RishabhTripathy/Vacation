import {
  View,
  Text,
  ScrollView,
  StatusBar,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import NavigationBar from "../Components/NavigationBar";
import NotificationBar from "../Components/NotificationBar";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useNavigation } from "@react-navigation/native";
import Animated, {
  FadeInDown,
  FadeInLeft,
  FadeInRight,
} from "react-native-reanimated";

export default function City() {
  const navigation = useNavigation();
  const cities = [
    {
      title: "Banglore",
      img: "https://images.pexels.com/photos/17319808/pexels-photo-17319808/free-photo-of-clocktower.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      key: "city1",
      desc: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis laudantium in consequuntur voluptatum hic sapiente numquam exercitationem obcaecati iure quibusdam dignissimos aut earum sed cumque, similique voluptates dolorem laborum itaque harum iusto cupiditate error nulla? A reprehenderit ipsum in ipsam itaque aut accusamus, vero, possimus nostrum quaerat, magni quis facere?",

      tags: ["City", "Business", "NightLife"],
    },
    {
      title: "Mussoorie",
      desc: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis laudantium in consequuntur voluptatum hic sapiente numquam exercitationem obcaecati iure quibusdam dignissimos aut earum sed cumque, similique voluptates dolorem laborum itaque harum iusto cupiditate error nulla? A reprehenderit ipsum in ipsam itaque aut accusamus, vero, possimus nostrum quaerat, magni quis facere?",

      desc: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis laudantium in consequuntur voluptatum hic sapiente numquam exercitationem obcaecati iure quibusdam dignissimos aut earum sed cumque, similique voluptates dolorem laborum itaque harum iusto cupiditate error nulla? A reprehenderit ipsum in ipsam itaque aut accusamus, vero, possimus nostrum quaerat, magni quis facere?",

      img: "https://cdn.pixabay.com/photo/2019/08/19/16/22/hills-4416873_1280.jpg",
      key: "city2",
      tags: ["Hill Station", "Scenic", "Nature"],
    },
    {
      title: "Gangtok",
      desc: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis laudantium in consequuntur voluptatum hic sapiente numquam exercitationem obcaecati iure quibusdam dignissimos aut earum sed cumque, similique voluptates dolorem laborum itaque harum iusto cupiditate error nulla? A reprehenderit ipsum in ipsam itaque aut accusamus, vero, possimus nostrum quaerat, magni quis facere?",

      img: "https://images.pexels.com/photos/13036973/pexels-photo-13036973.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      key: "city3",
      tags: ["Hill Station", "Scenic", "Nature"],
    },
    {
      title: "Visag",
      desc: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis laudantium in consequuntur voluptatum hic sapiente numquam exercitationem obcaecati iure quibusdam dignissimos aut earum sed cumque, similique voluptates dolorem laborum itaque harum iusto cupiditate error nulla? A reprehenderit ipsum in ipsam itaque aut accusamus, vero, possimus nostrum quaerat, magni quis facere?",

      img: "https://traveldudes.com/wp-content/uploads/2020/09/Kerala_Main.jpg",
      key: "city4",
      tags: ["Coastal", "Scenic", "Nature"],
    },
    {
      title: "Agra",
      desc: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis laudantium in consequuntur voluptatum hic sapiente numquam exercitationem obcaecati iure quibusdam dignissimos aut earum sed cumque, similique voluptates dolorem laborum itaque harum iusto cupiditate error nulla? A reprehenderit ipsum in ipsam itaque aut accusamus, vero, possimus nostrum quaerat, magni quis facere?",

      img: "https://images.pexels.com/photos/18357545/pexels-photo-18357545/free-photo-of-couple-kissing-with-taj-mahal-behind.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      key: "city5",
      tags: ["Historic", "Scenic", "City", "Historic", "Scenic", "City"],
    },
  ];

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
        data={cities}
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
