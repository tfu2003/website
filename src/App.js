import { useEffect } from "react";
import Header from "./components/header";
import Intro from "./components/intro";
import Contacts from "./components/contacts";

function App() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className="bg-gradient-to-r from-violet-200 to-pink-200 background">
      <Header/>
      <Intro/>
      <Contacts/>
    </div>
  );
}

export default App;
