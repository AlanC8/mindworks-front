"use client";
import { useParams } from "next/navigation";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import MemGame from "@/app/components/MemGame";
import Sudoku from "@/app/components/Sudoku";

const TrainingDetailPage: React.FC = () => {
  const params = useParams();

  if (params.id === "memorygame") {
    return <MemGame />;
  }

  if(params.id === "sudoku") {
    return <Sudoku/>
  }

  return <div>page {params.id}</div>;
};

export default TrainingDetailPage;
