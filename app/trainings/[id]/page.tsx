"use client";
import { useParams } from "next/navigation";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import MemGame from "@/app/components/MemGame";
import Sudoku from "@/app/components/Sudoku";
import SimonSays from "@/app/components/SimonSays";

const TrainingDetailPage: React.FC = () => {
  const params = useParams();

  if (params.id === "memorygame") {
    return <MemGame />;
  }

  if(params.id === "sudoku") {
    return <Sudoku/>
  }

  if(params.id === "simonsays") {
    return <SimonSays />
  }

  return <div>page {params.id}</div>;
};

export default TrainingDetailPage;
