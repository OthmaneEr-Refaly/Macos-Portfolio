
import { navLinks, navIcons } from "../constants";
import useWindowStore from "../store/window";
import dayjs from "dayjs";

const Navbar = () => {

  const {openWindow} = useWindowStore();

  return (
    <nav>
      <div>
        <img src="/images/logo.svg" alt="logo" />
        <p className="font-bold">Othmane's Portfolio</p>
        <ul>
          {navLinks.map(({type, name, id}) => (
            <li key={id} onClick={() => openWindow(type)}>
              <p>{name}</p>
            </li> 
          ))}
        </ul>
      </div>

      <div>
        <ul>
        {navIcons.map((icon) => ( 
          <li key={icon.id}> 
            <img src={icon.img} alt={icon.id} />
          </li>
        ))}
        </ul>
        <time>{dayjs().format("MMM DD, YYYY  h:mm A")}</time>
      </div>
    </nav>
  );
};

export default Navbar;




