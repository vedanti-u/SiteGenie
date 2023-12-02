import Chatbot from "../chatbot/page";
import "../style/globals.css";

import React from "react";

export default function Preview() {
  return (
    <>
      <div className="text-2xl font-bold">
        <div class="w-60 h-30 justify-center"></div>
        <div class="w-60 h-30 justify-center bg-blue-500">
          <div class="flex justify-center">Powered by SiteGenie</div>
        </div>
        <div class="w-80 h-40 justify-center"></div>
        <div
          className="rounded-md overflow-hidden shadow-md flex items-center justify-center"
          style={{ width: "15%", height: "300px" }}
        >
          <Chatbot />
        </div>

        <div class="w-60 h-30 justify-center bg-blue-500">
          <div class="flex justify-center">
            <a href="https://www.bing.com" target="iframe_a">
              Preview Chatbot
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
