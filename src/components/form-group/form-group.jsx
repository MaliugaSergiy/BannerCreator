import React, { Component } from 'react';
import './form-group.css';
import classNames from 'classnames';

import ItemWide from './form-group-item-wide';
import Item from './form-group-item';

class FormGroup extends Component {
  render() {
    return (
      <div
        className={classNames('FormGroup', {
          'FormGroup--half': this.props.cols === 2,
          'FormGroup--third': this.props.cols === 3,
          'FormGroup--center': this.props.center,
          'FormGroup--right': this.props.right,
          'FormGroup--vertical-center': this.props.vertical === 'center'
        })}
      >
        {this.props.children}
      </div>
    );
  }
}

FormGroup.Item = Item;
FormGroup.ItemWide = ItemWide;

export default FormGroup;
