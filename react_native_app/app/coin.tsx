import { View, Text, Image } from "react-native";
import React, { useState } from "react";
import CustomButton from "@/components/CustomButton";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import CoinCard from "@/components/CoinCard";

const coin = () => {
  const [isBookmark, setIsBookmark] = useState(false);
  const [isTracked, setIsTracked] = useState(false);
  return (
    <View className="justify-between flex-col h-full pb-5">
      <View>
        <CoinCard />
      </View>
      <View className="items-center">
        <Image
          source={require("@/assets/images/empty.jpg")}
          resizeMode="contain"
          className="w-72 h-72"
        />
        <Text className="font-pregular">There is no tracker for this coin</Text>
      </View>
      <View className="flex-row justify-between px-3">
        <CustomButton
          handlePress={() => setIsBookmark(!isBookmark)}
          containerStyle="px-5 bg-white border border-[#E4E4E7]"
        >
          {isBookmark ? (
            <FontAwesome name="bookmark" size={24} color="black" />
          ) : (
            <FontAwesome name="bookmark-o" size={24} color="black" />
          )}
          <Text className="font-pregular">Bookmark</Text>
        </CustomButton>
        <CustomButton
          handlePress={() => setIsTracked(!isTracked)}
          containerStyle="px-5 bg-white border border-[#E4E4E7]"
        >
          {isTracked ? (
            <Ionicons name="location-sharp" size={24} color="black" />
          ) : (
            <Ionicons name="location-outline" size={24} color="black" />
          )}
          <Text className="font-pregular">Tracker</Text>
        </CustomButton>
      </View>
    </View>
  );
};

export default coin;
