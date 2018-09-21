import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import './checkbox.css';

const { string, element, bool, oneOfType } = PropTypes;

class Checkbox extends Component {
  static propTypes = {
    /** Checkbox label */
    label: oneOfType([string, element]).isRequired,

    /** Input attribute 'name' */
    name: string.isRequired,

    disabled: bool
  };

  static defaultProps = {
    disabled: false
  };

  render() {
    const { label, disabled, ...rest } = this.props;

    return (
      <div
        className={cn('Checkbox', {
          'Checkbox--disabled': disabled
        })}
      >
        <label className="Checkbox-wrapper">
          <input
            className="Checkbox-el"
            type="checkbox"
            disabled={disabled}
            {...rest}
          />
          <span className="Checkbox-mark" />
          <span className="Checkbox-label" onMouseDown={this.handleMouseDown}>
            {label}
          </span>
        </label>
      </div>
    );
  }

  handleMouseDown = e => {
    e.preventDefault(); // disable text selection on dblclick;
  };
}

export default Checkbox;
