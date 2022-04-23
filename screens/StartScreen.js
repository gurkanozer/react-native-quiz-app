import { View } from "react-native";
import React, { useState, useContext } from "react";
import { MainContainer, Logo, Button, Picker, Loading } from "../components";
import colors from "../constants/colors";
import { GlobalContext } from "../context/globalState";

const StartScreen = ({ navigation }) => {
  const { isLoading, categories, getQuiz } = useContext(GlobalContext);
  //-------------------STATES
  const [selectedCategory, setSelectedCategory] = useState({
    id: 999,
    name: "all",
  });
  const [selectedDifficulty, setSelectedDifficulty] = useState({
    id: 0,
    name: "easy",
  });

  // const [categories, setCategories] = useState(null);
  const difficultyOptions = [
    { id: 0, name: "easy" },
    { id: 1, name: "medium" },
    { id: 2, name: "hard" },
  ];

  //--------------HANDLE START ACTION
  const handleOnClick = () => {
    getQuiz(selectedCategory, selectedDifficulty).then((res) => {
      navigation.navigate("Quiz");
    });
  };

  return (
    <MainContainer>
      <Logo />
      {categories.length > 0 && !isLoading ? (
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            width: "100%",
          }}
        >
          <View style={{ width: "100%", marginBottom: 30 }}>
            <Picker
              title="Select Category"
              selectedOption={selectedCategory}
              setSelectedOption={setSelectedCategory}
              options={categories}
            />
          </View>
          <View style={{ width: "100%", marginBottom: 30 }}>
            <Picker
              title="Select Difficulty"
              selectedOption={selectedDifficulty}
              setSelectedOption={setSelectedDifficulty}
              options={difficultyOptions}
            />
          </View>
          <View style={{ width: "100%", marginTop: 80 }}>
            <Button
              text="Start"
              backgroundColor={colors.green}
              onPress={handleOnClick}
            />
          </View>
        </View>
      ) : (
        <Loading />
      )}
    </MainContainer>
  );
};

export default StartScreen;
