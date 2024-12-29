
import countryFacts from '../api/countryData.json'
export default function About() {
  return (
    <section className="section-about container">
      <h2 className="container-title">
        Here are the Intersting Facts<br />
        We&apos;re proud of 
      </h2>

      <div className="gradient-cards">
        {countryFacts.map((country, index) => (
          <div key={index} className="card">
            <div className="container-card bg-blue-box">
              <p className="card-title">{country.countryName}</p>
              <p>
                <span className="card-description">Capital:</span>
                {country.capital}
              </p>
              <p>
                <span className="card-description">Population:</span>
                {country.population}
              </p>
              <p>
                <span className="card-description">Interesting Facts:</span>
                {country.interestingFact}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
