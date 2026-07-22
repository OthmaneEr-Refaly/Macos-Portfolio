
import { navLinks, navIcons } from "../constants";
import dayjs from "dayjs";

const Navbar = () => {
  return (
    <nav>
      <div>
        <img src="/images/logo.svg" alt="logo" />
        <p className="font-bold">Othmane's Portfolio</p>
        <ul>
          {navLinks.map((link) => (
            <li key={link.id}>
              <p>{link.name}</p>
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




