"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import LastPage from "./LastPage";

interface Question {
  _id: string;
  questions: string;
  options: string[];
}

interface TestPageProps {
  currentQuestionIndex: number;
  setCurrentQuestionIndex: React.Dispatch<React.SetStateAction<number>>;
  level: number;
  setLevel: React.Dispatch<React.SetStateAction<number>>;
}

const TestPage: React.FC<TestPageProps> = ({
  currentQuestionIndex,
  setCurrentQuestionIndex,
  level,
  setLevel,
}) => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [inputValue, setInputValue] = useState<string>("");
  const [showNumber, setShowNumber] = useState(true);
  const [timer, setTimer] = useState(5);
  const [lastPage, setLastPage] = useState(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await axios.get("http://localhost:3001/api/v1/get-test");
        setQuestions(response.data);
      } catch (error) {
        console.error("Failed to fetch questions:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchQuestions();
  }, []);

  useEffect(() => {
    if (currentQuestionIndex >= 6) {
      setShowNumber(true);
      setTimer(5);

      const countdown = setInterval(() => {
        setTimer((prev) => {
          if (prev <= 1) {
            clearInterval(countdown);
            setShowNumber(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      return () => clearInterval(countdown);
    }
  }, [currentQuestionIndex]);

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    setTimeout(() => {
      setSelectedOption(null);
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setInputValue("");
      } else {
        setLastPage(true);
      }
    }, 500);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  if (lastPage) {
    return <LastPage />;
  }

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="w-16 h-16 border-t-4 border-b-4 border-blue-500 rounded-full animate-spin"></div>
      </div>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];

  if (currentQuestionIndex >= 6) {
    const originalText = currentQuestion.questions;

    const number = originalText.match(/\[(\d+)\]/)?.[1];
    const parts = originalText.split(/\[\d+\],/);

    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-white to-blue-100 p-6">
        <div className="bg-white p-8 z-10 rounded-3xl shadow-lg text-center w-full max-w-md">
          <p className="text-xl font-medium text-left mb-4 text-gray-800">
            {parts[0].trim()}
          </p>

          {showNumber ? (
            <div className="">
              <p className="text-3xl font-bold mb-4">{number}</p>
              <hr />
              <p className="text-3xl mt-4 font-bold">{timer} seconds</p>
            </div>
          ) : (
            <>
              <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                className="p-4 rounded w-full border-2 border-gray-300 mb-6"
                placeholder="Enter the number"
              />
              <button
                onClick={() => {
                  handleOptionClick((currentQuestionIndex + 1).toString());
                }}
                className="bg-blue-500 text-white py-3 px-4 rounded-full hover:bg-blue-600 w-full"
              >
                Submit
              </button>
            </>
          )}
        </div>
        <div className="absolute inset-0 z-0">
          <div className="absolute top-10 left-1/4 w-72 h-72 bg-blue-200 opacity-50 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-300 opacity-50 rounded-full filter blur-2xl"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-white to-blue-100 p-6">
      <div className="px-2 z-10 mt-[-200px] rounded-3xl text-center w-full max-w-md">
        <h2 className="text-2xl font-medium text-left mb-8 text-gray-800">
          {currentQuestion.questions}
        </h2>

        <div className="flex ml-[-10px] flex-col space-y-2">
          {currentQuestion.options.map((option, index) => (
            <button
              key={index}
              className={`flex items-center space-x-4 p-4 rounded-full text-left w-full ${
                selectedOption === option
                  ? "bg-blue-500 text-white border-blue-500"
                  : "bg-transparent text-gray-800 border-gray-300 hover:bg-blue-100"
              }`}
              onClick={() => handleOptionClick(option)}
            >
              <span
                className={`w-4 h-4 rounded-full border-2 ${
                  selectedOption === option
                    ? "bg-white border-white"
                    : "bg-blue-500 border-blue-500"
                }`}
              />
              <span className="flex-1">{option}</span>
            </button>
          ))}
        </div>
      </div>
      <div className="absolute inset-0 z-0">
        <div className="absolute top-10 left-1/4 w-72 h-72 bg-blue-200 opacity-50 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-300 opacity-50 rounded-full filter blur-2xl"></div>
      </div>
    </div>
  );
};

export default TestPage;
