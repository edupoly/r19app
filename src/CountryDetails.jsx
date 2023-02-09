import axios from "axios";
import { useEffect,useState } from "react";
import { useParams } from "react-router-dom"


function CountryDetails() {
  var res = useParams();
  const [cdetails, setCdetails] = useState({})
  console.log(res)
  useEffect(()=>{
    if(res.cname){
      axios.get(`https://restcountries.com/v2/name/${res.cname}`)
      .then((response)=>{
        setCdetails({...response.data})
      })
    }
  },[res.cname])
  return (
    <div className="border border-4 border-success p-2">
      <h1>{res.cname} Details</h1>
      {
        cdetails[0] && (<div><h2>Capital:{cdetails[0].capital}</h2>
        <h2>Population:{cdetails[0].population}</h2>
        <img src={cdetails[0].flag} width="20%" alt="" /></div>)
      }
      
    </div>
  )
}
export default CountryDetails