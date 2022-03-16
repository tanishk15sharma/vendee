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
            <div>
              <h2>{product.brand}</h2>
              <h4 class="card-title">{product.name}</h4>
            </div>
            <div class="product-price">
              <span>Rs. {product.discountPrice} </span>
              <span> Rs. {product.actualPrice}</span>
              <span> ({product.discount}% OFF)</span>
            </div>
            <p>
              Quantity:
              <button
                className="btn-qty"
                onClick={() =>
                  cartDispatch({ type: "DECREASE_QUANTITY", payload: product })
                }
                disabled={product.quantity === 1}
              >
                <i class="px-1 fa-solid fa-circle-minus"></i>
              </button>
              {product.quantity}
              <button
                className="btn-qty"
                onClick={() =>
                  cartDispatch({ type: "INCREASE_QUANTITY", payload: product })
                }
              >
                <i class="fa-solid fa-circle-plus"></i>
              </button>
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
