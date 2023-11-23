
//import Image from 'next/image'

//import Chatbot from "./chatbot/chatbot";
import CTA from "./components/cta-section";
import Example from "./components/faqs";
import Footer from "./components/footer";
import Navbar from "./components/navbar";


//yeh main page hai jo first render hota hai


export default function Home() {
  return (
  <>
    <Navbar />
    <h1>Home page </h1>
    <Example/>
    <CTA/>
    <Footer/>

   
  </>
  )
}
