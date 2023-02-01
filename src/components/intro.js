import React from 'react';
import Profile from './images/profile.jpeg'

function Intro() {
  return (
    <div className="flex min-h-screen flex-col items-center pt-6 font-serif">
      <h1 className="text-3xl">
        Hello there! My name is Tony and welcome to my website!
      </h1>
      <img src={Profile} alt="profile" className="max-w-xs pt-6"/> 
      <h1> About me</h1>
      <div> 
        <p>Something about me here idk. While I'm not debugging code, you can either find me at the gym curling dumbbells, binge-watching an entire Netflix series in 1 day, or fulfilling my ever increasing need for caffeine</p> 
      </div>
    </div>
  );
}

export default Intro
