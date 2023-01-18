import "./cart-icon.scss";
import { ReactComponent as ShoppingIcon } from "../assets/shopping-bag.svg";
import { useDispatch, useSelector } from "react-redux";
import { selectCartCount, selectIsCartOpen } from "../store/cart/cart-selector";
import { setIsCartOpen } from "../store/cart/cart-action";

const CartIcon = () => {
  const dispatch = useDispatch();
  const isCartOpen = useSelector(selectIsCartOpen);
  const cartCount = useSelector(selectCartCount);

  const handleOnClick = () => dispatch(setIsCartOpen(!isCartOpen));
  
  return (
    <div className="cart-icon-container" onClick={handleOnClick}>
      <ShoppingIcon className="shopping-icon" alt="shopping icon" />
      <span className="item-count" >{cartCount}</span>
    </div>
  );
}

export default CartIcon;