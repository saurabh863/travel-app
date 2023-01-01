import React from "react";
import DestinationData from "./DestinationData";
import "./DestinationStyles.css"

const Destination = ()=>{
    return(
     <div className="destination">
        <h1>Popular Destinations</h1>
        <p>Tours give you the opportunity to see a lot within a time frame</p>

        <DestinationData heading="Taal Volcano, Batangas"
        text=" Taal Volcano (IPA: [taʔal]; Tagalog: Bulkang Taal) is a large caldera filled by Taal Lake in the Philippines.[1] Located in the province of Batangas, the volcano is second of the most active volcanoes in the country, with 38 recorded historical eruptions, all of which were concentrated on Volcano Island, near the middle of Taal Lake.[3] The caldera was formed by prehistoric eruptions between 140,000 and 5,380 BP.[4][5]"
        />
           <DestinationData heading="MT. DAGULDUL"

        text=" A nice trek in southern Batangas is the coastal mountain of San Juan, Mt. Daguldul. The name ‘Daguldul’ or ‘Daguldol’ has been used since olden days. It has an onomatopoeic feeling – that of suspense and grandness. Maybe it describes the grandeur of the range and the abrupt rolling of its slopes.Actually a small mountain range, Mt. Daguldul has several ‘gems’ to offer."
        />
        
     </div>
    )
    }

    export default Destination;