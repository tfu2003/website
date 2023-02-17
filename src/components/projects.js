import { useNavigate } from "react-router-dom";
import List from "./images/to-do-list.png";
import Space from "./images/space-invaders.png"
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
        <img src={List} alt="list" className="max-w-2xl" />
        <div className="flex flex-col">
          <h1 className="text-2xl font-bold text-end">To Do List</h1>
          <div className="pt-3">
            <p className="text-base bg-pink-300 p-5">
              A simple to do list that allows users to add, delete, and edit to
              dos. The program has a save and load system. This was one of my
              first projects that I made which exposed me to basic web
              development.
            </p>
          </div>
          <div className="flex flex-col items-center pt-3 pl-12">
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
          <div className="pt-6 text-end">
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
          <img src={Space} alt="space" className="max-w-2xl" />
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
