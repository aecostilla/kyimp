import React, {Component} from 'react';
import Firebase from 'firebase';
import fbconfig from './../../server/fbconfig';
import NavBar from './NavBar';
import PrayerCard from './PrayerCard';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {blue100, blue500, blue700} from 'material-ui/styles/colors';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      prayers: false,
    };
  }
  componentWillMount() {
    Firebase.database()
      .ref('id')
      .on('value', (data) => {
        this.setState({ prayers: data.val() 
      });
    })
  }
  renderPrayerCard(){
    let cards = [];
    for(var key in this.state.prayers){
      cards.push(
        <PrayerCard
          key={this.state.prayers[key].id} 
          id={this.state.prayers[key].id}
          title={this.state.prayers[key].title}
          author={this.state.prayers[key].author}
          message={this.state.prayers[key].message}
          count={this.state.prayers[key].count}
        />
      )
    }
    return cards
  }
  render(){
    const muiTheme = getMuiTheme({
      palette: {
        primary1Color: blue500,
        primary2Color: blue700,
        primary3Color: blue100,
      },
    });
    return (
        <MuiThemeProvider muiTheme={muiTheme}>
          <div>
            <NavBar title="Keep Me in your Prayers"/>
            <div className="PrayerCards" style={{ marginTop: '7%' }}>
              { this.state.prayers ? this.renderPrayerCard() : null }
            </div>
          </div>
        </MuiThemeProvider>
    );
  }
}

