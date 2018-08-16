import React, { Component } from "react";
import Auxiliary from '../../Auxiliary';
import './Buttons.css';
import { Link } from 'react-router-dom';
class Buttons extends Component {   
    render() {
        return (
            <Auxiliary>
              
                <Link to={{ pathname: "/" }}><i className="fas fa-home homeButton"></i></Link>
                {
                    this.props.page === 'match_held' ? 
                    <Link to={{ pathname: "/PointTable" }}><i className="fas fa-grip-horizontal otherButton"></i></Link>
                    : <Link to={{ pathname: "/MatchHeld" }}><i class="fas fa-grip-horizontal otherButton"></i></Link>
                }
            </Auxiliary>

        )
    }
}
export default Buttons;