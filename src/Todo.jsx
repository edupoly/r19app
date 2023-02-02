import React from 'react'

function Todo(props) {
  return (
    <div>
      <li className='border border-1 p-2 m-2 w-25 d-flex justify-content-between'>
        <b>{props.t}</b>
        <button>Delete</button>
      </li>
    </div>
  )
}

export default Todo
// mounting,updation,unmounting