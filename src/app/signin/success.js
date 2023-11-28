"use client"
import '../style/globals.css'
import { useRouter } from 'next/navigation';
import { createClient } from '@supabase/supabase-js'
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import React, { useEffect } from 'react';

const supabase = createClient('https://jphemcuwfpxnynveilja.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpwaGVtY3V3ZnB4bnludmVpbGphIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTk5NTMxMTUsImV4cCI6MjAxNTUyOTExNX0.y8HPHiQHoXP0iIWnrgxptJ1X4uvw-ycRmiFNHnndSUM')

function Success() {
    const [user, SetUser]=useState({});
    const router=useRouter();

    useEffect(() => {
        async function getUserData() {
            await supabase.auth.getUser().then((value) => {
                if(value.data?.user){
                    SetUser(value.data.user);
                }
            })
        }
        getUserData();
    }, []);

    return(
        <div>
            <h1>Success</h1>
        </div>
    )
}