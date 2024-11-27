"use client"
import React from 'react';
import { useRouter } from 'next/navigation';
import { IoArrowBack } from 'react-icons/io5'; // Пакет react-icons для стрелки

const News = () => {
  const router = useRouter();

  const newsData = [
    {
      id: 1,
      title: 'Последние обновления в технологии',
      content:
        'На этой неделе ведущие компании представили новые разработки в области искусственного интеллекта. Узнайте больше о том, как это повлияет на нашу повседневную жизнь.',
      date: '27 ноября 2024',
      author: 'Иван Иванов',
    },
    {
      id: 2,
      title: 'Советы по кибербезопасности',
      content:
        'Эксперты делятся своими советами о том, как защитить свои данные в эпоху цифровых угроз. Прочтите наш список рекомендаций.',
      date: '26 ноября 2024',
      author: 'Анна Смирнова',
    },
    {
      id: 3,
      title: 'Мировые новости науки',
      content:
        'Ученые сделали прорыв в исследовании космоса, открыв новые горизонты для межпланетных путешествий.',
      date: '25 ноября 2024',
      author: 'Ольга Петрова',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-50 to-blue-100">
      {/* Кнопка для возврата на главную страницу */}
      <div className="absolute top-4 left-4">
        <button
          onClick={() => router.push('/')}
          className="flex items-center gap-2 text-blue-500 hover:text-blue-600 transition"
        >
          <IoArrowBack size={20} />
          <span className="text-sm font-medium">На главную</span>
        </button>
      </div>

      {/* Контент страницы */}
      <div className="bg-white p-6 rounded-xl shadow-lg max-w-3xl w-full">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
          Новости
        </h2>
        <div className="space-y-4">
          {newsData.map((news) => (
            <div
              key={news.id}
              className="p-4 bg-gray-50 rounded-lg shadow hover:shadow-md transition"
            >
              <h3 className="text-lg font-bold text-gray-800">{news.title}</h3>
              <p className="text-gray-600 text-sm mt-1">{news.content}</p>
              <div className="text-gray-500 text-xs mt-2 flex justify-between items-center">
                <span>Автор: {news.author}</span>
                <span>{news.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;
