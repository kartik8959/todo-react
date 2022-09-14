import { useState } from 'react';
import Header from './Header';
import data from  "./data.json";
import TodoList from './TodoList';
import Todoform from './Todoform';
import './App.css';

function App() {
  let  [toDoList,setToDoList]=useState(data);
  function handleDelete(id){
    let todos=toDoList.filter((item)=>{
      return item.id !== id
    })
    setToDoList(todos)
  }

  function handleClear(){
    let filteredTodo=toDoList.filter((todo)=>{
      return !todo.complete
    })

    setToDoList(filteredTodo)
  }

  function handleToggle(id){
    let mapped=toDoList.map((task)=>{
      return task.id===id ? {...task,complete:!task.complete}:{...task}
    })
    setToDoList(mapped)
  }
  function addTodo(todoItem){
    let copy=[...toDoList];
    copy=[...copy, {id:toDoList.length+1,task:todoItem,
    complete: false}];
    setToDoList(copy);
  }
  return(
    <div className="App">
      <Header/>
      <TodoList todolist={toDoList} handleToggle={handleToggle} handleDelete={handleDelete}/>
      <button onClick={handleClear} className="clear-btn">Clear</button>
      <Todoform addTodo={addTodo}/>
    </div>
  );
}

export default App;
