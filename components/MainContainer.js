import { StyleSheet, SafeAreaView, StatusBar } from "react-native";
import React from "react";
// import { StatusBar } from "expo-status-bar";
import colors from "../constants/colors";
const MainContainer = ({ padding = 10, children }) => {
  return (
    <SafeAreaView style={styles.container(padding)}>
      <StatusBar backgroundColor={colors.darkBlue} barStyle="light-content" />
      {children}
    </SafeAreaView>
  );
};

export default MainContainer;

const styles = StyleSheet.create({
  container: (padding) => ({
    flex: 1,
    backgroundColor: colors.darkBlue,
    alignItems: "center",
    justifyContent: "flex-start",
    padding: padding,
  }),
});
