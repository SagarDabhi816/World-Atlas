import React from 'react'
import CountryData from "../Api/CountryData.json"

const About = () => {
  return (
    <section className='section-about container'>
      <h2 className='container-title'>
        Here are intresting facts <br/>We are proud of
      </h2>
      <div className='gradient-cards'>
      {CountryData.map((elem)=>{
        const { id,countryName,capital,population,interestingFact } = elem
       return <div className='card' key={id}>
          <div className='container-card bg-blue-box'>
            <p className='card-title'>
              {countryName}
            </p>
            <p>
              <span className='card-description'>
                Capital :
              </span> {capital}
            </p>
            <p>
              <span className='card-description'>
                Population :
              </span> {population} 
            </p>
            <p>
              <span className='card-description'>
                Interesting Fact :
              </span> {interestingFact}
            </p>
          </div>
        </div>
      })}
        
      </div>
    </section>
  )
}

export default About