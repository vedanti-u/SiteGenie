import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { useEffect } from "react";
import { createClient } from "@supabase/supabase-js";
import React from "react";
// Retrieve the SUPABASE_URL and SUPABASE_ANON_KEY from the environment variables
// const SUPABASE_URL = process.env.SUPABASE_URL;
// const SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY;

// Create a Supabase client instance
const supabase = createClient(
  "https://jphemcuwfpxnynveilja.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpwaGVtY3V3ZnB4bnludmVpbGphIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTk5NTMxMTUsImV4cCI6MjAxNTUyOTExNX0.y8HPHiQHoXP0iIWnrgxptJ1X4uvw-ycRmiFNHnndSUM"
);

const Login = () => {
  const { user } = supabase;

  useEffect(() => {
    if (user) {
      const { id, email, user_metadata } = user;

      supabase
        .from("authenticate")
        .upsert([
          {
            id,
            email,
            metadata: user_metadata,
          },
        ])
        .then((response) => {
          console.log("User data stored in Supabase table", response);
        })
        .catch((error) => {
          console.error("Error storing user data in Supabase table", error);
        });
    }
  }, [user]);

  return (
    <div className="flex h-screen">
      {/* Left half */}
      <div className="w-1/2 bg-indigo-600 flex flex-col justify-center items-center h-screen">
        <div className="text-center mb-8">
          <span className="text-5xl text-white">SiteGenie</span>
        </div>
        <div className="text-white text-lg self-end justify-center ml-4 mb-4">
          This next generation of AI will reshape every software category and
          every business, including our own. Although this new era promises
          great opportunity, it demands even greater responsibility from
          companies like ours.
        </div>
        <div className="text-white text-lg self-end mr-4">~ Satya Nadella</div>
      </div>

      {/* Right half */}
      <div className="w-1/2 flex justify-center items-center">
        <div className="w-96 p-8">
          <Auth
            supabaseClient={supabase}
            theme="default"
            appearance={{
              style: {
                button: {
                  background: "#4F46E5", // Indigo-600
                  color: "white",
                  fontSize: "1rem", // Increase font size
                  padding: "0.75rem 1.5rem",
                  borderRadius: "0.5rem", // Curved corners
                  boxShadow:
                    "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)", // Shadow
                },
                anchor: { color: "black" },
                label: { fontSize: "1.2rem" }, // Increase font size
                input: {
                  fontSize: "1rem", // Increase font size
                  color: "grey", // Light font color
                  height: "2.5rem", // Reduced height
                  borderRadius: "0.5rem", // Curved corners
                  boxShadow:
                    "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)", // Shadow
                  borderColor: "#D1D5DB", // Light border color
                  padding: "0.5rem 1.5rem", // Adjust padding for reduced height
                },
              },
            }}
            providers={["google"]}
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
