import React, { Component } from 'react';
import BannerCreator from './../components/banner-creator/banner-creator';

class BannerCreatorContainer extends Component {
  state = {
    banner: {
      image:
        'https://mixit.ru/upload/iblock/797/797ed3ee9e2036a7ba7a768bbfe44375.png',
      label: 'Новинки',
      title: 'Сияй, влюбляй, вдохновляй вместе с Unicorn!',
      description:
        'Три волшебных средства станут твоими верными спутниками! Они будут трудиться без перерывов, день ото дня делая твою кожу совершенной!',
      buttonText: 'Акция'
    },
    align: 'left',
    theme: 'light',
    withOverlay: true,
    themeColor: '#262931',
    promo: 'winter2018'
  };
  render() {
    return (
      <BannerCreator
        {...this.state}
        onLabelChange={this.handelLabelChange}
        onTitleChange={this.handelTitleChange}
        onDescriptionChange={this.handelDescriptionChange}
        onTextButtonChange={this.handelTextButtonChange}
        onPromoTextChange={this.handelPromoTextChange}
        onOverlayChange={this.handleOverlayChange}
        onOverlayColorChange={this.handleOverlayColorChange}
        onGetFiles={this.handleGetFiles}
        onImageAccept={this.handleImageAccept}
      />
    );
  }

  handelLabelChange = label => {
    this.setState(state => ({ banner: { ...state.banner, label } }));
  };

  handelTitleChange = title => {
    this.setState(state => ({ banner: { ...state.banner, title } }));
  };

  handelDescriptionChange = description => {
    this.setState(state => ({
      banner: { ...state.banner, description }
    }));
  };

  handelTextButtonChange = buttonText => {
    this.setState(state => ({
      banner: { ...state.banner, buttonText }
    }));
  };

  handelPromoTextChange = promo => {
    this.setState({ promo });
  };

  handleOverlayChange = () => {
    this.setState(state => ({ withOverlay: !state.withOverlay }));
  };

  handleOverlayColorChange = themeColor => {
    this.setState({ themeColor });
  };

  handleGetFiles = image => {
    this.setState(state => ({ banner: { ...state.banner, image } }));
  };

  handleImageAccept = e => {
    const file = e.target.files[0];

    const image = URL.createObjectURL(file);
    this.setState(state => ({ banner: { ...state.banner, image } }));
  };
}

export default BannerCreatorContainer;
