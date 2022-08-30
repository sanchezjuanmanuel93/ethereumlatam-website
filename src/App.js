import React from 'react'
import { Routes, Route } from "react-router-dom";
import { IntlProvider } from 'react-intl'
import { addLocaleData } from 'react-intl'

import messages_en from './translations/en.json'
import messages_es from './translations/es.json'
import messages_pt from './translations/pt.json'
import Bogota from './pages/Bogota'
import BuenosAires from './pages/BuenosAires'

const messages = {
  es: messages_es,
  en: messages_en,
  pt: messages_pt,
}

let defaultLanguage = 'en'
const locale =
  typeof window.localStorage !== 'undefined'
    ? localStorage.getItem('locale')
    : 'en'

let defaultEdition = 'bogota'
localStorage.setItem('edition', 'bogota')
const edition =
  typeof window.localStorage !== 'undefined'
    ? localStorage.getItem('edition')
    : 'bogota'

function App() {
  return (
    <div className="App">
      <IntlProvider
        locale={locale || defaultLanguage}
        messages={messages[locale || defaultLanguage]}
      >
      <Routes>
        <Route path="/" element={<Bogota />} />
        <Route path="/buenos-aires" element={<BuenosAires />}
      </Routes>
      </IntlProvider>
    </div>
  )
}

export default App
