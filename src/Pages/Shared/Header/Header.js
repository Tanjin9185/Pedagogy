import React from 'react';
import { Button, NavNavLink } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import useAuth from '../../../hooks/useAuth';
import './Header.css';
// import logo from '../../../images/logo.png';

const Header = () => {
  const { user, logOut } = useAuth();
  return (
    <div className=" bb">
      <nav className="navbar navbar-expand-lg navbar-light">
        <NavLink to="/" className="navbar-brand ml-5 animation-fade" style={{ marginLeft: '120px' }}>
          {/* <img className="w-25" src={logo} alt="" /> */}
        </NavLink>
        <button className="navbar-toggler toggleBtn" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
          <div className="navbar-nav ml-auto mono-text">

            <NavLink activeClassName="active" to="/home" className="nav-NavLink navigation-item px-3 home">Home</NavLink>
            <NavLink activeClassName="active" to="/about" className="nav-NavLink navigation-item px-3">About</NavLink>
            <NavLink activeClassName="active" to="/mainProject" className="nav-NavLink navigation-item px-3">Projects</NavLink>
            <NavLink activeClassName="active" to="/service" className="nav-NavLink navigation-item px-3">Service</NavLink>
            <NavLink activeClassName="active" to="/blog" className="nav-NavLink navigation-item  px-3">Blogs</NavLink>
            {/* <NavLink activeClassName="active" to="/login" className="nav-NavLink navigation-item px-3">Login</NavLink> */}
            {
              (user?.displayName) ? <p className="nav-NavLink navigation-item  px-3" >{user?.displayName}</p> : (user?.email) ? <p className="nav-NavLink navigation-item  px-3" >{user?.email}</p> : <Link to="/login"><p className="nav-NavLink navigation-item  px-3">Log In</p></Link>
            }
            {
              (user?.displayName || user?.email) && <p onClick={logOut} className="nav-NavLink navigation-item  px-3">Log Out</p>
            }

          </div>
        </div>

      </nav>
    </div>
  );
};

export default Header;