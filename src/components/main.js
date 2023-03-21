import { useEffect } from "react";
import Header from "./header";
import Navbar from "./navbar";
import Intro from "./intro";

function Main() {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
      return (
        <div>
            <Intro/>
        </div>
      );
    }

export default Main;