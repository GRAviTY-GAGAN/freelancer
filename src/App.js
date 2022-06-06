import React from "react";

import Navbar from "./Navbar";
import Header from "./Header";
import Portfolio from "./Portfolio";
import AboutSection from "./AboutSection";
import ContactSection from "./ContactSection"
import Footer from "./Footer";
import Copyright from "./Copyright";

const App = () => (
    <div>
        <Navbar />
        <Header />
        <Portfolio />
        <AboutSection />
        <ContactSection />
        <Footer />
        <Copyright />
    </div>
)

export default App;