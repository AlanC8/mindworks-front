import React from "react";

const Sudoku = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-blue-100 to-gray-300 p-6">
      <div className=" overflow-hidden" style={{ width: "420px", height: "520px" }}>
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
  );
};

export default Sudoku;
