import React from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, boolean, select } from '@storybook/addon-knobs';
import InlineField from './inline-field';
import Input from '../input/input';

const sizes = {
  normal: 'Normal',
  small: 'Small'
};

const Wrapper = styled.div`
  padding: 32px;
`;

storiesOf('UI/InlineField', module)
  .addDecorator(withKnobs)
  .add(
    'Default',
    withInfo({
      inline: true
    })(() => (
      <Wrapper>
        <InlineField
          label={boolean('Label', true) ? 'Дата рождения' : ''}
          error={
            boolean('Error', false)
              ? 'Пожалуйста, введите дату рождения в формате YY-MM-DD'
              : ''
          }
        >
          <Input
            placeholder="Дата рождения"
            size={select('Input size', sizes, 'normal')}
          />
        </InlineField>
      </Wrapper>
    ))
  );
