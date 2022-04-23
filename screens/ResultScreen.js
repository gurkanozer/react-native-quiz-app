import { View, Text, StyleSheet } from "react-native";
import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/globalState";
import { MainContainer, Button, Logo } from "../components";
import colors from "../constants/colors";

const HomeScreen = ({ navigation }) => {
  const { score, removeQuiz } = useContext(GlobalContext);
  const [currentScore, setCurrentScore] = useState(score);
  const handleOnPress = () => {
    removeQuiz().then((res) => {
      navigation.navigate("Start");
    });
  };
  return (
    <MainContainer>
      <Logo />
      <View
        style={{
          width: "100%",
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/*-------------------- SCORE CIRCLE */}
        <View style={{ alignItems: "center" }}>
          <Text
            style={{
              color: colors.white,
              fontFamily: "font-indie",
              fontSize: 18,
              marginBottom: 20,
            }}
          >
            Your score
          </Text>
          <View style={styles.scoreCircle}>
            <Text
              style={[
                styles.scoreText,
                score > 5 ? { color: colors.green } : { color: colors.red },
              ]}
            >
              {currentScore}/10
            </Text>
          </View>
        </View>
        {/*-------------------- START BUTTON */}
        <View
          style={{
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button
            text="Try Again"
            backgroundColor={colors.green}
            onPress={handleOnPress}
          />
        </View>
      </View>
    </MainContainer>
  );
};

const styles = StyleSheet.create({
  scoreCircle: {
    width: 110,
    height: 110,
    borderRadius: 110,
    backgroundColor: colors.white,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 30,
  },
  scoreText: {
    fontFamily: "font-indie",
    fontSize: 48,
  },
});
export default HomeScreen;
