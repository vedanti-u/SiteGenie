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

const customTheme = {
  default: {
    colors: {
      brand: "black",
      brandAccent: "white",
      defaultButtonBackground: "white",
      defaultButtonBackgroundHover: "black",
      brandButtonText: "white",
    },
  },
  dark: {
    colors: {
      brandButtonText: "white",
      defaultButtonBackground: "#2e2e2e",
      defaultButtonBackgroundHover: "black",
      //..
    },
  },
  // You can also add more theme variations with different names.
  evenDarker: {
    colors: {
      brandButtonText: "white",
      defaultButtonBackground: "#1e1e1e",
      defaultButtonBackgroundHover: "#2e2e2e",
      //..
    },
  },
};
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
        <Auth
          supabaseClient={supabase}
          theme="default"
          appearance={{
            style: {
              button: {
                background: "black",
                color: "white",
                fontSize: "1.2rem", // Increase font size
                padding: "0.75rem 1.5rem",
                borderRadius: "0.5rem", // Curved corners
                boxShadow:
                  "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)", // Shadow
              },
              anchor: { color: "black" },
              label: {
                fontSize: "1.5rem", // Increase font size
              },
              input: {
                fontSize: "1.2rem", // Increase font size
                color: "grey", // Light font color
                borderRadius: "0.5rem", // Curved corners
                boxShadow:
                  "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)", // Shadow
                borderColor: "#D1D5DB", // Light border color
                padding: "0.9rem 1.5rem", // Adjust padding for increased size
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
