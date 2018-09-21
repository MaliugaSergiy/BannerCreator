import React from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';
import { withInfo } from '@storybook/addon-info';
import LeftLabeledField from './left-labeled-field';
import Form from '../form/form';
import Input from '../input/input';
import EditableDate from '../editable-date/editable-date';
import EditablePhone from '../editable-phone/editable-phone';

const Overview = styled.div`
  padding: 32px;
`;

storiesOf('UI/LeftLabeledField', module).add(
  'Overview',
  withInfo({
    inline: true
  })(() => (
    <Overview>
      <Form>
        <Form.Row>
          <LeftLabeledField
            label="Телефон:"
            error="Номер должен содержать не менее 10 цифр"
            leftAligned
          >
            <Input placeholder="Телефон" />
          </LeftLabeledField>
        </Form.Row>
        <Form.Row>
          <LeftLabeledField label="Телефон:" leftAligned>
            <EditablePhone value="+7 898 88 88" size="small" />
          </LeftLabeledField>
        </Form.Row>
        <Form.Row>
          <LeftLabeledField label="Дата рождения:" leftAligned>
            <EditableDate value="1998-12-14" />
          </LeftLabeledField>
        </Form.Row>
      </Form>
    </Overview>
  ))
);
