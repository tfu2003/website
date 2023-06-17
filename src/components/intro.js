import React, { useState, useEffect } from "react";
import FadeIn from "react-fade-in";
import Profile from "./images/profile.jpeg";
import Navbar from "./navbar";
import Project from "./project";
import Contacts from "./contacts";

function Intro() {
  const handleClick = (id) => {
    document.querySelector(`#${id}`)?.scrollIntoView({ behavior: "smooth" });
  };

  const [width, setWidth] = useState(window.innerWidth);
  const isMobile = width <= 1000;

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
    <div>
      <Navbar />
      <div className="flex flex-col items-center justify-center gap-6 pt-14 font-serif">
        <div
          className={`text-center w-2/3 ${isMobile ? "text-xl" : "text-3xl"}`}
        >
          <FadeIn delay="800" transitionDuration="1000">
            Hello! My name is Tony and welcome to my website!
          </FadeIn>
        </div>
        <FadeIn delay="1100" transitionDuration="1000">
          <h1 className="text-3xl font-bold pt-6 scroll-m-20" id="about">
            {" "}
            About me!
          </h1>
        </FadeIn>
        <div
          className={`flex w-2/3 ${
            isMobile ? "flex-col items-center gap-6" : "flex-row gap-10"
          }`}
        >
          <FadeIn delay="1400" transitionDuration="1000">
            <img
              src={Profile}
              alt="profile"
              className={`border-solid border-2 border-black ${
                width <= 500 ? "max-w-auto" : "max-w-xs"
              }`}
            />
          </FadeIn>
          <div className="grid grid-cols-1 content-center">
            <div className="flex flex-col items-center gap-6">
              <FadeIn delay="1400" transitionDuration="1000">
                <div>
                  <p className="text-lg">
                    I am a self-motivated and passionate individual seeking to
                    expand my knowledge in technology. Currently, I finished my
                    second year at the University of British Columbia, where I
                    am studying Computer Science. At the moment, I am interested
                    in web development and machine learning and hoping to gain
                    more experience in these fields.
                    <br />
                    <br />
                    Some hobbies of mine include: hiking, playing spikeball,
                    soccer and piano, and going to the gym.
                  </p>
                </div>
              </FadeIn>
              <FadeIn delay="1700" transitionDuration="1000">
                <button
                  className="border-2 border-black rounded-full shadow hover:shadow-md hover:opacity-50 p-4 transition duration-500"
                  onClick={() => handleClick("projects")}
                >
                  See more!
                </button>
              </FadeIn>
            </div>
          </div>
        </div>
        <div style={{ height: "1rem" }} />
        <div className="scroll-m-20" id="projects">
          <FadeIn delay="2000" transitionDuration="1000">
            <Project />
          </FadeIn>
        </div>
        <div style={{ height: "1rem" }} />
        <div id="contacts" className="w-2/3">
          <FadeIn delay="2300" transitionDuration="1000">
            <Contacts />
          </FadeIn>
        </div>
        <div style={{ height: "1rem" }} />
      </div>
    </div>
  );
}

export default Intro;
