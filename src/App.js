import React from 'react'
import NavigationSection from "./Navigation/NavigationSection"
import MastHeader from "./MastHeader/MastHeader"
import PortfolioSection from "./PortfolioSection/PortfolioSection"
import AboutSection from "./AboutSection/AboutSection"
import Contact from "./Contact"
import Footer from "./Footer"

const App = () => {
    return (
        <div>
            <NavigationSection />
            <MastHeader />
            <PortfolioSection />
            <AboutSection />
            <Contact />
            <Footer />
        </div>
    )
}

export default App;