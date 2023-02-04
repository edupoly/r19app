import React from "react";

function Todolist(){
    var[todos,setTodos] = React.useState([])
    const [todo,setTodo] = React.useState('') 
    function handleNewTodo(z){
        setTodo(z.target.value)
    }
    function addTodo(){
     setTodos([...todos,todo])
      }

    return(
        <div className='border border-3 m-2 p-2 border-dark'>
        <h1>Todolist</h1>
        <input type="text" onChange={handleNewTodo}/>
        <button onClick={addTodo}>Add Todo</button>
        <ul>
            {
            todos.map((t,i)=> {
              <li>{t}</li>
          })
          }
        </ul>
        </div>
    )
}

export default Todolist;