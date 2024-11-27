"use client";
import React, { useState, useEffect } from "react";

const colors = ["red", "blue", "green", "yellow"];

const SimonSays: React.FC = () => {
  const [sequence, setSequence] = useState<string[]>([]);
  const [userSequence, setUserSequence] = useState<string[]>([]);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("Нажмите 'Начать игру', чтобы начать!");
  const [level, setLevel] = useState<number>(0);

  useEffect(() => {
    if (userSequence.length === sequence.length && sequence.length > 0) {
      if (userSequence.join("") === sequence.join("")) {
        setMessage("Поздравляем, вы выиграли уровень!");
        setLevel((prev) => prev + 1);
        setTimeout(() => addNewColorToSequence(), 1000);
      } else {
        setMessage("Неверная последовательность! Попробуйте снова.");
        setIsPlaying(false);
      }
    }
  }, [userSequence, sequence]);

  const startGame = () => {
    setSequence([]);
    setUserSequence([]);
    setMessage("Игра началась! Смотрите внимательно...");
    setLevel(1);
    setIsPlaying(true);
    addNewColorToSequence();
  };

  const addNewColorToSequence = () => {
    const newColor = colors[Math.floor(Math.random() * colors.length)];
    setSequence((prev) => [...prev, newColor]);
    setUserSequence([]);
  };

  const handleUserClick = (color: string) => {
    if (!isPlaying) return;
    setUserSequence((prev) => [...prev, color]);
  };

  const playSequence = async () => {
    setMessage("Смотрите внимательно...");
    for (const color of sequence) {
      highlightColor(color);
      await new Promise((resolve) => setTimeout(resolve, 600));
    }
    setMessage("Теперь ваша очередь!");
  };

  const highlightColor = (color: string) => {
    const element = document.getElementById(color);
    if (element) {
      element.classList.add("opacity-50", "scale-110");
      setTimeout(() => {
        element.classList.remove("opacity-50", "scale-110");
      }, 300);
    }
  };

  useEffect(() => {
    if (sequence.length > 0) {
      playSequence();
    }
  }, [sequence]);

  return (
    <div className="flex flex-col items-center py-32 bg-gradient-to-b from-blue-100 to-blue-300 min-h-screen">
      <h2 className="text-3xl font-extrabold mb-4 text-gray-700">Simon Says</h2>
      <p className="text-lg mb-6 text-gray-600">{message}</p>
      <p className="text-lg font-bold mb-6">Уровень: {level}</p>

      <div className="grid grid-cols-2 gap-6 mb-8">
        {colors.map((color) => (
          <div
            key={color}
            id={color}
            onClick={() => handleUserClick(color)}
            className={`w-24 h-24 bg-${color}-500 rounded-full cursor-pointer shadow-md transform transition-transform duration-200 hover:scale-105`}
          ></div>
        ))}
      </div>

      <div className="flex gap-4">
        <button
          onClick={startGame}
          className="bg-green-500 text-white px-6 py-2 rounded-lg shadow hover:bg-green-600 transition-colors"
        >
          {isPlaying ? "Перезапустить игру" : "Начать игру"}
        </button>
        <button
          onClick={() => {
            setIsPlaying(false);
            setSequence([]);
            setUserSequence([]);
            setMessage("Игра завершена. Нажмите 'Начать игру' для новой игры.");
            setLevel(0);
          }}
          className="bg-red-500 text-white px-6 py-2 rounded-lg shadow hover:bg-red-600 transition-colors"
        >
          Завершить игру
        </button>
      </div>
    </div>
  );
};

export default SimonSays;
