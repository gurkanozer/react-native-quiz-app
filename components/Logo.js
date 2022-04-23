import { StyleSheet, Text, View } from "react-native";
import React from "react";
import colors from "../constants/colors";
const Logo = () => {
  return (
    <View>
      <Text style={styles.title}>10 / 10</Text>
    </View>
  );
};

export default Logo;

const styles = StyleSheet.create({
  title: {
    color: colors.white,
    fontFamily: "font-indie",
    fontSize: 48,
    marginTop: 20,
  },
});
