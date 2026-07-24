import { Navbar, Welcome, Dock } from "./components/Index.js";
import {Terminal} from "./windows/Index.js";

import WindowWrapper from "./hoc/WindowWrapper.js";
import {Draggable} from "gsap/Draggable";
import gsap from "gsap";


gsap.registerPlugin(Draggable);

const App = () => {
  return (
    <main>
      <Navbar />
      <Welcome />
      <Dock />

      <Terminal />
    </main>
  );
};

export default App;
