import React from "react";
import { useState, useEffect } from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { MdEmail, MdLocationPin } from "react-icons/md";
import { Link } from "react-router-dom";

function Header() {
  const scrollDirection = useScrollDirection();
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
        <div className="font-bold font-sans text-lg grid content-center h-24 pl-4">
          <h1 className="pl-1.5">Tony Fu</h1>
          <div className="flex justify-start">
            <MdLocationPin size="25px" />
            <h1>Vancouver, British Columbia</h1>
          </div>
        </div>
        <div className="flex items-center h-24 pr-4">
          <div className="flex justify-end">
            <div> 
            <a
              href="https://github.com/tfu2003"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillGithub size="40px" />
            </a>
            </div>
            <div>
            <a
              href="https://www.linkedin.com/in/tony-fu-837922218/"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillLinkedin size="40px" />
            </a>
            </div>
            <div className="pr-1"> 
            <ButtonMailto
              label={<MdEmail size="43px" />}
              mailto="mailto:officialtonyfu@gmail.com"
            />
            </div>
          </div>
        </div>
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

const ButtonMailto = ({ mailto, label }) => {
  return (
      <Link
        to="#"
        onClick={(e) => {
          window.location.href = mailto;
          e.preventDefault();
        }}
      >
        {label}
      </Link>
  );
};

export default Header;
