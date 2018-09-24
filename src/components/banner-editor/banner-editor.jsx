import React, { Component } from 'react';

import Form from './../form/form';
import Input from './../input/input';
import TextArea from './../textarea/textarea';
import FormGroup from './../form-group/form-group';
import FormGroupItem from './../form-group/form-group-item';
import Field from './../field/field';
import Checkbox from './../checkbox/checkbox';
import Container from '../container/container';
import ColorPicker from '../color-picker/color-picker';
import isFunction from '../../utils/is-function';
import SelectImage from '../select-image/select-image';

import './banner-editor.css';

class BannerEditor extends Component {
  render() {
    const {
      banner,
      promo,
      withOverlay,
      themeColor,
      onImageAccept,
      onOverlayColorChange,
      onOverlayChange
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
