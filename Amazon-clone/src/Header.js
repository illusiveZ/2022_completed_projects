import React from "react";
// import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
import {
  Container,
  HeaderSearch,
  HeaderNav,
  HeaderOption,
  Basket,
} from "./styles/Header.styles";

const Header = (props) => {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <Container>
      <Link to="/">
        <img src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="" />
      </Link>

      <HeaderSearch>
        <input type="text" />
        <SearchIcon />
      </HeaderSearch>

      <HeaderNav>
        <Link to={!user && "/login"}>
          <HeaderOption onClick={handleAuthentication}>
            <span>Hello {!user ? "Guest" : user.email}</span>
            <span>{user ? "Sign Out" : "Sign in"}</span>
          </HeaderOption>
        </Link>

        <Link to="/orders">
          <HeaderOption>
            <span>Returns</span>
            <span>& Orders</span>
          </HeaderOption>
        </Link>

        <HeaderOption>
          <span>Your</span>
          <span>Prime</span>
        </HeaderOption>

        <Link to="/checkout">
          <Basket>
            <ShoppingBasketIcon />
            <span>{basket?.length}</span>
          </Basket>
        </Link>
      </HeaderNav>
    </Container>
  );
};
export default Header;
