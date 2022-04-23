import React, { createContext, useEffect, useState } from "react";
import { CATEGORY_URL, QUIZ_URL } from "../constants/api";

const initialState = {
  categories: {},
  quiz: [],
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [categories, setCategories] = useState(initialState.categories);
  const [quiz, setQuiz] = useState(initialState.quiz);
  const [score, setScore] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  //------------- GET CATEGORIES
  const getCategories = async () => {
    const res = await fetch(CATEGORY_URL);
    const data = await res.json();
    setCategories(data.trivia_categories);
  };
  //----------- GET QUIZ
  const getQuiz = async (category, difficulty) => {
    let url = `${QUIZ_URL}&difficulty=${difficulty.name}`;
    if (category.id != 999) {
      url += `&category=${category.id}`;
    }
    setIsLoading(true);
    let res = await fetch(url);
    let data = await res.json();
    let results = data.results.map((question) => {
      return { ...question, selectedOption: null, isCorrect: false };
    });
    //------some of categories dont have difficulty i guess.
    if (results.length === 0) {
      res = await fetch(`${QUIZ_URL}&category=${category.id}`);
      data = await res.json();
      results = data.results.map((question) => {
        return { ...question, selectedOption: null, isCorrect: false };
      });
    }
    setIsLoading(false);
    setQuiz(results);
  };
  //------------- REMOVE QUIZ
  const removeQuiz = async () => {
    setQuiz([]);
    await setScore(0);
    return true;
  };
  //-------------- GET SCORE
  const getScore = () => {
    quiz.forEach((question) => {
      if (question.isCorrect) setScore((prev) => prev + 1);
    });
  };
  //------------ UPDATE QUIZ
  const updateQuiz = (question) => {
    let updatedQuiz = quiz.map((q) => {
      if (q.question == question.question) return question;
      else return q;
    });
    setQuiz(updatedQuiz);
  };
  useEffect(() => {
    getCategories();
  }, []);
  return (
    <GlobalContext.Provider
      value={{
        categories,
        quiz,
        score,
        isLoading,
        getCategories,
        getQuiz,
        removeQuiz,
        updateQuiz,
        getScore,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
