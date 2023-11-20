"use client";

import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import "../style/globals.css";
const Home = () => {
  const [plusButtonClickCount, setPlusButtonClickCount] = useState(0);

  const handlePlusButtonClick = () => {
    setPlusButtonClickCount((prevCount) => prevCount + 1);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <Head>
        <title>Next.js Avatar Page</title>
        <meta name="description" content="Next.js Avatar Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="w-full h-16 bg-teal-500 flex justify-end items-center p-4">
        <div className="relative w-10 h-10 mr-4">
          <Image
            // src="/your-image.jpg"
            alt="Avatar"
            className="rounded-full"
            width={40}
            height={40}
          />
        </div>
      </header>

      <main className="flex flex-col items-center justify-center flex-grow">
        <div className="flex items-center">
          <div className="bg-white-100 p-8 rounded shadow-md w-96 mr-4">
            <h2 className="text-2xl font-bold mb-4">New chatbot info</h2>
            <p>Content of the new chatbotS</p>
          </div>

          <div className="bg-white p-8 rounded shadow-md w-96">
            <h2 className="text-2xl font-bold mb-4">Card</h2>
            <p>Chatbots made: {plusButtonClickCount}</p>
          </div>

          <a
            href="../chatbot-info"
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full ml-4 focus:outline-none focus:shadow-outline"
            onClick={handlePlusButtonClick}
          >
            +
          </a>
        </div>
      </main>
    </div>
  );
};

export default Home;
