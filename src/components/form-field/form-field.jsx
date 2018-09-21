import React, { Component } from 'react';
import './form-field.css';
import classNames from 'classnames';

class FormField extends Component {
  render() {
    return (
      <div
        className={classNames('FormField', {
          'FormField--textarea': this.props.textarea,
          'FormField--noFix': this.props.noFix
        })}
      >
        {this.props.children}
      </div>
    );
  }
}

export default FormField;
