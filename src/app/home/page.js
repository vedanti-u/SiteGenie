// const About = () => {
//     return (  
        
//     );
// }
 
// export default About;

'use client'
import Link from 'next/link';
// import create from './create/page';
import Head from 'next/head';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { createClient } from "@supabase/supabase-js";
const supabase = createClient('https://jphemcuwfpxnynveilja.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpwaGVtY3V3ZnB4bnludmVpbGphIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTk5NTMxMTUsImV4cCI6MjAxNTUyOTExNX0.y8HPHiQHoXP0iIWnrgxptJ1X4uvw-ycRmiFNHnndSUM')
const Home = () => {

  const [plusButtonClickCount, setPlusButtonClickCount] = useState(0);

  const handlePlusButtonClick = () => {
    setPlusButtonClickCount((prevCount) => prevCount + 1);
  };

  const checkSession = async () => {
   
    const { data } = await supabase.auth.getSession();
    console.log(data);

  };
  useEffect(() => {
    checkSession();
  },[]);

  const signOut=async()=>{
    const { error } = await supabase.auth.signOut();
    if (!error) {
      router.push("/");
    }
  }
  

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <Head>
        <title>Next.js Avatar Page</title>
        <meta name="description" content="Next.js Avatar Page" />
        <link rel="icon" href="/favicon.ico" />
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
          onClick={signOut}
        >
          Sign Out
        </button>
      </Head>

      <header className="w-full h-16 bg-teal-500 flex justify-end items-center p-4">
        <div className="relative w-10 h-10 mr-4">
          <Image
            src="../public/vercel.svg"
            alt="Avatar"
            className="rounded-full"
            width={40}
            height={40}
          />
        </div>
      </header>

      <main className="flex flex-col items-center justify-center flex-grow">
        <div className="flex items-center">
          
          <div className="bg-white-100 p-8 rounded shadow-md w-96 mr-4">
            <h2 className="text-2xl font-bold mb-4">New chatbot info</h2>
            <p>Content of the new chatbotS</p>
          </div>

          <div className="bg-white p-8 rounded shadow-md w-96">
            <h2 className="text-2xl font-bold mb-4">Card</h2>
            <p>Chatbots made: {plusButtonClickCount}</p>
          </div>

          <Link href='create'
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full ml-4 focus:outline-none focus:shadow-outline"
            onClick={handlePlusButtonClick}
          >
            +
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Home;

