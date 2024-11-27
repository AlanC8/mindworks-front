import React from "react";

const Sudoku = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-gray-300 p-6">
      <div className="flex items-center justify-center my-24">
        <div
          className=" overflow-hidden"
          style={{ width: "420px", height: "520px" }}
        >
          <iframe
            frameBorder="0"
            scrolling="no"
            src="https://mczak.com/code/sudoku/suframe/"
            style={{ border: "0px", width: "400px", height: "500px" }}
            width="400"
            height="500"
          ></iframe>
        </div>
      </div>
      <div className="text-center text-xs w-1/2 mx-auto opacity-[0.5]">
        Судоку — это логическая игра-головоломка, цель которой состоит в
        заполнении сетки 9x9 так, чтобы в каждой строке, каждом столбце и каждом
        из девяти блоков 3x3 были числа от 1 до 9 без повторений. Изначально в
        сетке размещены некоторые числа, а задача игрока — заполнить оставшиеся
        клетки, соблюдая условия. Решение каждой судоку уникально, что исключает
        возможность двух разных правильных решений. Существуют вариации судоку с
        другими размерами, например 4x4 или 16x16, а также с дополнительными
        правилами, такими как диагональные числа или цветные области. Игра
        развивает логическое мышление, концентрацию и аналитические навыки
      </div>
    </div>
  );
};

export default Sudoku;
