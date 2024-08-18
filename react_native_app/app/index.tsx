import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CoinItem from "@/components/CoinItem";
import CardItem from "@/components/CardItem";
import { Ionicons, FontAwesome5, FontAwesome } from "@expo/vector-icons";
import { router } from "expo-router";

const Home = () => {
  return (
    <SafeAreaView>
      <View className="flex-row justify-between items-center mb-1 px-2.5">
        <CardItem
          title="My Trackers"
          Logo={<Ionicons name="location-outline" size={24} color="white" />}
          handlePress={() => router.push("/tracker")}
        >
          {/* <Ionicons name="location-outline" size={24} color="black" /> */}
        </CardItem>
        <CardItem
          title="All Coins"
          Logo={<FontAwesome5 name="coins" size={24} color="white" />}
          handlePress={() => {}}
        >
          {/* <Ionicons name="location-outline" size={24} color="black" /> */}
        </CardItem>
        <CardItem
          title="My Bookmarks"
          Logo={<FontAwesome name="bookmark" size={24} color="white" />}
          handlePress={() => router.push("/bookmarks")}
        >
          {/* <Ionicons name="location-outline" size={24} color="black" /> */}
        </CardItem>
      </View>
      <View className="p-4">
        <Text className="font-psemibold text-lg mb-0.5">Latest Coins</Text>
        <View className="justify-between flex-row px-2 ">
          <Text className="text-center font-pmedium">Rank</Text>
          <Text className="text-center font-pmedium">Coin</Text>
          <Text className="text-center font-pmedium">Price</Text>
          <Text className="text-center font-pmedium">Diff</Text>
        </View>
        <CoinItem />
        <CoinItem />
        <CoinItem />
      </View>
    </SafeAreaView>
  );
};

export default Home;
