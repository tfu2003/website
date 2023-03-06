import React, { useRef, useState, useEffect } from "react";
import FadeIn from "react-fade-in";
import Profile from "./images/profile.jpeg";
import Project from "./project";
import Contacts from "./contacts";

function Intro() {
  const ref = useRef(null);

  const handleClick = () => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  const [width, setWidth] = useState(window.innerWidth);
  const isMobile = width <= 800;

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
    <div className="flex flex-col items-center gap-12 pt-14 font-serif">
      <div className={`text-center ${isMobile ? "text-2xl" : "text-3xl"}`}>
        <FadeIn delay="800" transitionDuration="1000">
          Hello! My name is Tony and welcome to my website!
        </FadeIn>
      </div>
      <div
        className={`outer-container flex ${
          isMobile ? "flex-col items-center gap-6" : "flex-row gap-16"
        } w-2/3`}
      >
        <FadeIn delay="1100" transitionDuration="1000">
          <img src={Profile} alt="profile" className="max-w-xs" />
        </FadeIn>
        <div className="flex flex-col items-center gap-6">
          <FadeIn delay="1400" transitionDuration="1000">
            <h1 className="text-3xl font-bold"> About me!</h1>
          </FadeIn>
          <FadeIn delay="1400" transitionDuration="1000">
            <div className={` ${isMobile ? "text-center" : "text-left"}`}>
              <p className="text-lg">
                I am a self-motivated and passionate individual seeking to
                expand my knowledge in technology. Currently, I am a second year
                Computer Science student at the University of British Columbia.
                At the moment, I am interested in web development and machine
                learning.
                <br />
                <br />
                While I'm not debugging code, you can either find me at the gym
                curling dumbbells, binge-watching an entire Netflix series in
                one day, or fulfilling my ever increasing need for caffeine.
              </p>
            </div>
          </FadeIn>
          <FadeIn delay="1700" transitionDuration="1000">
            <button
              className="border-2 border-pink-500 rounded-full text-pink-500 shadow hover:shadow-md hover:shadow-pink-500 hover:opacity-50 p-4 transition duration-450"
              onClick={handleClick}
            >
              See more!
            </button>
          </FadeIn>
        </div>
      </div>
      <div style={{ height: "5rem" }} />
      <div ref={ref}>
        <FadeIn delay="2000" transitionDuration="1000">
          <Project />
        </FadeIn>
      </div>
      <div style={{ height: "5rem" }} />
      <FadeIn delay="2300" transitionDuration="1000">
        <Contacts />
      </FadeIn>
    </div>
  );
}

export default Intro;
