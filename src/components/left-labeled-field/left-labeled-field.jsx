import React, { Component } from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames';

import './left-labeled-field.css';

const { string, bool, oneOf } = PropTypes;

class LeftLabeledField extends Component {
  static propTypes = {
    /** Field label. It is displayed to the top(default) or left(inline or leftAlign) */
    label: string,
    /** Field error. It is displayed to the top(default)  or right(inline or leftAlign) */
    error: string,
    /** Field size */
    size: oneOf(['normal', 'small', 'inline', 'choice']),
    /** Adds asterisk to label */
    required: bool
  };

  static defaultProps = {
    size: 'normal',
    label: '',
    error: '',
    required: false
  };

  render() {
    const { label, error, children, size, required } = this.props;
    return (
      <div
        className={classNames('LeftLabeledField', {
          'LeftLabeledField--size-small': size === 'small',
          'LeftLabeledField--size-inline': size === 'inline',
          'LeftLabeledField--size-choice': size === 'choice'
        })}
      >
        {label && (
          <div className="LeftLabeledField-labelHolder">
            <span className="LeftLabeledField-label">
              {label}
              {required && ' *'}
            </span>
          </div>
        )}
        <div className="LeftLabeledField-instance">{children}</div>
        {error && <div className="LeftLabeledField-error">{error}</div>}
      </div>
    );
  }
}

export default LeftLabeledField;
