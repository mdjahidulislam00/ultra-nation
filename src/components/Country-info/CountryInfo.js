import React from 'react';
import './CountryInfo.css';

const CountryInfo = (props) => {
    const{name,capital,population,flag} = props.country;
    const addCountryHandler = props.addCountryHandler;
    return (
        <div className="countryInformation-container">
            <img src={flag} alt="" />
            <h1>{name}</h1>
            <h2>Capital:{capital}</h2>
            <h3>Population: {population}</h3>
            <button onClick= {() => addCountryHandler(props.country)}>Add</button>
        </div>
    );
};

export default CountryInfo;