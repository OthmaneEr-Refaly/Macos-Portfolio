import { useState, useRef } from "react";
import { Navbar, Welcome, Dock, BootScreen } from "./components/Index.js";
import {Terminal, Safari, Resume, Finder, Contact, Text, Image} from "./windows/Index.js";

import WindowWrapper from "./hoc/WindowWrapper.js";
import {Draggable} from "gsap/Draggable";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(Draggable);

const App = () => {
  const [isBooting, setIsBooting] = useState(true);
  const mainRef = useRef(null);

  useGSAP(() => {
    if (!isBooting && mainRef.current) {
      gsap.from(mainRef.current, {
        scale: 1.05,
        opacity: 0,
        filter: "blur(10px)",
        duration: 1.2,
        ease: "power3.out"
      });
    }
  }, [isBooting]);

  return (
    <>
      {isBooting && <BootScreen onComplete={() => setIsBooting(false)} />}
      
      {!isBooting && (
        <main ref={mainRef} className="h-screen w-screen overflow-hidden bg-mac-os bg-cover bg-center">
          <Navbar />
          <Welcome />
          <Dock />
    
          <Terminal />
          <Safari />
          <Resume />
          <Finder />
          <Contact />
          <Text />
          <Image />
        </main>
      )}
    </>
  );
};

export default App;
