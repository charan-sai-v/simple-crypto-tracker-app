import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import { router } from "expo-router";

const bitcoin = {
  index: 1,
  icon: "https://s2.coinmarketcap.com/static/img/coins/64x64/1.png",
  name: "Bitcoin",
  price: "64153",
  volume_change_24h: "-7",
  market_cap: "1.26 T",
};

const CoinItem = ({ showBookmark }: { showBookmark?: boolean }) => {
  const [bookmark, setBookmark] = useState(false);
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={() => router.push("/coin")}
      className=" rounded-xl border-gray-100/50 w-full p-4 flex-row items-center justify-between "
    >
      <Text className="font-pregular text-base">{bitcoin.index}</Text>

      <View className="items-center flex-row">
        <Image
          source={{ uri: bitcoin.icon }}
          resizeMode="contain"
          className="w-6 h-6 mr-3"
        />
        <View className="">
          <Text className="font-pmedium text-base">{bitcoin.name}</Text>
          <Text className="font-pregular text-xs mr-3 ">
            $ {bitcoin.market_cap}
          </Text>
        </View>
      </View>

      <View className="flex-row justify-center items-center">
        <Text className="font-psemibold text-base">$ {bitcoin.price}</Text>
      </View>

      <View className="flex-row">
        <AntDesign
          name="caretdown"
          className=""
          style={{ marginRight: 3 }}
          size={10}
          color={"#ea3943"}
        />
        <Text className="font-pregular text-sm text-[#ea3943]">
          {bitcoin.volume_change_24h} %
        </Text>
      </View>
      {showBookmark && (
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => setBookmark(!bookmark)}
          className=""
        >
          {bookmark ? (
            <FontAwesome name="bookmark" size={24} color="#3861FB" />
          ) : (
            <FontAwesome name="bookmark-o" size={24} color="#3861FB" />
          )}
        </TouchableOpacity>
      )}
    </TouchableOpacity>
  );
};

export default CoinItem;
