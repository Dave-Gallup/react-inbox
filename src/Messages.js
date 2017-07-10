import React, { Component } from 'react';
import Message from './Message.js'

class Messages extends Component{

  render(){
    return (
      <div className="messages-list">
        {this.props.messages.map((el) => <Message subject={el.subject} labels={el.labels} starred={el.starred} read={el.read} selected={el.selected} key={el.id}/>)}
      </div>
    )
  }
}


export default Messages;