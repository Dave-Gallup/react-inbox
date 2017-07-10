import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import messages from './seeds.json';

import Messages from './Messages.js'
import Toolbar from './Toolbar.js'

class App extends Component {
  render() {
    var numRead = messages.reduce((total,el) => el.read ? total + 1 : total, 0);
    return (
      <div className="row">
          <div className="col-md-8 col-md-offset-2">
            <div className="App">
              <div className="Toolbar"><Toolbar numRead={numRead}/></div>
              <div className="list"><Messages messages={messages}/></div>
            </div>
          </div>
      </div>

    );
  }
}

export default App;
