import { NavLink, Link } from "react-router-dom";
import CartWidget from "./CartWidget";
import logo from "../assets/logo.png";

export default function NavBar() {
  return (
    <header className="navbar">
      <Link to="/" className="brand">
        <img src={logo} alt="NEOSTORE" />
        <span>NEOSTORE</span>
      </Link>

      <nav className="navlinks">
        <NavLink to="/" end>Inicio</NavLink>
        <NavLink to="/category/tecnologia">Tecnología</NavLink>
        <NavLink to="/category/hogar">Hogar</NavLink>
        <NavLink to="/contacto">Contacto</NavLink>
      </nav>

      <CartWidget />
    </header>
  );
}
