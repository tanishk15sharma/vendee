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

const removeFromCart = async (id, setCart) => {
  console.log(id);
  try {
    const { data } = await axios.delete(`/api/user/cart/${id}`, {
      headers: {
        authorization: getToken(),
      },
    });
    setCart(data.cart);
  } catch (err) {
    console.log(err);
  }
};

const ChangeCartQty = async (id, setCart, actionType) => {
  try {
    const { data } = await axios.post(
      `/api/user/cart/${id}`,
      {
        action: {
          type: actionType,
        },
      },
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

export { addToCart, removeFromCart, ChangeCartQty };
