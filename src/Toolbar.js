import React, { Component } from 'react';


class Toolbar extends Component{

  render(){

    var checkAllStatus = 'fa-minus-square-o';
    if(this.props.numSelected === 0){
      checkAllStatus = 'fa-square-o';
    }
    else if (this.props.numSelected === this.props.totalMessages){
      checkAllStatus = 'fa-check-square-o';
    }

    return (
    <div className="row toolbar">
      <div className="col-md-12">
        <p className="pull-right">
          <span className="badge badge">{this.props.numRead}</span>
          unread messages
        </p>

        <button className="btn btn-default">
          <i className={"fa " + checkAllStatus}></i>
        </button>

        <button className="btn btn-default">
          Mark As Read
        </button>

        <button className="btn btn-default">
          Mark As Unread
        </button>

        <select className="form-control label-select">
          <option>Apply label</option>
          <option value="dev">dev</option>
          <option value="personal">personal</option>
          <option value="gschool">gschool</option>
        </select>

        <select className="form-control label-select">
          <option>Remove label</option>
          <option value="dev">dev</option>
          <option value="personal">personal</option>
          <option value="gschool">gschool</option>
        </select>

        <button className="btn btn-default">
          <i className="fa fa-trash-o"></i>
        </button>
      </div>
    </div>
  );
  }

}


export default Toolbar;