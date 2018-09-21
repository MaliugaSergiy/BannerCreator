import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import {
  withKnobs,
  select,
  boolean,
  text,
  number,
  color
} from '@storybook/addon-knobs';

import Banner from '../banner/banner';

const align = {
  left: 'Left',
  center: 'Center',
  right: 'Right'
};

const theme = {
  dark: 'Dark',
  light: 'Light'
};

storiesOf('UI/Banner', module)
  .addDecorator(withKnobs)
  .add(
    'default',
    withInfo({})(() => {
      const labelText = text('Text_Label', 'Новинки');
      const buttonText = text('Button_Label', 'Акция');
      const titleText = text(
        'Text_Title',
        'Сияй, влюбляй, вдохновляй вместе с Unicorn!'
      );
      const descriptionText = text(
        'Text_Description',
        'Три волшебных средства станут твоими верными спутниками! Они будут трудиться без перерывов, день ото дня делая твою кожу совершенной!'
      );

      const firstImage = text(
        'First image',
        'https://mixit.ru/upload/iblock/797/797ed3ee9e2036a7ba7a768bbfe44375.png'
      );

      const image = [
        firstImage,
        '/content/banners/banner-1.jpg',
        '/content/banners/banner-2.jpg',
        '/content/banners/banner-3.jpg',
        '/content/banners/banner-4.jpg',
        '/content/banners/blog-banner.jpg'
      ];

      const numberOptions = {
        range: false,
        min: 1,
        max: image.length,
        step: 1
      };

      const selectedImage = image[number('Choice_image', 1, numberOptions) - 1];

      return (
        <Banner
          banner={{
            image: selectedImage,
            label: labelText,
            title: titleText,
            description: descriptionText,
            buttonText: buttonText
          }}
          align={select('Align', align, 'left')}
          theme={select('Theme', theme, 'light')}
          promo={
            boolean('Promo', true)
              ? text('Promo_text', 'winter2018')
              : undefined
          }
          withOverlay={boolean('withOverlay', true)}
          themeColor={
            boolean('Overlay_SetColor', true)
              ? color('Overlay_(Color - do not set alpha)', '#262931')
              : undefined
          }
        />
      );
    })
  );
