"use client";
import { SignIn } from "@clerk/nextjs";
import "../../../styles/globals.css";

export default function Home() {
  return (
    <div className="flex items-center justify-center flex-col gap-10">
      <h1 className="text-5xl mt-20">
        <a href="#" className="flex items-center">
          <span className=" text-indigo-700">SiteGenie</span>
        </a>
      </h1>
      <SignIn className="bg-indigo-600" />
    </div>
  );
}
