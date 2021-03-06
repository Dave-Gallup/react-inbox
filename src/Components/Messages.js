import React, { Component } from 'react';
import Message from './Message.js'

class Messages extends Component{


  generateMessages(){

    var messages = [];

    for(let key of this.props.appState.messageList){
      messages.push(
        <Message
        updateState={this.props.updateState}
        subject={this.props.appState.messages[key].subject} labels={this.props.appState.messages[key].labels} starred={this.props.appState.messages[key].starred} read={this.props.appState.messages[key].read} selected={this.props.appState.messages[key].selected} id={this.props.appState.messages[key].id}
        key={this.props.appState.messages[key].id}/>
      );
    }
    return messages;
  }

  render(){
    return (
      <div className="messages-list">
        {this.generateMessages()}
      </div>
    );
  }
}


export default Messages;