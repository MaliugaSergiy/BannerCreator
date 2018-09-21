import React from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

import Checkbox from './checkbox';

storiesOf('UI/Checkbox', module)
  .addDecorator(withKnobs)
  .add(
    'default',
    withInfo({
      inline: true
    })(() => (
      <Checkbox
        label={text('Checkbox label', 'Вариант 1')}
        name="checkbox"
        value="v1"
        disabled={boolean('Disabled', false)}
      />
    ))
  );
