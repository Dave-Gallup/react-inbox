import React, { Component } from 'react';
import Message from './Message.js'

class Messages extends Component{


  generateMessages(){

    var messages = [];

    for(let key in this.props.messages){

      messages.push(
        <Message
        updateState={this.props.updateState}
        subject={this.props.messages[key].subject} labels={this.props.messages[key].labels} starred={this.props.messages[key].starred} read={this.props.messages[key].read} selected={this.props.messages[key].selected} id={this.props.messages[key].id}
        key={this.props.messages[key].id}/>
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