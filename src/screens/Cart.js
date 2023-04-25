import React from "react";
import "./Cart.css";
import Header from "../components/Header";
import { Provider, useDispatch, useSelector } from "react-redux";
import store from "../redux/store";
import BottomHeader from "../components/BottomHeader";
import { cleanCart, decrementQuantity } from "../redux/CartSlice";
import { incrementQuantity } from "../redux/CartSlice";
import { removeFromCart } from "../redux/CartSlice";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const Cart = () => {
  const cart = useSelector((state) => state.cart.cart);
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm();
  const dispatch = useDispatch();
  const orders = [...cart];
  const navigate = useNavigate();
  const decrementFromQuantity = (item) => {
    dispatch(decrementQuantity(item));
  };
  const incrementFromQuantity = (item) => {
    dispatch(incrementQuantity(item));
  };
  const removeItemQuantity = (item) => {
    dispatch(removeFromCart(item));
  };
  const total = cart
    .map((item) => item.price * item.quantity)
    .reduce((curr, prev) => curr + prev, 0);
  console.log(total);
  const charges = 30;
  const totalPrice = total + charges;
  const notify = () => {
    toast.success("Order Placed!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

    setTimeout(() => {
      navigate("/orders", {
        state: {
          orders: orders,
          totalPrice: totalPrice,
        },
      });
    }, 3500);
    setTimeout(() => {
      dispatch(cleanCart());
    }, 4000);
  };

  return (
    <>
      {/* <Provider store={store}> */}
      <ToastContainer />

      <div className="cart">
        {/* left part */}
        <div className="cartLeft">
          {cart.map((item, index) => (
            <div className="cartContainer">
              {/* image */}
              <div>
                <img src={item.image} style={{ width: 100, height: 100 }} />
              </div>
              {/* description */}
              <div className="cartDescription">
                <p>
                  {item.title.length > 60
                    ? item.title.substr(0, 60)
                    : item.title}
                </p>
                <p>
                  {item.description.length > 80
                    ? item.description.substr(0, 80)
                    : item.description}
                </p>
                <p>{item.price}</p>
              </div>
              {/* button */}
              <div className="cartButtonContainer">
                <div className="cartButtons">
                  <div
                    style={{ cursor: "pointer" }}
                    onClick={() => decrementFromQuantity(item)}
                  >
                    -
                  </div>
                  <div>{item.quantity}</div>
                  <div
                    style={{ cursor: "pointer" }}
                    onClick={() => incrementFromQuantity(item)}
                  >
                    +
                  </div>
                </div>
                <button
                  className="cartButton"
                  onClick={() => removeItemQuantity(item)}
                >
                  Remove item
                </button>
                <h5 style={{ marginTop: 7, fontWeight: "bold" }}>
                  {item.price * item.quantity}
                </h5>
              </div>
            </div>
          ))}
        </div>

        {/* Right part */}
        {total === 0 ? (
          <div>
            <h4 className="emptyMsg">Your cart is empty</h4>
          </div>
        ) : (
          <form onSubmit={handleSubmit((data) => console.log(data))}>
            <div className="cartRight">
              {/* location info */}
              <div className="cartRightLocationContainer">
                <div className="cartRightLocation">
                  <LocationOnIcon style={{ color: "grey" }} />
                  <div className="cartRightDescription">
                    <p className="cartRightText">Select your location</p>
                    <p className="cartRightText" style={{ marginTop: -12 }}>
                      Please Select a location so we can find you!
                    </p>
                    <button className="cartRightButton">Select Location</button>
                  </div>
                </div>
                <div className="cartRightLocation">
                  <LocationOnIcon style={{ color: "grey" }} />
                  <div className="cartRightDescription">
                    <p className="cartRightText">Your current address</p>
                    <input
                      className="cartRightInput"
                      id="address"
                      {...register("address", {
                        required: true,
                        minLength: 10,
                      })}
                      placeholder="Please specify your current address"
                    ></input>
                    {errors.address?.type === "required" && (
                      <p className="text-danger">
                        The address field is required
                      </p>
                    )}
                    {errors.address?.type === "minLength" && (
                      <p className="text-danger">
                        The address must be 10 charcters long
                      </p>
                    )}
                    {/* <button className="cartRightButton">Choose Location</button> */}
                  </div>
                </div>
              </div>
              {/* coupon */}
              <div className="cartRightCoupon">
                <ConfirmationNumberIcon style={{ color: "grey" }} />
                <div>
                  <h4
                    className="cartRightCouponText"
                    style={{ marginLeft: 10 }}
                  >
                    Select / Apply coupon
                  </h4>
                  <p className="cartRightCouponSmall">
                    {" "}
                    Apply coupons to avail offers on the products
                  </p>
                </div>
              </div>
              {/* container for the checkout */}

              <div className="cartRightCheckout">
                <div className="cartRightCheckoutPart">
                  <h5>Total Price</h5>
                  <h5>{total}</h5>
                </div>
                <div className="cartRightCheckoutPart">
                  <h5>Discount</h5>
                  <h5>-</h5>
                </div>
                <div className="cartRightCheckoutPart">
                  <h5>Charges</h5>
                  <h5>{charges}</h5>
                </div>
                <div className="cartRightCheckoutPart">
                  <h3>Grand Total</h3>
                  <h3>{total + 30}</h3>
                </div>
                <button
                  disabled={!isValid}
                  onClick={notify}
                  className="cartRightCheckoutbtn"
                >
                  Place Order
                </button>
              </div>
            </div>
          </form>
        )}
      </div>
      {/* </Provider> */}
    </>
  );
};

export default Cart;
