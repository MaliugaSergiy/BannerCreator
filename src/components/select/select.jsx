import React, { Component } from 'react';
import './select.css';
import classNames from 'classnames';

class Select extends Component {
  render() {
    const { listing, options, ...rest } = this.props;

    return (
      <select
        className={classNames('Select', {
          'Select--listing': listing // TODO: remove listing modifier
        })}
        {...rest}
      >
        {options.map(this.renderOption)}
      </select>
    );
  }

  renderOption = (item, index) => {
    return (
      <option key={index} value={item.value}>
        {item.title}
      </option>
    );
  };
}

export default Select;
