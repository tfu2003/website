import Speech from "./images/speech-simulator.png";
import Reci from "./images/reci-one.png";
import Interview from "./images/interview.png"
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";

function Project() {
  let navigate = useNavigate();
  const route = () => {
    let path = `/projects`;
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
    <div className="flex flex-col items-center pt-10 font-serif" id="projects">
      <div className="w-2/3">
        <h1 className="text-3xl font-bold text-center">Projects!</h1>
        <div className="divide-y-4 divide-solid divide-black">
          <div>
            <h1 className="text-xl font-bold text-center pt-6">
              VR Speech Simulator [nwHacks 2023 Winner]
            </h1>
            <div
              className={`outer-container grid pt-2 ${
                isMobile ? "grid-cols-1" : "grid-cols-2 space-x-6"
              }`}
            >
              <div className={`${isMobile ? "pb-3" : "pb-12"}`}>
                <img
                  src={Speech}
                  alt="speech"
                  className="max-w-auto border-solid border-2 border-black opacity-30 hover:opacity-100 duration-500"
                />
              </div>
              <div>
                <div>
                  <p className="text-base">
                    VR Speech Simulator allows you practice your public speaking
                    within an immersive environment. Import a script and put on
                    a headset to get started. Once started, VR Speech Simulator
                    will provide feedback on how to perfect your speech!
                    <br />
                    <br />
                    Placed 3rd out of 131 projects in the largest hackathon in
                    Western Canada. Interested?&nbsp;
                    <a
                      href="https://devpost.com/software/vr-speech-simulator"
                      target="_blank"
                      rel="noreferrer"
                      className="font-bold"
                    >
                      Click to read more!
                    </a>
                  </p>
                </div>
                <div className="flex flex-col items-center pt-3">
                  <div className="text-lg font-bold">Tools used:</div>
                  {(width <= 1200 && width > 1000) || width <= 750 ? (
                    <div className="flex flex-col items-center">
                      <ul className="flex flex-row gap-8 text-sm pt-2 list-disc text-center">
                        <li>
                          <a
                            href="https://nextjs.org/docs"
                            target="_blank"
                            rel="noreferrer"
                          >
                            Next.js
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://www.typescriptlang.org/"
                            target="_blank"
                            rel="noreferrer"
                          >
                            TypeScript
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://www.prisma.io/docs"
                            target="_blank"
                            rel="noreferrer"
                          >
                            Prisma
                          </a>
                        </li>
                      </ul>
                      <ul className="flex flex-row gap-8 text-sm pt-2 list-disc text-center">
                        <li>
                          <a
                            href="https://docs.pmnd.rs/react-three-fiber/"
                            target="_blank"
                            rel="noreferrer"
                            className="text-center"
                          >
                            react-three-fiber
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://www.npmjs.com/package/react-xr"
                            target="_blank"
                            rel="noreferrer"
                            className="text-center"
                          >
                            react-xr
                          </a>
                        </li>
                      </ul>
                    </div>
                  ) : (
                    <ul className="flex flex-row gap-8 text-sm pt-2 list-disc text-center">
                      <li>
                        <a
                          href="https://nextjs.org/docs"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Next.js
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.typescriptlang.org/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          TypeScript
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.prisma.io/docs"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Prisma
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://docs.pmnd.rs/react-three-fiber/"
                          target="_blank"
                          rel="noreferrer"
                          className="text-center"
                        >
                          react-three-fiber
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.npmjs.com/package/react-xr"
                          target="_blank"
                          rel="noreferrer"
                          className="text-center"
                        >
                          react-xr
                        </a>
                      </li>
                    </ul>
                  )}
                </div>
                <div
                  className={`pt-5 pb-12 ${
                    isMobile ? "text-center pt-6" : "text-end"
                  }`}
                >
                  <a
                    href="https://github.com/marcusgchan/speech-simulator"
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

          <div>
            <h1 className="text-xl font-bold text-center pt-6">Reci One</h1>
            {isMobile ? (
              <div className="outer-container grid pt-2 grid-cols-1">
                <img
                  src={Reci}
                  alt="reci"
                  className="max-w-auto border-solid border-2 border-black opacity-30 hover:opacity-100 duration-500"
                />
                <div className="flex flex-col justify-center">
                  <div className="pt-3">
                    <p className="text-base">
                      Need a way to keep a record of your recipes? Reci One is a
                      recipe website that lets users add, view and delete
                      recipes. Users can filter recipes based on key words such
                      as ingredients and nationalities and also set recipes as
                      public or private. Keep your recipes safe with Reci One!
                      <br />
                      <br />
                      More functionality to come!
                    </p>
                  </div>
                  <div className="flex flex-col items-center pt-3">
                    <div className="text-lg font-bold">Tools used:</div>
                    {width <= 750 ? (
                      <div className="flex flex-col items-center">
                        <ul className="flex flex-row gap-8 text-sm pt-2 list-disc text-center">
                          <li>
                            <a
                              href="https://nextjs.org/docs"
                              target="_blank"
                              rel="noreferrer"
                            >
                              Next.js
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://www.typescriptlang.org/"
                              target="_blank"
                              rel="noreferrer"
                            >
                              TypeScript
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://www.prisma.io/docs"
                              target="_blank"
                              rel="noreferrer"
                            >
                              Prisma
                            </a>
                          </li>
                        </ul>
                        <ul className="flex flex-row gap-8 text-sm pt-2 list-disc text-center">
                          <li>
                            <a
                              href="https://next-auth.js.org/getting-started/introduction"
                              target="_blank"
                              rel="noreferrer"
                            >
                              NextAuth.js
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://trpc.io/docs"
                              target="_blank"
                              rel="noreferrer"
                            >
                              tRPC
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://zod.dev/"
                              target="_blank"
                              rel="noreferrer"
                            >
                              Zod
                            </a>
                          </li>
                        </ul>
                      </div>
                    ) : (
                      <ul className="flex flex-row gap-8 text-sm pt-2 list-disc text-center">
                        <li>
                          <a
                            href="https://nextjs.org/docs"
                            target="_blank"
                            rel="noreferrer"
                          >
                            Next.js
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://www.typescriptlang.org/"
                            target="_blank"
                            rel="noreferrer"
                          >
                            TypeScript
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://www.prisma.io/docs"
                            target="_blank"
                            rel="noreferrer"
                          >
                            Prisma
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://zod.dev/"
                            target="_blank"
                            rel="noreferrer"
                          >
                            Zod
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://next-auth.js.org/getting-started/introduction"
                            target="_blank"
                            rel="noreferrer"
                          >
                            NextAuth.js
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://trpc.io/docs"
                            target="_blank"
                            rel="noreferrer"
                          >
                            tRPC
                          </a>
                        </li>
                      </ul>
                    )}
                  </div>
                  <div className="text-center pt-6 pb-12">
                    <a
                      href="https://github.com/marcusgchan/reci-one"
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
              <div className="outer-container grid pt-2 grid-cols-2 space-x-6">
                <div>
                  <div>
                    <p className="text-base">
                      Need a way to keep a record of your recipes? Reci One is a
                      recipe website that lets users add, view and delete
                      recipes. Users can filter recipes based on key words such
                      as ingredients and nationalities and also set recipes as
                      public or private. Keep your recipes safe with Reci One!
                      <br />
                      <br />
                      More functionality to come!
                    </p>
                  </div>
                  <div className="flex flex-col items-center pt-3">
                    <div className="text-lg font-bold">Tools used:</div>
                    {width <= 1300 ? (
                      <div className="flex flex-col items-center">
                        <ul className="flex flex-row gap-8 text-sm pt-2 list-disc text-center">
                          <li>
                            <a
                              href="https://nextjs.org/docs"
                              target="_blank"
                              rel="noreferrer"
                            >
                              Next.js
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://www.typescriptlang.org/"
                              target="_blank"
                              rel="noreferrer"
                            >
                              TypeScript
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://www.prisma.io/docs"
                              target="_blank"
                              rel="noreferrer"
                            >
                              Prisma
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://zod.dev/"
                              target="_blank"
                              rel="noreferrer"
                            >
                              Zod
                            </a>
                          </li>
                        </ul>
                        <ul className="flex flex-row gap-8 text-sm pt-2 list-disc text-center">
                          <li>
                            <a
                              href="https://next-auth.js.org/getting-started/introduction"
                              target="_blank"
                              rel="noreferrer"
                            >
                              NextAuth.js
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://trpc.io/docs"
                              target="_blank"
                              rel="noreferrer"
                            >
                              tRPC
                            </a>
                          </li>
                        </ul>
                      </div>
                    ) : (
                      <ul className="flex flex-row gap-8 text-sm pt-2 list-disc text-center">
                        <li>
                          <a
                            href="https://nextjs.org/docs"
                            target="_blank"
                            rel="noreferrer"
                          >
                            Next.js
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://www.typescriptlang.org/"
                            target="_blank"
                            rel="noreferrer"
                          >
                            TypeScript
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://www.prisma.io/docs"
                            target="_blank"
                            rel="noreferrer"
                          >
                            Prisma
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://zod.dev/"
                            target="_blank"
                            rel="noreferrer"
                          >
                            Zod
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://next-auth.js.org/getting-started/introduction"
                            target="_blank"
                            rel="noreferrer"
                          >
                            NextAuth.js
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://trpc.io/docs"
                            target="_blank"
                            rel="noreferrer"
                          >
                            tRPC
                          </a>
                        </li>
                      </ul>
                    )}
                  </div>
                  <div className="pt-5 pb-12 text-start">
                    <a
                      href="https://github.com/marcusgchan/reci-one"
                      target="_blank"
                      rel="noreferrer"
                      className="font-bold"
                    >
                      Link to Github
                    </a>
                  </div>
                </div>
                <div className="pb-12">
                  <img
                    src={Reci}
                    alt="reci"
                    className="max-w-auto border-solid border-2 border-black opacity-30 hover:opacity-100 duration-500"
                  />
                </div>
              </div>
            )}
          </div>
          <div>
            <h1 className="text-xl font-bold text-center pt-6">Interview.ai</h1>
            <div
              className={`outer-container grid pt-2 ${
                isMobile ? "grid-cols-1" : "grid-cols-2 space-x-6"
              }`}
            >
              <div className={`${isMobile ? "pb-3" : "pb-12"}`}>
                <img
                  src={Interview}
                  alt="interview"
                  className="max-w-auto border-solid border-2 border-black opacity-30 hover:opacity-100 duration-500"
                />
              </div>
              <div>
                <div>
                  <p className="text-base">
                    Dreading future interviews for your dream job? Interview.ai
                    provides a way to endlessly practice your interviews so that
                    you will perfect them when the time comes. AI generated
                    prompts will be different for each session so you can be
                    ready for every question thrown at you for the real thing!
                  </p>
                </div>
                <div className="flex flex-col items-center pt-3">
                  <div className="text-lg font-bold">Tools used:</div>
                  {(width <= 1200 && width > 1000) || width <= 750 ? (
                    <div className="flex flex-col items-center">
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
                            href="https://expressjs.com/"
                            target="_blank"
                            rel="noreferrer"
                          >
                            Express.js
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://www.mongodb.com/docs/manual/tutorial/getting-started/"
                            target="_blank"
                            rel="noreferrer"
                          >
                            MongoDB
                          </a>
                        </li>
                      </ul>
                      <ul className="flex flex-row gap-8 text-sm pt-2 list-disc text-center">
                        <li>
                          <a
                            href="https://nodejs.org/en/docs"
                            target="_blank"
                            rel="noreferrer"
                            className="text-center"
                          >
                            Node.js
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://v2.tailwindcss.com/docs"
                            target="_blank"
                            rel="noreferrer"
                            className="text-center"
                          >
                            Tailwind CSS
                          </a>
                        </li>
                      </ul>
                    </div>
                  ) : (
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
                            href="https://expressjs.com/"
                            target="_blank"
                            rel="noreferrer"
                          >
                            Express.js
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://www.mongodb.com/docs/manual/tutorial/getting-started/"
                            target="_blank"
                            rel="noreferrer"
                          >
                            MongoDB
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://nodejs.org/en/docs"
                            target="_blank"
                            rel="noreferrer"
                            className="text-center"
                          >
                            Node.js
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://v2.tailwindcss.com/docs"
                            target="_blank"
                            rel="noreferrer"
                            className="text-center"
                          >
                            Tailwind CSS
                          </a>
                        </li>
                    </ul>
                  )}
                </div>
                <div
                  className={`pt-5 pb-12 ${
                    isMobile ? "text-center pt-6" : "text-end"
                  }`}
                >
                  <a
                    href="https://github.com/Wowboylol/Interview.ai"
                    target="_blank"
                    rel="noreferrer"
                    className="font-bold"
                  >
                    Link to Github
                  </a>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center pt-12">
              <button
                className="border-2 border-black rounded-full shadow hover:shadow-md hover:opacity-50 p-4 transition duration-500"
                onClick={route}
              >
                Check out my other projects!
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
