import Speech from "./images/speech-simulator.png";
import Reci from "./images/reci-one.png";

function Projects() {
  return (
    <div className="flex min-h-screen flex-col items-center pt-10 font-serif">
      <h1 className="text-3xl font-bold">Projects!</h1>
      <div className="flex p-6 pt-20 w-5/6 -space-x-12">
        <img src={Speech} alt="speech" className="max-w-2xl" />
        <div className="flex flex-col w-2/5">
          <div>
            <h1 className="text-xl pt-6 font-bold text-end">
              VR Speech Simulator
              <br />
              [nwHacks 2023 Winner]
            </h1>
            <div className="pt-6">
              <p className="text-base bg-pink-300 p-5">
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
          </div>
          <div className="flex flex-col items-center pt-6 pl-12">
            <div className="text-lg font-bold">Tools used:</div>
            <div className="grid grid-cols-3 gap-4 text-sm pt-4">
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
            <div className="grid grid-cols-1 gap-4 text-sm pt-4">
              <a
                href="https://docs.pmnd.rs/react-three-fiber/"
                target="_blank"
                rel="noreferrer"
                className="border-2 border-pink-500 shadow hover:shadow-md hover:shadow-pink-500 hover:opacity-50 p-2 transition duration-450 text-center"
              >
                react-three-fiber
              </a>
            </div>
          </div>
          <div className="pt-4 text-end">
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

      <div className="flex p-6 pt-20 w-5/6 -space-x-12">
        <div className="flex flex-col items-start w-2/5">
          <h1 className="text-xl pt-6 font-bold text-end">Reci One</h1>
          <div className="pt-6 z-10">
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
          <div className="flex flex-col items-center pt-6 pl-1">
            <div className="text-lg font-bold">
              Tools used:
            </div>
            <div className="grid grid-cols-4 gap-4 text-sm pt-4">
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
            <div className="grid grid-cols-2 gap-4 text-sm pt-4">
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
          <div className="pt-4 text-end">
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
        <div className="z-0">
          <img src={Reci} alt="speech" className="max-w-2xl" />
        </div>
      </div>
    </div>
  );
}

export default Projects;
