import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import Button from './button';

const ButtonOverview = styled.div`
  padding: 16px 32px;
  background-color: #888;
`;
const Title = styled.h2`
  margin: 24px 0;
  line-height: 1.2;
  color: #262931;
  font-size: 20px;
  color: #fff;
`;

const Subtitle = styled.h3`
  margin: 12px 0;
  line-height: 1.2;
  color: #444952;
  font-size: 16px;
  font-weight: 400;
  color: #fff;
`;

const Grid = styled.div`
  display: flex;
  margin: 0 -24px;
  margin-bottom: 48px;
  overflow: hidden;

  &:last-child {
    margin-bottom: 0;
  }
`;

const Column = styled.div`
  padding: 0 24px;
`;

const ButtonState = styled.span`
  color: #818690;
  font-size: 14px;
  font-weight: 300;
  color: #fff;
`;

const Item = styled.div`
  margin: 4px 0;
  padding: 8px 0;

  &:first-child {
    margin: 0;
    padding: 0;
  }

  &:last-child {
    margin: 0;
  }
`;

storiesOf('UI/Button', module).add('Overview inverted', () => (
  <ButtonOverview>
    <Title>Buttons</Title>
    <Subtitle>Large 50px</Subtitle>
    <Grid>
      <Column>
        <Item>
          <ButtonState>Normal</ButtonState>
        </Item>
        <Item>
          <Button title="Primary" variant="primary" inverted />
        </Item>
      </Column>
      <Column>
        <Item>
          <ButtonState>Disabled</ButtonState>
        </Item>
        <Item>
          <Button title="Primary" variant="primary" inverted disabled />
        </Item>
      </Column>
    </Grid>

    <Subtitle>Small 40px</Subtitle>
    <Grid>
      <Column>
        <Item>
          <ButtonState>Normal</ButtonState>
        </Item>
        <Item>
          <Button title="Primary" variant="primary" size="small" inverted />
        </Item>
      </Column>
      <Column>
        <Item>
          <ButtonState>Disabled</ButtonState>
        </Item>
        <Item>
          <Button
            title="Primary"
            variant="primary"
            size="small"
            inverted
            disabled
          />
        </Item>
      </Column>
    </Grid>
  </ButtonOverview>
));
