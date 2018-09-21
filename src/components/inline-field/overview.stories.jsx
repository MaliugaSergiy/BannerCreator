import React from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';
import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs';
import InlineField from './inline-field';
import Form from '../form/form';
import { FieldsetChoice, FieldsetChoiceItem } from '../fieldset-choice';
import Radio from '../radio/radio';
import Input from '../input/input';
import DropdownSelect from 'modules/ordering/components/pick-point-dialog/dropdown-select/dropdown-select';
import IconMetro from 'modules/core/components/icons/icon-metro/icon-metro';

const Wrapper = styled.div`
  padding: 32px;
`;

const stationsList = [
  {
    id: 1,
    line: {
      id: 4,
      color: '#03c0f4'
    },
    title: 'Выставочная'
  },
  {
    id: 2,
    line: {
      id: 4,
      color: '#03c0f4'
    },
    title: 'Багратионовская'
  },
  {
    id: 3,
    line: {
      id: 1,
      color: '#ef2d23'
    },
    title: 'Юго-Западная'
  },
  {
    id: 4,
    line: {
      id: 6,
      color: '#f58233'
    },
    title: 'Беляево'
  },
  {
    id: 5,
    line: {
      id: 6,
      color: '#f58233'
    },
    title: 'Шаболовская'
  },
  {
    id: 6,
    line: {
      id: 14,
      color: '#fff',
      stroke: '#ef2d23'
    },
    title: 'Крымская'
  },
  {
    id: 7,
    line: {
      id: 10,
      color: '#b3d445'
    },
    title: 'Кожуховская'
  },
  {
    id: 8,
    line: {
      id: 10,
      color: '#b3d445'
    },
    title: 'Печатники'
  },
  {
    id: 9,
    line: {
      id: 8,
      color: '#ffcb33'
    },
    title: 'Перово'
  },
  {
    id: 10,
    line: {
      id: 3,
      color: '#0278bf'
    },
    title: 'Измайловская'
  },
  {
    id: 11,
    line: {
      id: 1,
      color: '#ef2d23'
    },
    title: 'Сокольники'
  },
  {
    id: 12,
    line: {
      id: 6,
      color: '#f58233'
    },
    title: 'ВДНХ'
  },
  {
    id: 13,
    line: {
      id: 10,
      color: '#b3d445'
    },
    title: 'Марьина Роща'
  }
];

storiesOf('UI/InlineField', module)
  .addDecorator(withKnobs)
  .add(
    'Overview',
    withInfo({
      inline: true
    })(() => (
      <Wrapper>
        <Form>
          <Form.Row>
            <InlineField label="Станция метро">
              <DropdownSelect placeholder="Выберите станцию">
                {stationsList.map(item => (
                  <DropdownSelect.Option
                    key={item.id}
                    value={item.id}
                    icon={
                      <IconMetro
                        color={item.line.color}
                        stroke={item.line.stroke}
                      />
                    }
                  >
                    {item.title}
                  </DropdownSelect.Option>
                ))}
              </DropdownSelect>
            </InlineField>
          </Form.Row>
          <Form.Row>
            <InlineField label="Ваш пол" error="Пожалуйста, выберите Ваш пол">
              <FieldsetChoice inline>
                <FieldsetChoiceItem>
                  <Radio label="Мужской" name="gender" value="male" />
                </FieldsetChoiceItem>
                <FieldsetChoiceItem>
                  <Radio label="Женский" name="gender" value="female" />
                </FieldsetChoiceItem>
              </FieldsetChoice>
            </InlineField>
          </Form.Row>
          <Form.Row>
            <InlineField label="Телефон" error="Введен недопустимый символ">
              <Input placeholder="Начните ввод" size="small" state="error" />
            </InlineField>
          </Form.Row>
        </Form>
      </Wrapper>
    ))
  );
