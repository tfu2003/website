import { React, useState } from "react";
import { motion } from "framer-motion";
import Characters from "./characters";
import Profile from "./images/profile.jpeg";

function Intro() {
  const [replay, setReplay] = useState(true);
  const placeholderText = [
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

  return (
    <div className="flex min-h-screen flex-col items-center pt-6 font-serif">
      <motion.div
        className="App"
        initial="hidden"
        animate={replay ? "visible" : "hidden"}
        variants={container}
      >
        <div className="text-3xl">
          {placeholderText.map((item, index) => {
            return <Characters {...item} key={index} />;
          })}
        </div>
      </motion.div>
      <div className="flex justify-between p-6 pt-24 w-2/3 space-x-10">
        <img src={Profile} alt="profile" className="max-w-xs" />
        <div className="flex flex-col items-center">
          <h1 className="text-3xl pt-6"> About me!</h1>
          <p className="text-lg p-6">
            I am a self-motivated and passionate individual seeking to expand my
            knowledge in technology. Currently, I am a second year Computer
            Science student at the University of British Columbia. At the
            moment, I am interested in web development and machine learning.
            <br />
            <br />
            While I'm not debugging code, you can either find me at the gym
            curling dumbbells, binge-watching an entire Netflix series in 1 day,
            or fulfilling my ever increasing need for caffeine.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Intro;
