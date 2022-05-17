import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
import EthToLatam from './sections/EthToLatam'
import Speakers from './sections/Speakers'
import Sponsors from './sections/Sponsors'
import Faqs from './sections/Faqs'
import Venue from './sections/Venue'
import Footer from './sections/Footer'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <EthToLatam />
      <Speakers />
      <Sponsors />
      <Venue />
      <Faqs/>
      <Footer />
    </div>
  )
}

export default App
