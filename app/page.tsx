"use client";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import Header from "./components/Header";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const user = localStorage.getItem("access");
    if (user) {
      router.push("/login");
    }
  })

  return (
    <div className="">

<div className="h-screen-full overflow-y-hidden">
      <div className="relative w-[90%] mx-auto py-2 z-20">
        <Header />
      </div>
      <div className="relative mt-[-60px] flex flex-col items-center justify-center h-screen overflow-hidden">
        {/* Background Circles */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-200 opacity-50 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-300 opacity-50 rounded-full filter blur-2xl"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 mt-[-100px] rounded-lg text-center max-w-sm">
         <p className="text-2xl font-semibold mb-4">
           Пройдите наш 15-минутный тест для оценки ваших когнитивных способностей
         </p>
         <button
           onClick={() => router.push("/quiz")}
           className="bg-[#9AC9F6] text-black py-2 px-4 rounded mb-6"
         >
           Перейти к тесту
         </button>
         <p className="text-2xl font-semibold mb-4">
           Играйте в игры для пошагового улучшения памяти
         </p>
         <button
           onClick={() => router.push("/trainings")}
           className="bg-[#9AC9F6] text-black py-2 px-4 rounded"
         >
           Перейти к играм
         </button>
       </div>
      </div>
    </div>
    </div>
  );
}
