import { WindowControls } from "../components/Index.js";
import { Search } from "lucide-react";
import WindowWrapper from "../hoc/WindowWrapper.js";
import useLocationStore from "../store/location.js";
import { locations } from "../constants/index.js";
import clsx from "clsx";
import useWindowStore from "../store/window.js";

const Finder = () => {

    const {activeLocation, setActiveLocation} = useLocationStore();

    const {openWindow} = useWindowStore();

    const renderList = (items) => items.map((item) => (
                        <li key={item.id} 
                            onClick={ () => setActiveLocation(item)}
                            className={clsx(
                                item.id === activeLocation.id ? 
                                "active" : "not-active")}
                        >
                            <img src= {item.icon}
                                className="w-4" 
                                alt={item.name}
                            />
                            <p 
                                    className="text-sm font-medium truncate">
                                        {item.name}
                                </p>

                            </li>
    ));

    const openItem = (item) => {
        if(item.fileType === "pdf") return openWindow('resume')    
        if(item.kind === "folder") setActiveLocation(item);
        if(['fig',  'url'].includes(item.fileType) && item.href)
            return window.open(item.href, "_blank"  );

        openWindow(`${item.fileType}${item.kind}`, item);
    };

  return (
    <>
    <div id="window-header">
        <WindowControls target="finder" />
        <Search className="icon"/>
    </div> 
    <div className="bg-white flex h-full">
        <div className="sidebar">
            <div>
                <h3 >FAVORITES</h3>
                <ul>
                    {renderList(Object.values(locations))}
                </ul>
            </div>

            <div>
                <h3>Work</h3>
                <ul>
                    {renderList(locations.work.children)}
                </ul>
            </div>
        </div>
        <ul className="content">
            {activeLocation.children.map((item) => (
                <li key={item.id}
                className={item.position}
                onClick={() => openItem(item)}>
                    <img src={item.icon} alt={item.name} />
                    <p>{item.name}</p>
                </li>
            ))}
        </ul>
    </div>
    </>
)
}

const FinderWindow = WindowWrapper(Finder, 'finder');
export default FinderWindow;
