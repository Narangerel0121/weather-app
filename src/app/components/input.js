"use client"
import React, { useEffect, useState } from "react";

export default function Home() {
  const [countries, setCountries] = useState([]);
const [filteredCountries, setFilteredCountires] = useState();

  useEffect(() => {
    const getData = async () => {
      const response = await fetch ("https://countriesnow.space/api/v0.1/countries");
  
      const countries = await response.json();

      const arr = []

      countries.data.map(country => {
        country.cities.map(city => arr.push(`${city}, ${country.country}`))
      })
      setCountries(arr)
    }
    getData()
  }, [])
 
  const onSearchValue = (event) => {
const filteredCountries = countries.filter(country => {
  return country.toLowerCase().startsWith(event.target.value.toLowerCase());
})

setFilteredCountires(filteredCountries.slice(0, 4))
  }


  // const citiesList = countries.map(country => <div>{country}</div>);

  return (
<div>
<input onChange={onSearchValue} className="rounded py-4 bg-transparent focus:outline-none" placeholder="Search" />
<div>
  {filteredCountries.map((country, index) => <div key={country + index}> {country}</div>)}
</div>
{/* {citiesList} */}
</div>
  );
}

