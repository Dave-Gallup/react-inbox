import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {getBody} from '../../actions/actions';


class Body extends Component{

  componentDidMount(){
    this.props.getBody(this.props.id);
  }


  render(){
    return (
      <div  className="row">
        <div className="col-xs-1">
          <div className="row">
            <div className="col-xs-2">
            </div>
            <div className="col-xs-2">
            </div>
          </div>
        </div>
        <div className="col-xs-11 text-left" >
          <div className="message-body">
            {this.props.body}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {

  const body = state.messages.messageMap[ownProps.id].body;

  return {
    body
  }
};
const mapDispatchToProps = dispatch => bindActionCreators({
  getBody
},
dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Body);