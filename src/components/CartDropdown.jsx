import "./cart-dropdown.scss";
import Button from "./Button";
import CartItem from "./CartItem";
import { useContext } from "react";
import { CartContext } from "../context/Cart";
import { useNavigate } from "react-router-dom";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
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