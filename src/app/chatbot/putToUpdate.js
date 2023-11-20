// PUT To Update Embeddings

import { useEffect } from "react";

const fetchData = async () => {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const raw = JSON.stringify({
    url: "https://skippi.in/",
  });

  const requestOptions = {
    method: "PUT",
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

const Home = () => {
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1>Next.js Data Fetching Example</h1>
      {/* Additional content can be added here */}
    </div>
  );
};

export default Home;
