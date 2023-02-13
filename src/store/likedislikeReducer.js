const initalState = {
  likes:0,
  dislikes:0
}

function likedislikeReducer(state=initalState,action){
  if(action.type==='LIKE'){
    return {...state,likes:state.likes+1}
  }
  if(action.type==='DISLIKE'){
    return {...state,dislikes:state.dislikes+1}
  }
  return state
}
export default likedislikeReducer;