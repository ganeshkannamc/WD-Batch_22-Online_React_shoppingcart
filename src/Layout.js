import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";

import Cart from "./Components/Cart/Cart";

import { Route, Outlet, Routes } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      {/* <Routes>
        <Route path="cart" element={<Cart />} />
      </Routes> */}
      <Footer />
    </div>
  );
};

export default Layout;
