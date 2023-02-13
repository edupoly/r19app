const initalState = {
  todos:["clean car","get new bike","promote channel"]
}
function todoReducer(state=initalState,action){

  if(action.type==='ADDTODO'){
    return {...state,todos:[...state.todos,action.payload]}
  }
  return state;
}
export default todoReducer;