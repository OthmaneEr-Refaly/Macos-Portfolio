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
        <section id="home" className="absolute inset-0 z-0 pointer-events-none">
            <ul >
                {projects.map((project) => (
                    <li key={project.id}
                        className={clsx("group folder pointer-events-auto", project.windowPosition)}
                        onDoubleClick={() => handleOpenProject(project)}>
                        <img src={project.icon} alt={project.name} draggable={false}/>
                        <p >
                            {project.name}
                        </p>
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default Home;
