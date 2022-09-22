import { Search, ShoppingBasket } from "@mui/icons-material";
import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

const Header = () => {
  const [{ cart, user }] = useStateValue();

  const login = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <nav className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="Amazon Logo"
        />
      </Link>

      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <Search className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <Link className="header__link" to="login">
          <span className="header__option">
            <small className="header__option1">Hello Guest</small>
            <strong className="header__option2">Sign In</strong>
          </span>
        </Link>
        <Link to="/" className="header__link">
          <span className="header__option">
            <small className="header__option1">Returns</small>
            <strong className="header__option2">& Orders</strong>
          </span>
        </Link>
        <Link to="/" className="header__link">
          <span className="header__option">
            <small className="header__option1">Your</small>
            <strong className="header__option2">Prime</strong>
          </span>
        </Link>

        <Link to="/checkout" className="header__link">
          <div className="header__optionBasket">
            <ShoppingBasket />
            <span className="header__basketCount">{cart.length}</span>
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Header;
