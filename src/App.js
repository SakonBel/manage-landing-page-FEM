import { useState } from "react";
import CTA from "./components/CTA";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Testimonial from "./components/Testimonial";

function App() {
  const [active, setActive] = useState(false);
  const [show, setShow] = useState("");

  const activateNav = () => {
    setActive(!active);
    !show ? setShow("show") : setShow("");
  };

  return (
    <div className="App">
      <Navbar active={active} show={show} activateNav={activateNav} />
      <main>
        <Hero />
        <Features />
        <Testimonial />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
