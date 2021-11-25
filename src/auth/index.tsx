import axios from "axios";
import React, { useState } from "react";
import { useCookies } from "react-cookie";
import { useHistory } from "react-router";
import Button from "../library/button";
import Input from "../library/input";
import LandingPage from "../library/landingPage";
import * as Styles from "./styles";

function Login() {
  const history = useHistory();
  const setCookie = useCookies(["todo__username"])[1];
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

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
        setMessage(error);
      }
    } catch (e) {
      console.log("login failed: ", e);
      setMessage("Login Failed");
    }
  };

  return (
    <>
      <Styles.Wrapper>
        <Styles.Card>
          <LandingPage />
          <Styles.ComponentsWrapper>
            <Styles.Title>Sign In</Styles.Title>
            <Styles.SubTitle>
              Welcome back, your tasks needs to be completed!
            </Styles.SubTitle>
            <Input
              value={username}
              placeHolder={"Username"}
              onChangeHandler={(e) => {
                setUsername(e.target.value);
                setMessage("");
              }}
              type={"email"}
              width={"100%"}
              margin={"10px 0"}
              errorText={"Invalid Email Id"}
            />
            <Input
              value={password}
              placeHolder={"Password"}
              onChangeHandler={(e) => {
                setPassword(e.target.value);
                setMessage("");
              }}
              type={"password"}
              width={"100%"}
              margin={"15px 0"}
              errorText={"Invalid Password Format"}
            />
            <Button
              name={"SIGN IN"}
              onClickHandler={loginHandler}
              width={"100%"}
              fontSize={"16px"}
              bg={"#2eacb9"}
              borderRadius={"5px"}
              color={"#fff"}
              margin={"20px 0"}
            />
            <Styles.Text>{message}</Styles.Text>
          </Styles.ComponentsWrapper>
        </Styles.Card>
      </Styles.Wrapper>
    </>
  );
}

export default Login;
