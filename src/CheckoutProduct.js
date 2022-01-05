import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";

const CheckoutProduct = ({ id, image, title, price, rating }) => {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    //remove item from basket
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  return (
    <div className="checkoutProduct">
      <img src={image} className="checkoutProduct-image" />

      <div className="checkoutProduct-info">
        <p className="checkoutProduct-title">{title}</p>

        <p className="checkoutProduct-price">
          <small>$</small>
          <strong>{price}</strong>
        </p>

        <div className="checkoutProduct-rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>

        <button onClick={removeFromBasket}>Remove From Basket</button>
      </div>
    </div>
  );
};

export default CheckoutProduct;
