import React, { useState } from 'react'

const Todoform = ({addTodo}) => {
    let [item,setItem]=useState("");
    let handleChange=(e)=>{
        setItem(e.target.value)
    }

    let handleSubmit=(e)=>{
        e.preventDefault();
            addTodo(item);
            setItem("");
    }
  return (
    <form action="">
        <input type="text"  required onChange={handleChange} value={item} name="item" placeholder='add todo item' className='form-input' />
        <button type="submit" onClick={handleSubmit} className="form-btn">Add Todo</button>
    </form>
  )
}

export default Todoform