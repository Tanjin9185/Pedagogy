import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
// import logo from '../../../images/logo.png';

const Header = () => {
  return (
    <div className=" bb">
      <nav className="navbar navbar-expand-lg navbar-light">
        <Link to="/" className="navbar-brand ml-5 animation-fade" style={{ marginLeft: '120px' }}>
          {/* <img className="w-25" src={logo} alt="" /> */}
        </Link>
        <button className="navbar-toggler toggleBtn" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
          <div className="navbar-nav ml-auto mono-text">

            <Link to="/home" className="nav-link navigation-item px-3 home">Home</Link>
            <Link to="/about" className="nav-link navigation-item px-3">About</Link>
            <Link to="/mainProject" className="nav-link navigation-item px-3">Projects</Link>
            <Link to="/service" className="nav-link navigation-item px-3">Service</Link>
            <Link to="/allBlog" className="nav-link navigation-item  px-3">Blogs</Link>
            <Link to="/contact" className="nav-link navigation-item px-3">Contact</Link>


          </div>
        </div>

      </nav>
    </div>
  );
};

export default Header;