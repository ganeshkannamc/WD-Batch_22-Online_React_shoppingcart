import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import DataContext from "../../Context/DataProvider";

const Admin = () => {
  let { setFeed, feed } = useContext(DataContext);
  let pageNavigate = useNavigate();
  function handleDelete(eve) {
    let updatedFeed = feed.filter(
      (itm) => parseInt(itm.id) !== parseInt(eve.target.id)
    );
    setFeed(updatedFeed);
  }
  return (
    <div>
      <button
        className="btn btn-primary m-1"
        onClick={() => pageNavigate("/admin/add")}
      >
        Create
      </button>
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
          {feed.map((itm, indx) => (
            <tr key={indx}>
              <td>{itm.id}</td>
              <td>{itm.name}</td>
              <td>{itm.price}</td>
              <td>{itm.image}</td>
              <td>{itm.description}</td>
              <td>
                <button
                  className="btn btn-primary m-1"
                  id={itm.id}
                  onClick={(eve) =>
                    pageNavigate(`/admin/edit/${eve.target.id}`)
                  }
                >
                  Edit
                </button>
                <button
                  className="btn btn-danger m-1"
                  id={itm.id}
                  onClick={handleDelete}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Admin;
