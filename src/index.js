import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { IntlProvider } from 'react-intl'
import { addLocaleData } from 'react-intl'
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App'
import reportWebVitals from './reportWebVitals'

import messages_en from './translations/en.json'
import messages_es from './translations/es.json'
import messages_pt from './translations/pt.json'

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

ReactDOM.render(
  <Router>
    <IntlProvider
      locale={locale || defaultLanguage}
      messages={messages[locale || defaultLanguage]}
    >
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </IntlProvider>
  </Router>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
