import {
  View,
  Text,
  StatusBar,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Animated, {
  FadeInDown,
  FadeInLeft,
  FadeInRight,
} from "react-native-reanimated";
import { ScrollView } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import NotificationBar from "../Components/NotificationBar";
import NavigationBar from "../Components/NavigationBar";
import { useNavigation } from "@react-navigation/native";

export default function Home() {
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
  const Catagories = [
    {
      title: "Coast",
      img: "https://images.pexels.com/photos/1078981/pexels-photo-1078981.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      key: "cat1",
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
      title: "Hill Station",
      img: "https://images.pexels.com/photos/1658967/pexels-photo-1658967.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      key: "cat2",
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
      title: "Nature",
      img: "https://images.pexels.com/photos/15286/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      key: "cat3",
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
      title: "Towns & Cities",
      img: "https://traveldudes.com/wp-content/uploads/2020/09/Kerala_Main.jpg",
      key: "cat4",
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
      title: "Culture & Heritage",
      img: "https://images.pexels.com/photos/3761529/pexels-photo-3761529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      key: "cat5",
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
  ];

  return (
    <View className="flex-1 items-center  h-full w-full">
      <StatusBar style="dark" />
      {/* LOGO AND NOTIFICATION BAR  */}
      <NotificationBar />
      <ScrollView
        scrollVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 50 }}
        className="space-y-6 w-full mt-2 h-full "
      >
        {/* GREETINGS  */}
        <View className="mx-4 mb-4 space-y-2">
          <Text style={{ fontSize: hp(1.7) }} className="text-neutral-600">
            STOP WASTING <Text className="text-teal-600"> MONEY</Text>. ON
            AGENTS
          </Text>

          <Text
            style={{ fontSize: hp(3) }}
            className="text-neutral-600 font-semibold"
          >
            Plan your vacation
            <Text className="text-teal-600 uppercase"> Hassle Free</Text>.
          </Text>

          <Text
            style={{ fontSize: hp(3) }}
            className="text-neutral-600 font-semibold"
          >
            That too in <Text className="text-teal-600 uppercase">Minutes</Text>
          </Text>
        </View>

        {/* EXPLORE BY CITY  */}
        <View className="mx-4 mb-4 ">
          <Animated.Text
            entering={FadeInLeft.delay(100).springify().duration(700)}
            style={{ fontSize: hp(2.8) }}
            className=" text-center mb-2 font-extralight"
          >
            Explore By
            <Animated.Text
              entering={FadeInRight.delay(200).springify().duration(700)}
              className="font-extrabold  underline text-teal-600"
            >
              {" "}
              Top Cities
            </Animated.Text>
          </Animated.Text>
          <FlatList
            keyExtractor={(item) => item.key}
            horizontal
            showsHorizontalScrollIndicator={false}
            data={cities}
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
                      height: hp(30),
                      width: hp(30),
                      borderRadius: hp(2),
                      opacity: 0.8,
                    }}
                  />
                  <Text
                    style={{ fontSize: hp(2.8) }}
                    className="absolute text-white font-bold "
                  >
                    {item.title}
                  </Text>
                  <View
                    style={{
                      borderBottomLeftRadius: hp(2),
                      borderBottomRightRadius: hp(2),
                    }}
                    className="flex absolute bottom-4 left-2  flex-row w-full    space-x-1"
                  >
                    {item.tags.slice(0, 3).map((tag, index) => (
                      <View key={index} className="bg-white  rounded-full p-2">
                        <Text
                          style={{ fontSize: hp(1.2) }}
                          className="font-bold text-black  "
                        >
                          {tag}
                        </Text>
                      </View>
                    ))}
                  </View>
                </TouchableOpacity>
              );
            }}
          />
        </View>
        {/* EXPLORE State  */}
        <View className="mx-4 mb-4 ">
          <Animated.Text
            entering={FadeInLeft.delay(100).springify().duration(700)}
            style={{ fontSize: hp(2.8) }}
            className=" text-center mb-2  font-extralight "
          >
            Explore By{" "}
            <Animated.Text
              entering={FadeInRight.delay(2100).springify().duration(700)}
              className="text-teal-600 underline font-extrabold"
            >
              State
            </Animated.Text>
          </Animated.Text>
          <FlatList
            keyExtractor={(item) => item.key}
            horizontal
            showsHorizontalScrollIndicator={false}
            data={State}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate("StateDetails", {
                      stateData: item.cities,
                    })
                  }
                  style={{ borderRadius: hp(2) }}
                  className="flex bg-black  items-center mt-4 justify-center mx-2"
                >
                  <Animated.Image
                    source={{ uri: item.img }}
                    sharedTransitionTag={item.key}
                    style={{
                      height: hp(30),
                      width: hp(30),
                      borderRadius: hp(2),
                      opacity: 0.8,
                    }}
                  />
                  <Text
                    style={{ fontSize: hp(2.8) }}
                    className="absolute text-white font-bold "
                  >
                    {item.title}
                  </Text>
                </TouchableOpacity>
              );
            }}
          />
        </View>
        {/* EXPLORE Catagories  */}
        <View className="mx-4 ">
          <Animated.Text
            entering={FadeInLeft.delay(100).springify().duration(700)}
            style={{ fontSize: hp(2.8) }}
            className=" text-center mb-2  font-extralight "
          >
            Explore By{" "}
            <Animated.Text
              entering={FadeInRight.delay(2100).springify().duration(700)}
              className="text-teal-600 underline font-extrabold"
            >
              Catagories
            </Animated.Text>
          </Animated.Text>
          <FlatList
            keyExtractor={(item) => item.key}
            horizontal
            showsHorizontalScrollIndicator={false}
            data={Catagories}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate("Catagories", { catData: item })
                  }
                  style={{ borderRadius: hp(2) }}
                  className="flex bg-black l items-center mt-4 justify-center mx-2"
                >
                  <Image
                    source={{ uri: item.img }}
                    style={{
                      height: hp(30),
                      width: hp(30),
                      borderRadius: hp(2),
                      opacity: 0.8,
                    }}
                  />
                  <Text
                    style={{ fontSize: hp(2.8) }}
                    className="absolute text-white font-bold "
                  >
                    {item.title}
                  </Text>
                </TouchableOpacity>
              );
            }}
          />
        </View>
      </ScrollView>
      <NavigationBar />
    </View>
  );
}
