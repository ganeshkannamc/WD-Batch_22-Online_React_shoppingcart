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

  function handleEditSubmit() {
    let updatedProducts;
    if (id) {
      updatedProducts = feed.map((itm) => {
        if (itm.id == id) {
          itm.name = product.name;
          itm.price = product.price;
          itm.brand = product.brand;
          itm.image = product.image;
          itm.description = product.description;
          itm.AddedToCart = false;
          itm.cartCount = 0;
        }
        return itm;
      });
      console.log("Edit", product);
      setFeed(updatedProducts);
    }
    if (!id) {
      let randomId = Math.floor(Math.random() * 100);
      let newProduct = {
        id: randomId,
        brand: product.brand,
        name: product.name,
        price: product.price,
        image: product.image,
        description: product.description,
        isAddedToCart: false,
        cartCount: 0,
      };
      setFeed((preVal) => [...preVal, newProduct]);
      console.log("New", newProduct);
    }
  }

  function handleInputChange(eve) {
    setProduct((preVal) => ({
      ...preVal,
      [eve.target.name]: eve.target.value,
    }));
  }

  return (
    <div>
      <div class="input-group m-2">
        <span class="input-group-text">Brand</span>
        <input
          type="text"
          name="brand"
          aria-label="First name"
          class="form-control"
          onChange={handleInputChange}
          value={product.brand}
        />
      </div>

      <div class="input-group m-2">
        <span class="input-group-text">Product name</span>
        <input
          type="text"
          name="name"
          aria-label="First name"
          class="form-control"
          onChange={handleInputChange}
          value={product.name}
        />
      </div>

      <div class="input-group m-2">
        <span class="input-group-text">Product price</span>
        <input
          type="text"
          name="price"
          aria-label="First name"
          class="form-control"
          onChange={handleInputChange}
          value={product.price}
        />
      </div>

      <div class="input-group m-2">
        <span class="input-group-text">Product image</span>
        <input
          type="text"
          name="image"
          aria-label="First name"
          class="form-control"
          onChange={handleInputChange}
          value={product.image}
        />
      </div>

      <div class="input-group m-2">
        <span class="input-group-text">Product description</span>
        <textarea
          type="text-area"
          name="description"
          aria-label="First name"
          class="form-control"
          onChange={handleInputChange}
          value={product.description}
        />
      </div>
      {id && (
        <button className="btn btn-primary m-2" onClick={handleEditSubmit}>
          Save
        </button>
      )}
      {!id && (
        <button className="btn btn-primary m-2" onClick={handleEditSubmit}>
          Add
        </button>
      )}
    </div>
  );
};

export default EditAdd;
