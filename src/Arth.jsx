import React, { useEffect, useState } from "react";
import Another from "./Another";
function Arth() {

  var ref1 = React.useRef();
  var ref2 = React.useRef();
  var ref3 = React.useRef();

  function focusplease(){
    ref1.current.focus()
  }
  function checkEnter(e){
    if(e.key==='Enter'){
      ref2.current.focus()
    }
  }
  function checkEnter2(e){
    if(e.key==='Enter'){
      ref3.current.focus()
    }
  }
  useEffect(()=>{
    ref1.current.focus();
  },[]);
  return (
    <div>
      <h1>Arth</h1>
      <input type="text" ref={ref1} onKeyUp={checkEnter}/>
      <input type="text" ref={ref2} onKeyUp={checkEnter2}/>
      <button onClick={focusplease}>Focus Text box</button>
      <Another ref={ref3}></Another>
    </div>
  )
}
export default Arth
