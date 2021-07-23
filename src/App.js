import { useEffect, useState } from "react";
import CTA from "./components/CTA";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Testimonial from "./components/Testimonial";

const hero = document.querySelector(".hero");
// const navbar = document.querySelector('.navbar');
let scrollPosition = window.pageYOffset;
let startPosition = scrollPosition;
// let scroll;

function App() {
  const [active, setActive] = useState(false);
  const [show, setShow] = useState("");
  const [page, setPage] = useState("page-1");
  const [appear, setAppear] = useState("appear");

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const activateNav = () => {
    setActive(!active);
    !show ? setShow("show") : setShow("");
  };

  // const hideEffect = () => {
  //   navbar.style.transition = "0s";
  //   showEffect();
  // };

  // const showEffect = () => {
  //   clearTimeout(scroll);
  //   scroll = setTimeout(() => {
  //     navbar.style.transition = "0.3s";
  //   }, 200);
  // };

  function handleScroll() {
    scrollPosition = window.pageYOffset;

    if (scrollPosition < (hero && hero.clientHeight / 2)) {
      if (appear !== "") {
        setAppear("");
      }
    } else if (scrollPosition < startPosition) {
      if (appear !== "appear") {
        setAppear("appear");
      }
    } else {
      if (appear !== "disappear") {
        // hideEffect();
        setAppear("disappear");
      }
    }

    startPosition = scrollPosition;
  }

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
      <Navbar
        active={active}
        show={show}
        appear={appear}
        activateNav={activateNav}
      />
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
