
//import Image from 'next/image'

import Chatbot from "./components/chatbot";
import Navbar from "./components/navbar";

//yeh main page hai jo first render hota hai


export default function Home() {
  return (
  <>
     <Navbar />
    <h1>Home page </h1>
    <Chatbot />
   
  </>
  )
}
