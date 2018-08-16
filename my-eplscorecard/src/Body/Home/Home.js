import React, { Component } from "react";
import homelogo from './homelogo.png';


class Home extends Component {
    render() {
        return (
            <div>
                   <img src={homelogo} className="homeimage" alt="homelogo" /> 
             </div>
        )
    }


}
export default Home;