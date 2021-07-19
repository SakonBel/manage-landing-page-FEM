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
  const [page, setPage] = useState("page-1");

  const activateNav = () => {
    setActive(!active);
    !show ? setShow("show") : setShow("");
  };

  // const hideNavbar = () => {
  //   const startPosition = 0;
  // };

  const changePage = (num) => {
    switch (num) {
      case 1:
        setPage("page-1");
        break;
      case 2:
        setPage("page-2");
        break;
      case 3:
        setPage("page-3");
        break;
      default:
        setPage("page-4");
        break;
    }
  };

  return (
    <div className="App">
      <Navbar active={active} show={show} activateNav={activateNav} />
      <main>
        <Hero />
        <Features />
        <Testimonial page={page} changePage={changePage} />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
