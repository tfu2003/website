import Intro from "./components/intro";
import Header from "./components/header";

function App() {
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
