import AboutUs from "../MyComponent/AboutUs";
import Footer from "../MyComponent/Footer";
import Hero from "../MyComponent/Hero";
import Navbar from "../MyComponent/Navbar";

function About(){
    return(
        <>
        <Navbar />
    <Hero cName="hero-mid"
    heroImg="https://images.unsplash.com/photo-1599939571322-792a326991f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1452&q=80"
    title="About"
    
    />
    <AboutUs />
    <Footer/>
        </>
    )
    
    
    }
    
    export default About;