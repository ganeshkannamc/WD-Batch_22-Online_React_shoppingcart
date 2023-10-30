import { createContext,useState } from "react";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  let products = [
    {
      id: 0,
      name: "iPhone13",
      brand: "Apple",
      price: 50000,
      image:
        "https://m.media-amazon.com/images/I/619f09kK7tL._AC_UF1000,1000_QL80_.jpg",
      description: "hey looks good when woking with react application",
      isAddedToCart: false,
      cartCount: 0,
    },
    {
      id: 1,
      name: "Flip",
      brand: "Samsung",
      price: 30000,
      image:
        "https://m.media-amazon.com/images/I/619f09kK7tL._AC_UF1000,1000_QL80_.jpg",
      description: "hey looks good when woking with react application",
      isAddedToCart: false,
      cartCount: 0,
    },
    {
      id: 2,
      name: "Fold",
      brand: "Samsung",
      price: 80000,
      image:
        "https://m.media-amazon.com/images/I/619f09kK7tL._AC_UF1000,1000_QL80_.jpg",
      description: "hey looks good when woking with react application",
      isAddedToCart: false,
      cartCount: 0,
    },
    {
      id: 3,
      name: "Razr",
      brand: "Moto",
      price: 90000,
      image:
        "https://m.media-amazon.com/images/I/619f09kK7tL._AC_UF1000,1000_QL80_.jpg",
      description: "hey looks good when woking with react application",
      isAddedToCart: false,
      cartCount: 0,
    },
  ];

  let [handleLogin, setHandleLogin] = useState({
    username: "",
    password: "",
    role: 2,
    isActive: false,
  });

  let [feed, setFeed] = useState(products);

  return (
    <DataContext.Provider
      value={{ handleLogin, setHandleLogin, feed, setFeed }}
    >
      {/* All my component will go */}
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
