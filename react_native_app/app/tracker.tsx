import { View, Text } from "react-native";
import React from "react";
import TrackerCoin from "@/components/TrackerCoin";

const tracker = () => {
  return (
    <View className="p-4">
      <Text className="font-psemibold text-xl">My Tracker</Text>
      <View>
        <TrackerCoin />
      </View>
    </View>
  );
};

export default tracker;
