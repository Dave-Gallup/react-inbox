import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// import {BrowserRouter as Router, Route} from 'react-router-dom';


import {
  selectAll,
  unselectAll,
  setRead,
  addLabel,
  removeLabel,
  deleteMessages
} from '../../actions/actions';

class Toolbar extends Component{

  constructor(props){
    super(props);

    this.onSelectAllClick    = this.onSelectAllClick.bind(this);
    this.onReadClick         = this.onReadClick.bind(this);
    this.onUnreadClick       = this.onUnreadClick.bind(this);
    this.onAddLabelChange    = this.onAddLabelChange.bind(this);
    this.onRemoveLabelChange = this.onRemoveLabelChange.bind(this);
    this.onDeleteClick       = this.onDeleteClick.bind(this);
    this.onComposeClick      = this.onComposeClick.bind(this);

    // console.log('history>>>',this.props.history);
  }

  checkboxClass(){
    if(this.props.selectedIds.length === 0){
      return 'fa-square-o';
    }
    if(this.props.selectedIds.length === this.props.totalMessages){
      return 'fa-check-square-o';
    }
    return 'fa-minus-square-o';
  }

  onSelectAllClick(){

    if(this.props.selectedIds.length === this.props.totalMessages){
      this.props.unselectAll();
    }
    else{
      this.props.selectAll();
    }
  }

  onReadClick(){
    this.props.setRead(this.props.selectedIds, true);
  }

  onUnreadClick(){
    this.props.setRead(this.props.selectedIds, false);
  }

  onAddLabelChange(e){
    if(e.target.value !== 'Apply label'){
      this.props.addLabel(this.props.selectedIds, e.target.value)
    }
  }

  onRemoveLabelChange(e){
    if(e.target.value !== 'Remove label'){
      this.props.removeLabel(this.props.selectedIds, e.target.value)
    }
  }

  onDeleteClick(){
    this.props.deleteMessages(this.props.selectedIds);
  }

  onComposeClick(){

    if(this.props.location.pathname === '/'){
      this.props.history.push('/compose');
    }
    else{
      this.props.history.push('/');
    }
  }

  render(){
    return (
      <div className="row toolbar">
        <div className="col-md-12">
          <p className="pull-right" >
            <span className="badge badge" >
            {this.props.numUnread <0?' ':this.props.numUnread}</span>
            unread messages
          </p>
          <a className="btn btn-danger"  onClick={this.onComposeClick}>
            <i className="fa fa-plus"></i>
          </a>
          <button className="btn btn-default" onClick={this.onSelectAllClick}>
            <i className={`fa ${this.checkboxClass()}`} ></i>
          </button>

          <button className="btn btn-default" disabled={this.props.selectedIds.length === 0?true:false}  onClick={this.onReadClick}>
            Mark As Read
          </button>

          <button className="btn btn-default"  disabled={this.props.selectedIds.length === 0?true:false} onClick={this.onUnreadClick}>
            Mark As Unread
          </button>

          <select className="form-control label-select" name="addLabel"  disabled={this.props.selectedIds.length === 0?true:false} onChange={this.onAddLabelChange}>
            <option>Apply label</option>
            <option value="dev">dev</option>
            <option value="personal">personal</option>
            <option value="gschool">gschool</option>
          </select>

          <select className="form-control label-select" name="removeLabel"  disabled={this.props.selectedIds.length === 0?true:false} onChange={this.onRemoveLabelChange}>
            <option>Remove label</option>
            <option value="dev">dev</option>
            <option value="personal">personal</option>
            <option value="gschool">gschool</option>
          </select>

          <button className="btn btn-default" disabled={this.props.selectedIds.length === 0?true:false}  onClick={this.onDeleteClick}>
            <i className="fa fa-trash-o"></i>
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {

  const numUnread = state.messages.messageList.reduce(
    (tot, i)=> state.messages.messageMap[i].read ? tot : tot + 1
  , 0);
  const selectedIds = state.messages.messageList.filter(
    id => state.messages.messageMap[id].selected
  );
  const totalMessages = state.messages.messageList.length;

  return {
    numUnread,
    selectedIds,
    totalMessages
  }
};

const mapDispatchToProps = dispatch => bindActionCreators({
  selectAll,
  unselectAll,
  setRead,
  addLabel,
  removeLabel,
  deleteMessages
},
dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Toolbar);


