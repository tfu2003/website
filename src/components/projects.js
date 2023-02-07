import Speech from "./images/speech-simulator.png";

function Projects() {
  return (
    <div class="flex min-h-screen flex-col items-center pt-10 font-serif">
      <h1 class="text-3xl">Projects!</h1>
      <div class="flex p-6 pt-10 w-5/6 space-x-10">
        <img src={Speech} alt="speech" class="max-w-2xl" />
        <div class="flex flex-col items-center">
            <h1 class="text-2xl pt-6 font-bold text-center"> VR Speech Simulator [nwHacks 2023 Winner]</h1>
            <p class="text-lg pt-6">
              Some stuff about my project here. 
              <br />
              <br />
              Placed 3rd out of 131 projects in the largest hackathon in Western Canada!
            </p>
        </div>
      </div>
    </div>
  );
}

export default Projects;
