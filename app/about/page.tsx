import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-blue-100 p-8">
      <div className="max-w-5xl mx-auto rounded-xl py-10">
        <h1 className="text-4xl font-bold text-center text-blue-900 mb-8">
          About MindWorks
        </h1>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-blue-800 mb-4">
            What is MindWorks?
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            <strong className="text-blue-900">MindWorks</strong> is our startup
            focused on the prevention of dementia. Our project centers around a
            web application that helps users assess their cognitive abilities
            through a special test and offers a variety of brain training
            exercises. However,{" "}
            <strong className="text-blue-900">MindWorks</strong> is more than
            just an application. Our project also emphasizes creating a
            community because we believe that social life plays a key role in
            maintaining brain health.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mt-4">
            Dementia is a pressing issue, and we aim to contribute to its
            solution. Our startup has already been recognized by winning several
            competitions, and we are determined to continue its development. We
            are actively growing our social media presence, where we share
            valuable information and stay connected with our community.{" "}
            <strong className="text-blue-900">MindWorks</strong> is not just
            about an app, but about creating an environment where everyone can
            care for their cognitive health.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-blue-800 mb-4">
            About Us
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            We are the{" "}
            <strong className="text-blue-900">SheCodes Impact</strong> team,
            consisting of{" "}
            <strong className="text-blue-900">Ameli Arzykulova</strong> and{" "}
            <strong className="text-blue-900">Aiganim Tyshkanbaeva</strong>. We
            are proud semi-finalists of the Technovation competition and are
            developing our startup aimed at dementia prevention. Our goal is to
            make a meaningful contribution to improving people's quality of
            life, and we are actively working towards this goal.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mt-4">
            Our journey has been marked not only by achievements in developing
            innovative solutions but also by victories in prestigious
            business-engineering incubators such as MOST BI and Satbayev
            University. We believe in the power of knowledge and communication,
            which is why we actively maintain our social networks where we share
            useful information, and conduct offline sessions and training to
            raise awareness about dementia.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mt-4">
            We are continuously developing our project, participating in various
            competitions, and collaborating with partners to conduct tests and
            research. Despite our journey just beginning, we have already
            achieved significant success: Ameli has already graduated from
            school, while Aiganim, being in the 11th grade, continues to balance
            her studies with the development of our startup.
          </p>
        </section>

        <section className="text-center mt-10">
          <h3 className="text-2xl font-semibold text-blue-800">
            Join Us on Our Journey!
          </h3>
          <p className="text-lg text-gray-700 mt-4">
            Follow us on our social media channels and be a part of our
            community dedicated to cognitive health and innovation.
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
