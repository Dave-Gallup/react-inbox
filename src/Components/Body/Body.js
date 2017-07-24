import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Body extends Component{



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
            <span>test</span>
          </div>
        </div>
      </div>
    );

  }

}

const mapStateToProps = (state) => {

  const body = 5;

  return {
    body
  }
};
const mapDispatchToProps = dispatch => bindActionCreators({
  // toggleSelected,
  // toggleStarred
},
dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Body);