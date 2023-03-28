import { useNavigate } from "react-router-dom";
import Website from "./images/website.png";
import List from "./images/to-do-list.png";
import Space from "./images/space-invaders.png";
import Bot from "./images/discord-bot.png";
import { useEffect, useState } from "react";
import FadeIn from "react-fade-in";

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
    <div className="flex flex-col items-center pt-10 font-serif">
      <div className="w-2/3">
        <FadeIn delay="800" transitionDuration="1000">
          <h1
            className={`text-center font-bold ${
              isMobile ? "text-2xl" : "text-3xl"
            }`}
          >
            A collection of my other projects!
          </h1>
        </FadeIn>
        <FadeIn delay="1100" transitionDuration="1000">
          <p className={`text-center pt-6 ${isMobile ? "text-md" : "text-xl"}`}>
            These are some smaller projects that I have worked on to expand my
            knowledge with some technologies.
          </p>
        </FadeIn>
        <div>
          <FadeIn delay="1400" transitionDuration="1000">
            <div className="divide-y-4 divide-solid divide-black">
              <div>
                <h1 className="text-xl font-bold text-center pt-6">
                  Personal Website
                </h1>
                <div
                  className={`outer-container grid pt-2 ${
                    isMobile ? "grid-cols-1" : "grid grid-cols-2 space-x-6"
                  }`}
                >
                  <div className={`${isMobile ? "pb-3" : "pb-12"}`}>
                    <img
                      src={Website}
                      alt="website"
                      className="max-w-auto border-solid border-2 border-black opacity-30 hover:opacity-100 duration-500"
                    />
                  </div>
                  <div>
                    <div>
                      <div>
                        <p className="text-base">
                          A website that I made to showcase my projects and
                          experiences. This is a project that I made which
                          helped me further develop my skills in web
                          development. I also used some tools that I had less
                          experience with prior to making this project.
                        </p>
                      </div>
                      <div className="flex flex-col items-center pt-3">
                        <div className="text-lg font-bold">Tools used:</div>
                        <ul className="flex flex-row gap-8 text-sm pt-2 list-disc text-center">
                          <li>
                            <a
                              href="https://reactjs.org/docs/getting-started.html"
                              target="_blank"
                              rel="noreferrer"
                            >
                              React
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                              target="_blank"
                              rel="noreferrer"
                            >
                              JavaScript
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://developer.mozilla.org/en-US/docs/Web/HTML"
                              target="_blank"
                              rel="noreferrer"
                            >
                              HTML
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://v2.tailwindcss.com/docs"
                              target="_blank"
                              rel="noreferrer"
                            >
                              Tailwind CSS
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div
                        className={`pt-5 pb-12 ${
                          isMobile ? "text-center" : "text-end"
                        }`}
                      >
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
                </div>
              </div>

              <div>
                <h1 className="text-xl font-bold text-center pt-6">
                  Space Invaders
                </h1>
                {isMobile ? (
                  <div className="outer-container grid pt-2 grid-cols-1">
                    <img
                      src={Space}
                      alt="space"
                      className="max-w-auto border-solid border-2 border-black opacity-30 hover:opacity-100 duration-500"
                    />
                    <div className="flex flex-col justify-center">
                      <div>
                        <div className="pt-3">
                          <p className="text-base">
                            An interactive game where players shoot incoming
                            aliens that are attacking the planet. I made this to
                            give myself an introduction to game design.
                          </p>
                        </div>
                        <div className="flex flex-col items-center pt-3">
                          <div className="text-lg font-bold">Tools used:</div>
                          <ul className="flex flex-row gap-8 text-sm pt-2 list-disc text-center">
                            <li>
                              <a
                                href="https://docs.python.org/3/"
                                target="_blank"
                                rel="noreferrer"
                              >
                                Python
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://www.pygame.org/docs/"
                                target="_blank"
                                rel="noreferrer"
                              >
                                Pygame
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="text-center pt-5 pb-12">
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
                  </div>
                ) : (
                  <div className="grid grid-cols-2 pt-2 space-x-6">
                    <div>
                      <div>
                        <div>
                          <p className="text-base">
                            An interactive game where players shoot incoming
                            aliens that are attacking the planet. I made this to
                            give myself an introduction to game design.
                          </p>
                        </div>
                        <div className="flex flex-col items-center pt-3">
                          <div className="text-lg font-bold">Tools used:</div>
                          <ul className="flex flex-row gap-8 text-sm pt-2 list-disc text-center">
                            <li>
                              <a
                                href="https://docs.python.org/3/"
                                target="_blank"
                                rel="noreferrer"
                              >
                                Python
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://www.pygame.org/docs/"
                                target="_blank"
                                rel="noreferrer"
                              >
                                Pygame
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="pt-5 pb-12 text-start">
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
                    <div className="pb-12">
                      <img
                        src={Space}
                        alt="space"
                        className="max-w-auto border-solid border-2 border-black opacity-30 hover:opacity-100 duration-500"
                      />
                    </div>
                  </div>
                )}
              </div>

              <div>
                <h1 className="text-xl font-bold text-center pt-6">
                  To Do List
                </h1>
                <div
                  className={`outer-container grid pt-2 ${
                    isMobile ? "grid-cols-1" : "grid grid-cols-2 space-x-6"
                  }`}
                >
                  <div className="pb-12">
                    <img
                      src={List}
                      alt="list"
                      className="max-w-auto border-solid border-2 border-black opacity-30 hover:opacity-100 duration-500"
                    />
                  </div>
                  <div className="flex flex-col justify-center">
                    <div>
                      <div>
                        <p className="text-base">
                          A simple to do list that allows users to add, delete,
                          and edit to dos. The program has a save and load
                          system. This was one of my first projects that I made
                          which exposed me to basic web development.
                        </p>
                      </div>
                      <div className="flex flex-col items-center pt-3">
                        <div className="text-lg font-bold">Tools used:</div>
                        <ul className="flex flex-row gap-8 text-sm pt-2 list-disc text-center">
                          <li>
                            <a
                              href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                              target="_blank"
                              rel="noreferrer"
                            >
                              JavaScript
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://developer.mozilla.org/en-US/docs/Web/HTML"
                              target="_blank"
                              rel="noreferrer"
                            >
                              HTML
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://developer.mozilla.org/en-US/docs/Web/CSS"
                              target="_blank"
                              rel="noreferrer"
                            >
                              CSS
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div
                        className={`pt-6 pb-12 ${
                          isMobile ? "text-center" : "text-end"
                        }`}
                      >
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
                </div>
              </div>

              <div>
                <h1 className="text-xl font-bold text-center pt-6">
                  Discord Gambling Bot
                </h1>
                {isMobile ? (
                  <div className="outer-container grid pt-2 grid-cols-1">
                    <img
                      src={Bot}
                      alt="space"
                      className="max-w-auto border-solid border-2 border-black opacity-30 hover:opacity-100 duration-500"
                    />
                    <div className="flex flex-col justify-center">
                      <div>
                        <div className="pt-3">
                          <p className="text-base">
                            A discord bot that I made for friends that allowed
                            them to gamble virtual points. This project allowed
                            me to gain more experience with interacting with a
                            database, and also helped improve my knowledge in
                            JavaScript.
                          </p>
                        </div>
                        <div className="flex flex-col items-center pt-3">
                          <div className="text-lg font-bold">Tools used:</div>
                          <ul className="flex flex-row gap-8 text-sm pt-2 list-disc text-center">
                            <li>
                              <a
                                href="https://docs.python.org/3/"
                                target="_blank"
                                rel="noreferrer"
                              >
                                Python
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://www.pygame.org/docs/"
                                target="_blank"
                                rel="noreferrer"
                              >
                                Pygame
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="text-center pt-5 pb-12">
                          <a
                            href="https://github.com/tfu2003/discord-bot"
                            target="_blank"
                            rel="noreferrer"
                            className="font-bold"
                          >
                            Link to Github
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="grid grid-cols-2 pt-2 space-x-6">
                    <div>
                      <div>
                        <div>
                          <p className="text-base">
                            A discord bot that I made for friends that allowed
                            them to gamble virtual points. This project allowed
                            me to gain more experience with interacting with a
                            database, and also helped improve my knowledge in
                            JavaScript.
                          </p>
                        </div>
                        <div className="flex flex-col items-center pt-3">
                          <div className="text-lg font-bold">Tools used:</div>
                          <ul className="flex flex-row gap-8 text-sm pt-2 list-disc text-center">
                            <li>
                              <a
                                href="https://docs.python.org/3/"
                                target="_blank"
                                rel="noreferrer"
                              >
                                Python
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://www.pygame.org/docs/"
                                target="_blank"
                                rel="noreferrer"
                              >
                                Pygame
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="pt-5 pb-12 text-start">
                          <a
                            href="https://github.com/tfu2003/discord-bot"
                            target="_blank"
                            rel="noreferrer"
                            className="font-bold"
                          >
                            Link to Github
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="pb-12">
                      <img
                        src={Bot}
                        alt="bot"
                        className="max-w-auto border-solid border-2 border-black opacity-30 hover:opacity-100 duration-500"
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </FadeIn>
        </div>

        <div className="pt-20 pb-6 flex flex-col items-center">
          <FadeIn delay="1700" transitionDuration="1000">
            <button
              className="border-2 border-black rounded-full shadow hover:shadow-md hover:opacity-50 p-4 transition duration-500"
              onClick={route}
            >
              Go back
            </button>
          </FadeIn>
        </div>
      </div>
    </div>
  );
}

export default Projects;
