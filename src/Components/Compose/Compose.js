import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addMessage } from '../../actions/actions';

class Compose extends Component{

  constructor(props){
    super(props);

    this.onSendSubmit = this.onSendSubmit.bind(this);
  }

  onSendSubmit(e){
    e.preventDefault();
    var subject = document.getElementById('subject').value;
    var body = document.getElementById('body').value;
    // var subject = e.target.subject;
    // var body = e.target.body;
    console.log(`Subject: ${subject}`);
    window.location.href='http://localhost:3000/';
    this.props.addMessage(subject, body);
  }

  render(){
    return (
      <form className="form-horizontal well" onSubmit={this.onSendSubmit}>
        <div className="form-group">
          <div className="col-sm-8 col-sm-offset-2">
            <h4>Compose Message</h4>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="subject" className="col-sm-2 control-label">Subject</label>
          <div className="col-sm-8">
            <input type="text" className="form-control" id="subject" placeholder="Enter a subject" name="subject" />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="body" className="col-sm-2 control-label">Body</label>
          <div className="col-sm-8">
            <textarea name="body" id="body" className="form-control"></textarea>
          </div>
        </div>
        <div className="form-group">
          <div className="col-sm-8 col-sm-offset-2">
            <input type="submit" value="Send" className="btn btn-primary" />
          </div>
        </div>
      </form>
    );

  }

  // constructor(props){
  //   super(props);
  //
  //   this.onSendClick = this.onSendClick.bind(this);
  // }
  //
  // onSendClick(e){
  //   e.preventDefault();
  //   var subject = document.getElementById('subject').value;
  //   var body = document.getElementById('body').value;
  //   this.props.updateSendMessage(subject, body);
  // }
}


const mapStateToProps = (state) => {

  const body = 5;

  return {
    body
  }
};
const mapDispatchToProps = dispatch => bindActionCreators({
  addMessage
},
dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Compose);









