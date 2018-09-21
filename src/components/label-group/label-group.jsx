import React, { Component } from 'react';
import './label-group.css';

class LabelGroup extends Component {
  render() {
    return <div className="LabelGroup">{this.props.children}</div>;
  }
}

export default LabelGroup;
