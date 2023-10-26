import Menu from "./Menu";
import DataContext from "../../Context/DataProvider";
import { useContext } from "react";

const Header = () => {
  let { handleLogin } = useContext(DataContext);

  return (
    <>
      <div className="row">
        <div className="col-4 cart-logo">Logo</div>
        <div className="col-4 user-info">username- {handleLogin.username}</div>
      </div>
      <div className="d-flex flex-row">
        <Menu />
      </div>
    </>
  );
};

export default Header;
