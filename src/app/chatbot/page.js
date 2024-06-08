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
import GenieLogo from "@/components/genie-logo";

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
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    // Cleanup the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

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
                    href="/chatbot_preview"
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
                  <div className="flex items-center justify-center w-12 h-12 bg-black rounded-full">
                    <GenieLogo />
                  </div>
                  <span className="bg-indigo-800 text-white rounded-t-full rounded-b-full p-3 max-w-sm">
                    Hello, how can I assist you today?
                  </span>
                </div>
                {/* <span>{time}</span> */}
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
                        : "bg-indigo-800 text-white"
                    } rounded-t-full rounded-b-full p-3 max-w-sm text-justify break-words`}
                  >
                    {message.message}
                  </div>

                  <div className="flex items-center justify-center w-12 h-12 bg-black rounded-full">
                    <User2Icon className="text-white" />
                  </div>
                </div>
              ))}

              {isLoading && (
                <div className="flex justify-start py-1">
                  <div className="flex items-center space-x-2">
                    <div className="flex items-center justify-center w-12 h-12 bg-black rounded-full">
                      <GenieLogo />{" "}
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
