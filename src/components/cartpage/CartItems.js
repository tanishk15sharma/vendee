import "./CartItems.css";
import { useCart } from "../../contexts/cart-context";
import { removeFromCart, ChangeCartQty } from "../../utilities/cart-utils";

const CartItems = () => {
  const { cart, setCart } = useCart();
  console.log(cart);

  return (
    <div className="items">
      {cart.map((product) => (
        <div className="cart-item" key={product._id}>
          <div className="cover-img">
            <img
              className="cart-item-img"
              src={product.image}
              alt="product img"
            />
          </div>
          <div className="card-content">
            <div>
              <h2>{product.brand}</h2>
              <h4 className="card-title">{product.name}</h4>
            </div>
            <div className="product-price">
              <span>Rs. {product.discountPrice} </span>
              <span> Rs. {product.actualPrice}</span>
              <span> ({product.discount}% OFF)</span>
            </div>
            <p>
              Quantity:
              <button
                className="btn-qty"
                disabled={product.qty === 1}
                onClick={() => ChangeCartQty(product._id, setCart, "decrement")}
              >
                <i className="px-1 fa-solid fa-circle-minus"></i>
              </button>
              {product.qty}
              <button
                className="btn-qty"
                onClick={() => ChangeCartQty(product._id, setCart, "increment")}
              >
                <i className="fa-solid fa-circle-plus"></i>
              </button>
            </p>
            <button
              className="btn"
              onClick={() => removeFromCart(product._id, setCart)}
            >
              Remove from Cart
            </button>

            <button className="btn">Move to wishlist</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export { CartItems };
