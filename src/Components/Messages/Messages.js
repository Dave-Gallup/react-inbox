import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Message from '../Message/Message.js';
import { fetchMessages } from '../../actions/actions';

class Messages extends Component{

  componentDidMount() {
    this.props.fetchMessages();
  }

  render(){
    return (
      <div className="messages-list">
        {this.props.messageList.map(msg => <Message key={msg} id={msg}/>)}
      </div>
    );
  }
  // render(){
  //   return (
  //     <div className="messages-list">
  //       {this.generateMessages()}
  //     </div>
  //   );
  // }

  // generateMessages(){
  //
  //   var messages = [];
  //
  //   for(let key of this.props.appState.messageList){
  //     messages.push(
  //       <Message
  //       updateState={this.props.updateState}
  //       subject={this.props.appState.messages[key].subject} labels={this.props.appState.messages[key].labels} starred={this.props.appState.messages[key].starred} read={this.props.appState.messages[key].read} selected={this.props.appState.messages[key].selected} id={this.props.appState.messages[key].id}
  //       key={this.props.appState.messages[key].id}/>
  //     );
  //   }
  //   return messages;
  // }

}

const mapStateToProps = state => {
  const messageMap = state.messages.messageMap;
  const messageList = state.messages.messageList;
  return {
    messageMap,
    messageList
  }
};

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchMessages
},
dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Messages);

