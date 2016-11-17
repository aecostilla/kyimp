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
  handleAdd(){
    console.log('Show Modal to add Prayer');
  }
  render() {
    return (
      <AppBar
        title={this.state.title}
        showMenuIconButton={false}
        iconElementRight={<AddPrayer showModal={this.state.showModal} />}
      />
    );
  }
}
