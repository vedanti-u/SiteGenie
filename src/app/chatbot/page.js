"use client";
import React, { useState, useEffect } from "react";
import "../style/globals.css";
import axios from "axios";

var requestOptions = {
  method: "GET",
  redirect: "follow",
};

fetch("http://localhost:3000/chatbotprompt", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.log("error", error));

const Chatbot = () => {
  const [inputValue, setInputValue] = useState("");
  const [chatLog, setChatLog] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (event) => {
    console.log("inside handlesubmit");

    event.preventDefault();

    console.log("inside handlesubmit-1");

    setChatLog((prevChatLog) => [
      ...prevChatLog,
      { type: "user", message: inputValue },
    ]);

    console.log("after setchatlog");

    setInputValue("");
  };

  const sendMessage = (message) => {
    const url = "";

    const data = {
      model: "",
      messages: [{ role: "user", content: message }],
    };

    setIsLoading(true);

    axios
      .post(url, data)
      .then((response) => {
        console.log(response);
        setChatLog((prevChatLog) => [
          ...prevChatLog,
          { type: "bot", message: response.data.choices[0].message.content },
        ]);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        console.log(error);
      });
  };

  useEffect(() => {}, []);

  return (
    <>
      <div className="w-full m-10 p-10">
        <div className="bg-white shadow-lg rounded-lg max-w-md">
          <div className="border-b-2 px-2 py-4">
            <div className="sm:bg-blue-900 rounded-lg">
              <div className="flex justify-center items-center">
                <h1 className="text-white text-1xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
                  <b>SiteGinnie.AI</b>
                </h1>
              </div>
            </div>

            <div className="h-80 flex flex-col space-y-4 max-w-md px-2 mb-2 mt-2">
              <div className="flex-col items-start">
                <span className="bg-blue-500 px-4 py-2 text-white rounded-b-xl rounded-tl-xl mb-2 mt-2">
                  How can I help you?
                </span>
              </div>

              <div className="flex flex-col items-end">
                <span className="bg-gray-500 px-4 py-2 text-white mt-2 mb-2 rounded-b-xl rounded-tr-xl">
                  {chatLog.map((message, index) => (
                    <div key={index} className="">
                      {message.message}
                    </div>
                  ))}
                </span>
                <span className="bg-gray-500 px-4 py-2 text-white mt-2 mb-2 rounded-b-xl rounded-tr-xl">
                  {inputValue}
                </span>
              </div>

              <div className="border-t-2 flex items-center py-4 px-2">
                <input
                  type="text"
                  placeholder="Please type here....."
                  className="flex-1 rounded-lg px-4 py-2 border-2 mr-2"
                  id="inputField" // Add id attribute
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                ></input>
                <button
                  type="submit"
                  className="relative right-16"
                  onClick={handleSubmit}
                  id="submitButton"
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <iframe></iframe>
      </div>
    </>
  );
};
export default Chatbot;
