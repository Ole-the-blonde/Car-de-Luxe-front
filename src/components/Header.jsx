import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/cars">Car Gallery</Link>
      </li>
      <li>
        <Link to="/rentcar">Rent your Car</Link>
      </li>
    </div>
  );
};

export default Header;
