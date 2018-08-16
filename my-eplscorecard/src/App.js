import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Body from './Body/Body';
import PointTable from './Body/PointTable/PointTable';
import MatchHeld from './Body/MatchHeld/MatchHeld';
import axios from 'axios';



class App extends Component {
  state = {
    data: [],
    matchPoints: []
  }

  componentDidMount() {
    axios.get('https://raw.githubusercontent.com/openfootball/football.json/master/2016-17/en.1.json')
      .then(response => {
        this.setState({ data: response.data.rounds })


        let teams = {};
        function Calculation(match) {
          if (match.score1 > match.score2) {
            teams[match.team1.code].win += 1;
            teams[match.team1.code].points += 2;
            teams[match.team1.code].played += 1;
            teams[match.team1.code].gf += match.score1;
            teams[match.team1.code].ga += match.score2;
            teams[match.team2.code].lose += 1;
            teams[match.team2.code].played += 1;
            teams[match.team2.code].gf += match.score2;
            teams[match.team2.code].ga += match.score1;

          } else if (match.score1 < match.score2) {
            teams[match.team2.code].win += 1;
            teams[match.team2.code].points += 2;
            teams[match.team2.code].played += 1;
            teams[match.team2.code].gf += match.score2;
            teams[match.team2.code].ga += match.score1;
            teams[match.team1.code].lose += 1;
            teams[match.team1.code].played += 1;
            teams[match.team1.code].gf += match.score1;
            teams[match.team1.code].ga += match.score2;

          } else {
            teams[match.team1.code].draw += 1;
            teams[match.team1.code].points += 1;
            teams[match.team1.code].played += 1;
            teams[match.team1.code].gf += match.score1;
            teams[match.team1.code].ga += match.score2;
            teams[match.team2.code].draw += 1;
            teams[match.team2.code].points += 1;
            teams[match.team2.code].played += 1;
            teams[match.team2.code].gf += match.score2;
            teams[match.team2.code].ga += match.score1;

          }
        }

        response.data.rounds.forEach((day, i) => {
          day.matches.forEach(match => {
            if (match.team1.code in teams) {
              if (match.team2.code in teams) {
                Calculation(match)
              } else {
                teams[match.team2.code] = {
                  win: 0,
                  lose: 0,
                  draw: 0,
                  points: 0,
                  played: 0,
                  gf: 0,
                  ga: 0,

                }
                Calculation(match);
              }
            } else {
              teams[match.team1.code] = {
                win: 0,
                lose: 0,
                draw: 0,
                points: 0,
                played: 0,
                gf: 0,
                ga: 0,

              }
              if (match.team2.code in teams) {
                Calculation(match);
              } else {
                teams[match.team2.code] = {
                  win: 0,
                  lose: 0,
                  draw: 0,
                  points: 0,
                  played: 0,
                  gf: 0,
                  ga: 0,

                }
                Calculation(match);
              }
            }
          })
        })
        let teamPoints = [];
        for (let team in teams) {
          if (teams.hasOwnProperty(team)) {
            teamPoints.push({ code: team, win: teams[team].win, lose: teams[team].lose, draw: teams[team].draw, points: teams[team].points, played: teams[team].played, gf: teams[team].gf, ga: teams[team].ga })
          }
        }
        this.setState(() => ({
          matchPoints: teamPoints,
        }))
      })
    // .catch((error) => {
    //   console.log('Error ', error);
    // })
  }


  

  render() {
    
    return (
      <BrowserRouter>
        <div >
          <Header />
          <Route path="/" exact component={Body} />
          <Route path="/PointTable" exact render={(props) => <PointTable {...props} matchPoints={this.state.matchPoints} />} />
          <Route path="/MatchHeld" exact render={(props) => <MatchHeld {...props} rounds={this.state.data} />} />
          <Footer />
        </div>
      </BrowserRouter >
    );
  }
}

export default App;
