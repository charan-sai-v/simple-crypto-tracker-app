import { View, Text, Image } from "react-native";
import React from "react";

const bitcoin = {
  index: 1,
  icon: "https://s2.coinmarketcap.com/static/img/coins/64x64/1.png",
  name: "Bitcoin",
  price: "64153",
  symbol: "BTC",
  volume_change_24h: "-7",
  market_cap: "1.26 T",
  max_supply: 21000000,
  total_supply: 19690418,
};

const TrackerCoin = () => {
  return (
    <View className="flex-row items-center justify-between">
      <Text>1</Text>
      <Image
        source={{ uri: bitcoin.icon }}
        resizeMode="contain"
        className="w-8 h-8"
      />
      <View className="items-center justify-center">
        <Text className="font-pregular text-base">{bitcoin.name}</Text>
        <Text className="font-pregular text-xs text-gray-500">
          {bitcoin.symbol}
        </Text>
      </View>
      <Text className="font-pregular">$ {bitcoin.price}</Text>
      <Text className="font-pregular">$ 62000</Text>
      <View className=" px-2 py-1 rounded-3xl border border-[#E4E4E7]">
        {/* reached: bg-[#3A994C] */}

        <Text className="font-pregular text-xs text-black">Not reached</Text>
      </View>
    </View>
  );
};

export default TrackerCoin;
