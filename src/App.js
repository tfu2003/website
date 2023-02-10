import { useEffect } from "react";
import Header from "./components/header";
import Intro from "./components/intro";
import Contacts from "./components/contacts";
import Main from "./components/main";
import Projects from "./components/projects";
import { Routes, Route, Router } from "react-router-dom";

function App() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className="bg-gradient-to-r from-violet-200 to-pink-200 background">
      <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/projects" element={<Projects />} />
      </Routes>
    </div>
  );
}

export default App;
