import React from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, boolean, select } from '@storybook/addon-knobs';
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

const Test = styled.div`
  padding: 32px;
`;

const Case = styled.h3`
  margin-bottom: 48px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const Title = styled.h2`
  margin: 0;
  margin-bottom: 8px;
  font-size: 14px;
`;

const LimitedContainer = styled.div`
  width: 250px;
`;

storiesOf('UI/Button', module)
  .addDecorator(withKnobs)
  .add(
    'Test cases',
    withInfo({
      inline: true
    })(() => (
      <Test>
        <Case>
          <Title>Переполненная текстом кнопка</Title>
          <LimitedContainer>
            <Button
              title="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                     Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
              size={select('Size', sizes, 'normal')}
              variant={select('Variant', variants, 'default')}
              disabled={boolean('Disabled', false)}
            />
          </LimitedContainer>
        </Case>

        <Case>
          <Title>Переполненная текстом кнопка с иконкой слева</Title>
          <LimitedContainer>
            <Button
              title="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                     Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
              iconPrepend={<IconSearch />}
              size={select('Size', sizes, 'normal')}
              variant={select('Variant', variants, 'default')}
              disabled={boolean('Disabled', false)}
            />
          </LimitedContainer>
        </Case>

        <Case>
          <Title>Переполненная текстом кнопка с иконкой справа</Title>
          <LimitedContainer>
            <Button
              title="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                     Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
              iconAppend={<IconSearch />}
              size={select('Size', sizes, 'normal')}
              variant={select('Variant', variants, 'default')}
              disabled={boolean('Disabled', false)}
            />
          </LimitedContainer>
        </Case>

        <Case>
          <Title>Кнопка с шириной, равной 100%</Title>
          <Button
            title="Button"
            size={select('Size', sizes, 'normal')}
            variant={select('Variant', variants, 'default')}
            disabled={boolean('Disabled', false)}
            expanded
          />
        </Case>

        <Case>
          <Title>Переполненная текстом кнопка с шириной, равной 100%</Title>
          <Button
            title="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                   Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            size={select('Size', sizes, 'normal')}
            variant={select('Variant', variants, 'default')}
            disabled={boolean('Disabled', false)}
            expanded
          />
        </Case>

        <Case>
          <Title>Кнопка с шириной, равной 100%, и иконкой слева</Title>
          <Button
            title="Button"
            iconPrepend={<IconSearch />}
            size={select('Size', sizes, 'normal')}
            variant={select('Variant', variants, 'default')}
            disabled={boolean('Disabled', false)}
            expanded
          />
        </Case>

        <Case>
          <Title>Кнопка с шириной, равной 100%, и иконкой справа</Title>
          <Button
            title="Button"
            iconAppend={<IconSearch />}
            size={select('Size', sizes, 'normal')}
            variant={select('Variant', variants, 'default')}
            disabled={boolean('Disabled', false)}
            expanded
          />
        </Case>

        <Case>
          <Title>
            Переполненная текстом кнопка с шириной, равной 100%, и иконкой слева
          </Title>
          <Button
            title="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                   Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            iconPrepend={<IconSearch />}
            size={select('Size', sizes, 'normal')}
            variant={select('Variant', variants, 'default')}
            disabled={boolean('Disabled', false)}
            expanded
          />
        </Case>
        <Case>
          <Title>
            Переполненная текстом кнопка с шириной, равной 100%, и иконкой
            справа
          </Title>
          <Button
            title="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                   Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            iconAppend={<IconSearch />}
            size={select('Size', sizes, 'normal')}
            variant={select('Variant', variants, 'default')}
            disabled={boolean('Disabled', false)}
            expanded
          />
        </Case>
      </Test>
    ))
  );
