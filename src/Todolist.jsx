import React, { useEffect } from 'react'
import Todo from './Todo'

function Todolist() {
  console.log("Todolist first line");
  var [todos,setTodos]=React.useState(['rohit','india','adani'])
  const [todo, setTodo] = React.useState('')
  function handleNewTodo(e){
    setTodo(e.target.value)
  }
  function addTodo(){
    setTodos([...todos,todo])
  }
  
  var delTodo=React.useCallback((index)=>{
    var temp = [...todos];
    temp.splice(index,1);
    console.log(temp)
    setTodos([...temp])
  },[todos.length])

  
  return (
    <div className='border border-4 m-2 p-2 border-danger'>
      <h1>Todolist</h1>
      <input type="text" onChange={handleNewTodo}/>
      <button onClick={addTodo}>Add Todo</button>
      <ul>
        {
          todos.map((t,i)=>{
            return <Todo t={t} delTodo={delTodo} i={i}></Todo>
          })
        }
      </ul>
    </div>
  )
}

export default Todolist
