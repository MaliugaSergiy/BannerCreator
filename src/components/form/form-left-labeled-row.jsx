import React, { Component } from 'react';
import PropTypes from 'prop-types';

const { any } = PropTypes;

class FormLeftLabeledRow extends Component {
  static propTypes = {
    children: any.isRequired
  };

  render() {
    const { children } = this.props;
    return <div className="Form-leftLabeledRow">{children}</div>;
  }
}

export default FormLeftLabeledRow;
