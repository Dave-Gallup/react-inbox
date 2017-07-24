import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Label from '../Label/Label.js';
import Body from '../Body/Body.js';
import { toggleSelected, toggleStarred, setRead } from '../../actions/actions';
import {BrowserRouter as Router, Route} from 'react-router-dom';

class Message extends Component{

  constructor(props){
    super(props);

    this.onSelectedChange = this.onSelectedChange.bind(this);
    this.onStarredClick = this.onStarredClick.bind(this);
    this.onSubjectClick = this.onSubjectClick.bind(this);
  }

  onSelectedChange(){
    this.props.toggleSelected(this.props.id);
  }

  onStarredClick(){
    this.props.toggleStarred(this.props.id);
  }

  onSubjectClick(){
    this.props.setRead([this.props.id], true);
    if(window.location.pathname === `/message/${this.props.id}`){
      window.location.href='http://localhost:3000/';
    }
    else{
      window.location.href=`http://localhost:3000/message/${this.props.id}`;
    }
  }


  render(){
    return (
      <div  className={`row message ${this.props.read?'':'un'}read ${this.props.selected?'selected':''}`}>
        <div className="col-xs-1">
          <div className="row">
            <div className="col-xs-2">
              <input type="checkbox" checked={this.props.selected ? 'checked' : ''} onChange={this.onSelectedChange}/>
            </div>
            <div className="col-xs-2">
              <i className={`star fa ${this.props.starred?'fa-star':'fa-star-o'}`} onClick={this.onStarredClick}/>
            </div>
          </div>
        </div>
        <div className="col-xs-11 text-left" >

          <a onClick={this.onSubjectClick}>
            {this.props.labels.map((el, i) => <Label key={el} messageId={this.props.id} labelId={i}/>)}
            {this.props.subject}
          </a>

        </div>
        <Router>
          <Route path="/message/:id(\d+)" render={({match})=>(
            parseInt(match.params.id, 10) === this.props.id ? <Body id={this.props.id} /> : null
          )} />
        </Router>
      </div>
    );
  }
  //parseInt(match.params.id) === this.props.id ? 'this' : ''
  // render(){
  //   var star = this.props.starred ? 'fa-star' : 'fa-star-o';
  //   var read = this.props.read ? 'read' : 'unread';
  //   var selectedBox = this.props.selected ? 'checked' : '';
  //   var selectedBg = this.props.selected ? 'selected' : '';
  //
  //   return (
  //     <div className={"row message " + read + " " + selectedBg} >
  //     <div className="col-xs-1">
  //     <div className="row">
  //     <div className="col-xs-2">
  //     <input type="checkbox" checked={"" + selectedBox} onChange={this.onCheckboxChange}/>
  //     </div>
  //     <div className="col-xs-2">
  //     <i className={"star fa " + star} onClick={this.onStarClick}></i>
  //     </div>
  //     </div>
  //     </div>
  //     <div className="col-xs-11 text-left" onClick={this.onCheckboxChange}>
  //     {this.props.labels.map((el) => <Label label={el} key={el}/>)}
  //     <a>
  //     {this.props.subject}
  //     </a>
  //     </div>
  //     </div>
  //   );
  // }
  // constructor(props){
  //   super(props);
  //
  //   this.onCheckboxChange = this.onCheckboxChange.bind(this);
  //   this.onStarClick = this.onStarClick.bind(this);
  // }
  //
  //
  // onCheckboxChange(){
  //   var change = {};
  //   change.selected = !this.props.selected;
  //   this.props.updateState(change, this.props.id);
  // }
  //
  // onStarClick(){
  //   var change = {};
  //   change.starred = !this.props.starred;
  //   this.props.updateState(change, this.props.id);
  // }



}

// updateState={this.props.updateState}
// subject={this.props.appState.messages[key].subject}
// labels={this.props.appState.messages[key].labels}
// starred={this.props.appState.messages[key].starred}
// read={this.props.appState.messages[key].read}
// selected={this.props.appState.messages[key].selected}
// id={this.props.appState.messages[key].id}
// key={this.props.appState.messages[key].id}


const mapStateToProps = (state, ownProps) => {

  const subject  = state.messages.messageMap[ownProps.id].subject;
  const labels   = state.messages.messageMap[ownProps.id].labels;
  const starred  = state.messages.messageMap[ownProps.id].starred;
  const read     = state.messages.messageMap[ownProps.id].read;
  const selected = state.messages.messageMap[ownProps.id].selected;
  return {
    subject,
    labels,
    starred,
    read,
    selected
  }
};

const mapDispatchToProps = dispatch => bindActionCreators({
  toggleSelected,
  toggleStarred,
  setRead
},
dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Message);


