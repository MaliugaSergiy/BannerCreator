import React from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, boolean, select } from '@storybook/addon-knobs';
import LeftLabeledField from './left-labeled-field';
import Input from '../input/input';

const sizes = {
  normal: 'Normal',
  small: 'Small'
};

const Wrapper = styled.div`
  padding: 32px;
`;

storiesOf('UI/LeftLabeledField', module)
  .addDecorator(withKnobs)
  .add(
    'Default',
    withInfo({
      inline: true
    })(() => (
      <Wrapper>
        <LeftLabeledField
          label={boolean('Label', true) ? 'Пароль' : ''}
          error={
            boolean('Error', false)
              ? 'Пароль должен содержать хотя бы одну цифру'
              : ''
          }
          size={select('Size', sizes, 'normal')}
        >
          <Input
            placeholder="Пароль"
            size={select('Input size', sizes, 'normal')}
          />
        </LeftLabeledField>
      </Wrapper>
    ))
  );
