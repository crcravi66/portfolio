import React from "react";
import Header from './componenets/Header'
import Hero from './componenets/Hero'
import About from './componenets/About'
import Portfolio from './componenets/Portfolio'
import Contact from './componenets/Contact'
import Footer from "./componenets/Footer";
// import './assets/js/main'

const App = () => {

    return (
        <section>
            <Header />
            <Hero />
            <About />
            <div >
                <Portfolio />
                <Contact />
            </div>
            <Footer />
        </section>

    )
}


export default App;