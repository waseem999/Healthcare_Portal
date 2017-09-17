import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav id="main-navbar">
        <h3 style={{float: 'left', marginLeft: '.7em'}}>Logo.<font size="1">&reg;</font></h3>
          <ul>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/componenttwo">Component Two</Link></li>
            <li><Link to="/process">Component Three</Link></li>
            <li><Link to="/portfolio">Component Four</Link></li>
          </ul>

  </nav>
);

export default Navbar;



