"use client";
import SvgLogo from "../../components/chatbotLogo";
import { UserButton } from "@clerk/nextjs";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";

const create = {
  tiers: [
    {
      title: "www.daywiseai.com",
      price: "DaywiseAi",
      cta: "Preview",
      link: "http://localhost:3000/preview?url=https://daywiseai.com/",
    },
    {
      title: "alentarelectric.com",
      price: "AlenElectric",
      cta: "Preview ",
      link: "http://localhost:3000/preview?url=https://alentarelectric.com/",
    },
    {
      title: "sippline.com",
      price: "Sippline",
      cta: "Preview",
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
              <UserButton afterSignOutUrl="/" />
            </div>
          </div>
        </div>
      </nav>
      <div className="py-10">
        <header>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold leading-tight text-gray-900">
              Dashboard
            </h1>
          </div>
        </header>
        <main>
          <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
            {/* Replace with your content */}

            <div className="px-4 py-12 sm:px-0">
              <div className="border-4 border-dashed border-gray-200 rounded-lg h-96">
                <div className="m-8 relative p-2 bg-white border border-gray-200 rounded-2xl shadow-sm flex flex-row items-center w-80 text-indigo-700 hover:bg-indigo-100">
                  <Button
                    href="/create-chatbot"
                    className="inline-flex items-center p-2 border border-transparent rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Create New
                  </Button>
                </div>
                <div className="max-w-7xl mx-auto py-2 px-4 bg-white sm:px-6 lg:px-8">
                  <div className="mt-0 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-8">
                    {create.tiers.map((tier) => (
                      <div
                        key={tier.title}
                        className="relative p-6 bg-white border border-gray-200 rounded-2xl shadow-sm flex flex-col"
                      >
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-indigo-500">
                            {tier.title}
                          </h3>

                          <p className="mt-4 flex items-baseline text-gray-900">
                            <span className="text-4xl font-extrabold tracking-tight">
                              {tier.price}
                            </span>
                          </p>
                        </div>

                        <a
                          href={tier.link} // Use the link property for the href attribute
                          className={classNames(
                            tier.mostPopular
                              ? "bg-indigo-500 text-white hover:bg-indigo-600"
                              : "bg-indigo-50 text-indigo-700 hover:bg-indigo-100",
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
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
