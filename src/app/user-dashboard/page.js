"use client";
import "../style/globals.css";
import { useRouter } from "next/navigation";
import SvgLogo from "../../components/chatbotLogo";
import { UserButton } from "@clerk/nextjs";

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
  const router = useRouter();

  return (
    <>
      <div className="min-h-full">
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
                  <div className="m-8 relative p-2 bg-white border border-gray-200 rounded-2xl shadow-sm flex flex-row items-center w-80 bg-indigo-50 text-indigo-700 hover:bg-indigo-100">
                    <button
                      href="/create-chatbot"
                      className="inline-flex items-center p-2 border border-transparent rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      <svg
                        class="h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                        />
                      </svg>
                    </button>
                    <h3 className="ml-4 my-0 py-0 text-xl font-semibold text-gray-900">
                      Create New
                    </h3>
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
      </div>
    </>
  );
}
