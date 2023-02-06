import { useEffect,useState } from "react"
import Cart from "./Cart"
import axios from "axios"
function Products() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([])
  useEffect(()=>{
    axios.get("https://fakestoreapi.com/products").then((res)=>{
      setProducts(res.data)
    })
  },[])
  function addToCart(product){
    setCart([...cart,{...product,count:1}])
  }
  function isProductInCart(product){
    var x = cart.find(function(cp){
      if(cp.title===product.title){
        return true
      }
      else{
        return false
      }
    })
    return x
  }
  function getCartProductCount(product){
    var x = cart.find(function(cp){
      if(cp.title===product.title){
        return true
      }
      else{
        return false
      }
    })
    return x?x.count:0
  }
  function incCount(product){
    var temp = cart.map((cp)=>{
      if(cp.title===product.title){
        cp.count=cp.count+1
      }
      return cp
    })
    setCart([...temp])
  }
  function decCount(){

  }
  return (
    <div className='d-flex flex-wrap border border-4 border-info p-2 w-100'>
      <div className="w-50">
        {products.length>0 && (
          products.map((product)=>{
            return <li className="d-flex">
              <img src={product.image} width="100px" alt="" />
              <div className="p-4">
                <h4>{product.title}</h4>
                <h3>{product.price}</h3>
                {
                  isProductInCart(product) && (
                  <>
                    <button onClick={()=>{decCount()}}>-</button>
                    <b>{getCartProductCount(product)}</b>
                    <button onClick={()=>{incCount(product)}}>+</button>
                  </>)
                }
                {
                  !isProductInCart(product) && (<button onClick={()=>{addToCart(product)}}>Add to Cart</button>)
                }
                
              </div>
            </li>
          })
        )}
      </div>
      <div className="w-50">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  )
}
export default Products