import React, { Component } from 'react';
import Label from './Label.js';

class Message extends Component{

  constructor(props){
    super(props);

    this.onCheckboxClick = this.onCheckboxClick.bind(this);
    this.onStarClick = this.onStarClick.bind(this);
  }


  onCheckboxClick(){
    var change = {};
    change.selected = !this.props.selected;
    this.props.updateState(change, this.props.id);
  }

  onStarClick(){
    var change = {};
    change.starred = !this.props.starred;
    this.props.updateState(change, this.props.id);
  }


  render(){
    var star = this.props.starred ? 'fa-star' : 'fa-star-o';
    var read = this.props.read ? 'read' : 'unread';
    var selectedBox = this.props.selected ? 'checked' : '';
    var selectedBg = this.props.selected ? 'selected' : '';




    return (
      <div className={"row message " + read + " " + selectedBg} >
        <div className="col-xs-1">
          <div className="row">
            <div className="col-xs-2">
              <input type="checkbox" checked={"" + selectedBox} onClick={this.onCheckboxClick}/>
            </div>
            <div className="col-xs-2">
              <i className={"star fa " + star} onClick={this.onStarClick}></i>
            </div>
          </div>
        </div>
        <div className="col-xs-11 text-left" onClick={this.onCheckboxClick}>
          {this.props.labels.map((el, i) => <Label label={el} key={i}/>)}
          <a>
            {this.props.subject}
          </a>
        </div>
      </div>
    );
  }

}


export default Message;