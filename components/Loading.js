import { View, Text } from "react-native";
import React from "react";
import colors from "../constants/colors";

const Loading = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ color: colors.white }}>Loading...</Text>
    </View>
  );
};

export default Loading;
