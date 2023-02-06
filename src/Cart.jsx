function Cart(props) {
  function getTotal(){
    return  props.cart.reduce((t,p)=>{
              return t+(p.price*p.count)
            },0)
  }
  return (
    <div className='border border-4 border-secondary p-2'>
      Cart
      {
        props.cart.map((p)=>{
          return <li className="d-flex flex-wrap justify-content-between">
              <div className="w-50">{p.title}</div>
              <div className="w-25 text-end">{p.count}*{p.price}</div>
              <div className="w-25 text-end">{p.count*p.price}</div>
            </li>
        })
      }
      <hr />
      <h1 className="text-end">Total:{getTotal()}</h1>
    </div>
  )
}
export default Cart