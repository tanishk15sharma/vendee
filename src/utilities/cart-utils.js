import axios from "axios";
import { getToken } from "./wishlist-utils";

const addToCart = async (product, setCart, cart) => {
  if (cart.find((item) => item._id === product._id)) {
    alert("Item is Already present in cart");
    return;
  }
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

const removeAllCart = async () => {
  try {
    await axios.delete("/api/user/cart/removeAll", {
      headers: {
        authorization: getToken(),
      },
    });
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

// for price Details
const checkoutDetails = (cart) => {
  let totalAmount = cart.reduce(
    (sum, curr) => sum + curr.qty * curr.discountPrice,
    0
  );
  let price = cart.reduce((sum, curr) => sum + curr.qty * curr.actualPrice, 0);

  let discountPrice = cart.reduce(
    (sum, curr) => sum + curr.qty * curr.discount,
    0
  );

  return { totalAmount, price, discountPrice };
};

export {
  addToCart,
  removeFromCart,
  ChangeCartQty,
  checkoutDetails,
  removeAllCart,
};
