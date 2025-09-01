import React, { useEffect, useState } from "react";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import './CountryDetails.css';

const API_BASE = "http://localhost:8080/countries";

function CountryDetails() {
  const location = useLocation();
  const params = useParams();
  const navigate = useNavigate();
  const stateName = location?.state?.countryName;
  const paramName = params?.name;
  const countryName = stateName || paramName || "";

  const [countryDetails, setCountryDetails] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!countryName) return;

    const fetchCountryDetails = async () => {
      setLoading(true);
      try {
        const res = await fetch(`${API_BASE}/${encodeURIComponent(countryName)}`);
        const data = await res.json();
        setCountryDetails(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchCountryDetails();
  }, [countryName]);

  if (!countryName) return <div>No country selected.</div>;
  if (loading) return <div>Loading...</div>;
  if (!countryDetails) return <div>Country not found.</div>;

  const capital = Array.isArray(countryDetails.capital)
    ? countryDetails.capital.join(", ")
    : countryDetails.capital || "—";

  return (
    <div className="country-details">
      {/* round edge back button */}
      <button
        type="button"
        className="back-button"
        onClick={() => navigate("/")}
        aria-label="Go back to list"
      >
        ← Back
      </button>

      <img src={countryDetails.flag} alt={countryDetails.name} className="flag" />
      <div className="details-right">
        <h2>{countryDetails.name}</h2>

        {/* Population below country name */}
        <p><strong>Population:</strong> {countryDetails.population ?? "—"}</p>

        {/* Capital below population */}
        <p><strong>Capital:</strong> {capital}</p>
      </div>
    </div>
  );
}

export default CountryDetails;