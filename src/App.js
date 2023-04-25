import "./App.css";
import Dashboard from "./Dashboard";
import Login from "./Login/Login";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BrowserRouter, Route, Switch, Routes } from "react-router-dom";

// import { Outlet, Link } from "react-router-dom";
import Header from "./components/Header";
import Cart from "./screens/Cart";
import Home from "./screens/Home";
import { Provider } from "react-redux";
import store from "./redux/store";
import OrderScreen from "./screens/OrderScreen";
import Wishlist from "./screens/Wishlist";
import Welcome from "./Login/Welcome";
import SignUpCustomer from "./components/SignUpCustomer";

function App() {
  return (
    <>
      <Provider store={store}>
        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route exact path="/header" element={<Header />} />
          <Route exact path="/cart" element={<Home />} />
          <Route exact path="/orders" element={<OrderScreen />} />
          <Route exact path="/wishlist" element={<Wishlist />} />\
          <Route exact path="/" element={<Welcome />} />
          <Route exact path="/signup" element={<SignUpCustomer />} />
        </Routes>
      </Provider>
    </>
  );
}

export default App;
