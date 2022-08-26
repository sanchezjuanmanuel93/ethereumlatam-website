import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import { IntlProvider } from 'react-intl'
import { addLocaleData } from 'react-intl'

import messages_en from './translations/en.json'
import messages_es from './translations/es.json'
import messages_pt from './translations/pt.json'
import Index from "./pages/Index";
import Bogota from './pages/Bogota';
import BuenosAires from './pages/BuenosAires';

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



function App() {
  return (
    <div className="App">
      <Router>
        <IntlProvider
        locale={locale || defaultLanguage}
        messages={messages[locale || defaultLanguage]}
        >
          <Routes>
            <Route path='/' exact element={<Index />} />
            <Route path='/bogota' exact element={<Bogota />} />
            <Route path='/buenos-aires' exact element={<BuenosAires />} />
          </Routes>
        </IntlProvider>
      </Router>
    </div>
  )
}

export default App;
