import {connect} from 'react-redux'
import { decCounter, incCounter } from './store/action'
function Counter(props) {
  console.log(props)
  return (
    <div className='border border-2 m-2 p-2 border-danger'>
      <h1>Counter:{props.count}</h1>
      <button onClick={props.inc}>increment</button>
      <button onClick={props.dec}>decrement</button>
    </div>
  )
}
function mapStateToProps(state){return state.counter}
function mapDispatchToProps(dispatch){return {
  inc:()=>{dispatch(incCounter())},
  dec:()=>{dispatch(decCounter())},
}}
export default connect(mapStateToProps,mapDispatchToProps)(Counter)