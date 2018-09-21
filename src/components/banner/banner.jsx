import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import Media from 'react-media';
import cn from 'classnames';

import Button from '../button/button';
import Container from '../container/container';
import PromoCode from '../promo-code/promo-code';

import './banner.css';

const { shape, string, oneOf, bool } = PropTypes;

class Banner extends Component {
  static propTypes = {
    banner: shape({
      image: string,
      label: string,
      title: string,
      description: string
    }),
    align: oneOf(['left', 'right', 'center']),
    theme: oneOf(['dark', 'light']),
    promo: string,
    withOverlay: bool,
    themeColor: string
  };

  static defaultProps = {
    align: 'center',
    theme: 'light',
    withOverlay: false,
    themeColor: '#262931'
  };

  render() {
    const { banner, align, theme, withOverlay, themeColor, promo } = this.props;

    const bannerStyle = {
      backgroundImage: `url(${banner.image})`,
      color: themeColor
    };

    if (!withOverlay) {
      delete bannerStyle.color;
    }

    const _buttonText = banner.buttonText || 'подробнее';

    return (
      <div
        className={cn('Banner', {
          [`Banner--align-${align}`]: align,
          [`Banner--theme-${theme}`]: theme,
          'Banner--withOverlay': withOverlay
        })}
        style={bannerStyle}
      >
        <Container>
          <div className="Banner-contentHolder">
            <div className="Banner-content">
              <div className="Banner-label">{banner.label}</div>
              <h2 className="Banner-title">{banner.title}</h2>
              <p className="Banner-description">{banner.description}</p>
              <div className="Banner-actions">
                <Media query="(max-width: 840px)">
                  {isSmallDevices => (
                    <Fragment>
                      {promo && (
                        <div className="Banner-button">
                          <PromoCode
                            code={promo}
                            inverted={theme !== 'light'}
                            size={isSmallDevices ? 'small' : null}
                            themeColor={themeColor}
                            withOverlay={withOverlay}
                          />
                        </div>
                      )}

                      <div className="Banner-button">
                        <Button
                          size={isSmallDevices ? 'small' : null}
                          title={_buttonText}
                          variant="primary"
                          inverted={theme !== 'light'}
                        />
                      </div>
                    </Fragment>
                  )}
                </Media>
              </div>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}

export default Banner;
