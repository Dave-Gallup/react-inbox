import React, { Component } from 'react';
import './App.css';
import allMessages from './seeds.json';
import Messages from './Messages.js'
import Toolbar from './Toolbar.js'
import './index.css';

class App extends Component {
  render() {
    var numRead = allMessages.reduce((total,el) => el.read ? total + 1 : total, 0);
    var numSelected = allMessages.reduce((total,el) => el.selected ? total + 1 : total, 0);
    var totalMessages = allMessages.length;

    return (
      <div className="row">
          <div className="col-md-8 col-md-offset-2">
            <div className="App">
              <div className="Toolbar text-left"><Toolbar numRead={numRead} numSelected={numSelected} totalMessages={totalMessages}/></div>
              <div className="list"><Messages messages={allMessages}/></div>
            </div>
          </div>
      </div>

    );
  }
}

export default App;
