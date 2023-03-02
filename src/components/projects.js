import { useNavigate } from "react-router-dom";
import Website from "./images/website.png";
import List from "./images/to-do-list.png";
import Space from "./images/space-invaders.png";
import { useEffect, useState } from "react";

function Projects() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  let navigate = useNavigate();
  const route = () => {
    let path = `/`;
    navigate(path);
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
    <div className="flex min-h-screen flex-col items-center pt-10 font-serif">
      <h1
        className={`text-center font-bold ${
          isMobile ? "text-2xl" : "text-3xl"
        }`}
      >
        A collection of my other projects!
      </h1>
      <p className={`text-center pt-6 ${isMobile ? "text-md" : "text-xl"}`}>
        These are some smaller projects that I have worked on to expand my
        knowledge with some technologies.
      </p>
      <div
        className={`outer-container grid pt-12 ${
          isMobile ? "grid-cols-1" : "grid grid-cols-2 -space-x-12"
        } w-5/6`}
      >
        <img src={Website} alt="website" className="max-w-auto" />
        <div className="flex flex-col justify-center">
          <h1
            className={`text-xl font-bold ${
              isMobile ? "text-center pt-6" : "text-end"
            }`}
          >
            Personal Website
          </h1>
          <div className="pt-3">
            <p className="text-base bg-pink-300 p-5">
              A website that I made to showcase my projects and experiences.
              This is a project that I made which helped me further develop my
              skills in web development. I also used some tools that I had less
              experience with prior to making this project.
            </p>
          </div>
          <div className="flex flex-col items-center pt-3">
            <div className="text-lg font-bold">Tools used:</div>
            <div className="grid grid-cols-3 gap-4 text-sm pt-3">
              <a
                href="https://reactjs.org/docs/getting-started.html"
                target="_blank"
                rel="noreferrer"
                className="border-2 border-pink-500 shadow hover:shadow-md hover:shadow-pink-500 hover:opacity-50 p-2 transition duration-450 text-center"
              >
                React
              </a>
              <a
                href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                target="_blank"
                rel="noreferrer"
                className="border-2 border-pink-500 shadow hover:shadow-md hover:shadow-pink-500 hover:opacity-50 p-2 transition duration-450 text-center"
              >
                JavaScript
              </a>
              <a
                href="https://developer.mozilla.org/en-US/docs/Web/HTML"
                target="_blank"
                rel="noreferrer"
                className="border-2 border-pink-500 shadow hover:shadow-md hover:shadow-pink-500 hover:opacity-50 p-2 transition duration-450 text-center"
              >
                HTML
              </a>
            </div>
            <div className="grid grid-cols-1 gap-4 text-sm pt-3">
              <a
                href="https://v2.tailwindcss.com/docs"
                target="_blank"
                rel="noreferrer"
                className="border-2 border-pink-500 shadow hover:shadow-md hover:shadow-pink-500 hover:opacity-50 p-2 transition duration-450 text-center"
              >
                Tailwind CSS
              </a>
            </div>
          </div>
          <div className={`pt-6 ${isMobile ? "text-center pt-6" : "text-end"}`}>
            <a
              href="https://github.com/tfu2003/website"
              target="_blank"
              rel="noreferrer"
              className="font-bold"
            >
              Link to Github
            </a>
          </div>
        </div>
      </div>

      {isMobile ? (
        <div className="outer-container grid pt-12 grid-cols-1 w-5/6">
          <img src={Space} alt="space" className="max-w-auto" />
          <div className="flex flex-col justify-center">
            <h1 className="text-xl font-bold text-center pt-6">
              Space Invaders
            </h1>
            <div className="pt-3">
              <p className="text-base bg-pink-300 p-5">
                An interactive game where players shoot incoming aliens that are
                attacking the planet. I made this to give myself an introduction
                to game design.
              </p>
            </div>
            <div className="flex flex-col items-center pt-3">
              <div className="text-lg font-bold">Tools used:</div>
              <div className="grid grid-cols-2 gap-4 text-sm pt-3">
                <a
                  href="https://docs.python.org/3/"
                  target="_blank"
                  rel="noreferrer"
                  className="border-2 border-pink-500 shadow hover:shadow-md hover:shadow-pink-500 hover:opacity-50 p-2 transition duration-450 text-center"
                >
                  Python
                </a>
                <a
                  href="https://www.pygame.org/docs/"
                  target="_blank"
                  rel="noreferrer"
                  className="border-2 border-pink-500 shadow hover:shadow-md hover:shadow-pink-500 hover:opacity-50 p-2 transition duration-450 text-center"
                >
                  Pygame
                </a>
              </div>
            </div>
            <div className="text-center pt-6">
              <a
                href="https://github.com/tfu2003/space-invaders"
                target="_blank"
                rel="noreferrer"
                className="font-bold"
              >
                Link to Github
              </a>
            </div>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-2 pt-20 w-5/6 -space-x-12">
          <div className="flex flex-col justify-center">
            <h1 className="text-xl font-bold text-start">Space Invaders</h1>
            <div className="pt-3 z-10">
              <p className="text-base bg-pink-300 p-5">
                An interactive game where players shoot incoming aliens that are
                attacking the planet. I made this to give myself an introduction
                to game design.
              </p>
            </div>
            <div className="flex flex-col items-center pt-3 pr-12">
              <div className="text-lg font-bold">Tools used:</div>
              <div className="grid grid-cols-2 gap-4 text-sm pt-3">
                <a
                  href="https://docs.python.org/3/"
                  target="_blank"
                  rel="noreferrer"
                  className="border-2 border-pink-500 shadow hover:shadow-md hover:shadow-pink-500 hover:opacity-50 p-2 transition duration-450 text-center"
                >
                  Python
                </a>
                <a
                  href="https://www.pygame.org/docs/"
                  target="_blank"
                  rel="noreferrer"
                  className="border-2 border-pink-500 shadow hover:shadow-md hover:shadow-pink-500 hover:opacity-50 p-2 transition duration-450 text-center"
                >
                  Pygame
                </a>
              </div>
            </div>
            <div className="pt-6 text-start">
              <a
                href="https://github.com/tfu2003/space-invaders"
                target="_blank"
                rel="noreferrer"
                className="font-bold"
              >
                Link to Github
              </a>
            </div>
          </div>
          <div className="z-0">
            <img src={Space} alt="space" className="max-w-auto" />
          </div>
        </div>
      )}

      <div
        className={`outer-container grid pt-12 ${
          isMobile ? "grid-cols-1" : "grid grid-cols-2 -space-x-12"
        } w-5/6`}
      >
        <img src={List} alt="list" className="max-w-auto" />
        <div className="flex flex-col justify-center">
          <h1
            className={`text-xl font-bold ${
              isMobile ? "text-center pt-6" : "text-end"
            }`}
          >
            To Do List
          </h1>
          <div className="pt-3">
            <p className="text-base bg-pink-300 p-5">
              A simple to do list that allows users to add, delete, and edit to
              dos. The program has a save and load system. This was one of my
              first projects that I made which exposed me to basic web
              development.
            </p>
          </div>
          <div className="flex flex-col items-center pt-3">
            <div className="text-lg font-bold">Tools used:</div>
            <div className="grid grid-cols-3 gap-4 text-sm pt-3">
              <a
                href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                target="_blank"
                rel="noreferrer"
                className="border-2 border-pink-500 shadow hover:shadow-md hover:shadow-pink-500 hover:opacity-50 p-2 transition duration-450 text-center"
              >
                JavaScript
              </a>
              <a
                href="https://developer.mozilla.org/en-US/docs/Web/HTML"
                target="_blank"
                rel="noreferrer"
                className="border-2 border-pink-500 shadow hover:shadow-md hover:shadow-pink-500 hover:opacity-50 p-2 transition duration-450 text-center"
              >
                HTML
              </a>
              <a
                href="https://developer.mozilla.org/en-US/docs/Web/CSS"
                target="_blank"
                rel="noreferrer"
                className="border-2 border-pink-500 shadow hover:shadow-md hover:shadow-pink-500 hover:opacity-50 p-2 transition duration-450 text-center"
              >
                CSS
              </a>
            </div>
          </div>
          <div className={`pt-6 ${isMobile ? "text-center pt-6" : "text-end"}`}>
            <a
              href="https://github.com/tfu2003/to-do-list"
              target="_blank"
              rel="noreferrer"
              className="font-bold"
            >
              Link to Github
            </a>
          </div>
        </div>
      </div>

      <div className="pt-16 pb-5">
        <button
          className="border-2 border-pink-500 rounded-full text-pink-500 shadow hover:shadow-md hover:shadow-pink-500 hover:opacity-50 p-4 transition duration-450"
          onClick={route}
        >
          Go back
        </button>
      </div>
    </div>
  );
}

export default Projects;
