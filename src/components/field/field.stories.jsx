import React from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, boolean, select } from '@storybook/addon-knobs';
import Field from './field';
import Input from '../input/input';
import IconMetro from 'modules/core/components/icons/icon-metro/icon-metro';
import IconBasket from 'modules/core/components/icons/icon-basket/icon-basket';
import Link from 'modules/core/components/link/short-link';
import IconContainer from 'modules/core/components/icon-container/icon-container';
import IconUser from 'modules/core/components/icons/icon-user/icon-user';

const sizes = {
  normal: 'Normal',
  small: 'Small'
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

const exampleList = [
  <Link component="button" prependedIcon={<IconMetro color="#ffd600" />}>
    Бабушкинская
  </Link>,
  <Link component="button">ул. Переясловская</Link>,
  <Link component="button" prependedIcon={<IconBasket />}>
    ТРЦ "Лавина"
  </Link>
];

storiesOf('UI/Field', module)
  .addDecorator(withKnobs)
  .add(
    'Default',
    withInfo({
      inline: true
    })(() => (
      <Wrapper>
        <Field
          label={boolean('Label', true) ? 'Логин' : ''}
          error={boolean('Error', false) ? 'Введен неверный логин' : ''}
          exampleList={boolean('Examples', false) ? exampleList : []}
        >
          <Input
            placeholder="Ваш email или username"
            size={select('Input size', sizes, 'normal')}
            appended={
              <IconWrapper>
                <IconContainer size="small">
                  <IconUser />
                </IconContainer>
              </IconWrapper>
            }
          />
        </Field>
      </Wrapper>
    ))
  );
