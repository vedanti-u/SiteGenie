"use client";
import "../../styles/globals.css";
import { Button } from "@/components/ui/button";
import Create from "@/components/createChatbot";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import React from "react";
import FooterSection from "@/components/footer";
import InternalNavbar from "@/components/internalnavbar";

const create = {
  tiers: [
    {
      title: "daywiseai.com",
      price: "DaywiseAi",
      cta: "Preview Chatbot",
      link: "http://localhost:3000/preview?url=https://daywiseai.com/",
    },
    {
      title: "alentarelectric.com",
      price: "AlenElectric",
      cta: "Preview Chatbot",
      link: "http://localhost:3000/preview?url=https://alentarelectric.com/",
    },
    {
      title: "sippline.com",
      price: "Sippline",
      cta: "Preview Chatbot",
      link: "http://localhost:3000/preview?url=https://sippline.com/",
    },
  ],
};

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Home() {
  return (
    <>
      <div className="h-screen">
        <InternalNavbar />
        <div className="py-24">
          <header>
            <div className="max-w-7xl mx-auto px-20 pb-10">
              <h2 class="text-4xl font-semibold text-gray-900 text-center mb-4">
                Dashboard{" "}
              </h2>
              <div className="border border-gray-200 border-dotted rounded-lg h-auto flex flex-col justify-center items-center shadow-lg p-6 bg-white mx-auto">
                <p className="text-xl text-gray-700 dark:text-gray-700 mb-4 text-center items-center justify-center pb-">
                  To create a chatbot, click on the button below
                </p>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      variant="primary"
                      className="bg-indigo-600 text-white h-12 py-4 px-6 text-lg rounded-md shadow-lg hover:bg-indigo-700"
                    >
                      <div className="flex items-center space-x-2">
                        <svg
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            clipRule="evenodd"
                            d="M10.4269 2.42148C11.4003 1.85951 12.5996 1.8595 13.573 2.42148L19.5087 5.84848C20.4821 6.41046 21.0817 7.44904 21.0817 8.573V15.427C21.0817 16.551 20.4821 17.5895 19.5087 18.1515L13.573 21.5785C12.5996 22.1405 11.4003 22.1405 10.4269 21.5785L4.49122 18.1515C3.51784 17.5895 2.91821 16.551 2.91821 15.427V8.573C2.91821 7.44904 3.51784 6.41046 4.49122 5.84848L10.4269 2.42148ZM15.75 12C15.75 12.4142 15.4142 12.75 15 12.75H12.75V15C12.75 15.4142 12.4142 15.75 12 15.75C11.5858 15.75 11.25 15.4142 11.25 15V12.75H9C8.58579 12.75 8.25 12.4142 8.25 12C8.25 11.5858 8.58579 11.25 9 11.25H11.25V9C11.25 8.58579 11.5858 8.25 12 8.25C12.4142 8.25 12.75 8.58579 12.75 9V11.25H15C15.4142 11.25 15.75 11.5858 15.75 12Z"
                            fill="#ffffff"
                            fillRule="evenodd"
                          />
                        </svg>
                        <span>Create new</span>
                      </div>
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-md">
                    <Create />
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          </header>
          <main>
            <section class="py-10 pb-0">
              <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <h2 class="text-4xl font-semibold text-gray-900 text-center mb-14">
                  Our popular Bots
                </h2>
                <div class="flex justify-center mb-14 gap-y-8 lg:gap-y-0 flex-wrap md:flex-wrap lg:flex-nowrap lg:flex-row lg:justify-between lg:gap-x-8">
                  <div class="group cursor-pointer w-full max-lg:max-w-xl lg:w-1/3 border border-gray-300 rounded-2xl p-5 transition-all duration-300 hover:border-indigo-600">
                    <div class="flex items-center mb-6">
                      <img
                        src="https://pagedone.io/asset/uploads/1696244553.png"
                        alt="Harsh image"
                        className="rounded-lg w-full"
                      ></img>
                    </div>
                    <div class="block">
                      <h4 class="text-gray-900 font-medium leading-8 mb-9">
                        Fintech 101: Exploring the Basics of Electronic Payments
                      </h4>
                      <div class="flex items-center justify-between  font-medium">
                        <h6 class="text-sm text-gray-500">By Harsh C.</h6>
                        <span class="text-sm text-indigo-600">2 year ago</span>
                      </div>
                    </div>
                  </div>
                  <div class="group cursor-pointer w-full max-lg:max-w-xl lg:w-1/3 border border-gray-300 rounded-2xl p-5 transition-all duration-300 hover:border-indigo-600">
                    <div class="flex items-center mb-6">
                      <img
                        src="https://pagedone.io/asset/uploads/1696244579.png"
                        alt="John image"
                        class="rounded-lg w-full"
                      ></img>
                    </div>
                    <div class="block">
                      <h4 class="text-gray-900 font-medium leading-8 mb-9">
                        From Classroom to Cyberspace: The Growing Influence of
                        EdTech in Fintech
                      </h4>
                      <div class="flex items-center justify-between  font-medium">
                        <h6 class="text-sm text-gray-500">By John D.</h6>
                        <span class="text-sm text-indigo-600">2 year ago</span>
                      </div>
                    </div>
                  </div>
                  <div class="group cursor-pointer w-full max-lg:max-w-xl lg:w-1/3 border border-gray-300 rounded-2xl p-5 transition-all duration-300 hover:border-indigo-600">
                    <div class="flex items-center mb-6">
                      <img
                        src="https://pagedone.io/asset/uploads/1696244619.png"
                        alt="Alexa image"
                        class="rounded-lg w-full"
                      ></img>
                    </div>
                    <div class="block">
                      <h4 class="text-gray-900 font-medium leading-8 mb-9">
                        Fintech Solutions for Student Loans: Easing the Burden
                        of Education Debt
                      </h4>
                      <div class="flex items-center justify-between  font-medium">
                        <h6 class="text-sm text-gray-500">By Alexa H.</h6>
                        <span class="text-sm text-indigo-600">2 year ago</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </main>
          <FooterSection />
        </div>
      </div>
    </>
  );
}
