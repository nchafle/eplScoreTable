
import React, { Component } from "react";
import homelogo from './homelogo.png';


import { Link } from 'react-router-dom';
import './Body.css';

class Body extends Component {

   
   
    render() {
        return (
            <div className="App-body">
                <div>
                    <img src={homelogo} className="homeimage" alt="homelogo" />
                    {/* <h3><Link to="/"><span className="Link">HOME</span></Link></h3> */}
                    <h3><Link to={{ pathname: "/PointTable" }}><span className="Link">POINTS TABLE</span></Link></h3>
                    <h3><Link to={{ pathname: "/MatchHeld" }}><span className="Link">MATCHES HELD </span></Link> </h3>
                </div>
            </div>

        )
    }
}
export default Body;