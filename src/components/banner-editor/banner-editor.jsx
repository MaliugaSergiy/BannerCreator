import React, { Component } from 'react';

import Form from './../form/form';
import Radio from './../radio/radio';
import Input from './../input/input';
import Field from './../field/field';
import Checkbox from './../checkbox/checkbox';
import TextArea from './../textarea/textarea';
import Container from '../container/container';
import isFunction from '../../utils/is-function';
import FormGroup from './../form-group/form-group';
import ColorPicker from '../color-picker/color-picker';
import SelectImage from '../select-image/select-image';
import InlineField from './../inline-field/inline-field';
import FormGroupItem from './../form-group/form-group-item';
import { FieldsetChoice, FieldsetChoiceItem } from '../fieldset-choice';

import './banner-editor.css';

const ALIGN_OPTIONS = ['left', 'center', 'right'];
const THEME_OPTIONS = ['light', 'dark'];

class BannerEditor extends Component {
  render() {
    const {
      banner,
      promo,
      align,
      theme,
      withOverlay,
      themeColor,
      onImageAccept,
      onOverlayColorChange,
      onOverlayChange,
      onAlignChange,
      onThemeChange
    } = this.props;

    return (
      <div className="BannerEditor">
        <Container>
          <Form>
            <Form.Row>
              <FormGroup>
                <FormGroupItem>
                  <Field label="Изображение фона" size="small">
                    <SelectImage onImageAccept={onImageAccept} />
                  </Field>
                </FormGroupItem>
                <FormGroupItem>
                  <Field label="Подложка фона" size="small">
                    <Checkbox
                      label="Задать подложку"
                      name="With_overlay"
                      checked={withOverlay}
                      onChange={onOverlayChange}
                    />
                  </Field>
                </FormGroupItem>
                {withOverlay && (
                  <FormGroupItem>
                    <ColorPicker
                      onChange={onOverlayColorChange}
                      themeColor={themeColor}
                    />
                  </FormGroupItem>
                )}
              </FormGroup>
            </Form.Row>

            <Form.Row>
              <Field label="Заголовок баннера" size="small">
                <Input
                  value={banner.title}
                  size="small"
                  onChange={this.handelTitleChange}
                />
              </Field>
            </Form.Row>

            <Form.Row>
              <FormGroup>
                <FormGroupItem>
                  <Field label="Лейбл баннера" size="small">
                    <Input
                      value={banner.label}
                      size="small"
                      onChange={this.handelLabelChange}
                    />
                  </Field>
                </FormGroupItem>
                <FormGroupItem>
                  <Field label="Текст кнопки" size="small">
                    <Input
                      value={banner.buttonText}
                      size="small"
                      onChange={this.handelTextButtonChange}
                    />
                  </Field>
                </FormGroupItem>
                <FormGroupItem>
                  <Field label="Промокод" size="small">
                    <Input
                      value={promo}
                      size="small"
                      onChange={this.handelPromoTextChange}
                    />
                  </Field>
                </FormGroupItem>
              </FormGroup>
            </Form.Row>
            <Form.Row>
              <Field label="Описание баннера" size="small">
                <TextArea
                  value={banner.description}
                  size="small"
                  onChange={this.handelDescriptionChange}
                  autosize
                />
              </Field>
            </Form.Row>
            <Form.Row>
              <InlineField label="Выравнивание">
                <FieldsetChoice inline>
                  {ALIGN_OPTIONS.map(option => (
                    <FieldsetChoiceItem key={option}>
                      <Radio
                        label={`${option[0].toUpperCase()}${option.slice(1)}`}
                        name="align"
                        value={option}
                        checked={align === option}
                        onChange={onAlignChange}
                      />
                    </FieldsetChoiceItem>
                  ))}
                </FieldsetChoice>
              </InlineField>
            </Form.Row>
            <Form.Row>
              <InlineField label="Тема">
                <FieldsetChoice inline>
                  {THEME_OPTIONS.map(option => (
                    <FieldsetChoiceItem key={option}>
                      <Radio
                        label={`${option[0].toUpperCase()}${option.slice(1)}`}
                        name="theme"
                        value={option}
                        checked={theme === option}
                        onChange={onThemeChange}
                      />
                    </FieldsetChoiceItem>
                  ))}
                </FieldsetChoice>
              </InlineField>
            </Form.Row>
          </Form>
        </Container>
      </div>
    );
  }

  handelLabelChange = e => {
    const { onLabelChange } = this.props;
    const { value } = e.target;

    if (!isFunction(onLabelChange)) {
      return;
    }
    onLabelChange(value);
  };

  handelTitleChange = e => {
    const { onTitleChange } = this.props;
    const { value } = e.target;

    if (!isFunction(onTitleChange)) {
      return;
    }
    onTitleChange(value);
  };

  handelDescriptionChange = e => {
    const { onDescriptionChange } = this.props;
    const { value } = e.target;

    if (!isFunction(onDescriptionChange)) {
      return;
    }
    onDescriptionChange(value);
  };

  handelTextButtonChange = e => {
    const { onTextButtonChange } = this.props;
    const { value } = e.target;

    if (!isFunction(onTextButtonChange)) {
      return;
    }
    onTextButtonChange(value);
  };

  handelPromoTextChange = e => {
    const { onPromoTextChange } = this.props;
    const { value } = e.target;

    if (!isFunction(onPromoTextChange)) {
      return;
    }
    onPromoTextChange(value);
  };

  handleOverlayColorChange = e => {
    const { onOverlayColorChange } = this.props;
    const { value } = e.target;

    if (!isFunction(onOverlayColorChange)) {
      return;
    }
    onOverlayColorChange(value);
  };

  handleOverlayColorPickerChange = color => {
    const { onOverlayColorChange } = this.props;
    const { hex } = color;

    if (!isFunction(onOverlayColorChange)) {
      return;
    }
    onOverlayColorChange(hex);
  };
}

export default BannerEditor;
