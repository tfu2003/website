import Speech from "./images/speech-simulator.png";
import Reci from "./images/reci-one.png";
import Trade from "./images/trade-designer.png";
import { useNavigate } from "react-router-dom";
import List from "./images/to-do-list.png";
import { useEffect } from "react";

function Projects() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  let navigate = useNavigate();
  const route = () => {
    let path = `/`;
    navigate(path);
  };

  return (

    <div className="flex min-h-screen flex-col items-center pt-10 font-serif">
      <h1 className="text-3xl font-bold">A collection of my other projects!</h1>
      <p className="text-xl pt-6">These are some smaller projects that I have worked on to expand my knowledge with some technologies.</p>
      <div className="flex items-center pl-6 pt-12 -space-x-12 w-5/6">
        <img src={Speech} alt="speech" className="max-w-2xl" />
        <div className="flex flex-col">
          <h1 className="text-xl font-bold text-end">
            VR Speech Simulator
            <br />
            [nwHacks 2023 Winner]
          </h1>
          <div className="pt-3">
            <p className="text-base bg-pink-300 p-5">
              VR Speech Simulator allows you practice your public speaking
              within an immersive environment. Import a script and put on a
              headset to get started. Once started, VR Speech Simulator will
              provide feedback on how to perfect your speech!
              <br />
              <br />
              Placed 3rd out of 131 projects in the largest hackathon in Western
              Canada. Interested?&nbsp;
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
          <div className="flex flex-col items-center pt-3 pl-12">
            <div className="text-lg font-bold">Tools used:</div>
            <div className="grid grid-cols-3 gap-4 text-sm pt-3">
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
            </div>
            <div className="grid grid-cols-2 gap-4 text-sm pt-3">
              <a
                href="https://docs.pmnd.rs/react-three-fiber/"
                target="_blank"
                rel="noreferrer"
                className="border-2 border-pink-500 shadow hover:shadow-md hover:shadow-pink-500 hover:opacity-50 p-2 transition duration-450 text-center"
              >
                react-three-fiber
              </a>

              <a
                href="https://www.npmjs.com/package/react-xr"
                target="_blank"
                rel="noreferrer"
                className="border-2 border-pink-500 shadow hover:shadow-md hover:shadow-pink-500 hover:opacity-50 p-2 transition duration-450 text-center"
              >
                react-xr
              </a>
            </div>
          </div>
          <div className="pt-6 text-end">
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

      <div className="flex items-center pl-6 pt-20 w-5/6 -space-x-12">
        <div className="flex flex-col">
          <h1 className="text-xl font-bold text-start">Reci One</h1>
          <div className="pt-3 z-10">
            <p className="text-base bg-pink-300 p-5">
              Need a way to keep a record of your recipes? Reci One is a recipe
              website that lets users add, view and delete recipes. Users can
              filter recipes based on key words such as ingredients and
              nationalities and also set recipes as public or private. Keep your
              recipes safe with Reci One!
              <br />
              <br />
              More functionality to come!
            </p>
          </div>
          <div className="flex flex-col items-center pt-3 pr-12">
            <div className="text-lg font-bold">Tools used:</div>
            <div className="grid grid-cols-4 gap-4 text-sm pt-3">
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
          <div className="pt-6 text-start">
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
        <div className="z-0">
          <img src={Reci} alt="speech" className="max-w-2xl" />
        </div>
      </div>

      <div className="flex items-center pt-20 pl-6 -space-x-12 w-5/6">
        <img src={Trade} alt="speech" className="max-w-2xl" />
        <div className="flex flex-col">
          <h1 className="text-xl font-bold text-end">Trade Designer</h1>
          <div className="pt-3">
            <p className="text-base bg-pink-300 p-5">
              NBA trade rumors are flying. Kyrie Irving has just been traded to
              the Dallas Mavericks and Kevin Durant might be next. Want to make
              your own mock trades that would drastically help your team? With
              this trade designer, you can create, delete and edit trades. You
              can even save your trades and load them in a future session!
            </p>
          </div>
          <div className="flex flex-col items-center pt-3 pl-12">
            <div className="text-lg font-bold">Tools used:</div>
            <div className="grid grid-cols-3 gap-4 text-sm pt-3">
              <a
                href="https://docs.oracle.com/en/java/"
                target="_blank"
                rel="noreferrer"
                className="border-2 border-pink-500 shadow hover:shadow-md hover:shadow-pink-500 hover:opacity-50 p-2 transition duration-450 text-center"
              >
                Java
              </a>
              <a
                href="https://docs.oracle.com/javase/7/docs/api/javax/swing/package-summary.html"
                target="_blank"
                rel="noreferrer"
                className="border-2 border-pink-500 shadow hover:shadow-md hover:shadow-pink-500 hover:opacity-50 p-2 transition duration-450 text-center"
              >
                Java Swing
              </a>
              <a
                href="https://junit.org/junit5/docs/current/user-guide/"
                target="_blank"
                rel="noreferrer"
                className="border-2 border-pink-500 shadow hover:shadow-md hover:shadow-pink-500 hover:opacity-50 p-2 transition duration-450 text-center"
              >
                JUnit
              </a>
            </div>
          </div>
          <div className="pt-6 text-end">
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
