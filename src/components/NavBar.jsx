import CartWidget from './CartWidget';
import logo from '../assets/logo.png';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
      <div className="container-fluid">
        <a className="navbar-brand" href="#"><img src={logo} alt="NeoStore Logo" className="navbar-logo" style={{ width: '90px', height: '90px' }} /></a>
        
        <div className="collapse navbar-collapse d-flex justify-content-between">
          <div className="navbar-nav d-flex flex-row gap-4">
            <a className="nav-link active text-white" href="#">Inicio</a>
            <a className="nav-link text-white" href="#">Productos</a>
            <a className="nav-link text-white" href="#">Contacto</a>
          </div>

          <CartWidget />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
