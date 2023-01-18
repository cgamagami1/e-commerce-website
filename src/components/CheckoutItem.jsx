import "./checkout-item.scss";
import { addItemToCart, removeItemFromCart, clearItemFromCart } from "../store/cart/cart-action";
import { useDispatch, useSelector } from "react-redux";
import { selectCartItems } from "../store/cart/cart-selector";

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();

  const handleClearItem = () => dispatch(clearItemFromCart(cartItems, cartItem));
  const handleAddItem = () => dispatch(addItemToCart(cartItems, cartItem));
  const handleRemoveItem = () => dispatch(removeItemFromCart(cartItems, cartItem));

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`} />
      </div>

      <span className="name">{name}</span>

      <span className="quantity">
        <div className="arrow prevent-select" onClick={handleRemoveItem}>&#10094;</div>
        <span className="value">{quantity}</span>
        <div className="arrow prevent-select" onClick={handleAddItem}>&#10095;</div>
      </span>

      <span className="price">${price}</span>

      <div className="remove-button prevent-select" onClick={handleClearItem}>&#10005;</div>
    </div>
  );
}

export default CheckoutItem;