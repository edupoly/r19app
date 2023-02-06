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
      <div className="w-75">
        {products.length>0 && (
          products.map((product)=>{
            return <li className="d-flex">
              <img src={product.image} width="150px" className="p-4" alt="" />
              <div className="p-4">
                <h4>{product.title}</h4>
                <h3>{product.price}</h3>
                {
                  isProductInCart(product) && (
                  <>
                    <button onClick={()=>{decCount()}} className='m-2'>-</button>
                    <b>{getCartProductCount(product)}</b>
                    <button onClick={()=>{incCount(product)}} className='m-2'>+</button>
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
      <div className="w-25">
        <div className=" position-sticky top-0">
          <Cart cart={cart}></Cart>
        </div>
      </div>
    </div>
  )
}
export default Products