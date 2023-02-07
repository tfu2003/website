import Intro from "./components/intro";
import Header from "./components/header";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className="bg-gradient-to-r from-violet-200 to-pink-200">
      <div>
        <Header />
        <Intro />
      </div>
    </div>
  );
}

export default App;
