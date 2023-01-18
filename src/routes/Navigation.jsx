import { Outlet, Link } from "react-router-dom";
import { ReactComponent as CrownLogo } from "../assets/crown.svg";
import "./navigation.scss";
import { signOutUser } from "../utils/firebase";
import CartIcon from "../components/CartIcon";
import CartDropdown from "../components/CartDropdown";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../store/user/user-selector";
import { selectIsCartOpen } from "../store/cart/cart-selector";

const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);

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
          <li>
            <CartIcon />
          </li>
        </ul>
        {isCartOpen && <CartDropdown />}
      </div>
      <Outlet />
    </>
  );
}

export default Navigation;