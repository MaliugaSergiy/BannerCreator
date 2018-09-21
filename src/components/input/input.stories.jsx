import React from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, select, boolean } from '@storybook/addon-knobs';
import Input from './input';
import IconContainer from 'modules/core/components/icon-container/icon-container';
import IconUser from 'modules/core/components/icons/icon-user/icon-user';
import IconSearch from 'modules/core/components/icons/icon-search/icon-search';

const sizes = {
  normal: 'Normal',
  small: 'Small'
};

const error = {
  default: 'Default',
  error: 'Error'
};

const Wrapper = styled.div`
  padding: 32px;
`;

const IconWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

storiesOf('UI/Input', module)
  .addDecorator(withKnobs)
  .add(
    'Main',
    withInfo({
      inline: true
    })(() => (
      <Wrapper>
        <Input
          size={select('Size', sizes, 'normal')}
          state={select('State', error, 'default')}
          disabled={boolean('Disabled', false)}
          placeholder="Type text"
        />
      </Wrapper>
    ))
  )

  .add(
    'Prepended',
    withInfo({
      inline: true
    })(() => (
      <Wrapper>
        <Input
          size={select('Size', sizes, 'normal')}
          state={select('State', error, 'default')}
          disabled={boolean('Disabled', false)}
          placeholder="Type text"
          prepended={
            <IconWrapper>
              <IconContainer size="small">
                <IconUser />
              </IconContainer>
            </IconWrapper>
          }
        />
      </Wrapper>
    ))
  )

  .add(
    'Appended',
    withInfo({
      inline: true
    })(() => (
      <Wrapper>
        <Input
          size={select('Size', sizes, 'normal')}
          state={select('State', error, 'default')}
          disabled={boolean('Disabled', false)}
          placeholder="Type text"
          appended={
            <IconWrapper>
              <IconContainer size="small">
                <IconSearch />
              </IconContainer>
            </IconWrapper>
          }
        />
      </Wrapper>
    ))
  )

  .add(
    'Both',
    withInfo({
      inline: true
    })(() => (
      <Wrapper>
        <Input
          size={select('Size', sizes, 'normal')}
          state={select('State', error, 'default')}
          disabled={boolean('Disabled', false)}
          placeholder="Type text"
          prepended={
            <IconWrapper>
              <IconContainer size="small">
                <IconUser />
              </IconContainer>
            </IconWrapper>
          }
          appended={
            <IconWrapper>
              <IconContainer size="small">
                <IconSearch />
              </IconContainer>
            </IconWrapper>
          }
        />
      </Wrapper>
    ))
  );
