import axios from "axios";
import React,{useState,useEffect} from "react";
import { Link } from "react-router-dom";

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
          return <li>
            <Link to={`/countryDetails/${c.name}/${c.capital}/${c.population}`}>{c.name}</Link>
            </li>
        })
      }
    </div>
  )
}
export default Countries