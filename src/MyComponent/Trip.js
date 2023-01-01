import "./TripStyles.css";
import TripData from "./TripData";
import img1 from "./Images/Trip.jpg";
import img2 from "./Images/Trip1.jpg";
import img3 from "./Images/Trip2.png";

function Trip(){
    return(
        <div className="trip">
            <h1>Recent Trips</h1>
            <p>You can discover unique destinations using Google Maps</p>
            <div className="tripcard">
             <TripData 
             image={img1}
             heading="Trip in Indonesia"
             text="A land gifted with pristine beaches, exotic water villas on serene islands, vibrant tribes and their cultural ethos. No! We are not talking about a fascinating dream but about Indonesian landscapes.There are many surreal places in Indonesia, and together they offer a mix of outlandish island wonders and spine-chilling adventures. Here’s a list of the most beautiful places in Indonesia, covering islands, beaches and lakes for the water babies; national parks for wildlife lovers; active volcano sites for adventurous souls; and places for city explorers."
             />

<TripData 
             image={img2}
             heading="Trip in Malaysia"
             text="The twin skyscraper in Malaysia held the rank of the tallest building in the world from 1998 to 2004 and is currently known as the tallest twin tower in the world. The twin tower KL features diamond – faceted façade containing 83,500 stainless steel extrusions. The towers' interior highlights Malaysia's culture and inspires people through traditional aspects like carvings and fabric."
             />

<TripData 
             image={img3}
             heading="Trip in France"
             text="Paris has always been enveloped by an enchanting aura of romance and vigour and standing in the heart of the city, lies the Eiffel Tower, wrapped in its air of beauty and cultural elegance. Your Paris trip would surely remain incomplete without a visit to the awe-inspiring Eiffel Tower. Built of 18,000 iron parts, the Eiffel Tower is popularly and aptly known as the “Iron Lady”. "
             />
            </div>
        </div>
    )
} 

export default Trip;