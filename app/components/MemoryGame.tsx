import Image from "next/image";
import { useEffect, useState } from "react";

const MemoryGame: React.FC = () => {
  const [cardArray, setCardArray] = useState([
    { name: "fries", img: "/images/fries.png" },
    { name: "cheeseburger", img: "/images/cheeseburger.png" },
    { name: "ice-cream", img: "/images/ice-cream.png" },
    { name: "pizza", img: "/images/pizza.png" },
    { name: "milkshake", img: "/images/milkshake.png" },
    { name: "hotdog", img: "/images/hotdog.png" },
    { name: "fries", img: "/images/fries.png" },
    { name: "cheeseburger", img: "/images/cheeseburger.png" },
    { name: "ice-cream", img: "/images/ice-cream.png" },
    { name: "pizza", img: "/images/pizza.png" },
    { name: "milkshake", img: "/images/milkshake.png" },
    { name: "hotdog", img: "/images/hotdog.png" },
  ]);

  const [cardsChosen, setCardsChosen] = useState<string[]>([]);
  const [cardsChosenId, setCardsChosenId] = useState<number[]>([]);
  const [cardsWon, setCardsWon] = useState<string[][]>([]);
  const [result, setResult] = useState<number>(0);

  useEffect(() => {
    setCardArray((prevCardArray) =>
      prevCardArray.sort(() => 0.5 - Math.random())
    );
  }, []);

  const flipCard = (id: number) => {
    if (cardsChosen.length === 2) return;

    setCardsChosen((prev) => [...prev, cardArray[id].name]);
    setCardsChosenId((prev) => [...prev, id]);

    if (cardsChosen.length === 1) {
      setTimeout(checkForMatch, 500);
    }
  };

  const checkForMatch = () => {
    const [optionOneId, optionTwoId] = cardsChosenId;
    const newCards = [...cardArray];

    if (optionOneId === optionTwoId) {
      alert("You have clicked the same image!");
    } else if (cardsChosen[0] === cardsChosen[1]) {
      alert("You found a match");
      newCards[optionOneId] = {
        ...newCards[optionOneId],
        img: "/images/white.png",
      };
      newCards[optionTwoId] = {
        ...newCards[optionTwoId],
        img: "/images/white.png",
      };
      setCardsWon((prev) => [...prev, cardsChosen]);
      setResult((prev) => prev + 1);
    } else {
      alert("Sorry, try again");
    }

    setCardsChosen([]);
    setCardsChosenId([]);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h3 className="text-lg font-semibold mb-4">Score: {result}</h3>
      <div className="grid grid-cols-4 gap-4 max-w-xs mx-auto">
        {cardArray.map((card, index) => (
          <div key={index} className="relative">
            <Image
              src={
                cardsWon.flat().includes(card.name)
                  ? "/images/white.png"
                  : card.img
              }
              alt={card.name}
              width={100}
              height={100}
              className="rounded-lg shadow-lg cursor-pointer"
              onClick={() => flipCard(index)}
            />
          </div>
        ))}
      </div>
      {cardsWon.length === cardArray.length / 2 && (
        <div className="mt-4 text-xl font-bold text-green-600">
          Congratulations! You found them all!
        </div>
      )}
    </div>
  );
};

export default MemoryGame;