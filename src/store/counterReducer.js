const initalState={
  count:0
}
function counterReducer(state=initalState,action){
  if(action.type==='INC'){
    return {...state,count:state.count+1}
  }
  if(action.type==='DEC'){
    return {...state,count:state.count-1}
  }
  if(action.type==='RESET'){
    return {...state,count:initalState.count}
  }
  return state
}
export default counterReducer;