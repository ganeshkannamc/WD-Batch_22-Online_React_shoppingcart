import React from "react";
import { useContext } from "react";
import DataContext from "./Context/DataProvider";
import { Outlet } from "react-router-dom";

const UserAuth = ({ allowedRoles }) => {
  let { handleLogin } = useContext(DataContext);
  let allowUser = allowedRoles.includes(parseInt(handleLogin.role));
  return allowUser ? <Outlet /> : <h1>Unauthorized user</h1>;
};

export default UserAuth;
