import React from "react"
import { connect } from "react-redux"
import { initCountries } from "./store/action"
function Countries(props) {
  console.log('countries rendered')
  React.useEffect(()=>{
    props.loadCountries()
  },[])
  return (
    <div>
      <h1>Countries</h1>
      <ul className="d-flex flex-wrap border">
        {
          props.countries.map((c)=>{
            return <li className="" style={{width:'200px'}}>{c.name}</li>
          })
        }
      </ul>
    </div>
  )
}
function mapStateToProps(state){return state.countries}
function mapDispatchToProps(dispatch){return {
  loadCountries:()=>{dispatch(initCountries())}
}}
export default connect(mapStateToProps,mapDispatchToProps)(Countries)