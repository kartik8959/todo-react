import React from "react";
import ToDo from "./ToDo";

const TodoList = ({ todolist,handleToggle,handleDelete }) => {
  return (
    <>
      {todolist.map((todo,i) => {
        return <ToDo key = {i} todo={todo} handleToggle={handleToggle} handleDelete={handleDelete} />;
      })}
    </>
  );
};

export default TodoList;
