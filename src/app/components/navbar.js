"use client";
import { useState } from "react";

import { close, logo, menu } from "../images-svgs";
import { navLinks } from "../constants/page.js";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <img src={logo} alt="hoobank" className="w-[124px] h-[32px]" />

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${
              active === nav.title ? "text-white" : "text-dimWhite"
            } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
            onClick={() => setActive(nav.title)}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[16px] ${
                  active === nav.title ? "text-white" : "text-dimWhite"
                } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

// import "../style/globals.css";
// import Link from "next/link";
// const Navbar = () => {
//   return (
//     <nav className="bg-white-800 p-4 flex items-center justify-between shadow-md z-10">
//       <div className="flex-shrink-0">
//         {/* <img
//       src="https://img.freepik.com/premium-vector/robot-chat-bot-icon-symbol-support-service-concept-vector-illustration_136875-4410.jpg?size=626&ext=jpg&ga=GA1.1.763251398.1687013890&semt=ais"
//       alt="Logo"
//       className="h-20 w-20"
//     /> */}
//       </div>

//       <div className="hidden md:flex space-x-4">
//         <Link
//           href="video_Demo"
//           className="hover:rounded-md hover:bg-purple-600 hover:shadow-md p-2"
//         >
//           Video Demo
//         </Link>
//         <Link
//           href="features"
//           className="hover:rounded-md hover:bg-purple-600 hover:shadow-md p-2"
//         >
//           Features
//         </Link>
//         <Link
//           href="about_Us"
//           className="hover:rounded-md hover:bg-purple-600 hover:shadow-md p-2"
//         >
//           About Us
//         </Link>
//         <Link
//           href="our_Team"
//           className="hover:rounded-md hover:bg-purple-600 hover:shadow-md p-2"
//         >
//           Our Team
//         </Link>
//       </div>

//       <div className="ml-auto">
//         <Link
//           href="../signin"
//           className="px-8 py-3 border border-transparent text-base font-medium rounded-md bg-purple-500 hover:bg-purple-600"
//         >
//           Sign In
//         </Link>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
