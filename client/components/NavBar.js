import React, {Component} from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import AppBar from 'material-ui/AppBar';
import ContentAdd from 'material-ui/svg-icons/content/add';
import AddPrayer from './addPrayerDialog';


export default class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.title,
      showModal: false
    };
  }
  render() {
    const style = {
      position: 'fixed',
      top: 0,
      left: 0,
      zIndex: 100,
      width: '100%',
      height: '10%',
      paddingRight: 30,
    }
    return (
      <AppBar
        style={style}
        title={this.state.title}
        showMenuIconButton={false}
        iconElementRight={<AddPrayer showModal={this.state.showModal} />}
      />
    );
  }
}
