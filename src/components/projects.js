import { useNavigate } from "react-router-dom";

function Projects() {

  let navigate = useNavigate(); 
  const route = () =>{ 
    let path = `/`; 
    navigate(path);
  }

  return (
    <div className="flex min-h-screen flex-col items-center pt-10 font-serif">
      <h1 className="text-3xl font-bold">All my other projects!</h1>
      <div className="pt-6"> 
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
