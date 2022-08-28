import Navbar from "../sections/Navbar";
import Hero from '../sections/Hero'
import EthToLatam from '../sections/EthToLatam'
import Speakers from '../sections/Speakers'
import Sponsors from '../sections/Sponsors'
import Schedule from '../sections/Schedule'
import MediaPartners from '../sections/MediaPartners'
import Faqs from '../sections/Faqs'
import TheOtherSide from '../sections/TheOtherSide'
import Venue from '../sections/Venue'
import Footer from '../sections/Footer'

function BuenosAires () {
  localStorage.setItem('edition', 'buenos-aires')
    return (
        <div className="App">
            <Navbar />
            <Hero heroText="BUENOS AIRES" heroSubText=">> ARGENTINA" heroImg={require("../assets/carousel-ba.png")} />
            <EthToLatam typePassed="BuenosAires" />
            <Speakers />
            <Sponsors />
            <MediaPartners/>
            <Venue />
            <Schedule />
            <TheOtherSide />
            <Faqs/>
            <Footer />
        </div>
    )
}

export default BuenosAires;