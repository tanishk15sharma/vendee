import "./CartItems.css";
// import img from "../../assets/recommendedproduct-images/-Heels.webp";
// import { img } from "";
import { useCart } from "../../contexts/cart-context";

const CartItems = () => {
  const { cartState, cartDispatch } = useCart();
  console.log(cartState);
  return (
    <div class="items">
      {cartState.map((product) => (
        <div className="cart-item">
          <div class="cover-img">
            <img class="cart-item-img" src={product.image} alt="first tshirt" />
          </div>
          <div class="card-content">
            <h4 class="card-title">{product.name}</h4>
            <div class="product-price">
              <span>Rs. {product.discountPrice} </span>
              <span> Rs. {product.actualPrice}</span>
              <span> ({product.discount}% OFF)</span>
            </div>
            <p>
              Quantity:
              <span
                onClick={() =>
                  cartDispatch({ type: "INCREASE_QUANTITY", payload: product })
                }
              >
                <i class="px-1 fa-solid fa-circle-minus"></i>
              </span>
              {product.quantity}
              <span
                onClick={() =>
                  cartDispatch({ type: "DECREASE_QUANTITY", payload: product })
                }
              >
                <i class="fa-solid fa-circle-plus"></i>
              </span>
            </p>
            <button
              class="btn"
              onClick={() =>
                cartDispatch({ type: "REMOVE_PRODUCT", payload: product })
              }
            >
              Remove from Cart
            </button>
            <button class="btn">Move to wishlist</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export { CartItems };
