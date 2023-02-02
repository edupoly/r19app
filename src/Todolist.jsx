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
  useEffect(function(){
    console.log("useEffect called")
  })
  useEffect(function(){
    console.log("useEffect with empty dependency array")
  },[])
  useEffect(()=>{
    console.log("useEffect with todo state variable in dependency array")
  },[todo])
  useEffect(()=>{
    console.log("useEffect with todos length in dependency array")
  },[todos.length])
  return (
    <div className='border border-4 m-2 p-2 border-danger'>
      <h1>Todolist</h1>
      <input type="text" onChange={handleNewTodo}/>
      <button onClick={addTodo}>Add Todo</button>
      <ul>
        {
          todos.map((t,i)=>{
            return <Todo t={t}></Todo>
          })
        }
      </ul>
    </div>
  )
}

export default Todolist