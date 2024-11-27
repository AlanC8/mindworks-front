"use client";
import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

const RegistrationPage: React.FC = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
    age: "",
    gender: "Мужской",
    education: "Среднее",
    work: "",
  });

  const [error, setError] = useState<string | null>(null); // Состояние для ошибки
  const [success, setSuccess] = useState<boolean>(false); // Состояние успешной регистрации

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value }); // Обновление данных формы
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3001/api/v1/register",
        formData
      );
      if (response.status === 201) {
        setSuccess(true); // Регистрация успешна
        const resp = await axios.post("http://localhost:3001/api/v1/login", {
          email: formData.email,
          password: formData.password,
        });
        if (resp.status === 200) {
          localStorage.setItem("access", resp.data.accessToken); // Сохранение токена
          router.push("/"); // Перенаправление на главную страницу
        }
      }
      setError(null); // Очистка ошибок
    } catch (err) {
      setError("Регистрация не удалась. Пожалуйста, попробуйте снова."); // Установка ошибки
      setSuccess(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 to-blue-100">
      <div className="bg-white p-6 rounded-xl shadow-lg max-w-sm w-full">
        <h2 className="text-xl font-semibold text-gray-800 mb-6 text-center">
          Регистрация
        </h2>
        {error && <div className="text-red-600 mb-4 text-center">{error}</div>}
        {success && (
          <div className="text-green-600 mb-4 text-center">
            Регистрация прошла успешно!
          </div>
        )}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Введите ваш email"
            />
          </div>
          <div>
            <label className="block text-gray-700">Имя пользователя</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
              className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Введите ваше имя пользователя"
            />
          </div>
          <div>
            <label className="block text-gray-700">Пароль</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Введите ваш пароль"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700">Возраст</label>
              <input
                type="number"
                name="age"
                value={formData.age}
                onChange={handleChange}
                required
                className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Возраст"
              />
            </div>
            <div>
              <label className="block text-gray-700">Пол</label>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                required
                className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="Мужской">Мужской</option>
                <option value="Женский">Женский</option>
                <option value="Другой">Другой</option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700">Образование</label>
              <select
                name="education"
                value={formData.education}
                onChange={handleChange}
                required
                className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="Среднее">Среднее</option>
                <option value="Бакалавр">Бакалавр</option>
                <option value="Магистр">Магистр</option>
                <option value="Кандидат наук">Кандидат наук</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-700">Работа</label>
              <input
                type="text"
                name="work"
                value={formData.work}
                onChange={handleChange}
                required
                className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Статус работы"
              />
            </div>
          </div>
          <div className="text-center mt-6">
            <button
              type="submit"
              className="bg-blue-500 w-full text-white py-3 px-6 rounded-full hover:bg-blue-600 transition"
            >
              Зарегистрироваться
            </button>
            <p onClick={() => router.push("/login")} className="text-sm mt-2">
              Уже зарегистрированы? <span className="underline">Войти</span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegistrationPage;
