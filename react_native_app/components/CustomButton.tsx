import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";

type CustomButtonProps = {
  handlePress: () => void;
  containerStyle?: string;
  isLoading?: boolean;
  children: React.ReactNode;
};

const CustomButton = ({
  children,
  handlePress,
  containerStyle,
  isLoading,
}: CustomButtonProps) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.7}
      className={`bg-black rounded-xl min-h-[62px] justify-center items-center ${containerStyle} ${
        isLoading ? "opacity-50" : ""
      }`}
      disabled={isLoading}
    >
      {children}
    </TouchableOpacity>
  );
};

export default CustomButton;
