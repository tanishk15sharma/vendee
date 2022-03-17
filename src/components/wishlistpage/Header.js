import cartIcon from "../../assets/nav-icons/shopping-cart.svg";
import { Link } from "react-router-dom";
const HeaderSection = () => {
  return (
    <nav>
      <div className="nav-route">
        <Link to="/" className="nav-text">
          Home
        </Link>

        <Link to="/products" className="nav-text">
          Products
        </Link>
      </div>
      <div class="logo-div">
        <i className="fa-solid fa-bars"></i>
        <p className="logo-name">
          <span className="logo-v">V</span>endee
        </p>
        <i className="fa-solid fa-shoe-prints foot-icon"></i>
        <i className="fa-solid fa-shoe-prints"></i>
      </div>
      <div className="nav-icons-div">
        <Link to="/cart">
          <div className="nav-icon-div">
            <img src={cartIcon} />
            <span>Cart</span>
          </div>
        </Link>
      </div>
    </nav>
  );
};
export { HeaderSection };
