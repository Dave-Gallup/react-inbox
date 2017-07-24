import React, { Component } from 'react';
import Messages from './Components/Messages/Messages.js';
import Toolbar  from './Components/Toolbar/Toolbar.js';
import Compose  from './Components/Compose/Compose.js';
import {BrowserRouter as Router, Route} from 'react-router-dom';

// import Api from './utils/Api';

class App extends Component {



  render() {
    return (

          <Router>
            <div className="row">
              <div className="col-md-8 col-md-offset-2">
                <div className="App">
                  <Toolbar />
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
  //
  // <div className="row">
  //   <div className="col-md-8 col-md-offset-2">
  //     <div className="App">
  //       <div className="Toolbar text-left">
  //         <Toolbar />
  //       </div>
  //       <div className="list">
  //         <Messages />
  //       </div>
  //     </div>
  //   </div>
  // </div>


  // render() {
  //   return (
  //     <div className="row">
  //       <div className="col-md-8 col-md-offset-2">
  //         <div className="App">
  //           <div className="Toolbar text-left">
  //             <Toolbar />
  //           </div>
  //
  //           <div className="list">
  //             <Messages />
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   );
  // }

  // <div className="Toolbar text-left">
  //   <Toolbar numRead={this.getTotalUnread()}  selectedStatus={this.getSelectedStatus()} updateState={this.updateState}
  //   updateLabels={this.updateLabels} updateDeletes={this.updateDeletes}
  //   updateComposeToggle={this.updateComposeToggle}/>
  // </div>
  // <div className="Compose">
  //   {this.state.showCompose ? <Compose updateSendMessage={this.updateSendMessage}/> : ''}
  // </div>
  // <div className="list">
  //   <Messages appState={this.state} updateState={this.updateState}/>
  // </div>
  // </div>

  // constructor(props){
  //   super(props);
  //
  //   this.state        = { messageList: [], messages: {}, showCompose: false };
  //
  //   this.URI = 'http://localhost:8181/api/messages';
  //   this.updateState  = this.updateState.bind(this);
  //   this.updateLabels = this.updateLabels.bind(this);
  //   this.updateDeletes = this.updateDeletes.bind(this);
  //   this.updateComposeToggle = this.updateComposeToggle.bind(this);
  //   this.updateSendMessage = this.updateSendMessage.bind(this);
  //   this.localSetState = this.localSetState.bind(this);
  // }

  // componentDidMount(){
  //   fetch('http://localhost:8181/api/messages')
  //   .then(response => response.json())
  //   .then(response => {
  //     this.setState( this.formatState(response._embedded.messages));
  //   });
  // }

  // formatState(json){
  //   var state = { messageList: [], messages: {} };
  //   json.forEach(msg => {
  //     state.messageList.push(msg.id);
  //     state.messages[msg.id] = msg;
  //   });
  //   return state;
  // }

  // getTotalUnread(){
  //   var total = 0;
  //
  //   for(let key of this.state.messageList){
  //     if(!this.state.messages[key].read){
  //       total++;
  //     }
  //   }
  //   return total;
  // }

  // getSelectedStatus(){
  //   var total = 0;
  //   for(let key of this.state.messageList){
  //     if(!this.state.messages[key].selected){
  //       total++;
  //     }
  //   }
  //   if(total === 0){
  //     return 'none';
  //   }
  //   if(total === Object.keys(this.state.messageList).length){
  //     return 'all';
  //   }
  //   return 'some';
  // }

  // updateLabels(label, adding){
  //
  //   var ids = this.getIdArray();
  //
  //   this.apiPatchCall({label}, ids, adding)
  //   .then(result => {
  //     if(result){                       //TODO check if it is a 200
  //       this.localSetLabelState(label, ids, adding);
  //     }
  //   })
  //   .catch(err => err);
  //
  // }


  // updateState(change, id){ //ONE FUNCTION TO RULE THEM MOSTLY
  //   var ids = this.getIdArray(id);
  //
  //   if(change.hasOwnProperty('selected')){
  //     this.localSetState(change, ids);
  //   }
  //   else{
  //     this.apiPatchCall(change, ids)
  //     .then(result => {
  //       if(result){                       //TODO check if it is a 200
  //         this.localSetState(change, ids);
  //       }
  //     })
  //     .catch(err => err);
  //   }
  // }

  // updateDeletes(){
  //   var ids = this.getIdArray();
  //
  //   this.apiPatchCall({delete: undefined}, ids)
  //   .then(result => {
  //     if(result){                       //TODO check if it is a 200
  //       this.localSetDeletes(ids);
  //     }
  //   })
  //   .catch( err => err);
  // }

  // updateComposeToggle(){
  //   this.setState(prevState => {
  //     return {showCompose: !prevState.showCompose};
  //   })
  // }

  // updateSendMessage(subject, body){
  //   this.apiPostCall(subject, body)
  //   .then(response => response.json())
  //   .then(result => {
  //     if(result){
  //       this.setState(prevState => {
  //         var newMessageList = [...prevState.messageList, result.id];
  //         var newMessages = {...prevState.messages};
  //         newMessages[result.id] =
  //         {
  //           id: result.id,
  //           labels: result.labels,
  //           read: result.read,
  //           starred: result.starred,
  //           subject: result.subject
  //         };
  //
  //         return {
  //           messageList: newMessageList,
  //           messages: newMessages,
  //           showCompose: false
  //         };
  //       });
  //     }
  //   })
  // }

  // apiPostCall(messageSubject, messageBody){
  //
  //   var newBody = {
  //     "subject": messageSubject,
  //     "body": messageBody
  //   };
  //
  //   return fetch(this.URI, {
  //     headers:  {
  //                 "Accept"      : "application/json",
  //                 "Content-Type": "application/json"
  //               },
  //     method: 'POST',
  //     body: JSON.stringify(newBody)
  //   });
  //
  // }

  // apiPatchCall(change, ids, addingCommand){
  //
  //   var newBody = this.buildBody(change, ids, addingCommand)
  //
  //   return fetch(this.URI, {
  //     headers:  {
  //                 "Accept"      : "application/json",
  //                 "Content-Type": "application/json"
  //               },
  //     method: 'PATCH',
  //     body: newBody
  //   });
  // }

  // buildBody(change, ids, addingCommand){
  //   var command = '';
  //   var key = '';
  //   var value = '';
  //
  //   if(change.hasOwnProperty('starred')){
  //     command = 'star';
  //     key = 'star';
  //     value = JSON.stringify(change.starred);
  //   }
  //   else if(change.hasOwnProperty('read')){
  //     command = 'read';
  //     key = 'read'
  //     value = JSON.stringify(change.read);
  //   }
  //   else if(change.hasOwnProperty('label')){
  //     if(addingCommand){
  //       command = 'addLabel';
  //     }
  //     else{
  //       command = 'removeLabel';
  //     }
  //     key = 'label'
  //     value = `${JSON.stringify(change.label)}`;
  //   }
  //   else if(change.hasOwnProperty('delete')){
  //     return `{
  //       "messageIds": ${JSON.stringify(ids)},
  //       "command": "delete"
  //     }`;
  //
  //   }
  //
  //   return `{
  //     "messageIds": ${JSON.stringify(ids)},
  //     "command": "${command}",
  //     "${key}": ${value}
  //   }`;
  // }

  // localSetState(change, ids){
  //   this.setState(prevState => {
  //
  //     var newMessages = {...this.state.messages};
  //
  //     for(let id of ids){
  //       let message = prevState.messages[id];
  //       newMessages[id] = Object.assign({}, message, change);
  //     }
  //     return {messages: newMessages};
  //   });
  // }

  // localSetLabelState(label, ids, adding){
  //   this.setState(prevState => {
  //
  //     var newMessages = {...this.state.messages};
  //
  //       for(let id of ids){
  //         let message = prevState.messages[id];
  //         let modified = {labels: [...message.labels]};
  //         // if adding label
  //         if(adding){
  //           if(!message.labels.includes(label)){
  //             modified.labels.push(label);
  //           }
  //         }
  //         // if removing label
  //         else{
  //           let index = message.labels.indexOf(label);
  //           if(index >= 0){
  //             modified.labels.splice(index,1);
  //           }
  //         }
  //         newMessages[id] = Object.assign({}, message, modified);
  //       }
  //       return {messages: newMessages};
  //   });
  // }


  // localSetDeletes(ids){
  //   this.setState(prevState => {
  //     var ids = this.getIdArray();
  //     var newMessageList = [...this.state.messageList];
  //
  //     for(let id of ids){
  //       newMessageList.splice(newMessageList.indexOf(id), 1);
  //     }
  //     return {messageList: newMessageList}
  //   });
  // }

  // getIdArray(id){
  //   var ids = [];
  //   if(id){
  //     if(id < 0){
  //       ids = [...this.state.messageList];
  //     }
  //     else{
  //       ids.push(id);
  //     }
  //   }
  //   else{
  //     for(let key of this.state.messageList){
  //       if(this.state.messages[key].selected){
  //         ids.push(key);
  //       }
  //     }
  //   }
  //   return ids;
  // }

  // static testFn(){
  //   return fetch(`http://localhost:8181/api/messages`)
  //   .then(response => response.json())
  //   .then(json => console.log(json._embedded.messages));
  // }

}
// App.testFn();
export default App;
