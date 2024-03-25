"use client";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Button } from "@/components/ui/button";
import {
  DrawerClose,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "./ui/drawer";

const Create = () => {
  const [inputValue, setInputValue] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const [showNewButton, setShowNewButton] = useState(false);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const fetchData = async () => {
    if (inputValue.trim() === "") {
      toast.error("Please enter a valid URL before generating ChatBOT");
      return;
    }

    setIsLoading(true);

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
        setShowNewButton(true);
      } else {
        const errorData = await response.json();
        toast.error(
          `Error deleting data: ${errorData.message || "Unknown error"}`
        );
      }
    } catch (error) {
      console.error("Error adding data:", error);
      toast.error("Error adding data");
    } finally {
      setIsLoading(false);
    }
  };

  const fetchUpdateData = async () => {
    if (inputValue.trim() === "") {
      toast.error("Please enter a valid URL before updating data");
      return;
    }

    setIsLoading(true);

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
          `Error deleting data: ${errorData.message || "Unknown error"}`
        );
      }
    } catch (error) {
      console.error("Error updating data:", error);
      toast.error("Error updating data");
    }

    setIsLoading(false);
  };

  const fetchDeleteData = async () => {
    if (inputValue.trim() === "") {
      toast.error("Please enter a valid URL before deleting data");
      return;
    }

    setIsLoading(true);

    // ... (remaining code)

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
        toast.error("Error deleting data:");
      }
    } catch (error) {
      console.error("Error deleting data:", error);
      toast.error("Error deleting data");
    }

    setIsLoading(false);
  };

  return (
    <div className="mx-auto w-full max-w-sm">
      <DrawerHeader>
        <DrawerTitle>Create Chatbot</DrawerTitle>
        <DrawerDescription>
          To create chatbot ,enter valid URL on any website.
        </DrawerDescription>
      </DrawerHeader>
      <div className="p-2 pb-8">
        <input
          type="url"
          value={inputValue}
          onChange={handleInputChange}
          className="flex-1 block w-full rounded-none rounded-r-md sm:text-lg border-black px-4 py-2"
          placeholder="https://example.com"
        />
      </div>
      <DrawerFooter>
        <div className=" bg-gray-50 text-right sm:px-6 gap-4">
          {isLoading ? (
            <button
              disabled
              type="button"
              className="py-2.5 px-5 me-2 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 inline-flex items-center"
            >
              <svg
                aria-hidden="true"
                role="status"
                className="inline w-4 h-4 me-3 text-gray-200 animate-spin dark:text-gray-600"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="#1C64F2"
                />
              </svg>
              Loading...
            </button>
          ) : (
            <div className="px-4 py-2 flex flex-col space-y-6">
              <Button
                onClick={fetchUpdateData}
                className="bg-black "
              >
                Update
              </Button>
              <Button
                onClick={fetchDeleteData}
                className="bg-black "
              >
                Delete
              </Button>
              <Button
                onClick={fetchData}
                className="bg-black "
              >
                Generate ChatBOT
              </Button>
            </div>
            // {showNewButton && (
            //       <Button
            //         type="button"
            //         onClick={() => {
            //           window.location.href = `/chatbot?url=${inputValue}`;
            //         }}
            //         className="inline-flex justify-center m-4 py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            //       >
            //         Direct to Chatbot
            //       </Button>
            //     )}
          )}
          <ToastContainer />
        </div>
        <DrawerClose asChild>
          <Button variant="outline">Go Back</Button>
        </DrawerClose>
      </DrawerFooter>
    </div>
  );
};
export default Create;
