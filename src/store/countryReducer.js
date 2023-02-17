const initalState = {
  countries:[]
}
function countryReducer(state=initalState,action){
  if(action.type==='INITCOUNTRIES'){
    console.log("countryreducer",action.payload)
    return {...state,countries:action.payload}
  }
  return state
}
export default countryReducer;