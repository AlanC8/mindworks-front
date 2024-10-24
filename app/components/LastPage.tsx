import { useRouter } from 'next/navigation';
import React from 'react';

const LastPage: React.FC = () => {
    const router = useRouter()
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-white to-purple-200 p-6">
      <div className="text-center">
        <p className="text-lg font-medium text-gray-800 mb-4">
          Ваша память была оценена на
        </p>
        <p className="text-5xl font-bold text-gray-800 mb-6">6 из 10</p>
        <p className="text-lg font-medium text-gray-800 mb-8">
          Перейдите к вашему личному плану обучения
        </p>
        <button onClick={() => router.push("/trainings")} className="bg-purple-500 text-white py-3 px-6 rounded-full text-lg font-medium hover:bg-purple-600 transition">
          Приступить к тренировкам!
        </button>
      </div>
    </div>
  );
};

export default LastPage;
