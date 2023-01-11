import "./cart-icon.scss";
import { ReactComponent as ShoppingIcon } from "../assets/shopping-bag.svg";
import { useContext } from "react";
import { CartContext } from "../context/Cart";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

  const handleOnClick = () => {
    setIsCartOpen(!isCartOpen);
  }

  return (
    <div className="cart-icon-container" onClick={handleOnClick}>
      <ShoppingIcon className="shopping-icon" alt="shopping icon" />
      <span className="item-count" >{cartCount}</span>
    </div>
  );
}

export default CartIcon;