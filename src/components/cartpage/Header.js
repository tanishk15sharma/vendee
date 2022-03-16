import searchIcon from "../../assets/nav-icons/search.svg";
import likeIcon from "../../assets/nav-icons/heart.svg";
import loginIcon from "../../assets/nav-icons/user-plus.svg";

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
        <div class="nav-icon-div">
          <img src={searchIcon} />
          <span>Search</span>
        </div>
        <a href="../pages/login.html">
          <div class="nav-icon-div">
            <img src={loginIcon} alt="user-icon" />
            <span>Log in</span>
          </div>
        </a>
        <a href="./wishlist.html">
          <div class="nav-icon-div">
            <img src={likeIcon} alt="wishlist-icon" />
            <span>Wishlist</span>
          </div>
        </a>
      </div>
    </nav>
  );
};

export { HeaderSection };
