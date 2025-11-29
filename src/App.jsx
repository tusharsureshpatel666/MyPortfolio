import gsap from "gsap";
import "./App.css";
import Dock from "./components/Dock";
import Navbar from "./components/Navbar";
import Welcome from "./components/Welcome";
import { Draggable } from "gsap/Draggable";
import Terminal from "./windows/Terminal";
import Safari from "./windows/Safari";
import ResumeWindow from "./windows/Resume";
import Finder from "./windows/Finder";
import Home from "./components/Home";
import GalleryWindow from "./windows/Gallery";
import ContactWindow from "./windows/Contact";

gsap.registerPlugin(Draggable);

function App() {
  return (
    <main>
      <Navbar />
      <Welcome />
      <Dock />
      <Terminal />
      <Safari />
      <ResumeWindow />
      <Finder />
      <Home />
      <GalleryWindow />
      <ContactWindow />
    </main>
  );
}

export default App;
