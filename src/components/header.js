import React from "react";
import { useState, useEffect } from "react";
import { AiFillGithub } from "react-icons/ai";
import { MdEmail, MdLocationPin } from "react-icons/md";
import { BrowserRouter, Link } from "react-router-dom";

function Header() {
  const scrollDirection = useScrollDirection();
  return (
    <div
      className={`sticky ${
        scrollDirection === "down" ? "-top-24" : "top-0"
      } h-24 bg-blue-200 transition-all duration-500`}
    >
      <div className="p-3 font-bold font-sans text-lg">
        <h1>Tony Fu</h1>
        <div className="flex justify-start">
          <MdLocationPin size="25px"/>
          <h1>Vancouver, British Columbia</h1>
        </div>
      </div>
      <div className="absolute top-0 right-0 p-3 flex justify-end">
        <a href="https://github.com/tfu2003" target="_blank" rel="noreferrer">
          <AiFillGithub size="40px"/>
        </a>
        <ButtonMailto
          label={<MdEmail size="40px"/>}
          mailto="mailto:officialtonyfu@gmail.com"
        />
      </div>
    </div>
  );
}

function useScrollDirection() {
  const [scrollDirection, setScrollDirection] = useState(null);

  useEffect(() => {
    let lastScrollY = window.pageYOffset;
    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset;
      const direction = scrollY > lastScrollY ? "down" : "up";
      if (
        direction !== scrollDirection &&
        (scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10)
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

const ButtonMailto = ({ mailto, label }) => {
  return (
    <BrowserRouter>
      <Link
        to="#"
        onClick={(e) => {
          window.location.href = mailto;
          e.preventDefault();
        }}
      >
        {label}
      </Link>
    </BrowserRouter>
  );
};

export default Header;
