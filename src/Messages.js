import React, { Component } from 'react';
import './index.css';
import Message from './Message.js'

class Messages extends Component{

  render(){
    return (
      <div className="messages-list">
        {this.props.messages.map((el) => <Message subject={el.subject} labels={el.labels} starred={el.starred} read={el.read}/>)}
      </div>
    )
  }
}


export default Messages;