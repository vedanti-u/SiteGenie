"use client";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../style/globals.css";

const Create = () => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const fetchData = async () => {
    if (inputValue.trim() === "") {
      toast.error("Please enter a valid URL before generating ChatBOT");
      return;
    }

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      url: inputValue,
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

      if (response.ok) {
        toast.success("Data added successfully");
      } else {
        const errorData = await response.json();
        toast.error(
          `Error adding data: ${errorData.message || "Unknown error"}`
        );
      }
    } catch (error) {
      console.error("Error adding data:", error);
      toast.error("Error adding data");
    }
  };
  // ... (previous code)

  const fetchUpdateData = async () => {
    if (inputValue.trim() === "") {
      toast.error("Please enter a valid URL before updating data");
      return;
    }

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      url: inputValue,
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

      if (response.ok) {
        toast.success("Data updated successfully");
      } else {
        const errorData = await response.json();
        toast.error(
          `Error updating data: ${errorData.message || "Unknown error"}`
        );
      }
    } catch (error) {
      console.error("Error updating data:", error);
      toast.error("Error updating data");
    }
  };
  const fetchDeleteData = async () => {
    if (inputValue.trim() === "") {
      toast.error("Please enter a valid URL before deleting data");
      return;
    }

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      url: inputValue,
    });

    const requestOptions = {
      method: "DELETE",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    try {
      const response = await fetch(
        "https://us8c1blf22.execute-api.ap-south-1.amazonaws.com/stg/chatbot",
        requestOptions
      );

      if (response.ok) {
        toast.success("Data deleted successfully");
        setInputValue("");
      } else {
        const errorData = await response.json();
        toast.error(
          `Error deleting data: ${errorData.message || "Unknown error"}`
        );
      }
    } catch (error) {
      console.error("Error deleting data:", error);
      toast.error("Error deleting data");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="max-w-3xl w-full p-6 bg-white rounded-lg shadow-md">
        <form>
          <div className="shadow overflow-hidden sm:rounded-md">
            <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
              <div className="grid grid-cols-3 gap-6">
                <div className="col-span-3 sm:col-span-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Add URL
                  </label>
                  <div className="mt-1 flex rounded-md shadow-sm">
                    <input
                      type="url"
                      value={inputValue}
                      onChange={handleInputChange}
                      className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                      placeholder="www.example.com"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
            <a
              type="button"
              onClick={fetchUpdateData}
              className="inline-flex justify-center m-4 py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
            >
              Update
            </a>
            <a
              type="button"
              onClick={fetchDeleteData}
              className="inline-flex justify-center m-4 py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
            >
              Delete
            </a>
            <a
              type="button"
              onClick={fetchData}
              className="inline-flex justify-center m-4 py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
            >
              Generate ChatBOT
            </a>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Create;
