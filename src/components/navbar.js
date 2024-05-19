import React from "react";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import ShimmerButton from "./magicui/shimmer-button";
import { useEffect, useState } from "react";
const navItems = [
  { href: "#", label: "Home", active: true },
  { href: "#", label: "About" },
  { href: "#", label: "Services" },
  { href: "#", label: "Github" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;

      // Check if the user has scrolled down
      if (scrollTop > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <nav
      className={`bg-white bg-opacity-50 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-200 ${
        isScrolled ? "backdrop-blur-md" : ""
      }`}
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a
          href="https://flowbite.com/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <span className="self-center text-black text-4xl font-semibold whitespace-nowrap">
            Site<span className="text-indigo-600">Genie.ai</span>
          </span>
        </a>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <ShimmerButton className="shadow-2xl bg-indigo-600 py-3">
            <span
              className="flex items-center whitespace-pre-wrap text-center font-medium leading-none tracking-tight text-white dark:to-slate-900/10 space-x-3"
              href="/sign-in"
            >
              SignIn
              <ChevronRight className="w-4 h-4" />
            </span>
          </ShimmerButton>
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className={`block py-2 px-3 rounded md:p-0 ${
                    item.active
                      ? "text-indigo-500 md:bg-transparent md:text-blue-700 md:dark:text-blue-500 hover:bg-indigo-500 hover:text-indigo-500"
                      : "text-slate-900 hover:text-indigo-500 md:hover:text-indigo-500 hover:bg-indigo-500 dark:hover:bg-indigo-500 dark:hover:text-indigo-500 md:dark:hover:text-indigo-500 md:dark:hover:bg-transparent dark:border-gray-700"
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
