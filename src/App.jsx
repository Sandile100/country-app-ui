import './App.css';
import { useEffect, useState } from 'react';
import CountryList from './components/CountryList'
import SearchBar from "./components/SearchBar"
import CountryDetails from './components/CountryDetails';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const API_URL = "http://localhost:8080/countries";

function App() {

    const [countries, setCountries] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    

  useEffect(() => {
   fetchCountries();
  }, [])

  const fetchCountries = async () => {
    try {
      const response = await fetch(API_URL) 
      const data = await response.json();
      if(data) setCountries(data);

    } catch (error) {
      console.log(error)
    }
  }

  const filteredCountries = countries.filter(country => country.name.toLowerCase().includes(searchTerm.toLowerCase()))
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <div className="app">
            <SearchBar setSearchTerm={setSearchTerm} />
            <CountryList countries={filteredCountries} />
          </div>
        } />
        <Route path="/details" element={<CountryDetails />} />
        <Route path="/details/:name" element={<CountryDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
