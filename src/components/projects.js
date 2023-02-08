import Speech from "./images/speech-simulator.png";

function Projects() {
  return (
    <div class="flex min-h-screen flex-col items-center pt-10 font-serif">
      <h1 class="text-3xl font-bold">Projects!</h1>
      <div class="flex p-6 pt-20 w-5/6 -space-x-12">
        <img src={Speech} alt="speech" class="max-w-2xl" />
        <div class="flex flex-col items-end w-2/5">
          <h1 class="text-xl pt-6 font-bold text-end">
            VR Speech Simulator
            <br />
            [nwHacks 2023 Winner]
          </h1>
          <div class="pt-6">
            <p class="text-base bg-pink-300 p-5">
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
                class="font-bold"
              >
                Click to read more!
              </a>
            </p>
          </div>
          <div class="pt-6 flex flex-col items-center">
            <div class="text-lg font-bold">
              Tools used:
            </div>
            <div class="flex items-end text-sm pt-4 space-x-5">
              <a
                href="https://nextjs.org/docs"
                target="_blank"
                rel="noreferrer"
                class="border-2 border-pink-500 shadow hover:shadow-md hover:shadow-pink-500 hover:opacity-50 p-2 transition duration-450"
              >
                Next.js
              </a>
              <a
                href="https://www.typescriptlang.org/"
                target="_blank"
                rel="noreferrer"
                class="border-2 border-pink-500 shadow hover:shadow-md hover:shadow-pink-500 hover:opacity-50 p-2 transition duration-450"
              >
                TypeScript
              </a>
              <a
                href="https://www.prisma.io/docs"
                target="_blank"
                rel="noreferrer"
                class="border-2 border-pink-500 shadow hover:shadow-md hover:shadow-pink-500 hover:opacity-50 p-2 transition duration-450"
              >
                Prisma
              </a>
              <a
                href="https://docs.pmnd.rs/react-three-fiber/"
                target="_blank"
                rel="noreferrer"
                class="border-2 border-pink-500 shadow hover:shadow-md hover:shadow-pink-500 hover:opacity-50 p-2 transition duration-450"
              >
                react-three-fiber
              </a>
            </div>
          </div>
          <div class="pt-4 text-end">
                <a
                  href="https://github.com/marcusgchan/speech-simulator"
                  target="_blank"
                  rel="noreferrer"
                  class="font-bold"
                >
                  Link to Github
                </a>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
