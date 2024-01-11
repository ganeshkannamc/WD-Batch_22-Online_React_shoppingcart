import { useContext, useState } from "react";
import DataContext from "../../Context/DataProvider";

import { useNavigate } from "react-router-dom";

const Login = () => {
  let navigate = useNavigate();
  let { setHandleLogin, handleLogin } = useContext(DataContext);
  let [login, setLogin] = useState({ username: "", password: "" });
  let credentials = [
    { user: "ganesh", pass: "test" },
    { user: "kanna", pass: "test2" },
  ];

  function handleLoginChange(eve) {
    setLogin((preVal) => ({
      ...preVal,
      [eve.target.name]: eve.target.value,
    }));
  }

  async function handleSubmit() {
    let response = await fetch("http://localhost:3000/login", {
      method: "POST",
      body: JSON.stringify(login),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    if (response.ok) {
      let data = await response.json();
      console.log("------", data);
      setHandleLogin((preVal) => ({ ...preVal, isActive: data.status }));
      navigate("/products");
      sessionStorage.setItem("accesstoken", data.accessToken);
    }

    // let check = credentials.find((itm) => itm.user == handleLogin.username);

    // if (check) {
    //   setHandleLogin((preVal) => ({
    //     ...preVal,
    //     isActive: true,
    //   }));
    //   navigate("/products");
    // } else {
    //   setHandleLogin({
    //     username: "",
    //     password: "",
    //     role: "",
    //     isActive: false,
    //   });
    // }
  }

  return (
    <div>
      {handleLogin ? (
        <>
          <input
            type="text"
            name="username"
            value={login.username}
            placeholder="Enter username"
            onChange={handleLoginChange}
          />
          <input
            type="password"
            name="password"
            value={login.password}
            placeholder="Enter password"
            onChange={handleLoginChange}
          />
          {/* 
          <select
            onChange={handleLoginChange}
            name="role"
            value={handleLogin.role}
          >
            <option value={1}>Admin</option>
            <option value={2}>User</option>
          </select> */}

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
