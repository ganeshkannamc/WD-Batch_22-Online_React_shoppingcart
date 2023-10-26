import ProductList from "./Components/Main/ProductList";
import Login from "./Components/Login/Login";
import Auth from "./Components/Auth/Auth";
import Cart from "./Components/Cart/Cart";
import Admin from "./Components/Admin/Admin";
import CompA from "./CompA";
import Layout from "./Layout";
import LoginLayout from "./LoginLayout";

// import { DataContext } from "./index";
import { useState, useContext } from "react";
import EditAdd from "./Components/Admin/EditAdd";
import { Route, Routes } from "react-router-dom";

function App() {
  // let products = [
  //   {
  //     id: 0,
  //     name: "iPhone13",
  //     brand: "Apple",
  //     price: 50000,
  //     image:
  //       "https://m.media-amazon.com/images/I/619f09kK7tL._AC_UF1000,1000_QL80_.jpg",
  //     description: "hey looks good when woking with react application",
  //     isAddedToCart: false,
  //     cartCount: 0,
  //   },
  //   {
  //     id: 1,
  //     name: "Flip",
  //     brand: "Samsung",
  //     price: 30000,
  //     image:
  //       "https://m.media-amazon.com/images/I/619f09kK7tL._AC_UF1000,1000_QL80_.jpg",
  //     description: "hey looks good when woking with react application",
  //     isAddedToCart: false,
  //     cartCount: 0,
  //   },
  //   {
  //     id: 2,
  //     name: "Fold",
  //     brand: "Samsung",
  //     price: 80000,
  //     image:
  //       "https://m.media-amazon.com/images/I/619f09kK7tL._AC_UF1000,1000_QL80_.jpg",
  //     description: "hey looks good when woking with react application",
  //     isAddedToCart: false,
  //     cartCount: 0,
  //   },
  //   {
  //     id: 3,
  //     name: "Razr",
  //     brand: "Moto",
  //     price: 90000,
  //     image:
  //       "https://m.media-amazon.com/images/I/619f09kK7tL._AC_UF1000,1000_QL80_.jpg",
  //     description: "hey looks good when woking with react application",
  //     isAddedToCart: false,
  //     cartCount: 0,
  //   },
  // ];

  // let [handleLogin, setHandleLogin] = useState({
  //   username: "",
  //   password: "",
  //   role: "",
  //   isActive: false,
  // });
  // let [feed, setFeed] = useState(products);

  // let get = useContext(DataContext);
  // console.log(get)

  return (
    <div className="container-fluid App">
      {/* <Header /> */}

      <Routes>
        <Route path="/" element={<LoginLayout />}>
          <Route path="/" element={<Login />} />
          <Route path="login" element={<Login />} />
        </Route>

        <Route path="/" element={<Layout />}>
          <Route element={<Auth />}>
            <Route path="products" element={<ProductList />} />
            <Route path="cart" element={<Cart />} />
            <Route path="admin" element={<Admin />} />
            <Route path="admin/edit" element={<EditAdd />} />
            <Route path="admin/add" element={<EditAdd />} />
            {/* <Route path="/*" element={<CompA />} /> */}
          </Route>
        </Route>
        <Route path="/*" element={<CompA />} />
        {/* <Route path="without" element={<TestWithout />}>
          <Route path="cart" element={<Cart />} />
        </Route> */}
      </Routes>
      {/* <Footer /> */}
      {/* <ProductList  feed ={feed} setFeed={setFeed} />
      <Cart />
      <Admin />
      <EditAdd /> */}
    </div>
  );
}

export default App;
