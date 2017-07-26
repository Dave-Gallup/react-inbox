import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Message from '../Message/Message.js';
import { fetchMessages } from '../../actions/actions';
import { Route } from 'react-router-dom';

export class Messages extends Component{

  componentDidMount() {
    this.props.fetchMessages();
  }

  render(){
    return (
      <div className="messages-list">
      {this.props.messageList.map(id => <Route path='/' key={id} render={(props) => (
        <Message {...props} key={id} id={id} />
      )}/>)}
      </div>
    );
  }
}

export const mapStateToProps = state => {
  const messageMap = state.messages.messageMap;
  const messageList = state.messages.messageList;
  return {
    messageMap,
    messageList
  }
};

export const mapDispatchToProps = dispatch => bindActionCreators({
  fetchMessages
},
dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Messages);

