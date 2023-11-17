import Footer from "./components/footer";
import Landing from "./components/landing";
//import Landing from "./components/landing";
import Navbar from "./components/navbar";
import "./style/globals.css";

export default function Home() {
  return (
    <>
      <Navbar />
      <Landing />
      <Footer />
    </>
  );
}
