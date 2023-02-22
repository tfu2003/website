import { useEffect } from "react";
import Header from "./header";
import Intro from "./intro";

function Main() {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
      return (
        <div>
            <Header/>
            <Intro/>
        </div>
      );
    }

export default Main;