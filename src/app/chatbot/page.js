"use client";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import "../../styles/globals.css";
import {
  ArrowLeft,
  BotIcon,
  LoaderCircleIcon,
  SendHorizontalIcon,
  User2Icon,
} from "lucide-react";
import Tempchatlogo from "@/components/tempchatlogo";
import Loadingsvg from "./loadingsvg";

const Chatbot = () => {
  const [question, setQuestion] = useState("");
  const [chatLog, setChatLog] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  var router = useSearchParams();
  useEffect(() => {
    setQuestion(router.get("url") || "");
  }, [router]);

  //console.log(router.get('url'))
  // const [isLoading, setIsLoading] = useState(false);
  //setInputValue(router.get('url'));

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setChatLog((prevChatLog) => [
      ...prevChatLog,
      { type: "user", message: question },
    ]);

    const raw = JSON.stringify({
      url: "https://portfolio-react-jaya.vercel.app/",
      prompt: question,
    });
    setQuestion("");

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
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsLoading(false); // Set loading state back to false after receiving the result
    }
  };

  return (
    <>
      <main className="items-center justify-center h-screen">
        <section className="flex flex-col w-full h-full">
          <nav className="chatbot-header bg-indigo-600 text-white py-3 fixed top-0 w-full z-50">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Button
                  variant="primary"
                  className="flex items-center bg-indigo-600 text-white hover:bg-indigo-600"
                >
                  <a
                    href="/user-dashboard"
                    className="flex items-center space-x-2"
                  >
                    <ArrowLeft className="text-bold" />
                    <span className="text-2xl">Your ChatBot</span>
                  </a>
                </Button>
              </div>
            </div>
          </nav>
          <div className="flex-1 relative overflow-y-auto h-full my-4 pb-0 md:my-6">
            <div className="block mt-4 md:mt-6 pb-[7px] clear-both">
              <div className="pt-6">
                <div className="flex items-center space-x-2">
                  <div className="flex items-center justify-center w-12 h-12 bg-gray-500 rounded-full">
                    <svg
                      width="64px"
                      height="64px"
                      viewBox="-9.75 -9.75 34.50 34.50"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      stroke="#ffffff"
                      stroke-width="0.765"
                    >
                      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <path
                          d="M8.99996 2.49988L8.99996 1.99988L8.99996 2.49988ZM5.99995 2.4999L5.99995 2.9999L5.99995 2.4999ZM12.8556 11.9222L12.5051 11.5656L12.3012 11.7661L12.3705 12.0434L12.8556 11.9222ZM13.5 14.4999L13.3788 14.985C13.5492 15.0276 13.7294 14.9776 13.8536 14.8534C13.9778 14.7293 14.0277 14.549 13.9851 14.3786L13.5 14.4999ZM9.50005 13.5L9.14649 13.1464L8.52204 13.7709L9.37879 13.985L9.50005 13.5ZM9.52482 13.4752L9.87838 13.8287C10.0275 13.6796 10.067 13.453 9.97722 13.2623C9.88743 13.0715 9.68761 12.9575 9.4777 12.9774L9.52482 13.4752ZM0.5 7.99988L0 7.99988L0.5 7.99988ZM7 0V2.5H8V0H7ZM8.99996 1.99988L5.99994 1.9999L5.99995 2.9999L8.99997 2.99988L8.99996 1.99988ZM15 7.99988C15 4.68615 12.3137 1.99985 8.99996 1.99988L8.99997 2.99988C11.7614 2.99985 14 5.23844 14 7.99988H15ZM13.2061 12.2787C14.3128 11.1908 15 9.67513 15 7.99988H14C14 9.39612 13.4284 10.6579 12.5051 11.5656L13.2061 12.2787ZM13.9851 14.3786L13.3407 11.8009L12.3705 12.0434L13.015 14.6212L13.9851 14.3786ZM9.37879 13.985L13.3788 14.985L13.6213 14.0148L9.62131 13.0149L9.37879 13.985ZM9.17127 13.1216L9.14649 13.1464L9.8536 13.8535L9.87838 13.8287L9.17127 13.1216ZM9.00001 13.9999C9.19278 13.9999 9.38357 13.9908 9.57194 13.973L9.4777 12.9774C9.32061 12.9923 9.16127 12.9999 9.00001 12.9999V13.9999ZM5.99999 13.9999H9.00001V12.9999H5.99999V13.9999ZM0 7.99988C-9.17912e-06 11.3136 2.68628 13.9999 5.99999 13.9999V12.9999C3.23857 12.9999 0.999992 10.7613 1 7.99988L0 7.99988ZM5.99994 1.9999C2.68626 1.99993 9.17912e-06 4.6862 0 7.99988L1 7.99988C1.00001 5.23849 3.23855 2.99993 5.99995 2.9999L5.99994 1.9999ZM7.5 8C6.67157 8 6 7.32843 6 6.5H5C5 7.88071 6.11929 9 7.5 9V8ZM9 6.5C9 7.32843 8.32843 8 7.5 8V9C8.88071 9 10 7.88071 10 6.5H9ZM7.5 5C8.32843 5 9 5.67157 9 6.5H10C10 5.11929 8.88071 4 7.5 4V5ZM7.5 4C6.11929 4 5 5.11929 5 6.5H6C6 5.67157 6.67157 5 7.5 5V4ZM7.49999 12C8.56368 12 9.54241 11.6303 10.3127 11.0128L9.68724 10.2326C9.08795 10.713 8.32817 11 7.49999 11V12ZM4.68727 11.0128C5.45757 11.6303 6.43629 12 7.49999 12V11C6.6718 11 5.91202 10.713 5.31273 10.2326L4.68727 11.0128Z"
                          fill="#ffffff"
                        ></path>{" "}
                      </g>
                    </svg>{" "}
                  </div>
                  <span className="bg-slate-700 text-white rounded-t-full rounded-b-full p-3 max-w-sm">
                    Hello, how can I assist you today?
                  </span>
                </div>
              </div>
              {chatLog.map((message, index) => (
                <div
                  key={index}
                  className={`flex space-x-2 py-1 ${
                    message.type === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`${
                      message.type === "user"
                        ? "bg-indigo-600 text-white"
                        : "bg-slate-600 text-white"
                    } rounded-t-full rounded-b-full p-3 max-w-sm text-justify break-words`}
                  >
                    {message.message}
                  </div>

                  <div className="flex items-center justify-center w-12 h-12 bg-gray-500 rounded-full">
                    <User2Icon className="text-white" />
                  </div>
                </div>
              ))}

              {isLoading && (
                <div className="flex justify-start py-1">
                  <div className="flex items-center space-x-2">
                    <div className="flex items-center justify-center w-12 h-12 bg-gray-500 rounded-full">
                      <Tempchatlogo className="text-white" />
                    </div>
                    <span className="bg-white text-white rounded-t-full rounded-b-full p-3 max-w-sm">
                      <Loadingsvg />
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="chatbot-footer border-t border-gray-200">
            <div className="relative chatbot-footer">
              <form className="flex items-center pb-1 px-3">
                <input
                  type="text"
                  placeholder="Please type here....."
                  className="flex-1 py-1 border border-transparent focus:border-white focus:outline-none"
                  id="inputField"
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                />
                <button
                  type="submit"
                  onClick={handleSubmit}
                  id="submitButton"
                  className="ml-2"
                >
                  <SendHorizontalIcon />
                </button>
              </form>
            </div>
            <div className="chatbot-header bg-indigo-600 text-white">
              <div className="items-center">
                <div className="flex items-center justify-center">
                  <Button
                    variant="primary"
                    className="bg-indigo-600 text-white hover:bg-indigo-600"
                  >
                    Powered by ©
                    <a href="/" className="font-semibold">
                      SiteGenie.ai
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
export default Chatbot;
