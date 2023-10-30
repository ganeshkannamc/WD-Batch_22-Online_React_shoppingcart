import { useContext } from "react";
import DataContext from "../../Context/DataProvider";

import { useNavigate } from "react-router-dom";

const Login = () => {
  let navigate = useNavigate();
  let { setHandleLogin, handleLogin } = useContext(DataContext);
  let credentials = [
    { user: "ganesh", pass: "test" },
    { user: "kanna", pass: "test2" },
  ];

  function handleLoginChange(eve) {
    setHandleLogin((preVal) => ({
      ...preVal,
      [eve.target.name]: eve.target.value,
    }));
  }

  function handleSubmit() {
    let check = credentials.find((itm) => itm.user == handleLogin.username);

    if (check) {
      setHandleLogin((preVal) => ({
        ...preVal,
        isActive: true,
      }));
      navigate("/products");
    } else {
      setHandleLogin({
        username: "",
        password: "",
        role: "",
        isActive: false,
      });
    }
  }

  return (
    <div>
      {handleLogin ? (
        <>
          <input
            type="text"
            name="username"
            value={handleLogin.username}
            placeholder="Enter username"
            onChange={handleLoginChange}
          />
          <input
            type="password"
            name="password"
            value={handleLogin.password}
            placeholder="Enter password"
            onChange={handleLoginChange}
          />

          <select
            onChange={handleLoginChange}
            name="role"
            value={handleLogin.role}
          >
            <option value={1}>Admin</option>
            <option value={2}>User</option>
          </select>

          <button onClick={handleSubmit} className="btn btn-primary">
            Login
          </button>
        </>
      ) : (
        "Loading..."
      )}
    </div>
  );
};

export default Login;
