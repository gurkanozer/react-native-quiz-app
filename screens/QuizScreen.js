import { Dimensions, ScrollView, StyleSheet, View } from "react-native";
import React, { useState, useContext } from "react";
import { MainContainer, Loading, Question, ProgressBar } from "../components";
import { GlobalContext } from "../context/globalState";

const { width } = Dimensions.get("window");

const QuizScreen = ({ navigation }) => {
  const { quiz, updateQuiz } = useContext(GlobalContext);
  const [ref, setRef] = useState(null);
  const [progress, setProgress] = useState(0);
  const handleChangeQuestion = (xPos) => {
    ref.scrollTo({
      x: width * xPos,
      y: 0,
      animated: true,
    });
  };

  const handleOptionSelect = (updatedQuestion) => {
    setProgress((prev) => prev + 1);
    updateQuiz(updatedQuestion);
  };
  return (
    <MainContainer padding={0}>
      {quiz.length === 0 ? (
        <Loading />
      ) : (
        <View style={{ flex: 1, width: "100%" }}>
          {/*------------------ PROGRESS BAR */}
          <View
            style={{
              width: "100%",
              alignItems: "center",
              justifyContent: "center",
              marginTop: 10,
            }}
          >
            <ProgressBar width={progress} />
          </View>
          {/*------------------ QUESTIONS */}
          <View style={{ flex: 1 }}>
            <ScrollView
              horizontal
              snapToInterval={width}
              decelerationRate="fast"
              showsHorizontalScrollIndicator={false}
              bounces={false}
              ref={(ref) => {
                setRef(ref);
              }}
            >
              {quiz.map((question, index) => (
                <Question
                  key={index}
                  index={index}
                  isLastItem={quiz.length - 1 === index}
                  question={question}
                  onClickNav={handleChangeQuestion}
                  onClickOption={handleOptionSelect}
                />
              ))}
            </ScrollView>
          </View>
        </View>
      )}
    </MainContainer>
  );
};

export default QuizScreen;

const styles = StyleSheet.create({});
