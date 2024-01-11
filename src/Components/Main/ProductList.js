import Product from "./Product";

import { useContext, useEffect } from "react";
import DataContext from "../../Context/DataProvider";

const ProductList = () => {
  let { setFeed, feed } = useContext(DataContext);

  useEffect(() => {
    getProducts();
  }, []);

  async function getProducts() {
    const getAcessToken = sessionStorage.getItem("accesstoken");
    console.log("getAcessToken", getAcessToken);
    let response = await fetch("http://localhost:3000/allproducts", {
      method: "GET",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        Authorization: `Bearer ${getAcessToken}`,
      },
    });
    
    if (response.ok) {
      let data = await response.json();
      console.log("------", data);
    }
  }

  return (
    <div className="d-flex flex-row flex-wrap">
      {/* { name, price, image, description } */}
      {feed.map((itm, indx) => (
        <Product
          key={indx}
          id={itm.id}
          name={itm.name}
          price={itm.price}
          image={itm.image}
          description={itm.description}
          cartCount={itm.cartCount}
          setFeed={setFeed}
          feed={feed}
        />
      ))}
    </div>
  );
};

export default ProductList;
