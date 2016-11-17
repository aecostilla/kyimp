import React, {Component} from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Paper from 'material-ui/Paper';
import Firebase from 'firebase';
import fbconfig from './../../server/fbconfig';

export default class PrayerCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.id,
      title: props.title,
      author: props.author,
      message: props.message,
      count: Number(props.count),
      hover: 2
    };
  }
  prayed(){
    let add = Number(this.state.count) + 1; // Temp before DB
    Firebase.database().ref(`id/${this.state.id}`).set({ 
      id: this.props.id,
      title: this.state.title,
      author: this.state.author,
      message: this.state.message,
      count: add
    }).then((data) => {
      console.log('data add count', data, add);
      this.setState({ count: add });
    });
  }
  mouseOverHover(){
    this.setState({ hover: 5 })
  }
  mouseExitHover(){
    this.setState({ hover: 2 })
  }
  render() {
    return (
      <Paper
        zDepth={this.state.hover}
        style={{ marginTop: '2%' }}
        >
        <Card 
          onMouseEnter={e => this.mouseOverHover(e)}
          onMouseLeave={e => this.mouseExitHover(e)}
          >
        <CardHeader
          title={this.state.title}
          subtitle={this.state.author}
        />
        <CardText>
          <p>{this.state.message}</p>
          <p style={{ float: 'right' }}><strong>Prayers: {this.state.count} </strong> </p>
        </CardText>
        <CardActions>
          <FlatButton label="Prayed" onTouchTap={e => this.prayed(e)}/>
        </CardActions>
      </Card>
    </Paper>
    );
  }
}

  