import axios from "axios";

const addToWishlist = async (product, setWishlist) => {
  const encodedToken = localStorage.getItem("token");
  try {
    const { data } = await axios.post(
      "/api/user/wishlist",
      { product },
      {
        headers: {
          authorization: encodedToken,
        },
      }
    );
    setWishlist(data.wishlist);
  } catch (err) {
    console.log(err);
  }
};

export { addToWishlist };
