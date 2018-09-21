import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, select, boolean } from '@storybook/addon-knobs';

import PromoCode from './promo-code';

const sizes = {
  small: 'Small',
  normal: 'Normal'
};

storiesOf('UI/PromoCode', module)
  .addDecorator(withKnobs)
  .add(
    'default',
    withInfo()(() => (
      <PromoCode
        code="winter2018"
        size={select('Size', sizes, 'normal')}
        inverted={boolean('Inverted', true)}
      />
    ))
  );
