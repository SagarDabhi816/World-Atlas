import React from "react";

const SearchFIlter = ({
  search,
  filter,
  setSearch,
  setFilter,
  countries,
  setcountries,
}) => {
  const handleInputChange = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };
  const handleSelectChange = (e) => {
    e.preventDefault();
    setFilter(e.target.value);
  };
  const handleReset = () => {
    setSearch("");
    setFilter("all");
    sortCountries("asc");
  };
  const sortCountries = (value) => {
    const sortCountry = [...countries].sort((a, b) => {
      return value === "asc"
        ? a.name.common.localeCompare(b.name.common)
        : b.name.common.localeCompare(a.name.common);
    });
    setcountries(sortCountry)
  };

  return (
    <section className='section-searchFilter container'>
      <input
        type='text'
        name=''
        id=''
        value={search}
        onChange={handleInputChange}
        placeholder='Search'
      />

      <div>
        <button
          onClick={() => {
            sortCountries("asc");
          }}
        >
          Asc
        </button>
      </div>
      <div>
        <button
          onClick={() => {
            sortCountries("dec");
          }}
        >
          Dec
        </button>
      </div>
      <div>
        <select
          className='select-section'
          value={filter}
          onChange={handleSelectChange}
        >
          <option value='all'>All</option>
          <option value='Africa'>Africa</option>
          <option value='America'>America</option>
          <option value='Asia'>Asia</option>
          <option value='Europe'>Europe</option>
          <option value='Ocenia'>Ocenia </option>
        </select>
      </div>
      <button onClick={() => handleReset()}>Clear All</button>
    </section>
  );
};

export default SearchFIlter;
