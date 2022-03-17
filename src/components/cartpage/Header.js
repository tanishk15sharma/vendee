import searchIcon from "../../assets/nav-icons/search.svg";
import likeIcon from "../../assets/nav-icons/heart.svg";
import loginIcon from "../../assets/nav-icons/user-plus.svg";

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
        <div className="nav-icon-div">
          <img src={searchIcon} />
          <span>Search</span>
        </div>
        <a href="../pages/login.html">
          <div className="nav-icon-div">
            <img src={loginIcon} alt="user-icon" />
            <span>Log in</span>
          </div>
        </a>
        <a href="./wishlist.html">
          <div className="nav-icon-div">
            <img src={likeIcon} alt="wishlist-icon" />
            <span>Wishlist</span>
          </div>
        </a>
      </div>
    </nav>
  );
};

export { HeaderSection };
