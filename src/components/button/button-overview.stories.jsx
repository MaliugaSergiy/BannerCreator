import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import Button from './button';
import IconSearch from '../icons/icon-search/icon-search';

const ButtonOverview = styled.div`
  padding: 16px 32px;
`;

const Title = styled.h2`
  margin: 24px 0;
  line-height: 1.2;
  color: #262931;
  font-size: 20px;
`;

const Subtitle = styled.h3`
  margin: 12px 0;
  line-height: 1.2;
  color: #444952;
  font-size: 16px;
  font-weight: 400;
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

storiesOf('UI/Button', module).add('Overview', () => (
  <ButtonOverview>
    <Title>Buttons</Title>
    <Subtitle>Large 50px</Subtitle>
    <Grid>
      <Column>
        <Item>
          <ButtonState>Normal</ButtonState>
        </Item>
        <Item>
          <Button title="Primary" variant="primary" />
        </Item>
        <Item>
          <Button title="Default" />
        </Item>
        <Item>
          <Button title="Secondary" variant="secondary" />
        </Item>
        <Item>
          <Button title="Accent" variant="accent" />
        </Item>
      </Column>
      <Column>
        <Item>
          <ButtonState>Disabled</ButtonState>
        </Item>
        <Item>
          <Button title="Primary" variant="primary" disabled />
        </Item>
        <Item>
          <Button title="Default" disabled />
        </Item>
        <Item>
          <Button title="Secondary" variant="secondary" disabled />
        </Item>
        <Item>
          <Button title="Accent" variant="accent" disabled />
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
          <Button title="Primary" variant="primary" size="small" />
        </Item>
        <Item>
          <Button title="Default" size="small" />
        </Item>
        <Item>
          <Button title="Secondary" variant="secondary" size="small" />
        </Item>
        <Item>
          <Button title="Accent" variant="accent" size="small" />
        </Item>
      </Column>
      <Column>
        <Item>
          <ButtonState>Disabled</ButtonState>
        </Item>
        <Item>
          <Button title="Primary" variant="primary" size="small" disabled />
        </Item>
        <Item>
          <Button title="Default" size="small" disabled />
        </Item>
        <Item>
          <Button title="Secondary" variant="secondary" size="small" disabled />
        </Item>
        <Item>
          <Button title="Accent" variant="accent" size="small" disabled />
        </Item>
      </Column>
    </Grid>

    <Subtitle>small 40 px with icon</Subtitle>
    <Grid>
      <Column>
        <Item>
          <ButtonState>Normal</ButtonState>
        </Item>
        <Item>
          <Button
            title="Primary"
            variant="primary"
            iconAppend={<IconSearch />}
            size="small"
          />
        </Item>
        <Item>
          <Button title="Default" icon={<IconSearch />} size="small" />
        </Item>
        <Item>
          <Button variant="primary" icon={<IconSearch />} size="small" />
        </Item>
        <Item>
          <Button icon={<IconSearch />} size="small" />
        </Item>
        <Item>
          <Button variant="secondary" icon={<IconSearch />} size="small" />
        </Item>
      </Column>
      <Column>
        <Item>
          <ButtonState>Flat</ButtonState>
        </Item>
        <Item>
          <Button
            title="Primary"
            variant="primary"
            iconAppend={<IconSearch />}
            size="small"
            flat
          />
        </Item>
        <Item>
          <Button title="Default" icon={<IconSearch />} size="small" flat />
        </Item>
        <Item>
          <Button variant="primary" icon={<IconSearch />} size="small" flat />
        </Item>
        <Item>
          <Button icon={<IconSearch />} size="small" flat />
        </Item>
        <Item>
          <Button variant="secondary" icon={<IconSearch />} size="small" flat />
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
            iconAppend={<IconSearch />}
            size="small"
            disabled
          />
        </Item>
        <Item>
          <Button
            title="Default"
            iconAppend={<IconSearch />}
            size="small"
            disabled
          />
        </Item>
        <Item>
          <Button
            variant="primary"
            icon={<IconSearch />}
            size="small"
            disabled
          />
        </Item>
        <Item>
          <Button icon={<IconSearch />} size="small" disabled />
        </Item>
        <Item>
          <Button
            variant="secondary"
            iconAppend={<IconSearch />}
            size="small"
            disabled
          />
        </Item>
      </Column>
    </Grid>
  </ButtonOverview>
));
