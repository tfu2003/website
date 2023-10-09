import Main from "./components/main";
import Projects from "./components/projects";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="bg-gray-500 background">
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
