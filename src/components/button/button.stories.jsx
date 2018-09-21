import React from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, boolean, text, select } from '@storybook/addon-knobs';
import Button from './button';
import IconSearch from '../icons/icon-search/icon-search';

const sizes = {
  normal: 'Normal',
  small: 'Small'
};

const variants = {
  default: 'Default',
  primary: 'Primary',
  accent: 'Accent'
};

const iconVariants = {
  secondary: 'Secondary',
  flat: 'Flat'
};

const Wrapper = styled.h3`
  padding: 32px;
`;

storiesOf('UI/Button', module)
  .addDecorator(withKnobs)
  .add(
    'Main',
    withInfo({
      inline: true
    })(() => (
      <Wrapper>
        <Button
          title={text('Title', 'Click me!')}
          size={select('Size', sizes, 'normal')}
          variant={select('Variant', variants, 'default')}
          disabled={boolean('Disabled', false)}
          expanded={boolean('Expanded', false)}
        />
      </Wrapper>
    ))
  );

storiesOf('UI/Button', module)
  .addDecorator(withKnobs)
  .add(
    'Left icon',
    withInfo({
      inline: true,
      text: 'Button without modifiers'
    })(() => (
      <Wrapper>
        <Button
          title={text('Title', 'Click me!')}
          variant={select('Variant', variants, 'default')}
          disabled={boolean('Disabled', false)}
          expanded={boolean('Expanded', false)}
          iconPrepend={<IconSearch />}
          size="small"
        />
      </Wrapper>
    ))
  )
  .add(
    'Right icon',
    withInfo({
      inline: true,
      text: 'Button with modifier "primary"'
    })(() => (
      <Wrapper>
        <Button
          title={text('Title', 'Click me!')}
          size="small"
          variant={select('Variant', variants, 'default')}
          disabled={boolean('Disabled', false)}
          expanded={boolean('Expanded', false)}
          iconAppend={<IconSearch />}
        />
      </Wrapper>
    ))
  );

storiesOf('UI/Button', module)
  .addDecorator(withKnobs)
  .add(
    'Icon',
    withInfo({
      inline: true,
      text: 'Button with icon only'
    })(() => (
      <Wrapper>
        <Button
          variant={select('Variant', iconVariants, 'secondary')}
          disabled={boolean('Disabled', false)}
          iconPrepend={<IconSearch />}
          size="small"
        />
      </Wrapper>
    ))
  );
