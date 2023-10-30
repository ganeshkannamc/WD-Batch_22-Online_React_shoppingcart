import { useContext } from "react";
import DataContext from "../../Context/DataProvider";


const Cart = () => {
  let { setFeed, feed } = useContext(DataContext);

  function handleCartCount(eve) {
    let type = eve.target.name;
    let productId = eve.target.id;
    if (type == "decre") {
      let updatedFeed = feed.map((itm) => {
        if (itm.id == productId) {
          itm.cartCount -= 1;
          return itm;
        }
        return itm;
      });
      setFeed(updatedFeed);
    }

    if (type == "incre") {
      let updatedFeed = feed.map((itm) => {
        if (itm.id == productId) {
          itm.cartCount += 1;
          return itm;
        }
        return itm;
      });
      setFeed(updatedFeed);
    }
  }
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
          {feed.map(
            (itm, indx) =>
              itm.cartCount > 0 && (
                <tr key={indx}>
                  <td>{itm.id}</td>
                  <td>{itm.name}</td>
                  <td>{itm.price}</td>
                  <td>
                    <div className="d-flex flex-column justify-content-center">
                      <div>
                        <button
                          className="btn btn-primary m-0"
                          id={itm.id}
                          name="decre"
                          onClick={handleCartCount}
                        >
                          -
                        </button>
                        <input
                          type="number"
                          disabled
                          style={{ width: "50px" }}
                          value={itm.cartCount}
                        />
                        <button
                          className="btn btn-primary m-0"
                          id={itm.id}
                          name="incre"
                          onClick={handleCartCount}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </td>
                  <td>{itm.price * itm.cartCount}</td>
                </tr>
              )
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Cart;
