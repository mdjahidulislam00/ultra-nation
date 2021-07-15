import './App.css';
import { useEffect, useState } from 'react';
import CountryInfo from './components/Country-info/CountryInfo';

function App() {
  const [addCountry, setAddCountry] = useState([]);
  const [countries, setCountries]=useState([]);
  useEffect(()=>{
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data => setCountries(data))
  },[ ])

  const addCountryHandler = (props) => {
    const newValue = [...addCountry, props]
    setAddCountry(newValue);
  }

  return (
    <div className="App">
        <h2>Add Country:{addCountry.length}</h2>
        <h1>Total Country Data : {countries.length}</h1>
          {
            countries.map(country => <CountryInfo country={country} addCountryHandler={addCountryHandler}></CountryInfo>)
          }
    </div>
  );
}

export default App;
