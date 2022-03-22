const Nav = () => {
  return (
    <nav>
      <div
        className="nav-route"
        style={{
          transform: toggleHamburger && "translateX(0)",
        }}
      >
        <Link to="/" className="nav-text">
          Home
        </Link>

        <Link to="/products" className="nav-text">
          Products
        </Link>
      </div>
      <div className="logo-div">
        <i
          className="fa-solid fa-bars"
          onClick={() => setToggleHamburger((val) => !val)}
        ></i>
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
        <a href="./pages/login.html">
          <div className="nav-icon-div">
            <img src={loginIcon} alt="user-icon" />
            <span>Log in</span>
          </div>
        </a>

        <Link to="/wishlist">
          <div className="nav-icon-div">
            <img src={likeIcon} alt="wishlist-icon" />
            <span>Wishlist</span>
          </div>
        </Link>

        <Link to="/cart">
          <div className="nav-icon-div">
            <img src={cartIcon} alt="cart-icon" />
            <span>Cart</span>
          </div>
        </Link>
      </div>
    </nav>
  );
};
export { Nav };
