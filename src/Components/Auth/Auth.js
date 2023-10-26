import React from 'react'
import { Outlet } from 'react-router-dom'
import { useContext } from "react";
import DataContext from "../../Context/DataProvider";

const Auth = () => {
  let { handleLogin } = useContext(DataContext);
  return (
    handleLogin.isActive ? <Outlet /> : <h1>Invalid login</h1>
  )
}

export default Auth