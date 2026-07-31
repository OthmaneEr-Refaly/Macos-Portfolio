import { locations } from "../constants/index.js";
import clsx from "clsx";
import { useGSAP } from "@gsap/react";
import { Draggable } from "gsap/Draggable";
import useWindowStore from "../store/window.js";
import useLocationStore from "../store/location.js";

const projects = locations.work?.children ?? [];

const Home = () => {
    const { openWindow } = useWindowStore();
    const { setActiveLocation } = useLocationStore();

    const handleOpenProject = (project) => {
        setActiveLocation(project);
        openWindow("finder");
    };

    useGSAP(() => {
        Draggable.create('.folder')
    }, []);

    return (
        <section id="home" className="absolute inset-0 z-0">
            <ul className="w-full h-full relative">
                {projects.map((project) => (
                    <li key={project.id}
                        className={clsx("group folder absolute flex flex-col items-center justify-start w-28 cursor-pointer", project.windowPosition)}
                        onDoubleClick={() => handleOpenProject(project)}>
                        <img src={project.icon} alt={project.name} className="w-16 h-16 drop-shadow-md group-hover:scale-105 transition-transform" draggable={false}/>
                        <p className="text-white text-xs font-medium mt-1 text-center bg-black/40 px-2 py-0.5 rounded-sm drop-shadow line-clamp-2">
                            {project.name}
                        </p>
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default Home;
