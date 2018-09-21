import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import './radio.css';

const { string, element, bool, oneOfType } = PropTypes;

class Radio extends Component {
  static propTypes = {
    /** Radio label */
    label: oneOfType([string, element]).isRequired,

    /** Responsible input attribute 'name' */
    name: string.isRequired,

    /** Responsible input attribute 'value' */
    value: string.isRequired,

    disabled: bool
  };

  static defaultProps = {
    disabled: false
  };

  render() {
    const { label, radioRef, disabled, ...rest } = this.props;

    return (
      <div
        className={cn('Radio', {
          'Radio--disabled': disabled
        })}
      >
        <label className="Radio-wrapper">
          <input
            ref={radioRef}
            className="Radio-el"
            type="radio"
            disabled={disabled}
            {...rest}
          />
          <span className="Radio-mark" />
          <span className="Radio-label">{label}</span>
        </label>
      </div>
    );
  }
}

export default Radio;
