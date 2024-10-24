import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-blue-100 p-8">
      <div className="max-w-5xl mx-auto rounded-xl py-10">
        <h1 className="text-4xl font-bold text-center text-blue-900 mb-8">
        О MindWorks
        </h1>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-blue-800 mb-4">
          Что такое MindWorks?
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
          <strong className="text-blue-900">MindWorks</strong> - это наш стартап,
            направленный на профилактику деменции. Наш проект построен вокруг
            веб-приложения, которое помогает пользователям оценить свои когнитивные
            способности через специальный тест и предлагает различные упражнения
            для тренировки мозга. Тем не менее,{" "}
            <strong className="text-blue-900">MindWorks</strong> - это больше, чем
            просто приложение. Наш проект также делает акцент на создании
            сообщества, потому что мы верим, что социальная жизнь играет ключевую
            роль в поддержании здоровья мозга.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mt-4">
            Деменция является актуальной проблемой, и мы стремимся внести свой
            вклад в её решение. Наш стартап уже получил признание, выиграв
            несколько конкурсов, и мы полны решимости продолжать его развитие. Мы
            активно развиваем наше присутствие в социальных сетях, где делимся
            полезной информацией и поддерживаем связь с нашим сообществом.{" "}
            <strong className="text-blue-900">MindWorks</strong> - это не просто
            приложение, а создание среды, где каждый может заботиться о своём
            когнитивном здоровье.
          </p>
        </section>

        <section className="mb-12">
        <h2 className="text-3xl font-semibold text-blue-800 mb-4">
            О Нас
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Мы команда{" "}
            <strong className="text-blue-900">SheCodes Impact</strong>, в составе{" "}
            <strong className="text-blue-900">Амели Арзыкуловой</strong> и{" "}
            <strong className="text-blue-900">Айганым Тышканбаевой</strong>. Мы
            являемся полуфиналистами конкурса Technovation и развиваем наш стартап,
            направленный на профилактику деменции. Наша цель - внести значимый
            вклад в улучшение качества жизни людей, и мы активно работаем над этим.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mt-4">
            Наш путь отмечен не только достижениями в разработке инновационных
            решений, но и победами в престижных бизнес-инженерных инкубаторах,
            таких как MOST BI и Университет Сатпаева. Мы верим в силу знаний и
            общения, поэтому активно ведём наши социальные сети, где делимся
            полезной информацией, проводим офлайн-сессии и тренинги для повышения
            осведомленности о деменции.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mt-4">
            Мы постоянно развиваем наш проект, участвуем в различных конкурсах и
            сотрудничаем с партнерами для проведения тестов и исследований.
            Несмотря на то, что наш путь только начинается, мы уже достигли
            значительных успехов: Амели уже окончила школу, в то время как Айганым,
            будучи в 11 классе, продолжает совмещать учёбу с развитием нашего
            стартапа.
          </p>
        </section>

        <section className="text-center mt-10">
        <h3 className="text-2xl font-semibold text-blue-800">
            Присоединяйтесь к нам в нашем путешествии!
          </h3>
          <p className="text-lg text-gray-700 mt-4">
            Подписывайтесь на наши социальные сети и станьте частью нашего
            сообщества, посвященного когнитивному здоровью и инновациям.
          </p>
          <div className="mt-6 flex justify-center space-x-4">
            <a
              href="https://www.instagram.com/mindworks_lab?igsh=MmduY2s2cGh0bXJ6&utm_source=qr"
              className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600 transition"
            >
              Instagram
            </a>
            <a
              href="mailto:shecodesimpact@mail.ru"
              className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600 transition"
            >
              Gmail
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
