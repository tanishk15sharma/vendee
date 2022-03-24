import axios from "axios";

const getToken = () => localStorage.getItem("token");

const addToWishlist = async (product, setWishlist, wishlist) => {
  if (wishlist.find((item) => item._id === product._id)) {
    alert("item is already on wishlist");
    return;
  }
  try {
    const { data } = await axios.post(
      "/api/user/wishlist",
      { product },
      {
        headers: {
          authorization: getToken(),
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
        authorization: getToken(),
      },
    });

    setWishlist(data.wishlist);
  } catch (err) {
    console.log(err);
  }
};

export { addToWishlist, removeFromWishlist, getToken };
