import Navbar from "../sections/Navbar";
import Hero from '../sections/Hero'
import EthToLatam from '../sections/EthToLatam'
import Faqs from '../sections/Faqs'
import TheOtherSide from '../sections/TheOtherSide'
import Venue from '../sections/Venue'
import Footer from '../sections/Footer'

function Bogota () {
    return (
        <>
            <Navbar />
            <Hero heroText="BOGOTA" heroSubText=">> COLOMBIA" />
            <EthToLatam />
            <Venue />
            <TheOtherSide />
            <Faqs/>
            <Footer />
        </>
    )
}

export default Bogota