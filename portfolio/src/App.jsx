import React from "react";
import Header from './componenets/Header'
import Hero from './componenets/Hero'
import About from './componenets/About'
import Portfolio from './componenets/Portfolio'
import Contact from './componenets/Contact'


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
        </section>

    )
}


export default App;