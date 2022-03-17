import cartIcon from "../../assets/nav-icons/shopping-cart.svg";

const HeaderSection = () => {
  return (
    <nav>
      <div className="nav-route">
        <a href="../index.html" className="nav-text">
          Home
        </a>
        <a href="../pages/product.html" className="nav-text">
          Products
        </a>
      </div>
      <div className="logo-div">
        <i className="fa-solid fa-bars"></i>
        <p className="logo-name">
          <span className="logo-v">V</span>endee
        </p>
        <i className="fa-solid fa-shoe-prints foot-icon"></i>
        <i className="fa-solid fa-shoe-prints"></i>
      </div>
      <div className="nav-icons-div">
        <a href="./cart.html">
          <div className="nav-icon-div">
            <img src={cartIcon} />
            <span>Cart</span>
          </div>
        </a>
      </div>
    </nav>
  );
};
export { HeaderSection };
