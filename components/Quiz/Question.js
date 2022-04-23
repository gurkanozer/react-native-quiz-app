import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState, useContext } from "react";
import { GlobalContext } from "../../context/globalState";
import colors from "../../constants/colors";
import Button from "../Button";
import { Octicons } from "@expo/vector-icons";
const { width } = Dimensions.get("window");

const Question = ({
  question,
  onClickNav,
  onClickOption,
  index,
  isLastItem,
}) => {
  const { getScore, score } = useContext(GlobalContext);
  const [options, setOptions] = useState([]);
  const { navigate } = useNavigation();
  const shuffleOptions = () => {
    let array = [question.correct_answer, ...question.incorrect_answers];
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    setOptions(array);
  };
  const showIcon = (op) => {
    if (op === question.selectedOption && question.isCorrect) {
      return "check";
    } else if (op === question.selectedOption && !question.isCorrect) {
      return "x";
    } else return "circle";
  };

  const handleOptionSelect = (data) => {
    if (question.selectedOption === null) {
      let isCorrect = question.correct_answer === data ? true : false;
      let updatedQuestion = { ...question, selectedOption: data, isCorrect };
      onClickOption(updatedQuestion);
    }
  };
  const handleFinishQuiz = () => {
    getScore();
    navigate("Result");
  };
  useEffect(() => {
    shuffleOptions();
  }, []);

  return (
    <View style={[styles.container, { width: width }]}>
      <View>
        {/*----------- QUESTION TITLE */}
        <View style={styles.questionContainer}>
          <Text style={styles.questionText}>
            {decodeURIComponent(question.question)}
          </Text>
        </View>

        {/*----------- OPTIONS */}
        {options.length > 0 && (
          <View style={{ marginBottom: 30 }}>
            {options.map((op, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.optionContainer,
                  question.selectedOption === op && question.isCorrect
                    ? styles.correctAnswer
                    : "",
                  question.selectedOption === op && !question.isCorrect
                    ? styles.incorrectAnswer
                    : "",
                ]}
                onPress={() => handleOptionSelect(op)}
              >
                <Octicons name={showIcon(op)} size={24} color={colors.white} />

                <View style={{ width: "100%", flex: 1 }}>
                  <Text style={styles.optionText}>
                    {decodeURIComponent(op)}
                  </Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        )}
      </View>

      {/*----------- BUTTONS */}
      <View style={styles.navigationContainer}>
        {index > 0 ? (
          <Button text="Prev" onPress={() => onClickNav(index - 1)} />
        ) : (
          <View />
        )}
        {!isLastItem ? (
          <Button text="Next" onPress={() => onClickNav(index + 1)} />
        ) : (
          <Button
            text="Finish"
            onPress={() => handleFinishQuiz()}
            backgroundColor={colors.green}
          />
        )}
      </View>
    </View>
  );
};

export default Question;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
    justifyContent: "space-between",
  },
  questionContainer: {
    alignItems: "center",
    marginTop: 10,
    marginBottom: 30,
  },
  questionText: {
    fontFamily: "font-bold",
    fontSize: 18,
    color: colors.white,
    width: "100%",
  },
  optionContainer: {
    width: "100%",
    height: 44,
    paddingHorizontal: 10,
    justifyContent: "center",
    backgroundColor: colors.blue,
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  correctAnswer: {
    backgroundColor: colors.green,
  },
  incorrectAnswer: {
    backgroundColor: colors.red,
  },
  optionText: {
    fontFamily: "font-regular",
    fontSize: 14,
    color: colors.white,
    marginLeft: 10,
  },
  navigationContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 30,
  },
});
