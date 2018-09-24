import React, { Component } from 'react';
import './fieldset-choice.css';

class FieldsetChoiceItem extends Component {
  render() {
    return <div className="FieldsetChoice-item">{this.props.children}</div>;
  }
}

export default FieldsetChoiceItem;
