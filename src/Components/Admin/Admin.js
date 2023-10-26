import React from "react";

const Admin = () => {
  return (
    <div>
        <button className="btn btn-primary m-1">Create</button>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>S#</th>
            <th>Product name</th>
            <th>Price</th>
            <th>Image</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>iPhone</td>
            <td>40000</td>
            <td>img link</td>
            <td>hey you are working in react app</td>
            <td>
              <button className="btn btn-primary m-1">Edit</button>
              <button className="btn btn-danger m-1">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Admin;
