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
            <Hero heroText="BOGOTA" heroSubText=">> COLOMBIA" heroImg={require("../assets/carousel-bog.png")} />
            <EthToLatam typePassed="Bogota" />
            <Venue/>
            <Faqs/>
            <Footer />
        </div>
    )
}

export default Index;