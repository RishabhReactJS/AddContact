import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import {
  addContactCall
} from '../../modules/contact';
import '../../index.css';

class DialogBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };

    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }



  handleOpen() {
    this.setState({ open: true });
  };

  handleClose() {
    this.setState({ open: false });
  };

  handleSubmit() {
    const name = this.refs.Cname.value;
    const contact = this.refs.Pnumber.value;
    this.setState({ open: false });
    this.props.addContactCall(name, contact);
  }

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={this.handleClose}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        keyboardFocused={true}
        onClick={this.handleSubmit}
      />,
    ];

    return (
      <div>
        <RaisedButton label="Dialog" onClick={this.handleOpen} />
        <Dialog
          title="New Contact"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          <label>
            Name
            </label>
          <input ref="Cname" className="name" type='Text' />
          <label>
            Phone number
            </label>
          <input ref="Pnumber" className="number" type="number" />

        </Dialog>
      </div>
    );
  }
}

// function mapDispatchToProps(dispatch){
//     bindActionCreators(
//       {addContactCall}, 
//     dispatch);
// }

const mapStateToProps = state => ({
  contact: state.contact,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      addContactCall,
    },
    dispatch
  );


export default connect(mapStateToProps, mapDispatchToProps)(DialogBox);
