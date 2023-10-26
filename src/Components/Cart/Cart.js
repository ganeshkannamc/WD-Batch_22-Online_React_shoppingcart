import React from "react";

const Cart = () => {
  return (
    <div>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>S#</th>
            <th>Product name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>iPhone</td>
            <td>40000</td>
            <td>
              <div className="d-flex flex-column justify-content-center">
                <div>
                  <button className="btn btn-primary m-0">-</button>
                  <input type="number" disabled style={{ width: "50px" }} />
                  <button className="btn btn-primary m-0">+</button>
                </div>
              </div>
            </td>
            <td>20000</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Cart;
