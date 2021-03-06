import "./WishlistItems.css";
import { useWishlist } from "../../contexts/wishlist-context";
import { useCart } from "../../contexts/cart-context";
import { removeFromWishlist } from "../../utilities/wishlist-utils";
import { addToCart } from "../../utilities/cart-utils";
const WishlistItems = () => {
  const { wishList, setWishList } = useWishlist();
  const { cart, setCart } = useCart();

  console.log(wishList);
  if (wishList.length === 0) {
    return <h1>No items in Wishlist.</h1>;
  }
  console.log(wishList);
  return (
    <>
      {wishList.map((product) => (
        <div className="product-card" key={product._id}>
          <div className="product-img-div">
            <div onClick={() => removeFromWishlist(product._id, setWishList)}>
              <i className="fa-solid fa-xmark"></i>
            </div>
            <img src={product.image} alt="tshirt" className="product-img" />
          </div>
          <div className="product-detail">
            <div className="product-brand">
              {product.brand}
              <i className="fas fa-heart " style={{ color: "#ff715b" }}></i>
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
            onClick={() => addToCart(product, setCart, cart)}
          >
            ADD TO CART
          </button>
        </div>
      ))}
    </>
  );
};

export { WishlistItems };
