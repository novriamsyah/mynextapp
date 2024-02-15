import { spaceMono } from "@/utils/fonts";
import style from "./Navbar.module.css"

const Navbar: React.FC = () => {

  return (
    <div className={`${style.navbar} ${style.nav_logo}`} style={spaceMono.style}>
        <div className="nav-logo">
            <p>Bejostore</p>
        </div>
    </div>
  );
}

export default Navbar;