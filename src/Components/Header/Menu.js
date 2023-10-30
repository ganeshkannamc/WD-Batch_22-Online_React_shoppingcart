import React from "react";
import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <NavLink to={"products"} className={"m-1"}>
        Home
      </NavLink>
      <NavLink to={"cart"} className={"m-1"}>
        Cart
      </NavLink>
      <NavLink to={"admin"} className={"m-1"}>
        Admin
      </NavLink>
    </nav>
  );
};

export default Menu;
