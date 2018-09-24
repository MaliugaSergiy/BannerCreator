import React, { Component } from 'react';
import './fieldset-choice.css';
import classNames from 'classnames';
import Item from './fieldset-choice-item';

class FieldsetChoice extends Component {
  static Item = Item;
  render() {
    return (
      <div
        className={classNames('FieldsetChoice', {
          'FieldsetChoice--inline': this.props.inline
        })}
      >
        {this.props.children}
      </div>
    );
  }
}

export default FieldsetChoice;
