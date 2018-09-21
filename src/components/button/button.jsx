import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import IconContainer from '../icon-container/icon-container';
import './button.css';

const { string, bool, element, oneOf, oneOfType, func } = PropTypes;

const buttonToIconSize = {
  normal: 'small',
  small: 'xsmall'
};

class Button extends Component {
  static propTypes = {
    /** Contains button text **/
    title: string,

    /** Text visible on hover */
    caption: string,

    variant: oneOf(['default', 'primary', 'accent', `secondary`, `flat`]),

    size: oneOf(['normal', 'small']),

    /** No borders and background **/
    flat: bool,

    /** Displaying light version of button for dark backgrounds **/
    inverted: bool,

    /** Icon component displays at the left **/
    iconPrepend: element,

    /** Icon component displays at the right **/
    iconAppend: element,

    /** Alias for `iconPrepend` **/
    icon: element,

    /** Is button has to stretch to fill all possible horisontal space **/
    expanded: bool,

    /** Parent HTML-element or Component. The default element is `button` **/
    component: oneOfType([string, func])
  };

  static defaultProps = {
    title: '',
    caption: null,
    variant: 'default',
    size: 'normal',
    flat: false,
    inverted: false,
    disabled: false,
    expanded: false,
    icon: null,
    iconPrepend: null,
    iconAppend: null,
    component: 'button'
  };

  render() {
    const {
      component: ButtonComponent,
      variant,
      size,
      flat,
      inverted,
      expanded,
      title,
      icon,
      iconPrepend,
      iconAppend,
      caption,
      ...rest
    } = this.props;

    return (
      <ButtonComponent
        className={classNames(
          'Button',
          `Button--variant-${variant}`,
          `Button--size-${size}`,
          {
            'Button--flat': flat,
            'Button--inverted': inverted,
            'Button--expanded': expanded,
            'Button--iconOnly': !title
          }
        )}
        type="button"
        title={caption}
        {...rest}
      >
        {this.renderPrependedIcon()}
        {title.length > 0 && <span className="Button-title">{title}</span>}
        {this.renderAppendedIcon()}
      </ButtonComponent>
    );
  }

  renderPrependedIcon() {
    const { iconPrepend, icon, size } = this.props;
    const Icon = iconPrepend || icon;

    if (!Icon) {
      return null;
    }

    return (
      <span className="Button-icon">
        <IconContainer size={buttonToIconSize[size]}>{Icon}</IconContainer>
      </span>
    );
  }

  renderAppendedIcon() {
    const { iconAppend, size } = this.props;
    const Icon = iconAppend;

    if (!Icon) {
      return null;
    }

    return (
      <span className="Button-icon">
        <IconContainer size={buttonToIconSize[size]}>{Icon}</IconContainer>
      </span>
    );
  }
}

export default Button;
