import React, { Component } from 'react';
import Banner from '../banner/banner';
import BannerEditor from '../banner-editor/banner-editor';

class BannerCreator extends Component {
  render() {
    const {
      banner,
      align,
      theme,
      withOverlay,
      themeColor,
      promo,
      ...rest
    } = this.props;

    const parameters = { banner, align, theme, withOverlay, themeColor, promo };

    return (
      <div className="BannerCreator">
        <div className="BannerCreator-render">
          <Banner {...parameters} />
        </div>
        <div className="BannerCreator-editor">
          <BannerEditor {...parameters} {...rest} />
        </div>
      </div>
    );
  }
}

export default BannerCreator;
