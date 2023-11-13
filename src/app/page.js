import Footer from "./components/footer";
import Navbar from "./components/navbar";
import "./style/globals.css";

export default function Home() {
  return (
    <>
      <Navbar />
      <h1>Home page </h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec ligula
        mauris. Sed interdum molestie orci, at interdum nisl varius vel.
        Phasellus semper risus non feugiat tempor. Etiam tristique, dolor eu
        faucibus interdum, elit turpis dignissim mi, pulvinar cursus sem massa
        eu orci. Praesent lectus orci, cursus commodo finibus eget, bibendum in
        mauris. Proin ac magna id sapien porta vehicula in ut ligula. Nunc non
        enim vitae enim malesuada vestibulum finibus at magna. Duis sodales,
        mauris ac lobortis porta, urna leo hendrerit nulla, eu convallis est
        justo ut sem. Nam vitae dui sed quam gravida cursus a ac sem.
      </p>
      <Footer />
    </>
  );
}
