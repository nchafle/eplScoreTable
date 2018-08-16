import React, { Component } from 'react';
import './MatchHeld.css';
import Buttons from '../Buttons/Buttons'


class MatchHeld extends Component {
    render() {
        return (
            <div className="container">
                <div className="MatchName"> {this.props.name} </div>
                <div className="TotalMatch">Number of MatchDays : 38</div>
                <div className="container">
                    <div className="row">
                        {
                            this.props.rounds.map(
                                round => <div className=" col-md-12 Matchday">{round.name}
                                    {round.matches.map((match, value) => <div className="row" key={value.date}>
                                        <div className="col-md-4 Team">{match.team1.code}</div>
                                        <div className="col-sm-2 Score">{match.score1}<span> </span>{match.score2}</div>
                                        <div className="col-md-4 Team">{match.team2.code}</div>
                                    </div>
                                    )}
                                </div>
                            )}
                    </div>
                </div>
                <Buttons page="match_held" />
            </div>
        )
    }
}
export default MatchHeld;

//    <div className="col-md-4 Team">{match.team2.name}</div>