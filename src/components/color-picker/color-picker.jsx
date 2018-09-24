import React, { Component } from 'react';
import PropTypes from 'prop-types';

import contains from 'dom-helpers/query/contains';
import { SketchPicker } from 'react-color';
import invert from 'invert-color';

import isFunction from '../../utils/is-function';

import './color-picker.css';

const ESC_KEY = 27;

const DEFAULT_COLOR = '#262931';

class ColorPicker extends Component {
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
      <div className="ColorPicker">
        <button
          className="ColorPicker-button"
          type="button"
          onClick={this.handlePickerTrigger}
          style={{
            backgroundColor: themeColor,
            color: invert(themeColor, true)
          }}
        >
          {themeColor}
        </button>
        <div className="ColorPicker-info">
          {themeColor === DEFAULT_COLOR ? (
            '(цвет по умолчанию)'
          ) : (
            <button
              className="ColorPicker-resetButton"
              type="button"
              onClick={this.handleReset}
              style={{
                backgroundColor: DEFAULT_COLOR,
                color: invert(DEFAULT_COLOR, true)
              }}
            >
              Reset to default
            </button>
          )}
        </div>
        {colorPickerShow && (
          <div className="ColorPicker-choice" ref={this.setChoiceElementRef}>
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

  handleReset = () => {
    const { onChange } = this.props;

    if (!isFunction(onChange)) {
      return;
    }
    onChange(DEFAULT_COLOR);
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

export default ColorPicker;
