import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Project from "./Components/Project";
import Contact from "./Components/Contact";
import "./App.css";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      <main className="flex-grow">
        <Home />
        <About />
        <Project />
        <Contact />
      </main>
    </div>
  );
};

export default App;

