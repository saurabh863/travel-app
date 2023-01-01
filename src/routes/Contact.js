import Navbar from "../MyComponent/Navbar";
import Hero from "../MyComponent/Hero";
import Footer from "../MyComponent/Footer";
import ContactForm from "../MyComponent/ContactForm";
function Contact(){
    return(
        <>
           <Navbar />
    <Hero cName="hero-mid"
    heroImg="https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
    title="Contact"
    
    />
    <ContactForm />
    <Footer />
        </>
    )
    
    
    }
    
    export default Contact;