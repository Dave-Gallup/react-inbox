import React, { Component } from 'react';


class Toolbar extends Component{

  constructor(props){
    super(props);

    this.onSelectClick = this.onSelectClick.bind(this);
    this.onMarkReadClick = this.onMarkReadClick.bind(this);
    this.onMarkUnreadClick = this.onMarkUnreadClick.bind(this);
  }

  onSelectClick(){
    if(this.props.selectedStatus === 'none'){
      this.props.updateState({selected: false}, -1);
    }
    else{
      this.props.updateState({selected: true}, -1);
    }
  }

  onMarkReadClick(){
    this.props.updateState({read:true});
  }

  onMarkUnreadClick(){
    this.props.updateState({read:false});
  }

  render(){
    var checkAllStatus = 'fa-minus-square-o';
    if(this.props.selectedStatus === 'all'){
      checkAllStatus = 'fa-square-o';
    }
    else if (this.props.selectedStatus === 'none'){
      checkAllStatus = 'fa-check-square-o';
    }

    return (
    <div className="row toolbar">
      <div className="col-md-12">
        <p className="pull-right">
          <span className="badge badge">{this.props.numRead}</span>
          unread messages
        </p>

        <button className="btn btn-default" onClick={this.onSelectClick}>
          <i className={"fa " + checkAllStatus}></i>
        </button>

        <button className="btn btn-default" onClick={this.onMarkReadClick}>
          Mark As Read
        </button>

        <button className="btn btn-default" onClick={this.onMarkUnreadClick}>
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