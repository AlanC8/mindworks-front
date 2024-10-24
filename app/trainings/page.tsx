"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Header from "../components/Header";

interface Game {
  id: string;
  name: string;
  description: string;
  image: string;
  difficulty: string;
  popularity: number;
  releaseDate: string;
}

const gamesData: Game[] = [
  {
    id: "memorygame",
    name: "Memory Game",
    description: "Start to play game to improve your memory",
    image: "/memgame.png",
    difficulty: "Medium",
    popularity: 4.5,
    releaseDate: "2023-01-10",
  },
  {
    id: "sudoku",
    name: "Sudoku",
    description: "It's a number puzzle that originated in Japan",
    image: "/mindworks.jpg",
    difficulty: "Hard",
    popularity: 4.7,
    releaseDate: "2022-12-20",
  },
];

const TrainingPage: React.FC = () => {
  const router = useRouter();
  const [inputValue, setInputValue] = useState<string>("");
  const [sortValue, setSortValue] = useState<string>("popularity");

  const filteredGames = gamesData
    .filter((game) =>
      game.name.toLowerCase().includes(inputValue.toLowerCase())
    )
    .sort((a, b) => {
      switch (sortValue) {
        case "popularity":
          return b.popularity - a.popularity;
        case "newest":
          return (
            new Date(b.releaseDate).getTime() -
            new Date(a.releaseDate).getTime()
          );
        case "difficulty":
          const difficulties: { [key: string]: number } = {
            Easy: 1,
            Medium: 2,
            Hard: 3,
          };
          return difficulties[a.difficulty] - difficulties[b.difficulty];
        default:
          return 0;
      }
    });

  return (
    <div className="flex flex-col items-center justify-start min-h-screen px-6 bg-gradient-to-b from-blue-50 to-blue-100">
      <div className="w-[90%] mx-auto py-2">
        <Header />
      </div>
      <div className="w-full max-w-3xl mb-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <input
            type="text"
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
            placeholder="Search games..."
            className="w-full rounded rounded-lg md:w-3/5 p-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <div className="flex justify-between items-center w-full md:w-2/5">
            <span className="text-gray-600">Sort by:</span>
            <select
              value={sortValue}
              onChange={(e) => setSortValue(e.target.value)}
              className="w-[1/2] rounded md:w-auto p-2 rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option value="popularity">Popularity</option>
              <option value="newest">Newest</option>
              <option value="difficulty">Difficulty</option>
            </select>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-3xl">
        {filteredGames.map((game) => (
          <div
            key={game.id}
            onClick={() => router.push(`/trainings/${game.id}`)}
            className="bg-white rounded-xl overflow-hidden shadow-md cursor-pointer transition-transform transform hover:scale-105"
          >
            <img
              src={game.image}
              alt={game.name}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold text-gray-800">{game.name}</h3>
              <p className="text-sm text-gray-600">{game.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrainingPage;
