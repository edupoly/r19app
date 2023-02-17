const initalState = {
  alltodos:["clean car","get new bike","promote channel"]
}
function todoReducer(state=initalState,action){

  if(action.type==='ADDTODO'){
    return {...state,alltodos:[...state.alltodos,action.payload]}
  }
  return state;
}
export default todoReducer;