import { useEffect, useState } from "react";
import CTA from "./components/CTA";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Testimonial from "./components/Testimonial";

let scrollPosition = window.pageYOffset;
let startPosition = scrollPosition;
let navbarTimeout;
let mobileSideScroll;
const email = /^([-\w]+)@([a-z\d_-]+)\.([a-z]{2,6})(\.[a-z]{2,6})?$/;

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
  });

  useEffect(() => {
    clearTimeout(mobileSideScroll);
    mobileSideScroll = setTimeout(() => {
      switch (page) {
        case "page-1":
          setPage("page-2");
          break;
        case "page-2":
          setPage("page-3");
          break;
        case "page-3":
          setPage("page-4");
          break;
        default:
          setPage("page-1");
          break;
      }
    }, 4000);
  }, [page]);

  const activateNav = () => {
    setActive(!active);
    if (!show) {
      clearTimeout(navbarTimeout);
      setShow("show");
    } else if (window.pageYOffset < 10) {
      clearTimeout(navbarTimeout);
      setShow("");
    } else {
      autoHideNavbar();
      setShow("");
    }
  };

  function autoHideNavbar() {
    clearTimeout(navbarTimeout);
    navbarTimeout = setTimeout(() => {
      setAppear("disappear");
    }, 3000);
  }

  function handleScroll() {
    scrollPosition = window.pageYOffset;

    if (scrollPosition < startPosition) {
      if (appear !== "appear") {
        setAppear("appear");
      }
    } else {
      if (appear !== "disappear" && !show) {
        setAppear("disappear");
      }
    }
    if (window.pageYOffset < 10 || show) {
      clearTimeout(navbarTimeout);
      setAppear("origin");
    } else {
      autoHideNavbar();
    }

    startPosition = scrollPosition;
  }

  const changePage = (num) => {
    clearTimeout(mobileSideScroll);
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
      <Footer email={email} />
    </div>
  );
}

export default App;
