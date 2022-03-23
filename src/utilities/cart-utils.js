import axios from "axios";
import { getToken } from "./wishlist-utils";

const addToCart = async (product, setCart) => {
  try {
    const { data } = await axios.post(
      "/api/user/cart",
      { product },
      {
        headers: {
          authorization: getToken(),
        },
      }
    );
    setCart(data.cart);
  } catch (err) {
    console.log(err);
  }
};

export { addToCart };
