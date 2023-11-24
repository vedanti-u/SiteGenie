"use client"
import { createClient } from '@supabase/supabase-js'
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import { useUser } from '@supabase/auth-ui-react/dist/components/Auth/UserContext'
import { useEffect } from 'react';

const supabase = createClient('https://jphemcuwfpxnynveilja.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpwaGVtY3V3ZnB4bnludmVpbGphIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTk5NTMxMTUsImV4cCI6MjAxNTUyOTExNX0.y8HPHiQHoXP0iIWnrgxptJ1X4uvw-ycRmiFNHnndSUM')

const Login = () => {
    const { createClient,user } = useUser();

  useEffect(() => {
    if (user) {
      const { id, email, user_metadata } = user;

      supabase
        .from('authenticate')
        .upsert([
          {
            id,
            email,
            metadata: user_metadata,
          },
        ])
        .then((response) => {
          console.log('User data stored in Supabase table', response);
        })
        .catch((error) => {
          console.error('Error storing user data in Supabase table', error);
        });
    }
  }, [user]);
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