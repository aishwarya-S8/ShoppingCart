import React, { useEffect, useState } from "react";
import ProductItem from "./ProductItem";
import "./ProductItem.css";
import { useSelector } from "react-redux";
const Body = () => {
  const [products, setProducts] = useState([]);
  const cart = useSelector((state) => state.cart.cart);
  console.log(cart);
  const wishlist = useSelector((state) => state.wishlist.wishlist);
  console.log(wishlist);

  useEffect(() => {
    const fetchedProducts = async () => {
      await fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((data) => setProducts(data));
    };
    fetchedProducts();
  }, []);
  return (
    <div className="body">
      <div className="bodyItems">
        {products.map((item, index) => (
          <ProductItem item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default Body;
