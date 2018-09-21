import React, { Component } from 'react';
import PropTypes from 'prop-types';

const { any } = PropTypes;

class FormActionRow extends Component {
  static propTypes = {
    children: any.isRequired
  };

  render() {
    const { children } = this.props;
    return <div className="Form-actionRow">{children}</div>;
  }
}

export default FormActionRow;
