
import React, { Component } from 'react';
import Buttons from '../Buttons/Buttons'
import './PointTable.css';
class PointTable extends Component {
    render() {
        this.props.matchPoints.sort(function (a, b) {
            return b.points - a.points
        })
        return (

            <div className="container">
                <div className="PointTable"> Point Table 2016 -17 </div>
                <div className="row">
                    <div className="col-sm-1 Title"> Rank</div>
                    <div className="col-sm-2 Title"> Team </div>
                    <div className="col-sm-1 Title"> Played</div>
                    <div className="col-sm-1 Title"> Won</div>
                    <div className="col-sm-1 Title"> Lost</div>
                    <div className="col-sm-1 Title"> Draw</div>
                    <div className="col-sm-1 Title"> GF</div>
                    <div className="col-sm-1 Title"> GA</div>
                    {/* <div className="col-sm-1 Title"> GD</div> */}
                    <div className="col-sm-2 Title"> Points</div>

                </div>
                <div >
                    {this.props.matchPoints.map((value, index) =>
                        <div className="Data row" key={index}>
                            <div className="col-sm-1 Data">{index + 1}</div>
                            <div className="col-sm-2 Data">{value.code.toUpperCase()}</div>
                            <div className="col-sm-1 Data">{value.played}</div>
                            <div className="col-sm-1 Data">{value.win}</div>
                            <div className="col-sm-1 Data">{value.lose}</div>
                            <div className="col-sm-1 Data">{value.draw}</div>
                            <div className="col-sm-1 Data">{value.gf}</div>
                            <div className="col-sm-1 Data">{value.ga}</div>
                            <div className="col-sm-2 Data">{value.points}</div>
                        </div>
                    )}
                </div>
                <Buttons page="points_table" />
            </div>
        )
    }
}
export default PointTable;



