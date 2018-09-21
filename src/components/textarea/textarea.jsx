import React, { Component } from 'react';
import './textarea.css';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import TextareaAutosize from 'react-textarea-autosize';

const { bool, string, func } = PropTypes;
class Textarea extends Component {
  static propTypes = {
    /** Textarea value */
    value: string,

    /** Responsible for 'opened' textarea state */
    opened: bool,

    /** Responsible for Textarea autosizing */
    autosize: bool,

    /** Contains event 'onChange' function */
    onChange: func
  };

  static defaultProps = {
    opened: false,
    autosize: false
  };

  state = {
    value: ''
  };

  render() {
    const { opened, autosize, ...rest } = this.props;
    const Textarea = autosize ? TextareaAutosize : 'textarea';
    return (
      <Textarea
        className={classNames('Textarea', {
          'Textarea--opened': opened,
          'Textarea--autosize': autosize,
          'Textarea--empty': this.getIsEmpty()
        })}
        onChange={this.getChangeHandler()}
        value={this.getValue()}
        {...rest}
      />
    );
  }

  getIsEmpty() {
    const value = this.getValue();
    return !value.length;
  }

  getValue() {
    const { value, onChange } = this.props;
    if (typeof onChange !== 'function') {
      return this.state.value;
    }
    return value;
  }

  getChangeHandler() {
    const { onChange } = this.props;
    if (typeof onChange !== 'function') {
      return this.handleChange;
    }
    return onChange;
  }

  handleChange = e => {
    const target = e.target;
    this.setState({
      value: target.value
    });
  };
}

export default Textarea;
