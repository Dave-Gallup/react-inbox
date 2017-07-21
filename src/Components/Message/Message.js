import React, { Component } from 'react';
import Label from '../Label/Label.js';

class Message extends Component{

  render(){

    return (
      <div  >
        <div className="col-xs-1">
          <div className="row">
            <div className="col-xs-2">
              <input type="checkbox" checked={false} />
            </div>
            <div className="col-xs-2">
              <i className={"star fa "} ></i>
            </div>
          </div>
        </div>
        <div className="col-xs-11 text-left" >

          <a>
            {}
          </a>
        </div>
      </div>
    );
  }
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


export default Message;