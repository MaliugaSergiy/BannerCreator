import React, { Component } from 'react';

import Form from './../form/form';
import LeftLabeledField from './../left-labeled-field/left-labeled-field';
import Input from './../input/input';
import Checkbox from './../checkbox/checkbox';
import Container from '../container/container';
import ColorPicker from '../coor-picker/coor-picker';
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
            <Form.LeftLabeledRow>
              <LeftLabeledField label="Изображение и подложка" size="small">
                <div className="BannerEditor-background">
                  <div className="BannerEditor-backgroundSelect">
                    <SelectImage onImageAccept={onImageAccept} />
                  </div>
                  <div className="BannerEditor-choiceColor">
                    <Checkbox
                      label="Задать подложку"
                      name="With_overlay"
                      checked={withOverlay}
                      onChange={onOverlayChange}
                    />
                    {withOverlay && (
                      <div className="BannerEditor-setColor">
                        <ColorPicker
                          onChange={onOverlayColorChange}
                          themeColor={themeColor}
                        />
                      </div>
                    )}
                  </div>
                </div>
              </LeftLabeledField>
            </Form.LeftLabeledRow>

            <Form.LeftLabeledRow>
              <LeftLabeledField label="Лейбл баннера" size="small">
                <Input
                  value={banner.label}
                  size="small"
                  onChange={this.handelLabelChange}
                />
              </LeftLabeledField>
            </Form.LeftLabeledRow>
            <Form.LeftLabeledRow>
              <LeftLabeledField label="Заголовок баннера" size="small">
                <Input
                  value={banner.title}
                  size="small"
                  onChange={this.handelTitleChange}
                />
              </LeftLabeledField>
            </Form.LeftLabeledRow>
            <Form.LeftLabeledRow>
              <LeftLabeledField label="Описание баннера" size="small">
                <Input
                  value={banner.description}
                  size="small"
                  onChange={this.handelDescriptionChange}
                />
              </LeftLabeledField>
            </Form.LeftLabeledRow>
            <Form.LeftLabeledRow>
              <LeftLabeledField
                label="Текст кнопки (по умолчанию 'ПОДРОБНЕЕ')"
                size="small"
              >
                <Input
                  value={banner.buttonText}
                  size="small"
                  onChange={this.handelTextButtonChange}
                />
              </LeftLabeledField>
            </Form.LeftLabeledRow>

            <Form.LeftLabeledRow>
              <LeftLabeledField label="Промокод" size="small">
                <Input
                  value={promo}
                  size="small"
                  onChange={this.handelPromoTextChange}
                />
              </LeftLabeledField>
            </Form.LeftLabeledRow>
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
