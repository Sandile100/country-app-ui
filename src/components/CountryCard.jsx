import React from "react";
import "./CountryCard.css"

function CountryCard({ country, style }) {
 return (
 <div className="country-card" style={style}>
    <img src={country.flag} alt={country.name} className="falg"/>
    <div className="info">
        <h2>{country.name}</h2>
    </div>
 </div>
 );
}

export default CountryCard;