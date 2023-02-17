import {connect} from 'react-redux'
import React from 'react';
import { addTodo } from './store/action';

function Todolist(props) {
  React.useEffect(()=>{
    console.log('Todolist rendered')
  })
  const [newtodo, setNewtodo] = React.useState('')
  return (
    <div className='border border-2 m-2 p-2 border-danger'>
      <h1>Todolist</h1>
      <input type="text" onChange={(e)=>{setNewtodo(e.target.value)}}/>
      <button onClick={()=>{props.handlenewtask(newtodo)}}>Add Todo</button>
      <ul>
        {
          props.alltodos.map((t)=>{
            return <li>{t}</li>
          })
        }
      </ul>
    </div>
  )
}
export default connect(
  function(state){return state.todos},
  function(dispatch){
    return {
      handlenewtask:(nt)=>{dispatch(addTodo(nt))}
    }
  })
(Todolist) 