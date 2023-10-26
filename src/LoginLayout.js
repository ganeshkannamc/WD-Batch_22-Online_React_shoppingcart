import React from 'react'
import LoginHeader from "./Components/Login/Header";

import { Outlet } from 'react-router-dom';


const LoginLayout = () => {
  return (
    <div>
        <LoginHeader />
        <Outlet />
    </div>
  )
}

export default LoginLayout