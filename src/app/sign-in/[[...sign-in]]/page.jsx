"use client";
import { SignIn } from "@clerk/nextjs";
import "../../../styles/globals.css";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import WhiteLogo from "@/components/white-logo";

export default function Home() {
  return (
    <>
      <div className="container relative hidden h-[750px] items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <div className="relative hidden h-full flex-col bg-muted p-10 text-white lg:flex dark:border-r">
          <div className="absolute inset-0 bg-indigo-600" />
          <div className="relative z-20 flex flex-col space-y-4">
            <div className="text-5xl font-bold pl-0">
              <WhiteLogo />
            </div>
            <div className="flex items-center text-lg pl-10">
              Try out our service by signing inn <ArrowRight className="ml-2" />
            </div>
          </div>
          <div className="relative z-20 mt-auto">
            <blockquote className="space-y-2">
              <p className="text-lg pl-10 italic">
                &ldquo;Some people call this artificial intelligence, but the
                reality is this technology will enhance us. So instead of
                artificial intelligence, I think we'll augment our
                intelligence.&rdquo;
              </p>
              <footer className="text-sm pl-10">
                – Ginni Rometty, Former CEO of IBM
              </footer>
            </blockquote>
          </div>
        </div>
        <div className="flex items-center justify-center lg:p-8">
          <div className="w-full max-w-md mx-auto flex flex-col justify-center space-y-6">
            <SignIn />
          </div>
        </div>
      </div>
    </>
  );
}
