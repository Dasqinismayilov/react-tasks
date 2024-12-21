import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/">Haqqında</Link>
        </li>
        <li>
          <Link to="/portfolio">İş nümunələri</Link>
        </li>
        <li>
          <Link to="/contact">Əlaqə məlumatları</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
