import React, { Component } from 'react';


class Label extends Component{

  render(){
    return <span className="label label-danger">{this.props.label}</span>
  }
}


export default Label;