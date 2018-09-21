import React from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

import Radio from './radio';

storiesOf('UI/Radio', module)
  .addDecorator(withKnobs)
  .add(
    'default',
    withInfo({
      inline: true
    })(() => (
      <Radio
        label={text('Checkbox label', 'Вариант 1')}
        name="checkbox"
        value="v1"
        disabled={boolean('Disabled', false)}
      />
    ))
  );
