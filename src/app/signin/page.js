"use client"
import '../style/globals.css'
import { useRouter } from 'next/navigation';
import { createClient } from '@supabase/supabase-js'
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import React, { useState,useEffect } from 'react';

const supabase = createClient('https://jphemcuwfpxnynveilja.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpwaGVtY3V3ZnB4bnludmVpbGphIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTk5NTMxMTUsImV4cCI6MjAxNTUyOTExNX0.y8HPHiQHoXP0iIWnrgxptJ1X4uvw-ycRmiFNHnndSUM')

function Login () {

  const router = useRouter();
  const [user, setUser] = useState({});

  useEffect(() => {
      const handleAuthChange = async (event) => {
          if (event !== "SIGNED_OUT") {
              console.log("Inside event");
              router.push("/");
          } else {
              router.push("../signin");
          }
      };
  })
    
    return (
    
            <Auth
                supabaseClient={supabase}
                appearance={{ theme: ThemeSupa }}
                theme="dark"
                providers={['google']}
            />
    
    )
}

export default Login;

