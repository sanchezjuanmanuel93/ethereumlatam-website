import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
import EthToLatam from './sections/EthToLatam'
import Speakers from './sections/Speakers'
import Faqs from './sections/Faqs'
import Where from './sections/Where'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <EthToLatam />
      <Speakers />
      <Where />
      <Faqs/>
    </div>
  )
}

export default App
