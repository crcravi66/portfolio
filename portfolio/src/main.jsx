import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './componenets/Header'
import Hero from './componenets/Hero'
import About from './componenets/About'
import Portfolio from './componenets/Portfolio'
import Contact from './componenets/Contact'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <Hero />
    <About />
    <Portfolio />
    <Contact />
  </React.StrictMode>,
)
