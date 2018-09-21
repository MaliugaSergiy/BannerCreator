import React, { Component } from 'react';
import PropTypes from 'prop-types';

const { any } = PropTypes;

class FormLabeledRow extends Component {
  static propTypes = {
    children: any.isRequired
  };

  render() {
    const { children } = this.props;
    return <div className="Form-labeledRow">{children}</div>;
  }
}

export default FormLabeledRow;
