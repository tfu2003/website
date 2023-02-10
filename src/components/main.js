import { useEffect } from "react";
import Header from "./header";
import Intro from "./intro";

function Main() {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
      return (
        <div className="bg-gradient-to-r from-violet-200 to-pink-200 background">
            <Header/>
            <Intro/>
        </div>
      );
    }

export default Main;