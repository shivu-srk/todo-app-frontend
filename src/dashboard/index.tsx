import axios from "axios";
import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useHistory } from "react-router";
import Button from "../library/button";
import Input from "../library/input";
import * as Styles from "./styles";

function Dashboard() {
  const history = useHistory();
  const cookie = useCookies(["todo__username"])[0];
  const username = cookie.todo__username;
  const [task, setTask] = useState("");
  const [list, setList] = useState<{ task: string; taskid: number }[]>([]);

  useEffect(() => {
    listHandler();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const addHandler = async () => {
    try {
      setTask("");
      const res = await axios.post("http://localhost:5000/add", {
        username,
        greet: task,
      });
      const { status, error } = res.data;
      if (status) {
        listHandler();
      } else {
        console.log(error);
      }
    } catch (e) {}
  };

  const listHandler = async () => {
    try {
      const res = await axios.post("http://localhost:5000/list", {
        username,
      });
      console.log(res);
      const { status, error, data } = res.data;
      if (status) {
        setList(data);
      } else {
        console.log(error);
      }
    } catch (error) {}
  };

  const deleteHandler = async (index: number) => {
    try {
      console.log(list[index].taskid);
      const id = list[index].taskid;
      const res = await axios.post("http://localhost:5000/delete", {
        id,
      });
      const { status } = res.data;
      if (status) {
        listHandler();
      }
      console.log(res);
    } catch (error) {}
  };

  return (
    <Styles.Wrapper>
      <Styles.ContentWrapper>
        <Styles.NewItem>
          <Input
            type="text"
            value={task}
            onChangeHandler={(e) => setTask(e.target.value)}
            placeHolder={"Add New Task"}
            borderRadius={"5px"}
          />
          <Styles.Spacer />
          <Button
            onClickHandler={addHandler}
            name={"ADD"}
            fontSize={"16px"}
            bg={"#2eacb9"}
            borderRadius={"5px"}
            color={"#fff"}
            width={"100px"}
            margin={"0 10px"}
          />
        </Styles.NewItem>
        <Styles.ListWrapper>
          {list.map((task, i) => (
            <Styles.TaskWrapper key={i}>
              <Styles.Task>{task.task}</Styles.Task>
              <Styles.Spacer />
              <Styles.Icon
                src={
                  "https://img.icons8.com/external-kiranshastry-lineal-color-kiranshastry/64/000000/external-delete-miscellaneous-kiranshastry-lineal-color-kiranshastry.png"
                }
                onClick={() => deleteHandler(i)}
              />
            </Styles.TaskWrapper>
          ))}
        </Styles.ListWrapper>
        <Styles.Spacer />
        <Button
          onClickHandler={() => history.push("/")}
          name={"LOGOUT"}
          fontSize={"16px"}
          bg={"#2eacb9"}
          borderRadius={"5px"}
          color={"#fff"}
          width={"100px"}
          margin={"0 10px"}
        />
      </Styles.ContentWrapper>
    </Styles.Wrapper>
  );
}

export default Dashboard;
