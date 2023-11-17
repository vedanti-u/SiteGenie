"use client"
import { useState } from "react";
import { createBrowserSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { SessionContextProvider } from "@supabase/auth-helpers-react";

function MyApp({Component, pageProps}) {
  const { client: supabaseClient } = useState(() => createBrowserSupabaseClient());

  return(
    <SessionContextProvider
      supabaseClient={supabaseClient}
    >
      <Component {...pageProps} />
    </SessionContextProvider>
  );
}

export default MyApp;
