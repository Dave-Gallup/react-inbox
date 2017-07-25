import React, { Component } from 'react';
import Messages from './Components/Messages/Messages.js';
import Toolbar  from './Components/Toolbar/Toolbar.js';
import Compose  from './Components/Compose/Compose.js';
import {BrowserRouter as Router, Route} from 'react-router-dom';

class App extends Component {



  render() {
    return (

          <Router>
            <div className="row">
              <div className="col-md-8 col-md-offset-2">
                <div className="App">
                  <Route path="/" component={Toolbar} />
                  <Route exact path="/compose" component={Compose}/>

                  <div className="list">
                    <Messages />
                  </div>
                </div>
              </div>
            </div>
          </Router>
    );
  }

}
export default App;
