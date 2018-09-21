import React, { Component } from 'react';
import PropTypes from 'prop-types';

import cn from 'classnames';

import './promo-code.css';

const { string, bool } = PropTypes;

class PromoCode extends Component {
  static propTypes = {
    code: string,
    size: bool,
    inverted: bool,
    themeColor: string,
    withOverlay: bool
  };

  codeText = null;

  render() {
    const { code, size, inverted, themeColor, withOverlay } = this.props;

    let promoStyle = { color: themeColor };

    if (!withOverlay) {
      delete promoStyle.color;
    }

    return (
      <label
        title="Кликните чтобы скопировать"
        className={cn('PromoCode', {
          [`PromoCode--size-${size}`]: size,
          'PromoCode--inverted': inverted,
          'PromoCode--onOverlay': withOverlay
        })}
        style={promoStyle}
      >
        <div className="PromoCode-holder">
          <div className="PromoCode-title">Промокод:</div>
          <input
            className="PromoCode-input"
            ref={this.setCodeTextRef}
            type="text"
            value={code}
            readOnly
            size={code.length}
            onClick={this.handleClick}
          />
        </div>
      </label>
    );
  }

  copyToClipboard() {
    this.codeText.select();
    document.execCommand('copy');
  }

  setCodeTextRef = element => {
    if (!element) return;
    this.codeText = element;
  };

  handleClick = () => {
    this.copyToClipboard();
  };
}

export default PromoCode;
