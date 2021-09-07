import React from "react";

function Header(props) {
  return (
    <header>
      <div className="cart">
        <img src={process.env.PUBLIC_URL + "/cart.png"} />
        <span className="cartCount">{props.cart.length}</span>
      </div>
    </header>
  );
}

export default Header;
