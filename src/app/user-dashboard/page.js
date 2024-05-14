"use client";
import "../../styles/globals.css";
import SvgLogo from "../../components/chatbotLogo";
//import { UserButton } from "@clerk/nextjs";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import Create from "@/components/createChatbot";

const create = {
  tiers: [
    {
      title: "www.daywiseai.com",
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
        <nav className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex">
                <div className="flex-shrink-0 flex items-center">
                  <SvgLogo />

                  <span
                    className="ml-2 font-bold text-indigo-700"
                    style={{ fontSize: "2em" }}
                  >
                    SiteGenie
                  </span>
                </div>
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:items-center">
                {/* <UserButton afterSignOutUrl="/" /> */}
              </div>
            </div>
          </div>
        </nav>
        <div className="py-10">
          <header>
            <div className="max-w-7xl mx-auto px-20">
              <h1 className="text-4xl text-semibold leading-tight text-gray-900">
                User Dashboard
              </h1>
            </div>
          </header>
          <main>
            <div className="max-w-5xl mx-auto sm:px-3">
              <div className="px-4 py-6 sm:px-0">
                <div className="border border-gray-200 rounded-lg h-50 flex flex-col justify-center items-center shadow-lg">
                  <div className="m-8 relative p-2 text-center">
                    <Drawer>
                      <div className="text-2xl text-gray-600">
                        To create a chatbot click on below button
                      </div>
                      <DrawerTrigger>
                        <Button
                          variant="primary"
                          className="bg-indigo-500 text-white mt-6 px-6 py-3 text-lg rounded-lg"
                        >
                          + Create New
                        </Button>
                      </DrawerTrigger>
                      <DrawerContent>
                        <Create />
                      </DrawerContent>
                    </Drawer>
                  </div>
                </div>
              </div>
            </div>

            <div className="py-8">
              <div className="px-20">
                <h1 className="text-4xl text-semibold leading-tight text-gray-900">
                  Chatbots powered by SiteGenie
                </h1>
              </div>
              <div className=" flex justify-center items-center">
                <div className="py-4">
                  <div className="flex space-x-6">
                    {create.tiers.map((tier) => (
                      <div
                        key={tier.title}
                        className="relative p-6 bg-white border border-gray-200 rounded-2xl shadow-lg flex flex-col"
                      >
                        <div className="flex-1">
                          <h3 className="text-xl text-indigo-500">
                            {tier.title}
                          </h3>

                          <p className="mt-4 flex items-baseline text-black">
                            <span className="text-4xl tracking-tight">
                              {tier.price}
                            </span>
                          </p>
                        </div>

                        <a
                          href={tier.link}
                          className={classNames(
                            tier.mostPopular
                              ? "bg-indigo-500 text-white hover:bg-indigo-700"
                              : "bg-indigo-500 text-white hover:bg-indigo-700",
                            "mt-8 block w-full py-3 px-6 border border-transparent rounded-md text-center font-medium"
                          )}
                        >
                          {tier.cta}
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              s
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
