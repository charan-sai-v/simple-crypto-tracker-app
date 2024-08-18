import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

type CardItemProps = {
  title: string;
  Logo: React.ReactNode;
  handlePress: () => void;
};

const CardItem = ({ title, Logo, handlePress }: CardItemProps) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.7}
      className="items-center border border-[#E4E4E7] p-4 rounded-md bg-[#3861FB]"
    >
      {Logo}
      <Text className="text-white mt-0.5 font-pregular">{title}</Text>
    </TouchableOpacity>
  );
};

export default CardItem;
