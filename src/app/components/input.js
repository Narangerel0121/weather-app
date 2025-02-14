"use client"
import React, { useState, useEffect } from "react";

export default function Input() {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState('ulaanbaatar');
  const [currentForecast, setCurrentForecast] = useState(null)

  useEffect(() => {
    const getData = async () => {
      const response = await fetch("https://countriesnow.space/api/v0.1/countries")
      const countries = await response.json();
      const arr = []
      countries.data.map(country => {
        country.cities.map(city => arr.push((`${city}, ${country.country}`)))
      })
      setCountries(arr)
    }
    getData()
  }, []);

  useEffect(() => {
    const getCurrentTemp = async () => {
      const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=f3ba84b06d684526a46225752251302&q=${selectedCountry}`);
      const currentTemp = await response.json();
      console.log(currentTemp);
      
      setCurrentForecast(currentTemp)
    }
    getCurrentTemp()
  }, [selectedCountry])

  const onSearchValue = (event) => {
    const filteredCountries = countries.filter(country => {
      return country.toLowerCase().startsWith(event.target.value.toLowerCase());
    })
    setFilteredCountries(filteredCountries.slice(0, 4))
  }
  const selectCountry = (index) => {
    console.log(filteredCountries[index]);
    
    setSelectedCountry(filteredCountries[index])
    setFilteredCountries([])
  }

  return (
    <div>
      {selectedCountry} <br />
      <input onChange={onSearchValue} placeholder="Search" />
      <div>
        {filteredCountries.map((country, index) => <div onClick={() => selectCountry(index)} key={country + index}>{country}</div>)}
      </div>
      <div>
        {
          currentForecast &&
          <div>
            <p>
              Odortoo <span>{currentForecast.forecast.forecastday[0].day.maxtemp_c}</span>
            </p>
            <p>
              Shonodoo <span>{currentForecast.forecast.forecastday[0].day.mintemp_c}</span>
            </p>
          </div>
        }
      </div>
    </div>
  );
}