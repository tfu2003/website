import { AiFillGithub } from "react-icons/ai";
import Speech from "./images/speech-simulator.png";

function Projects() {
  return (
    <div class="flex min-h-screen flex-col items-center pt-10 font-serif">
      <h1 class="text-3xl font-bold">Projects!</h1>
      <div class="flex p-6 pt-20 w-5/6 -space-x-12">
        <img src={Speech} alt="speech" class="max-w-2xl" />
        <div class="flex flex-col items-end w-2/5">
          <h1 class="text-xl pt-6 font-bold text-center">
            VR Speech Simulator
            <br />
            [nwHacks 2023 Winner]
          </h1>
          <div class="pt-6">
            <p class="text-md bg-pink-300 p-5">
              VR Speech Simulator allows you practice your public speaking
              within an immersive environment. Import a script and put on a
              headset to get started. Once started, VR Speech Simulator will
              provide feedback on how to perfect your speech!
              <br />
              <br />
              Placed 3rd out of 131 projects in the largest hackathon in Western
              Canada!
            </p>
          </div>
          <div class="pt-6">
            <div class="flex items-end space-x-5">
              <a
                href="https://nextjs.org/docs"
                target="_blank"
                rel="noreferrer"
              >
                Next.js
              </a>
              <a
                href="https://www.typescriptlang.org/"
                target="_blank"
                rel="noreferrer"
              >
                TypeScript
              </a>
              <a
                href="https://www.prisma.io/docs"
                target="_blank"
                rel="noreferrer"
              >
                Prisma
              </a>
              <a
                href="https://docs.pmnd.rs/react-three-fiber/"
                target="_blank"
                rel="noreferrer"
              >
                react-three-fiber
              </a>
            </div>
          </div>
          <div class="pt-6">
            <div class="flex items-end">
              <a
                href="https://github.com/marcusgchan/speech-simulator"
                target="_blank"
                rel="noreferrer"
              >
                <AiFillGithub size="30px" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
