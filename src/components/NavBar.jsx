import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';
import logo from '../assets/logo.png';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="NeoStore Logo" style={{ width: '70px', height: '70px' }} />
        </Link>

        <div className="d-flex justify-content-between w-100">
          <div className="navbar-nav d-flex flex-row gap-3">
            <Link className="nav-link text-white" to="/">Inicio</Link>
            <Link className="nav-link text-white" to="/category/tech">Productos</Link>
            <Link className="nav-link text-white" to="/contacto">Contacto</Link>
          </div>

          <CartWidget />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
