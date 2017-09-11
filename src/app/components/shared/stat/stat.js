import React, { Component } from 'react';

class Stat extends Component {
  render() {
    return (
      <div className={'card card-inverse ' + this.props.cardClass}>
        <div className="card-header">
          <h4>{this.props.title}</h4>
          <div className="row">
            <div className="col col-xs-3">
              Data
            </div>
            <div className="col col-xs-9 text-right">
              12
            </div>
          </div>
        </div>
        <div className="card-footer">
          <span className="float-left">View Details</span>
          <a href="" className="float-right card-inverse">
            <span ><i className="fa fa-arrow-circle-right"></i></span>
          </a>
        </div>
      </div>
    );
  }
}

export default Stat;
