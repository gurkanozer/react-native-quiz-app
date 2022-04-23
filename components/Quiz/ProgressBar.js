import { StyleSheet, Text, View } from "react-native";
import React from "react";
import colors from "../../constants/colors";

const ProgressBar = ({ width = 0 }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{width}/10</Text>
      <View style={styles.progress(width)} />
    </View>
  );
};

export default ProgressBar;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    maxWidth: 320,
    height: 26,
    borderRadius: 26,
    backgroundColor: colors.lightBlue,
  },
  text: {
    position: "absolute",
    top: 0,
    left: 10,
    lineHeight: 30,
    fontFamily: "font-indie",
    fontSize: 22,
    zIndex: 2,
    color: colors.white,
  },
  progress: (width) => ({
    width: width * 32,
    height: 26,
    borderRadius: 26,
    backgroundColor: colors.blue,
  }),
});
