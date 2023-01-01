import Navbar from "../MyComponent/Navbar";
import Hero from "../MyComponent/Hero";
import Destination from "../MyComponent/Destination";
import Trip from "../MyComponent/Trip";
import Footer from "../MyComponent/Footer";

function Home(){
return(
    <>
    <Navbar />
    <Hero cName="hero"
    heroImg="https://images.unsplash.com/photo-1614531341773-3bff8b7cb3fc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80"
    title="Your journey Your Story"
    text="Choose your Favourite Destination"
    buttonText="Travel Plan"
    url="/"
    btnClass="show"
    />
    <Destination />
    <Trip />
    <Footer />
    </>
)


}

export default Home;