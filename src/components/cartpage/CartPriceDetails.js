import "./CartPriceDetails.css";
import { useCart } from "../../contexts/cart-context";
import { checkoutDetails, removeAllCart } from "../../utilities/cart-utils";
import { useOrders } from "../../contexts";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";

const CartPriceDetails = ({ selectedAddress }) => {
  const { cart, setCart } = useCart();
  const navigate = useNavigate();
  const { setUserOrders } = useOrders();
  if (cart.length === 0) {
    return <h2>No items in cart</h2>;
  }
  const { totalAmount, price, discountPrice } = checkoutDetails(cart);

  function loadScript(src) {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  }

  async function displayRazorpay() {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }

    const options = {
      key: "rzp_test_sRg8DGSjHCXVAz",
      amount: totalAmount * 100,
      currency: "INR",
      name: "Vendee",
      description: "Test Transaction",
      // image: { logo },
      // order_id: order_id,
      handler: async function (response) {
        const data = {
          // orderCreationId: order_id,
          razorpayPaymentId: response.razorpay_payment_id,
          razorpayOrderId: response.razorpay_order_id,
          razorpaySignature: response.razorpay_signature,
        };
        if (response.razorpay_payment_id) {
          setUserOrders((preVal) => [
            ...preVal,
            {
              orderId: uuidv4(),
              total: totalAmount,
              price: price,
              totalDiscount: discountPrice,
              orderItems: cart,
              orderDate: Date.now(),
              orderAddress: selectedAddress,
            },
          ]);
          setCart([]);
          removeAllCart();
          navigate("/orders");
        } else {
          alert("Payment error , Enter valid Account");
        }
        console.log(response.razorpay_payment_id);
        // const result = await axios.post(
        //   "http://localhost:5000/payment/success",
        //   data
        // );

        // alert(result.data.msg);
      },
      prefill: {
        name: "Tanishk",
        email: "Tanishk@example.com",
        contact: "9999999999",
      },
      notes: {
        address: "Soumya Dey Corporate Office",
      },
      theme: {
        color: "#61dafb",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  }

  return (
    <div className="price-details-container">
      <p className="price-details-title bold">PRICE DETAILS</p>
      <hr />
      <ul className="price-list">
        <li className="price-item">
          Price (items) <span>&#8377; {price}</span>
        </li>
        <li className="price-item">
          Discount <span>- &#8377; {discountPrice}%</span>
        </li>
        <li className="price-item">
          Delivery Charges <span>&#8377; 0</span>
        </li>
        <hr />
        <li className="price-item bold">
          TOTAL AMOUNT <span> &#8377; {totalAmount}</span>
        </li>
        <hr />
      </ul>
      <p className="discount-txt">You will save &#8377; 1000 on this order</p>
      <button className="primary-btn-color btn-pd" onClick={displayRazorpay}>
        PLACE ORDER
      </button>
    </div>
  );
};

export { CartPriceDetails };
