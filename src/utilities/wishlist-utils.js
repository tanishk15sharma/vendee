import axios from "axios";

const encodedToken = localStorage.getItem("token");
const addToWishlist = async (product, setWishlist) => {
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

const removeFromWishlist = async (id, setWishlist) => {
  try {
    const { data } = await axios.delete(`/api/user/wishlist/${id}`, {
      headers: {
        authorization: encodedToken,
      },
    });

    setWishlist(data.wishlist);
  } catch (err) {
    console.log(err);
  }
};

export { addToWishlist, removeFromWishlist };
