"use client";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import SvgLogo from "@/components/chatbotLogo";
import { Button } from "@/components/ui/button";

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
      <main
        style={{
          fontWeight: "400",
          height: "97vh",
          margin: "8px",
        }}
        className="items-center justify-center"
      >
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
                <div className="flex items-center justify-center">
                  <SvgLogo style={{ fill: "white", marginRight: "0.5rem" }} />
                  <span
                    className="font-semibold text-white "
                    style={{ fontSize: "2em" }}
                  >
                    SiteGenie
                  </span>
                </div>
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
                    <div className="bg-indigo-600 text-white rounded-lg p-4 max-w-sm">
                      {question}
                    </div>
                  </div>
                  <button
                    disabled
                    type="button"
                    class="text-white bg-gray-500  rounded-lg p-4 max-w-sm"
                  >
                    <svg
                      aria-hidden="true"
                      role="status"
                      class="inline w-4 h-4 me-3 text-white animate-spin"
                      viewBox="0 0 100 101"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="#E5E7EB"
                      />
                      <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentColor"
                      />
                    </svg>
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
            <form className="flex items-center gap-2">
              <input
                type="text"
                placeholder="Please type here....."
                className="flex-1 rounded-lg px-4 py-2 border border-indigo-600"
                id="inputField"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
              />

              <button
                type="submit"
                onClick={handleSubmit}
                className="flex-shrink-0 bg-indigo-600 text-white rounded-md px-4 py-2 transition duration-300 ease-in-out  focus:outline-none focus:ring flex items-center gap-2"
                id="submitButton"
              >
                <span className="hidden md:inline-block font-semibold text-sm">
                  Send
                </span>
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
              </button>
            </form>
          </div>
        </section>
      </main>
    </>
  );
};
export default Chatbot;
