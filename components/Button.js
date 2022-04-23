import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";
import colors from "../constants/colors";

const Button = ({ text, backgroundColor, onPress }) => {
  return (
    <TouchableOpacity style={styles.button(backgroundColor)} onPress={onPress}>
      <Text
        style={{
          color: colors.white,
          textTransform: "uppercase",
          letterSpacing: 2,
        }}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: (backgroundColor) => ({
    height: 44,
    backgroundColor: backgroundColor ? backgroundColor : colors.lightBlue,
    fontSize: 16,
    fontFamily: "font-bold",
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 30,
  }),
});
