import Speech from "./images/speech-simulator.png";
import Reci from "./images/reci-one.png";
import Trade from "./images/trade-designer.png";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";

function Project() {
  let navigate = useNavigate();
  const route = () => {
    let path = `/projects`;
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
    <div className="flex flex-col items-center pt-10 font-serif">
      <h1 className="text-3xl font-bold">Projects!</h1>
      <div className="divide-y-4 divide-solid divide-black w-2/3">
        <div>
          <h1 className="text-xl font-bold text-center pt-6">
            VR Speech Simulator [nwHacks 2023 Winner]
          </h1>
          <div
            className={`outer-container grid pt-2 ${
              isMobile ? "grid-cols-1" : "grid grid-cols-2 space-x-6"
            }`}
          >
            <div className="pb-12">
            <img src={Speech} alt="speech" className="max-w-auto border-solid border-2 border-black" />
            </div>
            <div className="flex flex-col justify-center">
              <div className="">
                <p className="text-base">
                  VR Speech Simulator allows you practice your public speaking
                  within an immersive environment. Import a script and put on a
                  headset to get started. Once started, VR Speech Simulator will
                  provide feedback on how to perfect your speech!
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
              <img src={Reci} alt="reci" className="max-w-auto " />
              <div className="flex flex-col justify-center">
                <div className="pt-3">
                  <p className="text-base">
                    Need a way to keep a record of your recipes? Reci One is a
                    recipe website that lets users add, view and delete recipes.
                    Users can filter recipes based on key words such as
                    ingredients and nationalities and also set recipes as public
                    or private. Keep your recipes safe with Reci One!
                    <br />
                    <br />
                    More functionality to come!
                  </p>
                </div>
                <div className="flex flex-col items-center pt-3">
                  <div className="text-lg font-bold">Tools used:</div>
                  <div className="grid grid-cols-4 gap-4 text-sm pt-3 list-disc">
                    <a
                      href="https://nextjs.org/docs"
                      target="_blank"
                      rel="noreferrer"
                      className="border-2 border-pink-500 shadow hover:shadow-md hover:shadow-pink-500 hover:opacity-50 p-2 transition duration-450 text-center"
                    >
                      Next.js
                    </a>
                    <a
                      href="https://www.typescriptlang.org/"
                      target="_blank"
                      rel="noreferrer"
                      className="border-2 border-pink-500 shadow hover:shadow-md hover:shadow-pink-500 hover:opacity-50 p-2 transition duration-450 text-center"
                    >
                      TypeScript
                    </a>
                    <a
                      href="https://www.prisma.io/docs"
                      target="_blank"
                      rel="noreferrer"
                      className="border-2 border-pink-500 shadow hover:shadow-md hover:shadow-pink-500 hover:opacity-50 p-2 transition duration-450 text-center"
                    >
                      Prisma
                    </a>
                    <a
                      href="https://trpc.io/docs"
                      target="_blank"
                      rel="noreferrer"
                      className="border-2 border-pink-500 shadow hover:shadow-md hover:shadow-pink-500 hover:opacity-50 p-2 transition duration-450 text-center"
                    >
                      tRPC
                    </a>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm pt-3">
                    <a
                      href="https://zod.dev/"
                      target="_blank"
                      rel="noreferrer"
                      className="border-2 border-pink-500 shadow hover:shadow-md hover:shadow-pink-500 hover:opacity-50 p-2 transition duration-450 text-center"
                    >
                      Zod
                    </a>
                    <a
                      href="https://next-auth.js.org/getting-started/introduction"
                      target="_blank"
                      rel="noreferrer"
                      className="border-2 border-pink-500 shadow hover:shadow-md hover:shadow-pink-500 hover:opacity-50 p-2 transition duration-450"
                    >
                      NextAuth.js
                    </a>
                  </div>
                </div>
                <div className="text-center pt-6">
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
              <div className="flex flex-col">
                <div>
                  <p className="text-base">
                    Need a way to keep a record of your recipes? Reci One is a
                    recipe website that lets users add, view and delete recipes.
                    Users can filter recipes based on key words such as
                    ingredients and nationalities and also set recipes as public
                    or private. Keep your recipes safe with Reci One!
                    <br />
                    <br />
                    More functionality to come!
                  </p>
                </div>
                <div className="flex flex-col items-center pt-3">
                  <div className="text-lg font-bold">Tools used:</div>
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
                <img src={Reci} alt="reci" className="max-w-auto border-solid border-2 border-black" />
              </div>
            </div>
          )}
        </div>
        <div>
          <h1 className="text-xl font-bold text-center pt-6">Trade Designer</h1>
          <div
            className={`outer-container grid pt-2 ${
              isMobile ? "grid-cols-1" : "grid grid-cols-2 space-x-6"
            }`}
          >
            <img src={Trade} alt="trade" className="max-w-auto border-solid border-2 border-black"/>
            <div className="flex flex-col justify-center">
              <div>
                <p className="text-base">
                  NBA trade rumors are flying. Kyrie Irving has just been traded
                  to the Dallas Mavericks and Kevin Durant might be next. Want
                  to make your own mock trades that would drastically help your
                  team? With this trade designer, you can create, delete and
                  edit trades. You can even save your trades and load them in a
                  future session!
                </p>
              </div>
              <div className="flex flex-col items-center pt-3">
                <div className="text-lg font-bold">Tools used:</div>
                <ul className="flex flex-row gap-12 text-sm pt-3 list-disc text-center">
                  <li> 
                  <a
                    href="https://docs.oracle.com/en/java/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Java
                  </a>
                  </li>
                  <li> 
                  <a
                    href="https://docs.oracle.com/javase/7/docs/api/javax/swing/package-summary.html"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Java Swing
                  </a>
                  </li>
                  <li> 
                  <a
                    href="https://junit.org/junit5/docs/current/user-guide/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    JUnit
                  </a>
                  </li>
                </ul>
              </div>
              <div
                className={`pt-6 ${isMobile ? "text-center pt-6" : "text-end"}`}
              >
                <a
                  href="https://github.com/tfu2003/trade-application"
                  target="_blank"
                  rel="noreferrer"
                  className="font-bold"
                >
                  Link to Github
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center pt-16">
            <button
              className="border-2 border-black rounded-full shadow hover:shadow-md hover:opacity-50 p-4 transition duration-450"
              onClick={route}
            >
              Check out my other projects!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
