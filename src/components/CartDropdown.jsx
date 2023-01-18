import "./cart-dropdown.scss";
import Button from "./Button";
import CartItem from "./CartItem";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCartItems } from "../store/cart/cart-selector";

const CartDropdown = () => {
  const cartItems = useSelector(selectCartItems);
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate("/checkout");
  }
  
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map(cartItem => (
          <CartItem key={cartItem.id} cartItem={cartItem} />
        ))}
      </div>
        <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
    </div>
  );
}

export default CartDropdown;