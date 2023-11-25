//POST generate chatbot
"use client";

import { useEffect } from "react";
const postGenerate = () => {
  useEffect(() => {
    const fetchData = async () => {
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      const raw = JSON.stringify({
        url: "https://skippi.in/",
      });

      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      try {
        const response = await fetch(
          "https://us8c1blf22.execute-api.ap-south-1.amazonaws.com/stg/chatbot",
          requestOptions
        );
        const result = await response.text();
        console.log(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  return <h1>generate chatbot</h1>;
};

export default postGenerate;