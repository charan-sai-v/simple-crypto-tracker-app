import { View, Text } from "react-native";
import React from "react";
import CoinItem from "@/components/CoinItem";

const bookmarks = () => {
  return (
    <View className="p-4">
      <Text className="font-psemibold text-lg">My Bookmarks</Text>
      <View>
        <CoinItem showBookmark />
      </View>
    </View>
  );
};

export default bookmarks;
