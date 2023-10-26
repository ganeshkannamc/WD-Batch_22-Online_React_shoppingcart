import Product from "./Product";

import { useContext } from "react";
import DataContext from "../../Context/DataProvider";

const ProductList = () => {
  let { setFeed, feed } = useContext(DataContext);

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
