"use client"
import { supabase } from '@supabase/auth-ui-shared';
//import { redirect } from 'next/dist/server/api-utils';
import React from 'react';
//import { useRouter } from 'next/router';

function Signout() {
    //const router = useRouter();

    async function handleSignOut() {
        console.log("Inside signout");
        try {
            const { error } = await supabase.auth.signOut();
            if (error) throw error;

            // Redirect to the signin page after signing out
            //router.push('../signin');
        } catch (error) {
            alert(error.message);
        }
    }

    return (
        <button href="../signin" onClick={handleSignOut}>Sign Out</button>
    );
}

export default Signout;