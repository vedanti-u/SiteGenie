"use client";
import React, { useState, useEffect } from "react";
import "../style/globals.css";

export default function Chatbot() {
  const [inputValue, setInputValue] = useState("");
  const [chatLog, setChatLog] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setChatLog((prevChatLog) => [
      ...prevChatLog,
      { type: "user", message: inputValue },
    ]);
    setInputValue("");
  };

  const sendMessage = {message} => {
    const url ='';
    const headers = {
      
    }
    const data = {
      
    }

    setIsLoading(true);
  }
  useEffect(() => {}, []);

  return (
    <>
      <div className="w-full m-10 p-10">
        <div className="bg-white shadow-lg rounded-lg max-w-md">
          <div className="border-b-2 px-2 py-4">
            <div className="sm:bg-blue-900 rounded-lg">
              <div className="inline-flex items-center">
                <span className="text-white ml-8">
                  <b>SiteGinnie.AI</b>
                </span>
              </div>
            </div>
            {chatLog.map((message, index) => (
              <div key={index}>{message.message}</div>
            ))}
            <div className="h-80 flex flex-col space-y-4 max-w-md px-2 mb-2 mt-2">
              <div className="flex-col items-start">
                <span className="bg-blue-500 px-4 py-2 text-white rounded-b-xl rounded-tl-xl mb-2 mt-2">
                  How can I help you?
                </span>
              </div>

              <div className="flex flex-col items-end">
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
        <iframe>

        </iframe>
      </div>
    </>
  );
}
