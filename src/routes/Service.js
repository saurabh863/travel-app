import Navbar from "../MyComponent/Navbar";
import Hero from "../MyComponent/Hero";
import Footer from "../MyComponent/Footer";
import Trip from "../MyComponent/Trip";
function Service(){
    return(
        <>
           <Navbar />
    <Hero cName="hero-mid"
    heroImg="https://images.unsplash.com/photo-1661956602153-23384936a1d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
    title="Service"
    
    />
    <Trip />
    <Footer />
        </>
    )
    
    
    }
    
    export default Service;