import React, { Component } from 'react';
import './index.css';
import Label from './Label.js';

class Message extends Component{

  constructor(props){
    super(props);
  }

  render(){
    var star = this.props.starred ? 'fa-star' : 'fa-star-o';
    var read = this.props.read ? 'read' : 'unread';

    return (
      <div className={"row message " + read}>
        <div className="col-xs-1">
          <div className="row">
            <div className="col-xs-2">
              <input type="checkbox"/>
            </div>
            <div className="col-xs-2">
              <i className={"star fa " + star}></i>
            </div>
          </div>
        </div>
        <div className="col-xs-11 text-left">
          {this.props.labels.map((el) => <Label label={el} />)}
          <a href="#">
            {this.props.subject}
          </a>
        </div>
      </div>
    );
  }

}


export default Message;