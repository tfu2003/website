import { useEffect } from "react";
import Main from "./components/main";
import Projects from "./components/projects";
import { Routes, Route } from "react-router-dom";

function App() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className="bg-gradient-to-r from-violet-200 to-pink-200 background">
      <div> 
      <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/projects" element={<Projects />} />
      </Routes>
      </div>
    </div>
  );
}

export default App;
