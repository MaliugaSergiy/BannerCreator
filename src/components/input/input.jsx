import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import MaskedInput from 'react-text-mask';
import './input.css';
import isFunction from '../../utils/is-function';

const { string, bool, element, oneOf } = PropTypes;

class Input extends Component {
  static propTypes = {
    /**
     * Input placeholder
     */
    placeholder: string,

    /**
     * Flag of input disabled state
     */
    disabled: bool,

    /**
     * Ability of Input to be selected
     */
    selectable: bool,

    /**
     * Focus input flag
     */
    isFocused: bool,

    /**
     * Stores the state of the field. 'Error' - state when a validation error occurs
     */
    state: oneOf(['default', 'error']),

    /**
     * Adjust input size. The default state is normal
     */
    size: oneOf(['normal', 'small']),

    /**
     * Element, which is on the left of input`s content
     */
    prepended: element,

    /**
     * Element, which is on the right of input`s content
     */
    appended: element,

    mask: MaskedInput.propTypes.mask
  };

  static defaultProps = {
    placeholder: '',
    disabled: false,
    selectable: true,
    state: 'default',
    size: 'normal',
    prepended: null,
    appended: null,
    mask: null
  };

  render() {
    const {
      selectable,
      size,
      state,
      prepended,
      appended,
      inputRef,
      isFocused,
      mask,

      ...rest
    } = this.props;

    return (
      <div
        className={classNames('Input', {
          'Input--focused': isFocused,
          'Input--small': size === 'small',
          'Input--error': state === 'error',
          'Input--selectable': selectable,
          'Input--withLeftGap': prepended,
          'Input--withRightGap': appended
        })}
      >
        {prepended && <span className="Input-prepended">{prepended}</span>}

        {mask ? (
          <MaskedInput
            mask={mask}
            {...rest}
            render={(ref, props) => (
              <input
                className="Input-field"
                ref={this.handleBothRefs(ref)}
                {...props}
              />
            )}
          />
        ) : (
          <input className="Input-field" ref={inputRef} {...rest} />
        )}

        {appended && <span className="Input-appended">{appended}</span>}
      </div>
    );
  }

  handleBothRefs = ref => element => {
    const { inputRef } = this.props;
    ref(element);
    if (isFunction(inputRef)) {
      inputRef(element);
    }
  };
}

export default Input;
