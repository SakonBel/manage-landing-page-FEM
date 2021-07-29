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

function App() {
  const [active, setActive] = useState(false);
  const [show, setShow] = useState("");
  const [page, setPage] = useState("page-1");
  const [appear, setAppear] = useState("appear");

  // const person_1 = document && document.querySelector(".person-1");
  // const person_2 = document && document.querySelector(".person-2");
  // const person_3 = document && document.querySelector(".person-3");
  // const person_4 = document && document.querySelector(".person-4");
  // const clone_1 = person_1 && person_1.cloneNode(true);
  // const clone_2 = person_1 && person_2.cloneNode(true);
  // const clone_3 = person_1 && person_3.cloneNode(true);
  // const clone_4 = person_1 && person_4.cloneNode(true);

  // const sliderRef = useRef();

  // let slider = sliderRef.current;
  // let clone = slider && slider.cloneNode(true);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  useEffect(() => {
    clearInterval(mobileSideScroll);
    mobileSideScroll = setInterval(() => {
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

    if (window.pageYOffset < 10) {
      clearTimeout(navbarTimeout);
    } else {
      autoHideNavbar();
    }

    if (scrollPosition < startPosition) {
      if (appear !== "appear") {
        setAppear("appear");
      }
    } else {
      if (appear !== "disappear") {
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

  const desktopAutoCarousel = () => {
    // clone_1 && person_4.after(clone_1);
    // clone_2 && clone_1.after(clone_2);
    // clone_3 && clone_2.after(clone_3);
    // clone_4 && clone_3.after(clone_4);
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
