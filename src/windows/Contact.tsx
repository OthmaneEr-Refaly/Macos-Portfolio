import WindowWrapper from '../hoc/WindowWrapper'
import { socials } from "../constants";
import WindowControls from '../components/WindowControls';


const Contact = () => {

  return ( <> 
    <div id="window-header">
        <WindowControls target="contact"/>
        <h2>Contact Me</h2>
         
    </div>

    <div className="p-5 space-y-5">
        <img src="/images/Othmane-Piano.JPG" 
        alt="Othmane"
        className="w-20 rounded-full"
        />

        <h3>Let's Work Together!</h3>
        <p>If you're interested in working with me or have any questions, 
            feel free to reach out. I'd love to hear from you!
        </p>
        <p className="font-bold underline">[Othmanerefaly@gmail.com]</p>

        
        <ul>
            {socials.map(({ id, bg, link, icon, text}) => (
                <li key={id}
                    style={{backgroundColor: bg}}>
                    <a href={link} 
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
  )
}

const ContactWindow = WindowWrapper(Contact, 'contact');

export default ContactWindow;