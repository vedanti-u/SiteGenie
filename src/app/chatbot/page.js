"use client";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import "../../styles/globals.css";
const Chatbot = () => {
  const [question, setQuestion] = useState("");
  const [chatLog, setChatLog] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  var router = useSearchParams();
  useEffect(() => {
    // Set inputValue on component mount using query parameter
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
          <div className="chatbot-header bg-indigo-600 text-white">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Button
                  variant="link"
                  className="bg-indigo-600 text-white hover:bg-indigo-600"
                >
                  Go Back
                </Button>
              </div>
            </div>
          </div>

          <div className="flex-1 relative overflow-y-auto my-4 md:my-6">
            <div className="block mt-4 md:mt-6 pb-[7px] clear-both">
              {isLoading ? (
                <>
                  <div
                    className="flex justify-end"
                    key={chatLog.length} // Use a unique key to force re-render
                  >
                    <div className="bg-indigo-600 text-white rounded-lg p-2 max-w-sm">
                      {question}
                    </div>
                  </div>
                  <button
                    disabled
                    type="button"
                    class="text-white bg-gray-500  rounded-lg p-4 max-w-sm"
                  >
                    Loading...
                  </button>
                </>
              ) : (
                chatLog.map((message, index) => (
                  <div
                    key={index}
                    className={`flex ${
                      message.type === "user" ? "justify-end" : "justify-start"
                    }`}
                  >
                    <div
                      className={`${
                        message.type === "user"
                          ? "bg-indigo-600 text-white"
                          : "bg-gray-500 text-white"
                      } rounded-lg p-4 max-w-sm`}
                    >
                      {message.message}
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
          <div className="chatbot-footer">
            <div className="relative chatbot-footer px-20">
              <form className="flex items-center py-2 px-20">
                <input
                  type="text"
                  placeholder="Please type here....."
                  className="flex-1 rounded-lg px-4 py-2 border border-gray-300 pr-12"
                  id="inputField"
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                />
                <button
                  type="submit"
                  onClick={handleSubmit}
                  className="absolute inset-y-0 right-0 flex-shrink-0 bg-indigo-600 text-white rounded-md px-4 py-2 transition duration-300 ease-in-out focus:outline-none focus:ring"
                  id="submitButton"
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
export default Chatbot;
