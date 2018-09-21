import React from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';
import Textarea from './textarea';

const Wrapper = styled.div`
  padding: 32px;
`;

storiesOf('UI/Textarea', module)
  .addDecorator(withKnobs)
  .add(
    'Main',
    withInfo({
      inline: true
    })(() => (
      <Wrapper>
        <Textarea
          placeholder={text('Placeholder', 'Type text')}
          // value={text('Content', '')}
          opened={boolean('Opened', false)}
          disabled={boolean('Disabled', false)}
          autosize={boolean('Autosize', false)}
        />
      </Wrapper>
    ))
  );
