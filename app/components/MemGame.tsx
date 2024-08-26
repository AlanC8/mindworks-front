"use client";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import duration from "dayjs/plugin/duration";
import Card from "./Card";
import { useRouter } from "next/navigation";
dayjs.extend(duration);

export type Card = {
  src: string;
  id: number;
  matched: boolean;
};

const CARD_IMAGES = [
  { src: "/images/fries.png", matched: false },
  { src: "/images/cheeseburger.png", matched: false },
  { src: "/images/ice-cream.png", matched: false },
  { src: "/images/pizza.png", matched: false },
  { src: "/images/milkshake.png", matched: false },
  { src: "/images/hotdog.png", matched: false },
] as const;

export default function MemGame() {
  const router = useRouter();
  const [cards, setCards] = useState([] as Card[]);
  const [turns, setTurns] = useState(0);

  const [choiceOne, setChoiceOne] = useState<Card | null>(null);
  const [choiceTwo, setChoiceTwo] = useState<Card | null>(null);

  const [disabled, setDisabled] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);

  const handleChoice = (card: Card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };

  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns((prevTurn) => prevTurn + 1);
    setDisabled(false);
  };

  const shuffledCards = () => {
    const shuffledCards = [...CARD_IMAGES, ...CARD_IMAGES]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    setCards(shuffledCards);
    setTurns(0);
    setSeconds(0);
    setMinutes(0);
    setHours(0);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [cards]);

  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true);
      if (choiceOne.src === choiceTwo.src) {
        setCards((prevCards) =>
          prevCards.map((card) =>
            card.src === choiceOne.src ? { ...card, matched: true } : card
          )
        );
      }

      setTimeout(() => resetTurn(), 1000);
    }
  }, [choiceOne, choiceTwo]);

  useEffect(() => {
    shuffledCards();
  }, []);

  useEffect(() => {
    if (seconds === 60) {
      setSeconds(0);
      setMinutes((prevMinutes) => prevMinutes + 1);
    }

    if (minutes === 60) {
      setMinutes(0);
      setHours((prevHours) => prevHours + 1);
    }
  }, [seconds, minutes]);

  return (
    <div className="w-full h-[100dvh] flex flex-col justify-center items-center bg-gradient-to-b from-purple-100 to-blue-100 text-center">
      <div className="max-w-md w-full py-8  rounded-lg ">
        <h1 className="m-4 font-bold text-2xl text-gray-800">Memory Game</h1>
        <div className="mt-8 flex justify-center items-center text-gray-800">
          <div className="bg-white bg-opacity-80 rounded-lg shadow-md p-4 flex justify-between items-center text-gray-800 text-lg font-semibold">
            <div className="flex items-center space-x-2">
              <span>🔄</span>
              <span>Turns: {turns}</span>
            </div>
            <div className="flex items-center ml-4 space-x-2">
              <span>⏱️</span>
              <span>
                {dayjs.duration({ minutes, seconds }).format("mm:ss")}
              </span>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center mt-8">
          <div className="grid grid-cols-3 gap-4">
            {cards.map((card) => (
              <Card
                key={card.id}
                card={card}
                handleChoice={handleChoice}
                flipped={
                  card === choiceOne || card === choiceTwo || card.matched
                }
                disabled={disabled}
              />
            ))}
          </div>
        </div>
        <button
          onClick={shuffledCards}
          className="border mt-10 rounded-lg px-4 py-2 font-semibold bg-purple-500 text-white hover:bg-purple-600 transition duration-200"
        >
          New Game
        </button>
        <p
          onClick={() => router.push("/trainings")}
          className="text-gray-600 text-md mt-2 underline"
        >
          Вернуться к играм
        </p>
      </div>
    </div>
  );
}
