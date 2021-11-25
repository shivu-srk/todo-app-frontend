import axios from "axios";
import React, { useState } from "react";
import { useCookies } from "react-cookie";
import { useHistory } from "react-router";

function Login() {
  const history = useHistory();
  const setCookie = useCookies(["todo__username"])[1];
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const getMaxExpireDate = () => {
    var d = new Date();
    d.setTime(d.getTime() + 999 * 24 * 60 * 60 * 1000);
    return d;
  };

  const setCookies = () => {
    setCookie("todo__username", username, {
      path: "/",
      expires: getMaxExpireDate(),
    });
  };

  const loginHandler = async () => {
    try {
      const res = await axios.post("http://localhost:5000/auth", {
        username,
        password,
      });
      const { status, error } = res.data;
      if (status) {
        setCookies();
        history.push(`/dashboard/${username}`);
      } else {
        console.log(error);
      }
    } catch (e) {
      console.log("login failed: ", e);
    }
  };

  return (
    <>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit" onClick={loginHandler}>
        Login
      </button>
    </>
  );
}

export default Login;
