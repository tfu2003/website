import React from "react";
import { useState, useEffect } from "react";
import { MdLocationPin } from "react-icons/md";

function Navbar() {
  const scrollDirection = useScrollDirection();
  const [width, setWidth] = useState(window.innerWidth);
  const isMobile = width <= 700;
  const handleClick = (id) => {
    document.querySelector(`#${id}`)?.scrollIntoView({ behavior: "smooth" });
  };

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  return (
    <div
      style={{
        zIndex: "20",
      }}
      className={`sticky ${
        scrollDirection === "down" ? "-top-24" : "top-0"
      } h-24 bg-black transition-all duration-500`}
    >
      <div className="flex justify-between text-white">
        <div
          className={`font-bold font-sans grid content-center h-24 pl-4 ${
            isMobile ? "text-sm" : "text-lg"
          }`}
        >
          <h1 className="pl-1.5">Tony Fu</h1>
          <div className="flex justify-start">
            <MdLocationPin size={`${isMobile ? "20px" : "25px"}`} />
            <h1>Vancouver, British Columbia</h1>
          </div>
        </div>
        <div
          className={`flex items-center justify-end h-24 font-bold ${
            isMobile ? "text-lg gap-2" : "text-xl gap-10"
          }`}
        >
          <div>
            <button onClick={() => handleClick("about")}>About</button>
          </div>
          <div>
            <button onClick={() => handleClick("projects")}>Projects</button>
          </div>
          <div className="pr-4">
            <button onClick={() => handleClick("contacts")}>Contacts</button>
          </div>
        </div>
      </div>
    </div>
  );
}

function useScrollDirection() {
  const [scrollDirection, setScrollDirection] = useState(null);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    const updateScrollDirection = () => {
      const scrollY = window.scrollY;
      const direction = scrollY > lastScrollY ? "down" : "up";
      if (
        direction !== scrollDirection &&
        (scrollY - lastScrollY > 1 || scrollY - lastScrollY < -10)
      ) {
        setScrollDirection(direction);
      }
      lastScrollY = scrollY > 0 ? scrollY : 0;
    };
    window.addEventListener("scroll", updateScrollDirection);
    return () => {
      window.removeEventListener("scroll", updateScrollDirection);
    };
  }, [scrollDirection]);

  return scrollDirection;
}

export default Navbar;
