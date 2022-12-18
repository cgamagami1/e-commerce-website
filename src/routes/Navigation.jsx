import { Outlet, Link } from "react-router-dom";
import { ReactComponent as CrownLogo } from "../assets/crown.svg";
import "./navigation.scss";

const Navigation = () => {
  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrownLogo className="logo" />
        </Link>

        <ul className="nav-links-container">
          <li>
            <Link className="nav-link" to="/shop">SHOP</Link>
          </li>
          <li>
            <Link className="nav-link" to="/signin">SIGN IN</Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </>
  );
}

export default Navigation;