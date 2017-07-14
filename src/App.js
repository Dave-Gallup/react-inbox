import React, { Component } from 'react';
import allMessages from './seeds.json';
import Messages from './Components/Messages.js'
import Toolbar from './Components/Toolbar.js'


class App extends Component {

  constructor(props){
    super(props);

    this.state       = this.formatState(allMessages);
    this.updateState = this.updateState.bind(this);
  }

  formatState(json){
    var state = {};
    json.forEach(msg => {
      if(!msg.selected){
        msg.selected = false;
      }
      state[msg.id] = msg;
    });
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

  updateState(change, id){ //ONE FUNCTION TO RULE THEM MOSTLY
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

  	var newState = {};
  	for(id of ids){
  		let message = this.state[id];
      let newMessage = {};
      newState[id] = Object.assign(newMessage, message, change);
  	}

  	this.setState(newState);
  }


  render() {
    return (
      <div className="row">
        <div className="col-md-8 col-md-offset-2">
          <div className="App">
            <div className="Toolbar text-left">
              <Toolbar numRead={this.getTotalUnread()}  selectedStatus={this.getSelectedStatus()} updateState={this.updateState}/>
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
