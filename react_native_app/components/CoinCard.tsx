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

const CoinCard = () => {
  return (
    <View className="flex-row items-center p-5 mt-5 justify-around">
      <View className="items-center">
        <Image
          source={{ uri: bitcoin.icon }}
          resizeMode="contain"
          className="w-14 h-14"
        />
        <Text className="font-pmedium text-sm text-center mt-1 border border-[#E4E4E7] rounded-xl py-1 px-2 text-gray-500">
          {bitcoin.symbol}
        </Text>
        <Text className="font-psemibold text-lg text-center mt-3">
          {bitcoin.name}
        </Text>
      </View>
      <View className="space-y-2 ml-5">
        <Text className="font-pregular text-base mt-1">
          Price $ {bitcoin.price}
        </Text>
        <Text className="font-pregular text-base">
          24h Volume Change{"  "}
          <Text className="font-pregular">{bitcoin.volume_change_24h}</Text>
        </Text>
        {/* <Text className="font-pregular text-base">
          Market cap {"  "}
          <Text className="font-pregular ">{bitcoin.market_cap}</Text>
        </Text> */}
        <Text className="font-pregular text-base">
          Total Supply {"  "}
          <Text className="font-psemibold">{bitcoin.total_supply}</Text>
        </Text>
        <Text className="font-pregular text-base">
          Max Supply {"  "}
          <Text className="font-psemibold">{bitcoin.max_supply}</Text>
        </Text>
      </View>
    </View>
  );
};

export default CoinCard;
