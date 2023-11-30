"use client";

import "../style/globals.css";
import { useState } from "react";
import "../style/font.css";
const Chatbot = () => {
  const [inputValue, setInputValue] = useState("");
  const [chatLog, setChatLog] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setChatLog((prevChatLog) => [
      ...prevChatLog,
      { type: "user", message: inputValue },
    ]);

    const raw = JSON.stringify({
      url: "https://skippi.in/",
      prompt: inputValue,
    });
    // setIsLoading(true);
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: raw,
      redirect: "follow",
    };

    try {
      const response = await fetch(
        "https://us8c1blf22.execute-api.ap-south-1.amazonaws.com/stg/chatbotprompt",
        requestOptions
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const result = await response.json(); // Parse the response as JSON
      console.log(result);
      const textData = result.text;
      setChatLog((prevChatLog) => [
        ...prevChatLog,
        { type: "bot", message: textData },
      ]);
      //setIsLoading(false);
      setInputValue("");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <main
        style={{
          fontFamily: "GeistSans, sans-serif",
          fontWeight: "400",
          height: "100vh",
        }}
        className="flex flex-col items-center justify-center"
      >
        <section className="chatbot-section flex flex-col origin:w-[800px] w-full origin:h-[735px] h-full rounded-md p-2 md:p-6">
          <div className="chatbot-header pb-6">
            <div className="flex justify-between">
              <div className="flex items-center gap-2">
                <svg width="24" height="25" viewBox="0 0 24 25">
                  <path d="M20 9.96057V7.96057C20 6.86057 19.1 5.96057 18 5.96057H15C15 4.30057 13.66 2.96057 12 2.96057C10.34 2.96057 9 4.30057 9 5.96057H6C4.9 5.96057 4 6.86057 4 7.96057V9.96057C2.34 9.96057 1 11.3006 1 12.9606C1 14.6206 2.34 15.9606 4 15.9606V19.9606C4 21.0606 4.9 21.9606 6 21.9606H18C19.1 21.9606 20 21.0606 20 19.9606V15.9606C21.66 15.9606 23 14.6206 23 12.9606C23 11.3006 21.66 9.96057 20 9.96057ZM7.5 12.4606C7.5 11.6306 8.17 10.9606 9 10.9606C9.83 10.9606 10.5 11.6306 10.5 12.4606C10.5 13.2906 9.83 13.9606 9 13.9606C8.17 13.9606 7.5 13.2906 7.5 12.4606ZM16 17.9606H8V15.9606H16V17.9606ZM15 13.9606C14.17 13.9606 13.5 13.2906 13.5 12.4606C13.5 11.6306 14.17 10.9606 15 10.9606C15.83 10.9606 16.5 11.6306 16.5 12.4606C16.5 13.2906 15.83 13.9606 15 13.9606Z" />
                </svg>
                <h1
                  style={{
                    fontFamily: "GeistSans, sans-serif ",
                    fontWeight: "600",
                  }}
                  className="font-sans chatbot-text-primary text-xl md:text-2xl font-medium"
                >
                  Chatbot
                </h1>
              </div>
            </div>
          </div>
          <div className="flex-1 relative overflow-y-auto my-4 md:my-6">
            <div className="block mt-4 md:mt-6 pb-[7px] clear-both">
              {chatLog.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${
                    message.type === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`${
                      message.type === "user"
                        ? "bg-black text-white"
                        : "bg-blue-900 text-white"
                    } rounded-lg p-4 max-w-sm`}
                  >
                    {message.message}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <form className="flex items-center gap-2">
            <input
              type="text"
              placeholder="Please type here....."
              className="flex-1 rounded-lg px-4 py-2 border border-black"
              id="inputField"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />

            <button
              type="submit"
              onClick={handleSubmit}
              className="flex-shrink-0 bg-black text-white rounded-md px-4 py-2 transition duration-300 ease-in-out  focus:outline-none focus:ring flex items-center"
              id="submitButton"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M2.925 5.025L9.18333 7.70833L2.91667 6.875L2.925 5.025ZM9.175 12.2917L2.91667 14.975V13.125L9.175 12.2917ZM1.25833 2.5L1.25 8.33333L13.75 10L1.25 11.6667L1.25833 17.5L18.75 10L1.25833 2.5Z"
                />
              </svg>
              <span className="hidden md:inline-block font-semibold text-sm">
                Send
              </span>
            </button>
          </form>
        </section>
      </main>
      ;
    </>
  );
};
export default Chatbot;
