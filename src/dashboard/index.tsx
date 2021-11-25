import axios from "axios";
import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";

function Dashboard() {
  const cookie = useCookies(["todo__username"])[0];
  const username = cookie.todo__username;
  const [task, setTask] = useState("");
  const [list, setList] = useState<{ task: string; taskid: number }[]>([]);

  useEffect(() => {
    listHandler();
  }, []);

  const addHandler = async () => {
    try {
      const res = await axios.post("http://localhost:5000/add", {
        username,
        greet: task,
      });
      const { status, error } = res.data;
      if (status) {
      } else {
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
      }
    } catch (error) {}
  };

  const deleteHandler = async () => {
    try {
      const res = await axios.post("http://localhost:5000/delete");
    } catch (error) {}
  };

  return (
    <>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button type="submit" onClick={addHandler}>
        Add
      </button>
      {list.map((task, i) => (
        <h3 key={i} onClick={deleteHandler}>
          {task.task}
        </h3>
      ))}
    </>
  );
}

export default Dashboard;
