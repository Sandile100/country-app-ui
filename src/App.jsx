import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import CountryList from './components/CountryList'
import SearchBar from "./components/SearchBar"

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
    <div className="app">
      <SearchBar setSearchTerm={setSearchTerm}/>
      <CountryList countries = {filteredCountries}/>
    </div>
    );
      
}

export default App;
