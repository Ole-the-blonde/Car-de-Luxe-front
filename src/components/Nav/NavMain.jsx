import { NavLink } from "react-router-dom";
import useAuth from "../../auth/useAuth";
import "../../styles/NavMain.css";

const NavMain = () => {
  const { isLoggedIn, currentUser, removeUser } = useAuth();
  return (
    <nav className="NavMain">
      <div className="nav-wrapper">
        <NavLink className="logo" to="/">
          Car de Luxe
        </NavLink>

        <ul>
          <li>
            <NavLink className="NavLinks" to="/cars">
              Car Galery
            </NavLink>
          </li>
          <li>
            <NavLink className="NavLinks" to="/rentcar">
              Rent your Car
            </NavLink>
          </li>

          {isLoggedIn && (
            <>
              <li>
                <NavLink className="NavLinks" to="/profile">
                  {currentUser && currentUser.email}
                </NavLink>
              </li>
              <li>
                <NavLink className="NavLinks" to="/favorites">
                  Favorites
                </NavLink>
              </li>
              <li>
                {" "}
                <NavLink className="NavLinks" onClick={removeUser}>
                  Log-Out
                </NavLink>
              </li>
            </>
          )}
          {!isLoggedIn && (
            <>
              <li>
                <NavLink className="NavLinks" to="/signin">
                  Log in
                </NavLink>
              </li>
              <li>
                <NavLink className="NavLinks" to="/signup">
                  Sign Up
                </NavLink>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default NavMain;
