import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Form from './../form/form';
import LeftLabeledField from './../left-labeled-field/left-labeled-field';
import Input from './../input/input';
import Checkbox from './../checkbox/checkbox';
import Container from '../container/container';

import isFunction from '../../utils/is-function';

class BannerEditor extends Component {
  render() {
    const { banner, promo, withOverlay, themeColor } = this.props;

    return (
      <div className="banner-editor">
        <Container>
          <Form>
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

            <Form.LeftLabeledRow>
              <LeftLabeledField label="With overlay" size="small">
                <Checkbox
                  label="Задать подложку"
                  name="With_overlay"
                  checked={withOverlay}
                  onChange={this.handleOverlayChange}
                />
              </LeftLabeledField>
            </Form.LeftLabeledRow>
            {withOverlay && (
              <Form.LeftLabeledRow>
                <LeftLabeledField label="Цвет подложки" size="small">
                  <input
                    type="color"
                    onChange={this.handleOverlayColorChange}
                    value={themeColor}
                  />
                </LeftLabeledField>
              </Form.LeftLabeledRow>
            )}
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

  handleOverlayChange = () => {
    const { onOverlayChange } = this.props;
    onOverlayChange();
  };

  handleOverlayColorChange = e => {
    const { onOverlayColorChange } = this.props;
    const { value } = e.target;

    if (!isFunction(onOverlayColorChange)) {
      return;
    }
    onOverlayColorChange(value);
  };
}

BannerEditor.propTypes = {};

export default BannerEditor;
