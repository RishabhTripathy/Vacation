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
import Animated from "react-native-reanimated";

export default function City() {
  const navigation = useNavigation();
  const State = [
    {
      title: "Karnataka",
      img: "https://images.pexels.com/photos/17319808/pexels-photo-17319808/free-photo-of-clocktower.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      key: "states1",
      tags: ["City", "Business", "NightLife"],
      cities: [
        {
          title: "Banglore",
          img: "https://images.pexels.com/photos/17319808/pexels-photo-17319808/free-photo-of-clocktower.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          key: "city1",
          desc: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis laudantium in consequuntur voluptatum hic sapiente numquam exercitationem obcaecati iure quibusdam dignissimos aut earum sed cumque, similique voluptates dolorem laborum itaque harum iusto cupiditate error nulla? A reprehenderit ipsum in ipsam itaque aut accusamus, vero, possimus nostrum quaerat, magni quis facere?",

          tags: ["City", "Business", "NightLife"],
        },
        {
          title: "Raichur",
          desc: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis laudantium in consequuntur voluptatum hic sapiente numquam exercitationem obcaecati iure quibusdam dignissimos aut earum sed cumque, similique voluptates dolorem laborum itaque harum iusto cupiditate error nulla? A reprehenderit ipsum in ipsam itaque aut accusamus, vero, possimus nostrum quaerat, magni quis facere?",

          desc: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis laudantium in consequuntur voluptatum hic sapiente numquam exercitationem obcaecati iure quibusdam dignissimos aut earum sed cumque, similique voluptates dolorem laborum itaque harum iusto cupiditate error nulla? A reprehenderit ipsum in ipsam itaque aut accusamus, vero, possimus nostrum quaerat, magni quis facere?",

          img: "https://cdn.pixabay.com/photo/2019/08/19/16/22/hills-4416873_1280.jpg",
          key: "city2",
          tags: ["Hill Station", "Scenic", "Nature"],
        },
        {
          title: "Hassan",
          desc: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis laudantium in consequuntur voluptatum hic sapiente numquam exercitationem obcaecati iure quibusdam dignissimos aut earum sed cumque, similique voluptates dolorem laborum itaque harum iusto cupiditate error nulla? A reprehenderit ipsum in ipsam itaque aut accusamus, vero, possimus nostrum quaerat, magni quis facere?",

          img: "https://images.pexels.com/photos/13036973/pexels-photo-13036973.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          key: "city3",
          tags: ["Hill Station", "Scenic", "Nature"],
        },
        {
          title: "Tumakuru",
          desc: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis laudantium in consequuntur voluptatum hic sapiente numquam exercitationem obcaecati iure quibusdam dignissimos aut earum sed cumque, similique voluptates dolorem laborum itaque harum iusto cupiditate error nulla? A reprehenderit ipsum in ipsam itaque aut accusamus, vero, possimus nostrum quaerat, magni quis facere?",

          img: "https://traveldudes.com/wp-content/uploads/2020/09/Kerala_Main.jpg",
          key: "city4",
          tags: ["Coastal", "Scenic", "Nature"],
        },
        {
          title: "Chitradurga",
          desc: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis laudantium in consequuntur voluptatum hic sapiente numquam exercitationem obcaecati iure quibusdam dignissimos aut earum sed cumque, similique voluptates dolorem laborum itaque harum iusto cupiditate error nulla? A reprehenderit ipsum in ipsam itaque aut accusamus, vero, possimus nostrum quaerat, magni quis facere?",

          img: "https://images.pexels.com/photos/18357545/pexels-photo-18357545/free-photo-of-couple-kissing-with-taj-mahal-behind.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          key: "city5",
          tags: ["Historic", "Scenic", "City", "Historic", "Scenic", "City"],
        },
      ],
    },
    {
      title: "Uttrakhand",
      img: "https://cdn.pixabay.com/photo/2019/08/19/16/22/hills-4416873_1280.jpg",
      key: "states2",
      tags: ["Hill Station", "Scenic", "Nature"],
      cities: [
        {
          title: "Almora",
          img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Bangalore_.jpg/220px-Bangalore_.jpg",
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
          title: "Dehradun",
          desc: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis laudantium in consequuntur voluptatum hic sapiente numquam exercitationem obcaecati iure quibusdam dignissimos aut earum sed cumque, similique voluptates dolorem laborum itaque harum iusto cupiditate error nulla? A reprehenderit ipsum in ipsam itaque aut accusamus, vero, possimus nostrum quaerat, magni quis facere?",

          img: "https://images.pexels.com/photos/13036973/pexels-photo-13036973.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          key: "city3",
          tags: ["Hill Station", "Scenic", "Nature"],
        },
        {
          title: "Haridwar",
          desc: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis laudantium in consequuntur voluptatum hic sapiente numquam exercitationem obcaecati iure quibusdam dignissimos aut earum sed cumque, similique voluptates dolorem laborum itaque harum iusto cupiditate error nulla? A reprehenderit ipsum in ipsam itaque aut accusamus, vero, possimus nostrum quaerat, magni quis facere?",

          img: "https://traveldudes.com/wp-content/uploads/2020/09/Kerala_Main.jpg",
          key: "city4",
          tags: ["Coastal", "Scenic", "Nature"],
        },
        {
          title: "Nainital",
          desc: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis laudantium in consequuntur voluptatum hic sapiente numquam exercitationem obcaecati iure quibusdam dignissimos aut earum sed cumque, similique voluptates dolorem laborum itaque harum iusto cupiditate error nulla? A reprehenderit ipsum in ipsam itaque aut accusamus, vero, possimus nostrum quaerat, magni quis facere?",

          img: "https://images.pexels.com/photos/18357545/pexels-photo-18357545/free-photo-of-couple-kissing-with-taj-mahal-behind.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          key: "city5",
          tags: ["Historic", "Scenic", "City", "Historic", "Scenic", "City"],
        },
      ],
    },
    {
      title: "Sikkim",
      img: "https://images.pexels.com/photos/13036973/pexels-photo-13036973.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      key: "states3",
      cities: [
        {
          title: "Pelling",
          img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Bangalore_.jpg/220px-Bangalore_.jpg",
          key: "city1",
          desc: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis laudantium in consequuntur voluptatum hic sapiente numquam exercitationem obcaecati iure quibusdam dignissimos aut earum sed cumque, similique voluptates dolorem laborum itaque harum iusto cupiditate error nulla? A reprehenderit ipsum in ipsam itaque aut accusamus, vero, possimus nostrum quaerat, magni quis facere?",

          tags: ["City", "Business", "NightLife"],
        },
        {
          title: "Namchi",
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
          title: "Pakyong",
          desc: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis laudantium in consequuntur voluptatum hic sapiente numquam exercitationem obcaecati iure quibusdam dignissimos aut earum sed cumque, similique voluptates dolorem laborum itaque harum iusto cupiditate error nulla? A reprehenderit ipsum in ipsam itaque aut accusamus, vero, possimus nostrum quaerat, magni quis facere?",

          img: "https://traveldudes.com/wp-content/uploads/2020/09/Kerala_Main.jpg",
          key: "city4",
          tags: ["Coastal", "Scenic", "Nature"],
        },
        {
          title: "Lachung",
          desc: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis laudantium in consequuntur voluptatum hic sapiente numquam exercitationem obcaecati iure quibusdam dignissimos aut earum sed cumque, similique voluptates dolorem laborum itaque harum iusto cupiditate error nulla? A reprehenderit ipsum in ipsam itaque aut accusamus, vero, possimus nostrum quaerat, magni quis facere?",

          img: "https://images.pexels.com/photos/18357545/pexels-photo-18357545/free-photo-of-couple-kissing-with-taj-mahal-behind.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          key: "city5",
          tags: ["Historic", "Scenic", "City", "Historic", "Scenic", "City"],
        },
      ],
    },
    {
      title: "Kerela",
      img: "https://traveldudes.com/wp-content/uploads/2020/09/Kerala_Main.jpg",
      key: "states4",
      cities: [
        {
          title: "Thiruvananthapuram",
          img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Bangalore_.jpg/220px-Bangalore_.jpg",
          key: "city1",
          desc: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis laudantium in consequuntur voluptatum hic sapiente numquam exercitationem obcaecati iure quibusdam dignissimos aut earum sed cumque, similique voluptates dolorem laborum itaque harum iusto cupiditate error nulla? A reprehenderit ipsum in ipsam itaque aut accusamus, vero, possimus nostrum quaerat, magni quis facere?",

          tags: ["City", "Business", "NightLife"],
        },
        {
          title: "Kochi",
          desc: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis laudantium in consequuntur voluptatum hic sapiente numquam exercitationem obcaecati iure quibusdam dignissimos aut earum sed cumque, similique voluptates dolorem laborum itaque harum iusto cupiditate error nulla? A reprehenderit ipsum in ipsam itaque aut accusamus, vero, possimus nostrum quaerat, magni quis facere?",

          desc: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis laudantium in consequuntur voluptatum hic sapiente numquam exercitationem obcaecati iure quibusdam dignissimos aut earum sed cumque, similique voluptates dolorem laborum itaque harum iusto cupiditate error nulla? A reprehenderit ipsum in ipsam itaque aut accusamus, vero, possimus nostrum quaerat, magni quis facere?",

          img: "https://cdn.pixabay.com/photo/2019/08/19/16/22/hills-4416873_1280.jpg",
          key: "city2",
          tags: ["Hill Station", "Scenic", "Nature"],
        },
        {
          title: "Palakkad",
          desc: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis laudantium in consequuntur voluptatum hic sapiente numquam exercitationem obcaecati iure quibusdam dignissimos aut earum sed cumque, similique voluptates dolorem laborum itaque harum iusto cupiditate error nulla? A reprehenderit ipsum in ipsam itaque aut accusamus, vero, possimus nostrum quaerat, magni quis facere?",

          img: "https://images.pexels.com/photos/13036973/pexels-photo-13036973.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          key: "city3",
          tags: ["Hill Station", "Scenic", "Nature"],
        },
        {
          title: "Kollam",
          desc: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis laudantium in consequuntur voluptatum hic sapiente numquam exercitationem obcaecati iure quibusdam dignissimos aut earum sed cumque, similique voluptates dolorem laborum itaque harum iusto cupiditate error nulla? A reprehenderit ipsum in ipsam itaque aut accusamus, vero, possimus nostrum quaerat, magni quis facere?",

          img: "https://traveldudes.com/wp-content/uploads/2020/09/Kerala_Main.jpg",
          key: "city4",
          tags: ["Coastal", "Scenic", "Nature"],
        },
        {
          title: "Thrissur",
          desc: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis laudantium in consequuntur voluptatum hic sapiente numquam exercitationem obcaecati iure quibusdam dignissimos aut earum sed cumque, similique voluptates dolorem laborum itaque harum iusto cupiditate error nulla? A reprehenderit ipsum in ipsam itaque aut accusamus, vero, possimus nostrum quaerat, magni quis facere?",

          img: "https://images.pexels.com/photos/18357545/pexels-photo-18357545/free-photo-of-couple-kissing-with-taj-mahal-behind.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          key: "city5",
          tags: ["Historic", "Scenic", "City", "Historic", "Scenic", "City"],
        },
      ],
    },
    {
      title: "Uttar Pradesh",
      img: "https://images.pexels.com/photos/18357545/pexels-photo-18357545/free-photo-of-couple-kissing-with-taj-mahal-behind.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      key: "states5",
      cities: [
        {
          title: "Lucknow",
          img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Bangalore_.jpg/220px-Bangalore_.jpg",
          key: "city1",
          desc: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis laudantium in consequuntur voluptatum hic sapiente numquam exercitationem obcaecati iure quibusdam dignissimos aut earum sed cumque, similique voluptates dolorem laborum itaque harum iusto cupiditate error nulla? A reprehenderit ipsum in ipsam itaque aut accusamus, vero, possimus nostrum quaerat, magni quis facere?",

          tags: ["City", "Business", "NightLife"],
        },
        {
          title: "Noida",
          desc: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis laudantium in consequuntur voluptatum hic sapiente numquam exercitationem obcaecati iure quibusdam dignissimos aut earum sed cumque, similique voluptates dolorem laborum itaque harum iusto cupiditate error nulla? A reprehenderit ipsum in ipsam itaque aut accusamus, vero, possimus nostrum quaerat, magni quis facere?",

          desc: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis laudantium in consequuntur voluptatum hic sapiente numquam exercitationem obcaecati iure quibusdam dignissimos aut earum sed cumque, similique voluptates dolorem laborum itaque harum iusto cupiditate error nulla? A reprehenderit ipsum in ipsam itaque aut accusamus, vero, possimus nostrum quaerat, magni quis facere?",

          img: "https://cdn.pixabay.com/photo/2019/08/19/16/22/hills-4416873_1280.jpg",
          key: "city2",
          tags: ["Hill Station", "Scenic", "Nature"],
        },
        {
          title: "Mirzapur",
          desc: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis laudantium in consequuntur voluptatum hic sapiente numquam exercitationem obcaecati iure quibusdam dignissimos aut earum sed cumque, similique voluptates dolorem laborum itaque harum iusto cupiditate error nulla? A reprehenderit ipsum in ipsam itaque aut accusamus, vero, possimus nostrum quaerat, magni quis facere?",

          img: "https://images.pexels.com/photos/13036973/pexels-photo-13036973.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          key: "city3",
          tags: ["Hill Station", "Scenic", "Nature"],
        },
        {
          title: "Ghaziabad",
          desc: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis laudantium in consequuntur voluptatum hic sapiente numquam exercitationem obcaecati iure quibusdam dignissimos aut earum sed cumque, similique voluptates dolorem laborum itaque harum iusto cupiditate error nulla? A reprehenderit ipsum in ipsam itaque aut accusamus, vero, possimus nostrum quaerat, magni quis facere?",

          img: "https://traveldudes.com/wp-content/uploads/2020/09/Kerala_Main.jpg",
          key: "city4",
          tags: ["Coastal", "Scenic", "Nature"],
        },
        {
          title: "Bareli",
          desc: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis laudantium in consequuntur voluptatum hic sapiente numquam exercitationem obcaecati iure quibusdam dignissimos aut earum sed cumque, similique voluptates dolorem laborum itaque harum iusto cupiditate error nulla? A reprehenderit ipsum in ipsam itaque aut accusamus, vero, possimus nostrum quaerat, magni quis facere?",

          img: "https://images.pexels.com/photos/18357545/pexels-photo-18357545/free-photo-of-couple-kissing-with-taj-mahal-behind.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          key: "city5",
          tags: ["Historic", "Scenic", "City", "Historic", "Scenic", "City"],
        },
      ],
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
          <Text className="text-teal-600"> State</Text>.
        </Text>
      </View>
      <FlatList
        data={State}
        numColumns={2}
        keyExtstatesractor={(item) => item.key}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("StateDetails", { stateData: item.cities })
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
