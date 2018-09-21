import React from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';
import { withInfo } from '@storybook/addon-info';
import Field from './field';
import Form from '../form/form';
import FormGroup from '../form-group/form-group';
import Input from '../input/input';
import Textarea from '../textarea/textarea';
import Link from 'modules/core/components/link/short-link';
import Button from 'modules/core/components/button/button';
import IconContainer from 'modules/core/components/icon-container/icon-container';
import IconMetro from 'modules/core/components/icons/icon-metro/icon-metro';
import IconBasket from 'modules/core/components/icons/icon-basket/icon-basket';
import IconUser from 'modules/core/components/icons/icon-user/icon-user';

const exampleList = [
  <Link component="button" prependedIcon={<IconMetro color="#ffd600" />}>
    Бабушкинская
  </Link>,
  <Link component="button">ул. Переясловская</Link>,
  <Link component="button" prependedIcon={<IconBasket />}>
    ТРЦ "Лавина"
  </Link>
];

const Overview = styled.div`
  padding: 32px;
`;

const IconWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

storiesOf('UI/Field', module).add(
  'Overview',
  withInfo({
    inline: true
  })(() => (
    <Overview>
      <Form>
        <Form.Row labelTop>
          <FormGroup>
            <FormGroup.ItemWide>
              <Field
                label="Логин"
                error="Логин введен неверно. Пожалуйста, повторите попытку"
              >
                <Input
                  placeholder="Email или номер телефона"
                  state="error"
                  appended={
                    <IconWrapper>
                      <IconContainer size="small">
                        <IconUser />
                      </IconContainer>
                    </IconWrapper>
                  }
                />
              </Field>
            </FormGroup.ItemWide>
            <FormGroup.Item>
              <Button title="Войти" />
            </FormGroup.Item>
          </FormGroup>
        </Form.Row>

        <Form.Row>
          <FormGroup>
            <FormGroup.ItemWide>
              <Field exampleList={exampleList}>
                <Input placeholder="Начните ввод" />
              </Field>
            </FormGroup.ItemWide>
            <FormGroup.Item>
              <Button title="Поиск" variant="primary" />
            </FormGroup.Item>
          </FormGroup>
        </Form.Row>

        <Form.Row labelTop>
          <Field label="Недостатки">
            <Textarea placeholder="Чем вам не понравился товар?" autosize />
          </Field>
        </Form.Row>
      </Form>
    </Overview>
  ))
);
