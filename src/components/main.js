import { useEffect } from "react";
import Header from "./header";
import Intro from "./intro";
import Contacts from "./contacts";

function Main() {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
      return (
        <div>
            <Header/>
            <Intro/>
            <Contacts/>
        </div>
      );
    }

export default Main;