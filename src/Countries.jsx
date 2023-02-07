import axios from "axios";
import React,{useState,useEffect} from "react";

function Countries() {
  const [countries, setCountries] = useState([]);

  useEffect(()=>{
    axios.get("https://restcountries.com/v2/all").then((res)=>{
      setCountries(res.data)
    })
  },[])
  return (
    <div>
      {
        countries.map((c)=>{
          return <li>{c.name}</li>
        })
      }
    </div>
  )
}
export default Countries