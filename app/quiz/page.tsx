"use client";
import React, { useState } from "react";
import TestPage from "../components/TestPage";
import Header from "../components/Header";

const QuizPage = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [level, setLevel] = useState(6);

  return (
    <div>
      <TestPage
        currentQuestionIndex={currentQuestionIndex}
        setCurrentQuestionIndex={setCurrentQuestionIndex}
        level={level}
        setLevel={setLevel}
      />
    </div>
  );
};

export default QuizPage;
