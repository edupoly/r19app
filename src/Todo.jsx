import React, { useEffect } from 'react'

function Todo(props) {
  useEffect(()=>{
    console.log("Todo rendered",props.t)
  })
  return (
    <div>
      <li className='border border-1 p-2 m-2 w-25 d-flex justify-content-between'>
        <b>{props.t}</b>
        <button onClick={()=>{props.delTodo(props.i)}}>Delete</button>
      </li>
    </div>
  )
}

export default React.memo(Todo)
// mounting,updation,unmounting