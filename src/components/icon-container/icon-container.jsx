import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './icon-container.css';
import classNames from 'classnames';

class IconContainer extends Component {
  static propTypes = {
    size: PropTypes.oneOf([
      'tiny',
      'xsmall',
      'small',
      'medium',
      'large',
      'xlarge',
      'huge'
    ]),
    inline: PropTypes.bool
  };

  static defaultProps = {
    size: 'small',
    inline: false
  };

  render() {
    const { size, inline } = this.props;
    return (
      <span
        className={classNames('IconContainer', `IconContainer--size-${size}`, {
          'IconContainer--inline': inline
        })}
      >
        {this.props.children}
      </span>
    );
  }
}

export default IconContainer;
