import React from "react"
function Another(props,refs) {
  return (
    <div className="border border-4 border-danger p-2 m-2">
      Another
      <input type="text" ref={refs}/>
    </div>
  )
}

export default React.forwardRef(Another)