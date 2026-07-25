
import { WindowControls } from "../components/Index.js";
import useWindowStore from "../store/window.js";
import WindowWrapper from "../hoc/WindowWrapper.js";
import { socials } from "../constants";

const Contact = () => {

    // const { openWindow, windows } = useWindowStore();

    return (
        <>
            <div id="window-header">
                <WindowControls taget="Contact" />
                <h2>Contact Me</h2>
            </div>
            <div className="p-5 space-y-5">
                <img src="/images/Othmane-Piano.JPG" 
                alt="Othmane"
                className="w-20 rounded-full">
                </img>

                <h3>Let's Connect</h3>
                <p>Got an idea for a project? Want to collaborate on something cool? Or just want to say hi? Drop me a line and let's start the conversation.</p>
                <p className="mt-10">Email: [Othmanerefaly@gmail.com]</p>

                <ul>
                    {socials.map(({id, bg, link,icon, text}) => (
                        <li key={id} style={{backgroundColor: bg}}>
                            <a
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                            title={text}
                            >
                                <img src={icon} alt={text} className="size-5"/>
                                <p>{text}</p>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};  

const ContactWindow = WindowWrapper(Contact, 'contact');
export default ContactWindow;