import React from "react";

const EditAdd = () => {
  return (
    <div>
      <div class="input-group m-2">
        <span class="input-group-text">Product name</span>
        <input
          type="text"
          name="product-name"
          aria-label="First name"
          class="form-control"
        />
      </div>

      <div class="input-group m-2">
        <span class="input-group-text">Product price</span>
        <input
          type="text"
          name="product-price"
          aria-label="First name"
          class="form-control"
        />
      </div>

      <div class="input-group m-2">
        <span class="input-group-text">Product image</span>
        <input
          type="text"
          name="product-image"
          aria-label="First name"
          class="form-control"
        />
      </div>

      <div class="input-group m-2">
        <span class="input-group-text">Product description</span>
        <textarea
          type="text-area"
          name="product-des"
          aria-label="First name"
          class="form-control"
        />
      </div>

      <button className="btn btn-primary m-2">Add</button>
      <button className="btn btn-primary m-2">Save</button>
    </div>
  );
};

export default EditAdd;
