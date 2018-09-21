import React, { Component } from 'react';

class FormGroupItem extends Component {
  render() {
    return <div className="FormGroup-item">{this.props.children}</div>;
  }
}

export default FormGroupItem;
