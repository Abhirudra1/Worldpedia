import { useEffect, useState, useTransition } from "react"
import { getCountryData } from "../api/postApi";
import Loader from "../components/UI/Loader";
import CountryCard from "../components/Layout/CountryCard";
import SearchFilter from "../components/UI/SearchFilter";

export default function Country() {
  const [isPending, startTransition] = useTransition()
  const [countries, setCountries] = useState([]);

  const [search, setSearch] = useState();
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    startTransition(async () => {
      const res = await getCountryData()
      setCountries(res.data)
    });
  }, []);

  if(isPending) return <Loader />

  // console.log(search, filter)

  const searchCountry = (country) => {
    if(search){
      return country.name.common.toLowerCase().includes(search.toLowerCase())
    }
    return country;
  }

  const filterRegion = (country) =>{
    if(filter === "all") return country;
    return country.region === filter;
  }

  const filteredCountries = countries.filter((country) => searchCountry(country) && filterRegion(country));

  return (
    <section className="country-section container ">

      <SearchFilter 
       search={search} 
       setSearch={setSearch}
       filter={filter}
       setFilter={setFilter}
       countries={countries}
       setCountries={setCountries} />

      <ul className="grid grid-four-cols">
        {filteredCountries.map((curcountry, index) => {
          return <CountryCard country={curcountry} key={index} /> 
        })}
      </ul>
    </section>
  )
}
