import { Button } from "..";
import "./ProductCard.css";
import { AiFillTag } from "react-icons/ai";

const ProductCard = () => {
  return (
    <div className="Product">
      <img
        className="Product__image"
        src="https://images-na.ssl-images-amazon.com/images/I/71DjxIGy0ZL._SL1500_.jpg"
        alt="productImage"
      />
      <h3 className="Product__productName">iPhone 11 pro</h3>
      <p className="Product__price">Rs. 59,999</p>
      <div className="Product__offerWrapper">
        <span className="Product__offer">
          <AiFillTag />
          Fast Delivery
        </span>
        <span className="Product__offer">
          <AiFillTag /> Free Shipping
        </span>
      </div>

      <div className="Product__buttonWrapper">
        <Button isPrimary text="Add to cart" />
        <Button text="Add to Wishlist" />
      </div>
    </div>
  );
};

export default ProductCard;
