// GET Home method

import { useEffect } from "react";

const fetchData = async () => {
  const requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  try {
    const response = await fetch(
      "https://us8c1blf22.execute-api.ap-south-1.amazonaws.com/stg/",
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
