"use client";
import { ClerkProvider, SignIn } from "@clerk/nextjs";
// import Login from "./sn";
import "../../styles/globals.css";

export default function Home() {
  return (
    <div>
      <ClerkProvider>
        <SignIn />
      </ClerkProvider>
    </div>
  );
}
