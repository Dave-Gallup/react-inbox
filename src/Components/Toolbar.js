import React, { Component } from 'react';


class Toolbar extends Component{

  constructor(props){
    super(props);

    this.ignoreLabel = 'Apply label';

    this.onSelectClick = this.onSelectClick.bind(this);
    this.onMarkReadClick = this.onMarkReadClick.bind(this);
    this.onMarkUnreadClick = this.onMarkUnreadClick.bind(this);
    this.onLabelChange = this.onLabelChange.bind(this);
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

  onLabelChange(e){
    e.preventDefault();

    if(e.target.value !== this.ignoreLabel){
      var adding = false;
      if(e.target.name === 'addLabel'){
        adding = true;
      }
      this.props.updateLabels(e.target.value, adding);
    }
  }

  render(){
    var checkAllStatus = 'fa-minus-square-o';
    var isDisabled = false;
    if(this.props.selectedStatus === 'all'){
      checkAllStatus = 'fa-square-o';
      isDisabled = true
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

        <button className="btn btn-default" onClick={this.onMarkReadClick} disabled={isDisabled}>
          Mark As Read
        </button>

        <button className="btn btn-default" onClick={this.onMarkUnreadClick} disabled={isDisabled}>
          Mark As Unread
        </button>

        <select className="form-control label-select" name="addLabel" onChange={this.onLabelChange} disabled={isDisabled}>
          <option>Apply label</option>
          <option value="dev">dev</option>
          <option value="personal">personal</option>
          <option value="gschool">gschool</option>
        </select>

        <select className="form-control label-select" name="removeLabel" onChange={this.onLabelChange} disabled={isDisabled}>
          <option>Remove label</option>
          <option value="dev">dev</option>
          <option value="personal">personal</option>
          <option value="gschool">gschool</option>
        </select>

        <button className="btn btn-default" disabled={isDisabled}>
          <i className="fa fa-trash-o"></i>
        </button>
      </div>
    </div>
  );
  }

}


export default Toolbar;