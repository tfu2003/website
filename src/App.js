import Intro from "./components/intro";
import Header from "./components/header";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div class="bg-gradient-to-r from-violet-200 to-pink-200 background">
      <div>
        <Header />
        <Intro />
      </div>
    </div>
  );
}

export default App;
