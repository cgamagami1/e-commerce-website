import "./product-card.scss";
import Button from "./Button";
import { addItemToCart } from "../store/cart/cart-action";
import { useDispatch, useSelector } from "react-redux";
import { selectCartItems } from "../store/cart/cart-selector";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();
  const handleAddProductToCart = () => dispatch(addItemToCart(cartItems, product));

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
        <Button buttonType="inverted" onClick={handleAddProductToCart}>Add to cart</Button>
      </div>
    </div>
  );
}

export default ProductCard;