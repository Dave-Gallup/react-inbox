import React, { Component } from 'react';
// import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class Label extends Component{

  render(){
    return <span className="label label-danger">{this.props.label}</span>
  }
}


const mapStateToProps = (state, ownProps) => {

  const label = state.messages.messageMap[ownProps.messageId].labels[ownProps.labelId];

  return {
    label
  }
};

export default connect(
  mapStateToProps,
)(Label);

