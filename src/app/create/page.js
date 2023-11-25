"use client";

import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Create = () => {
  const handleDeleteClick = () => {
    toast.success("ChatBOT deleted successfully!");
  };

  const handleUpdateClick = () => {
    toast.success("Chatbot Updated Successfully");
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="max-w-3xl w-full p-6 bg-white rounded-lg shadow-md">
        <form action="#">
          <div className="shadow overflow-hidden sm:rounded-md">
            <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
              <div className="grid grid-cols-3 gap-6">
                <div className="col-span-3 sm:col-span-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Add URL
                  </label>
                  <div className="mt-1 flex rounded-md shadow-sm">
                    <input
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
              onClick={handleUpdateClick}
              type="button"
              href='PutToUpdate'
              className="inline-flex justify-center m-4 py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
            >
              Update
            </a>
            <a
              href="deleteFor"
              type="button"
              onClick={handleDeleteClick}
              className="inline-flex justify-center m-4 py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
            >
              Delete
            </a>
            <a
              href="postGenerate"
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
