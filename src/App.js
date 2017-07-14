import React, { Component } from 'react';
import allMessages from './seeds.json';
import Messages from './Components/Messages.js'
import Toolbar from './Components/Toolbar.js'


class App extends Component {

  constructor(props){
    super(props);

    this.state        = this.formatState(allMessages);
    this.updateState  = this.updateState.bind(this);
    this.updateLabels = this.updateLabels.bind(this);
  }

  formatState(json){
    var state = { messageList: [], messages: {} };
    json.forEach(msg => {
      state.messageList.push(msg.id);
      state.messages[msg.id] = msg;
    });
    return state;
  }

  getTotalUnread(){
    var total = 0;

    for(let key of this.state.messageList){
      if(!this.state.messages[key].read){
        total++;
      }
    }
    return total;
  }

  getSelectedStatus(){
    var total = 0;
    for(let key of this.state.messageList){
      if(!this.state.messages[key].selected){
        total++;
      }
    }
    if(total === 0){
      return 'none';
    }
    if(total === Object.keys(this.state.messageList).length){
      return 'all';
    }
    return 'some';
  }

  updateLabels(label, adding){

    this.setState( (prevState) => {
      var ids = this.getIdArray();
      var newMessages = {...this.state.messages};

      for(let id of ids){
        let message = prevState.messages[id];
        let modified = {labels: [...message.labels]};
        // if adding label
        if(adding){
          if(!message.labels.includes(label)){
            modified.labels.push(label);
          }
        }
        // if removing label
        else{
          let index = message.labels.indexOf(label);
          if(index >= 0){
            modified.labels.splice(index,1);
          }
        }
        newMessages[id] = Object.assign({}, message, modified);
      }
      return {messages: newMessages};
    });
  }


  updateState(change, id){ //ONE FUNCTION TO RULE THEM MOSTLY

    this.setState(prevState => {

      var ids = this.getIdArray(id);
      var newMessages = {...this.state.messages};
      var newMessageList = [...this.state.messageList];

      for(let id of ids){
        if(change !== null){
          let message = prevState.messages[id];
          let newMessage = {};
          newMessages[id] = Object.assign(newMessage, message, change);
        }
        else{ //change === null
          newMessageList.splice(newMessageList.indexOf(id), 1);
        }
      }
      if(change === null){

        return {messageList: newMessageList}
      }
      return {messages: newMessages};

    });
  }



  getIdArray(id){
    var ids = [];
    if(id){
      if(id < 0){
        ids = [...this.state.messageList];
      }
      else{
        ids.push(id);
      }
    }
    else{
      for(let key of this.state.messageList){
        if(this.state.messages[key].selected){
          ids.push(key);
        }
      }
    }
    return ids;
  }



    render() {
      return (
        <div className="row">
          <div className="col-md-8 col-md-offset-2">
            <div className="App">
              <div className="Toolbar text-left">
                <Toolbar numRead={this.getTotalUnread()}  selectedStatus={this.getSelectedStatus()} updateState={this.updateState}
                updateLabels={this.updateLabels}/>
              </div>
              <div className="list">
                <Messages appState={this.state} updateState={this.updateState}/>
              </div>
            </div>
          </div>
        </div>
      );
  }
}

export default App;
