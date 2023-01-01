import { Component } from "react";
import "./DestinationStyles.css"

class DestinationData extends Component{
    render(){
        return(
            <div className="first-des">
            <div className="desc-text">
                <h2>
                    {this.props.heading}
                </h2>
                <p>
                {this.props.text}
                </p>
            </div>
            <div className="image">
            <img alt="" src="https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80" />
            <img alt="" src="https://images.unsplash.com/photo-1502082553048-f009c37129b9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fG5hdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" />
            </div>
           
        </div>
        )
    }
}

export default DestinationData;