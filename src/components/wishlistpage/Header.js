import cartIcon from "../../assets/nav-icons/shopping-cart.svg";

const HeaderSection = () => {
  return (
    <nav>
      <div class="nav-route">
        <a href="../index.html" class="nav-text">
          Home
        </a>
        <a href="../pages/product.html" class="nav-text">
          Products
        </a>
      </div>
      <div class="logo-div">
        <i class="fa-solid fa-bars"></i>
        <p class="logo-name">
          <span class="logo-v">V</span>endee
        </p>
        <i class="fa-solid fa-shoe-prints foot-icon"></i>
        <i class="fa-solid fa-shoe-prints"></i>
      </div>
      <div class="nav-icons-div">
        <a href="./cart.html">
          <div class="nav-icon-div">
            <img src={cartIcon} />
            <span>Cart</span>
          </div>
        </a>
      </div>
    </nav>
  );
};
export { HeaderSection };
