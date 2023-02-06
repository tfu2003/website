import { React} from "react";
import { motion } from "framer-motion";
import Characters from "./characters";
import FadeIn from "react-fade-in";
import Profile from "./images/profile.jpeg";

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

  return (
    <div className="flex min-h-screen flex-col items-center pt-6 font-serif">
      <motion.div
        className="App"
        initial="hidden"
        animate={"visible"}
        variants={container}
      >
        <div className="text-3xl">
          {title.map((item, index) => {
            return <Characters {...item} key={index} />;
          })}
        </div>
      </motion.div>
      <div className="flex justify-between p-6 pt-24 w-2/3 space-x-10">
        <FadeIn delay="2000" transitionDuration="1000"> 
        <img src={Profile} alt="profile" className="max-w-xs" />
        </FadeIn>
        <div className="flex flex-col items-center">
          <FadeIn delay="2200" transitionDuration="1000">
          <h1 className="text-3xl pt-6"> About me!</h1>
          </FadeIn>
          <FadeIn delay="2200" transitionDuration="1000">
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
          </FadeIn> 
        </div>
      </div>
    </div>
  );
}

export default Intro;
