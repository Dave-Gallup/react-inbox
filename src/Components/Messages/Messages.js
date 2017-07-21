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
    console.log(this.props.messages);
    return (
      <div className="messages-list">
        <Message />
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
  const messages = state.messages;
  return {
    messages
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

