import React from "react";
import "./OrderScreen.css";
import { useLocation } from "react-router-dom";

const OrderScreen = () => {
  const location = useLocation();
  console.log(location.state);
  return (
    <div className="orders">
      <h3>Your Orders</h3>
      {location.state.orders.map((order) => (
        <div>
          <div className="orderContainer">
            <img style={{ width: 140, height: 140 }} src={order.image}></img>
            <div className="orderDescription">
              <p>{order.title}</p>
              <p>
                {order.description.length > 80
                  ? order.description.substr(0, 80)
                  : order.description}
              </p>
              <p>{order.price * order.quantity}</p>
            </div>
            <div className="orderButtons">
              <button className="orderButton">Return product</button>
              <button className="orderButton">Download invoice</button>
              <button className="orderButton">Rate Product</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OrderScreen;
