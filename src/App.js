import React, { Component } from 'react';
import allMessages from './seeds.json';
import Messages from './Components/Messages.js'
import Toolbar from './Components/Toolbar.js'


class App extends Component {

  constructor(props){
    super(props);

    this.state       = this.formatState(allMessages);
    this.updateState = this.updateState.bind(this);
    this.updateLabels = this.updateLabels.bind(this);
  }

  formatState(json){
    var state = {};
    json.forEach(msg => state[msg.id] = msg);
    return state;
  }

  getTotalUnread(){
    var total = 0;

    for(let key in this.state){
      if(!this.state[key].read){
        total++;
      }
    }
    return total;
  }

  getSelectedStatus(){
    var total = 0;
    for(let key in this.state){
      if(!this.state[key].selected){
        total++;
      }
    }
    if(total === 0){
      return 'none';
    }
    if(total === Object.keys(this.state).length){
      return 'all';
    }
    return 'some';
  }

  updateLabels(label, adding){
    var ids = this.getIdArray();
    var newState = {};

    for(let id of ids){
      let message = this.state[id];
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
      newState[id] = Object.assign({}, message, modified);
    }
    this.setState(newState);
  }


  updateState(change, id){ //ONE FUNCTION TO RULE THEM MOSTLY

    var ids = this.getIdArray(id);

    var newState = {};
    for(let id of ids){
      let message = this.state[id];
      let newMessage = {};
      newState[id] = Object.assign(newMessage, message, change);
    }

    this.setState(newState);
  }

  getIdArray(id){
    var ids = [];
    if(id){
      if(id < 0){
        ids = Object.keys(this.state);
      }
      else{
        ids.push(id);
      }
    }
    else{
      for(let key in this.state){
        if(this.state[key].selected){
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
              <Messages messages={this.state} updateState={this.updateState}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
