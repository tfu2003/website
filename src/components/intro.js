import { React, useRef } from "react";
import { motion } from "framer-motion";
import Characters from "./characters";
import FadeIn from "react-fade-in";
import Profile from "./images/profile.jpeg";
import Projects from "./projects";

function Intro() {
  const title = [
    {
      type: "heading1",
      text: "Hello! My name is Tony and welcome to my website!",
    },
  ];

  const container = {
    visible: {
      transition: {
        staggerChildren: 0.025,
      },
    },
  };

  const ref = useRef(null);

  const handleClick = () => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div class="flex min-h-screen flex-col items-center pt-6 font-serif">
      <motion.div
        className="App"
        initial="hidden"
        animate={"visible"}
        variants={container}
      >
        <div class="text-3xl">
          {title.map((item, index) => {
            return <Characters {...item} key={index} />;
          })}
        </div>
      </motion.div>
      <div class="flex justify-between p-6 pt-24 w-2/3 space-x-10">
        <FadeIn delay="2000" transitionDuration="1000">
          <img src={Profile} alt="profile" class="max-w-xs" />
        </FadeIn>
        <div class="flex flex-col items-center">
          <FadeIn delay="2200" transitionDuration="1000">
            <h1 class="text-3xl pt-6"> About me!</h1>
          </FadeIn>
          <FadeIn delay="2200" transitionDuration="1000">
            <p class="text-lg p-6">
              I am a self-motivated and passionate individual seeking to expand
              my knowledge in technology. Currently, I am a second year Computer
              Science student at the University of British Columbia. At the
              moment, I am interested in web development and machine learning.
              <br />
              <br />
              While I'm not debugging code, you can either find me at the gym
              curling dumbbells, binge-watching an entire Netflix series in 1
              day, or fulfilling my ever increasing need for caffeine.
            </p>
          </FadeIn>
          <FadeIn delay="2800" transitionDuration="1000">
            <button
              class="border-2 border-pink-500 rounded-full text-pink-500 shadow hover:shadow-md hover:shadow-pink-500 hover:opacity-50 p-4"
              onClick={handleClick}
            >
              See more!
            </button>
          </FadeIn>
        </div>
      </div>
      <div style={{ height: "20rem" }} />
      <div ref={ref}>
        <Projects />
      </div>
      <div style={{ height: "50rem" }} />
    </div>
  );
}

export default Intro;
