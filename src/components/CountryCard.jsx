import React from "react";
import "./CountryCard.css"
import { useNavigate } from "react-router-dom";

function CountryCard({ country, style }) {
    const navigate = useNavigate();
 return (
        <div
            className="country-card"
            style={style}
            onClick={() => navigate("/details", { state: { countryName: country.name } })}
        >
            <img src={country.flag} alt={country.name} className="falg" />
            <div className="info">
                <h2>{country.name}</h2>
            </div>
        </div>
    );
}

export default CountryCard;