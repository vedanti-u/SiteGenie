import React, { useEffect } from "react";
import { useState } from "react";

export default function Chatbot() {
  const [inputValue, setInputValue] = useState("");
  const [chatLog, setChatLog] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("handlesubmit working ");
    setChatLog((prevChatLog) => [
      ...prevChatLog,
      { type: "user", message: inputValue },
    ]);

    console.log("setchatlog working ");

    setInputValue("");
  };

  useEffect(() => {}, []);

  return (
    <>
      <div className="w-full m-10 p-10">
        {/*chatbot header div*/}
        <div className="bg-white shadow-lg rounded-lg max-w-md">
          {/*chatbot header div*/}

          <div className="border-b-2 px-2 py-4">
            {/*chatbot body div*/}
            <div className="sm:bg-blue-900 rounded-lg">
              <div className="inline-flex items-center">
                <h1 className="bg-gradient-to-r text-white text-center text-6xl">
                  <b>SiteGinni.AI</b>
                </h1>
              </div>
            </div>
            {chatLog.map((message, index) => (
              <div key="index">{message.message}</div>
            ))}
            <div className="h-80 flex flex-col space-y-4 max-w-md px-2 mb-2 mt-2">
              {/*chatbot text*/}
              <div className="flex-col items-start">
                <span className="bg-blue-500 px-4 py-2 text-white rounded-b-xl rounded-tl-xl mb-2 mt-2">
                  How I can help you?
                </span>
              </div>

              <div className="border-t-2 flex items-center py-4 px-2">
                <input
                  type="text"
                  placeholder="Please type here....."
                  className="flex-1 rounded-lg px-4 py-2 border-2 mr-2"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                ></input>
                <button
                  type="submit"
                  className="relative right-16"
                  onSubmit={handleSubmit}
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
