import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";

import DataContext from "../../Context/DataProvider";

const EditAdd = () => {
  let { setFeed, feed } = useContext(DataContext);

  let { id } = useParams();
  let [product, setProduct] = useState({
    id: "",
    name: "",
    brand: "",
    price: "",
    image: "",
    description: "",
  });

  useEffect(() => {
    if (id) {
      let [getEditedItem] = feed.filter((itm) => itm.id == id);
      setProduct((preVal) => ({
        ...preVal,
        id: getEditedItem.id,
        name: getEditedItem.name,
        brand: getEditedItem.brand,
        price: getEditedItem.price,
        image: getEditedItem.image,
        description: getEditedItem.description,
      }));
    }
  }, []);
  return (
    <div>
      <div class="input-group m-2">
        <span class="input-group-text">Product name</span>
        <input
          type="text"
          name="product-name"
          aria-label="First name"
          class="form-control"
          value={product.name}
        />
      </div>

      <div class="input-group m-2">
        <span class="input-group-text">Product price</span>
        <input
          type="text"
          name="product-price"
          aria-label="First name"
          class="form-control"
          value={product.price}
        />
      </div>

      <div class="input-group m-2">
        <span class="input-group-text">Product image</span>
        <input
          type="text"
          name="product-image"
          aria-label="First name"
          class="form-control"
          value={product.image}
        />
      </div>

      <div class="input-group m-2">
        <span class="input-group-text">Product description</span>
        <textarea
          type="text-area"
          name="product-des"
          aria-label="First name"
          class="form-control"
          value={product.description}
        />
      </div>

      <button className="btn btn-primary m-2">Add</button>
      <button className="btn btn-primary m-2">Save</button>
    </div>
  );
};

export default EditAdd;
