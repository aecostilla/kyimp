import React, {Component}from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import Firebase from 'firebase';

export default class AddPrayer extends Component {
  constructor(props) {
    super(props);
      this.state = {
        open: this.props.showModal,
        id: Math.floor(Math.random()*10000),
        title: '',
        author: '',
        message: ''
    };
  };

  handleOpen(){
    this.setState({open: true});
  };

  handleClose(){
    this.setState({open: false});
  };
  handleSubmit(){
    let submit = {
      id: this.state.id,
      title: this.state.title,
      author: this.state.author,
      message: this.state.message,
      count: 0
    };
    Firebase.database().ref(`id/${this.state.id}`).set(submit);
    this.setState({
      open: false,
    });
  };
  handleTitleChange(e){
    this.setState({ title: e.currentTarget.value })
  };
  handleAuthorChange(e){
    this.setState({ author: e.currentTarget.value })
  };
  handlePrayerChange(e){
    this.setState({ message: e.currentTarget.value })
  };
  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={e => this.handleClose(e)}
      />,
      <FlatButton
        label="Submit"
        keyboardFocused={true}
        onTouchTap={e => this.handleSubmit(e)}
      />,
    ];

    return (
      <div>
        <RaisedButton
          label="Add Prayer"
          onTouchTap={e => this.handleOpen(e)}
          style={{ marginTop: '5%' }}
        />
        <Dialog
          title="Add a Prayer"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={e => this.handleClose(e)}
        >
        <p>Enter a small prayer and people will let you know that you are in their prayers by pressing the "Prayed" Button.</p>
        <TextField
          hintText="ex. Please Pray for John Smith"
          floatingLabelText="Enter a short title for your Prayer"
          floatingLabelFixed={true}
          onChange={e => this.handleTitleChange(e)}
        /><br />
        <TextField
          hintText="ex. John Smith"
          floatingLabelText="Enter your name"
          floatingLabelFixed={true}
          onChange={e => this.handleAuthorChange(e)}
        /><br />
        <TextField
          floatingLabelText="Enter your prayers here"
          multiLine={true}
          rows={2}
          onChange={e => this.handlePrayerChange(e)}
        />
        </Dialog>
      </div>
    );
  }
}