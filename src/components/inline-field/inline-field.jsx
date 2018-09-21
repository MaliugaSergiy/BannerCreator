import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './inline-field.css';

const { string } = PropTypes;

class Field extends Component {
  static propTypes = {
    /**
     * Field label. It is displayed to the top(default) or left(inline or leftAlign)
     * */
    label: string,

    /**
     * Field error. It is displayed to the top(default)  or right(inline or leftAlign)
     * */
    error: string
  };

  static defaultProps = {
    label: '',
    error: ''
  };

  render() {
    const { label, error, children } = this.props;
    return (
      <div className="InlineField">
        {label && <div className="InlineField-label">{label}</div>}
        <div className="InlineField-instance">{children}</div>
        {error && <div className="InlineField-error">{error}</div>}
      </div>
    );
  }
}

export default Field;
