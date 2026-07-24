import { Tooltip } from 'react-tooltip'
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap"
import { dockApps } from "../constants"
import useWindowStore from "../store/window";

const Dock = () => {

  const {openWindow, closeWindow, windows} = useWindowStore();

  const dockRef = useRef(null);


    useGSAP(() => {
        const dock = dockRef.current;
        if(!dock) return;
        
        const icons = dock.querySelectorAll(".dock-icon");
        
        const animateIcons = (mouseX) => {
           const { left } = dock.getBoundingClientRect();

           icons.forEach((icon) => {
            const {left: iconLeft, width} = icon.getBoundingClientRect();
            const  center = iconLeft - left  + width / 2;
            const distance = Math.abs(mouseX - center);
            const intensity = Math.exp(-(distance ** 2 ) / 2000);

            gsap.to(icon,{
                scale: 1 + 0.25 * intensity,
                y: -20 * intensity,
                duration: 0.05,
                ease: "power3.out"
            });
           });
        };

        const handleMouseMove = (e) => {
            const {left} = dock.getBoundingClientRect();
            
             animateIcons(e.clientX - left);
        };

        const handleMouseLeave  = () => {
           icons.forEach((icon) => {
             gsap.to(icon,{
               scale: 1,
               y:0,
               duration: 0.25,
               ease: "power3.out"
             });
           });
        };

        dock.addEventListener("mousemove", handleMouseMove);
        dock.addEventListener("mouseleave", handleMouseLeave);

        return () => {
          dock.removeEventListener("mousemove", handleMouseMove);
          dock.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, [])


  const toggleApp = (app) => {
    if(!app.canOpen) return;

    const win = windows[app.id];

    if (win.isOpen){
        closeWindow(app.id);
    }else{
        openWindow(app.id);
    }

    console.log(windows);
}


  return (
    <section id="dock">
      <div ref={dockRef} className="dock-container">
        {/* <ul> */}
            {dockApps.map(({id, name, icon, canOpen}) => (
                <div key={id} className="relative flex justify-center">
                    <button 
                    type="button" 
                    className="dock-icon" 
                    aria-label={name}
                    data-tooltip-id="dock-tooltip"
                    data-tooltip-content={name}
                    data-tootip-delay={200}
                    disabled={!canOpen}
                    onClick={() => toggleApp({id, canOpen})}
                    >
                      <img src={`/images/${icon}`} alt={name}
                    // className="pointer-events-none"
                    loading="eager"
                        className={canOpen ? "" : "opacity-60"}
                        />
                    </button>
                </div>
            ))}
        {/* </ul> */}
            <Tooltip id="dock-tooltip" place="top" className="tooltip"/>
      </div>

    </section>
  )
}

export default Dock