import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { useEffect } from "react";
import { createClient } from "@supabase/supabase-js";
import React from "react";

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
    <div className="flex justify-center items-center h-screen">
      <div className="w-96 p-4 border border-gray-300 rounded-lg bg-white shadow-md">
        <span className="justify-center items-center text-5xl">
          Site<span className="text-indigo-600">Genie</span>
        </span>
        <hr className="my-4 border-gray-300 w-full" /> {/* Add this line */}
        <Auth
          supabaseClient={supabase}
          theme="default"
          appearance={{
            style: {
              button: {
                background: "purple",
                color: "white",
                fontSize: "1rem", // Increase font size
                padding: "0.75rem 1.5rem",
                borderRadius: "0.5rem", // Curved corners
                boxShadow:
                  "0 4px 4px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)", // Shadow
              },
              anchor: { color: "black" },
              label: {
                fontSize: "1.2rem", // Increase font size
              },
              input: {
                fontSize: "1rem", // Increase font size
                color: "black", // Light font color
                borderRadius: "0.5rem", // Curved corners
                boxShadow:
                  "0 4px 4px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)", // Shadow
                borderColor: "#D1D5DB", // Light border color
                padding: "0.5rem 1rem", // Adjust padding for reduced height
              },
            },
          }}
          providers={["google"]}
        />
      </div>
    </div>
  );
};

export default Login;
