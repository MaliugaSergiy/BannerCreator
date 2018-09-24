import React, { Component } from 'react';

import Button from '../button/button';
import isFunction from '../../utils/is-function';

import './select-image.css';

class SelectImage extends Component {
  state = {
    selectedFileName: ''
  };

  inputElement = null;

  render() {
    const { selectedFileName } = this.state;
    return (
      <div className="SelectImage">
        <Button
          title={
            !selectedFileName ? 'Выбрать файл' : 'Выбрать другое изображение'
          }
          variant="primary"
          size="small"
          onClick={this.handleClick}
        />

        <input
          className="SelectImage-input"
          type="file"
          onChange={this.handleImageChange}
          accept="image/*"
          ref={this.setInputRef}
        />
      </div>
    );
  }

  setSelectFileName(selectedFileName) {
    this.setState({
      selectedFileName
    });
  }

  setInputRef = element => {
    if (!element) return;
    this.inputElement = element;
  };

  handleClick = () => {
    this.inputElement.click();
  };

  handleImageChange = e => {
    const { onImageAccept } = this.props;

    if (e.target.files.length === 0) {
      return;
    }

    const { name } = e.target.files[0];

    if (!isFunction(onImageAccept)) {
      return;
    }
    onImageAccept(e);
    this.setSelectFileName(name);
  };
}

export default SelectImage;
