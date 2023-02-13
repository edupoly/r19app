import {connect} from 'react-redux'
function Counter(props) {
  console.log(props)
  return (
    <div className='border border-2 m-2 p-2 border-danger'>
      <h1>Counter:{props.counter.count}</h1>
    </div>
  )
}
export default connect(function(store){return store})(Counter)