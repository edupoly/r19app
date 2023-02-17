import axios from "axios"

export function addTodo(newtodo){
  return {type:'ADDTODO',payload:newtodo}
}
export function incCounter(){
  return {type:"INC"}
}
export function decCounter(){
  return {type:"DEC"}
}
export function initCountries(){
  return (dispatch)=>{
    axios.get("https://restcountries.com/v2/all").then((res)=>{
      dispatch({type:"INITCOUNTRIES",payload:res.data})
    })
  }
}