import "./WishlistItems.css";
import { useWishlist } from "../../contexts/wishlist-context";
import { useCart } from "../../contexts/cart-context";

const WishlistItems = () => {
  const { wishlistState, wishlistDispatch } = useWishlist();
  const { cartDispatch } = useCart();

  console.log(wishlistState);
  if (wishlistState.length === 0) {
    return <h1>No items in Wishlist.</h1>;
  }
  return (
    <>
      {wishlistState.map((product) => (
        <div className="product-card">
          <div className="product-img-div">
            <div
              onClick={() =>
                wishlistDispatch({
                  type: "REMOVE_FROM_WISHIST",
                  payload: product,
                })
              }
            >
              <i className="fa-solid fa-xmark"></i>
            </div>
            <img src={product.image} alt="tshirt" className="product-img" />
          </div>
          <div className="product-detail">
            <div className="product-brand">
              {product.brand}
              <i className="far fa-heart"></i>
            </div>
            <p className="product-info">{product.name}</p>
            <div className="product-price">
              <span>Rs. {product.discountPrice} </span>
              <span>Rs. {product.actualPrice} </span>
              <span> ({product.discount}% OFF)</span>
            </div>
            <div className="product-size-div">
              <div className="product-size-title">Add size</div>
              <div className="product-size">
                <span>XS</span>
                <span>S</span>
                <span>M</span>
                <span>L</span>
                <span>XL</span>
              </div>
            </div>
          </div>
          <button
            className="product-btn"
            onClick={() =>
              cartDispatch({ type: "ADD_TO_CART", payload: product })
            }
          >
            ADD TO CART
          </button>
        </div>
      ))}
    </>
  );
};

export { WishlistItems };
