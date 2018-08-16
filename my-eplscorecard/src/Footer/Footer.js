import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
    render() {
        return (
           
                <div className="Box row ">
                    <h2 className="col-sm-6"> ABOUT </h2>
                    <h2 className="col-sm-6">SOCIAL</h2>
                <h4 className ="col-sm-6">We bring you the complete stats of 2016 to 2017 EPL seasons</h4>
                <h4 className="col-sm-2"><a href="https://www.facebook.com/"><i className="fab fa-facebook-f Icon"></i></a></h4>
                <h4 className="col-sm-2"><a href="https://www.twitter.com/"><i className="fab fa-twitter Icon"></i></a></h4>
                <h4 className="col-sm-2"><a href="https://www.premierleague.com/"><i className="fas fa-paw Icon"></i></a></h4>
                </div>
        
        )
    }
}
export default Footer;