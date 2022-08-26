import Navbar from "../sections/Navbar";
import Hero from '../sections/Hero'
import EthToLatam from '../sections/EthToLatam'
import Faqs from '../sections/Faqs'
import TheOtherSide from '../sections/TheOtherSide'
import Venue from '../sections/Venue'
import Footer from '../sections/Footer'

function Index () {
    return (
        <div className="App">
            <Navbar />
            <Hero heroText="BOGOTA" heroSubText=">> COLOMBIA" heroMonth="October" heroDate="12" heroYear="2022" heroLink="https://www.google.com" />
            <EthToLatam />
            <Venue venueTitle="Agora" venueAddress="New address in Bogota" />
            <TheOtherSide />
            <Faqs/>
            <Footer />
        </div>
    )
}

export default Index;