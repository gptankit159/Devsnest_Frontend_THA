import React, { useState, useEffect } from "react";
import './App.css';

const Todo = ({todo , todos , setTodos , index }) =>{
    function del(){
        const newTodos = todos.filter((ele , i )=> i !== index);
        setTodos(newTodos);
        if (newTodos.length === 0){
        }
    }
    return (
        <div className="Todo">
            <p >{todo}</p>
            <button onClick={del}>X</button>
        </div>
    );
}

function Todoapp( props ) {
    let [value , setValue] = useState([""]);
    const [todos , setTodos] = useState(["Tha 19", "Tha 20" ]);
    // useEffect(()=>{
    //     setTodos([]);
    // },[]);
    function change(e){
        setValue(e.target.value); 
        console.log(value);
        value = {value};
    }
    function click(){
        setTodos([...todos, value]);
        setValue("");
    }
    return (
        <div className="Todoapp">
            <input type="text" onChange={change} value={value} /> <br />
            <button onClick={click}>ADD</button>
            <div className="todolist">
            {todos.map((todo , index)=>(
                <Todo key={index} todo={todo} todos={todos} setTodos={setTodos} index={index}/>
            ))}
            </div>
        </div>
  );
}

export default Todoapp;