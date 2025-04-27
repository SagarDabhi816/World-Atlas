import React, { useEffect, useState, useTransition } from "react";
import { getCountryData } from "../Api/PostApi";
import Loader from "../Components/UI/Loader";
import CountryCard from "../Components/Layout/CountryCard";
import SearchFIlter from "../Components/UI/SearchFIlter";

const Country = () => {
  const [isPending, startTransition] = useTransition();
  const [countries, setcountries] = useState([]);

  const [search, setSearch] = useState();
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    startTransition(async () => {
      const res = await getCountryData();
      setcountries(res.data);
    });
  }, []);
  if (isPending) return <Loader />;

  const searchCountry = (country) => {
    if (search) {
      return country.name.common.toLowerCase().includes(search.toLowerCase());
    }
    else{
      return country
    }
  };
  const filterRegion = (country)=>{
    if(filter === "all") return country
    return country.region === filter
  }

  const filterCountries = countries.filter((elem) => searchCountry(elem) && filterRegion(elem));


  return (
    <section className='country-section'>
      <SearchFIlter
        search={search}
        filter={filter}
        setSearch={setSearch}
        setFilter={setFilter}
        countries={countries}
        setcountries={setcountries}
      />
      <ul className='grid grid-four-cols'>
        {filterCountries.map((elem, index) => {
          return <CountryCard country={elem} key={index} />;
        })}
      </ul>
    </section>
  );
};

export default Country;
