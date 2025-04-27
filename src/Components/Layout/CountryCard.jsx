import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const CountryCard = ({ country, index }) => {
  const { flags, name, population, region, capital } = country;
  return (
    <li className='country-card card' key={index}>
      <div className='container-card card bg-white-box'>
        <img src={flags.svg} alt={flags.alt} />

        <div className='countryInfo'>
          <p className='card-title'>{name.common.length > 10 ? name.common.slice(0,10)+"..." : name.common}</p>
          <p className='card-description'>
            Population : {population.toLocaleString()}
          </p>
          <p>
            <span className='card-description'>Region : {region}</span>
          </p>
          <p>
            <span className='card-description'>Capital : {capital[0]}</span>
          </p>
         <NavLink to={`/country/${name.common}`}>
         <button>Read More <FaLongArrowAltRight/></button>
         </NavLink>
        </div>
      </div>
    </li>
  );
};

export default CountryCard;
