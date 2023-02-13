import {connect} from 'react-redux'
import React from 'react'
function Todolist(props) {
  console.log(props)
  const [newtodo, setNewtodo] = React.useState('')
  return (
    <div className='border border-2 m-2 p-2 border-danger'>
      <h1>Todolist</h1>
      <input type="text" onChange={(e)=>{setNewtodo(e.target.value)}}/>
      <button onClick={()=>{props.dispatch({type:'ADDTODO',payload:newtodo})}}>Add Todo</button>
      <ul>
        {
          props.todos.todos.map((t)=>{
            return <li>{t}</li>
          })
        }
      </ul>
    </div>
  )
}
export default connect(function(store){return store})(Todolist) 