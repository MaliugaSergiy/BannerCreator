import React, { Component } from 'react';
import PropTypes from 'prop-types';

import contains from 'dom-helpers/query/contains';
import { SketchPicker } from 'react-color';
import invert from 'invert-color';

import isFunction from '../../utils/is-function';

import './color-picker.css';

const ESC_KEY = 27;

class CoorPicker extends Component {
  state = { colorPickerShow: false, currentColor: '' };

  static propTypes = {
    themeColor: PropTypes.string,
    onChange: PropTypes.func
  };

  _choiceElement = null;

  render() {
    const { colorPickerShow } = this.state;

    const { themeColor } = this.props;

    return (
      <div className="CoorPicker">
        <button
          className="CoorPicker-button"
          type="button"
          onClick={this.handlePickerTrigger}
          style={{
            backgroundColor: themeColor,
            color: invert(themeColor, true)
          }}
        >
          {themeColor}
        </button>
        {colorPickerShow && (
          <div className="CoorPicker-choice" ref={this.setChoiceElementRef}>
            <SketchPicker
              color={themeColor}
              onChangeComplete={this.handleChange}
            />
          </div>
        )}
      </div>
    );
  }

  setCurrentColor() {
    const { themeColor } = this.props;
    this.setState({
      currentColor: themeColor
    });
  }

  cancelChoice() {
    const { onChange } = this.props;
    const { currentColor } = this.state;

    if (!isFunction(onChange)) {
      return;
    }
    onChange(currentColor);
  }

  showPicker() {
    this.setState({ colorPickerShow: true }, () => {
      window.addEventListener('keydown', this.handleKeyDown);
      window.addEventListener('click', this.handleWindowClick);
    });
  }

  hidePicker() {
    this.setState({ colorPickerShow: false }, () => {
      window.removeEventListener('keydown', this.handleKeyDown);
      window.removeEventListener('click', this.handleWindowClick);
    });
  }

  setChoiceElementRef = element => {
    if (!element) return;

    this._choiceElement = element;
  };

  handlePickerTrigger = e => {
    e.stopPropagation();
    const { colorPickerShow } = this.state;

    if (colorPickerShow) {
      this.hidePicker();
    } else {
      this.showPicker();
      this.setCurrentColor();
    }
  };

  handleChange = color => {
    const { onChange } = this.props;
    const { hex } = color;

    if (!isFunction(onChange)) {
      return;
    }
    onChange(hex);
  };

  handleKeyDown = e => {
    const { keyCode } = e;

    if (keyCode !== ESC_KEY) {
      return;
    }
    this.cancelChoice();
    this.hidePicker();
  };

  handleWindowClick = e => {
    const { target } = e;

    if (contains(this._choiceElement, target)) {
      return;
    }

    if (!this.state.colorPickerShow) {
      return;
    }

    this.hidePicker();
  };
}

export default CoorPicker;
