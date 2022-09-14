import React from "react";

const ToDo = ({ todo, handleToggle,handleDelete }) => {
   
  return (
    <>
      <div className="container">
        <div
          className={todo.complete ? "strike" : ""}
          style={{ textAlign: "left",cursor:"pointer" }}
          onClick={() => handleToggle(todo.id)}>
          {todo.task}
        </div>
        <button onClick={()=>handleDelete(todo.id)} className="dlt-btn"><i class="fa fa-trash" aria-hidden="true"></i></button>
      </div>

    
    </>
  );
};

export default ToDo;
