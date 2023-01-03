import { Outlet, Link } from "react-router-dom";
import { ReactComponent as CrownLogo } from "../assets/crown.svg";
import "./navigation.scss";
import { useContext } from "react";
import { UserContext } from "../context/User";
import { signOutUser } from "../utils/firebase";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);

  const signOutHandler = async () => {
    await signOutUser();
  }

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
            {currentUser ? <span className="nav-link" onClick={signOutHandler}>SIGN OUT</span> : 
            <Link className="nav-link" to="/auth">SIGN IN</Link>}
          </li>
        </ul>
      </div>
      <Outlet />
    </>
  );
}

export default Navigation;