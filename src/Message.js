import React, { Component } from 'react';
import Label from './Label.js';

class Message extends Component{

  render(){
    var star = this.props.starred ? 'fa-star' : 'fa-star-o';
    var read = this.props.read ? 'read' : 'unread';
    var selectedBox = this.props.selected ? 'checked' : '';
    var selectedBg = this.props.selected ? 'selected' : '';

    return (
      <div className={"row message " + read + " " + selectedBg}>
        <div className="col-xs-1">
          <div className="row">
            <div className="col-xs-2">
              <input type="checkbox" checked={"" + selectedBox}/>
            </div>
            <div className="col-xs-2">
              <i className={"star fa " + star}></i>
            </div>
          </div>
        </div>
        <div className="col-xs-11 text-left">
          {this.props.labels.map((el, i) => <Label label={el} key={i}/>)}
          <a href="#">
            {this.props.subject}
          </a>
        </div>
      </div>
    );
  }

}


export default Message;