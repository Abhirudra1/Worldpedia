import { FaLongArrowAltRight } from "react-icons/fa";

export default function Home() {
  return (
    <main className="hero-section main">
      <div className="container grid grid-two-cols">
        <div className="hero-content">
          <h1 className="heading-xl">Welcome to the World of Countries</h1>
          <p className="paragraph">This is a simple web application that displays information about countries. You can search for a country, view details about a country, and compare countries. Click on the countries link in the navigation bar to get started.</p>
          <button className="btn btn-darken btn-inline bg-white-box">
            Start Exploring <FaLongArrowAltRight />
          </button>
        </div>
        <div className="hero-image">
          <img src="/images/hero-image.png" alt="Hero" style={{"width":"50rem", "height":"50rem"}}/>
        </div>
      </div>
    </main>
  )
}
