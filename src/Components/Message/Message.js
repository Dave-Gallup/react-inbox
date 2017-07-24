import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Label from '../Label/Label.js';
import Body from '../Body/Body.js';
import {
  toggleSelected,
  toggleStarred,
  setRead,
} from '../../actions/actions';
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



}

const mapStateToProps = (state, ownProps) => {

  const subject  = state.messages.messageMap[ownProps.id].subject;
  const labels   = state.messages.messageMap[ownProps.id].labels;
  const starred  = state.messages.messageMap[ownProps.id].starred;
  const read     = state.messages.messageMap[ownProps.id].read;
  const selected = state.messages.messageMap[ownProps.id].selected;
  const body     = state.messages.messageMap[ownProps.id].body;
  return {
    subject,
    labels,
    starred,
    read,
    selected,
    body
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


