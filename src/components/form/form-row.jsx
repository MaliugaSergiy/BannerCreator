import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const { bool } = PropTypes;

class FormRow extends Component {
  static propTypes = {
    noLabelGap: bool
  };

  render() {
    const { labelTop, noLabelGap } = this.props;
    return (
      <div
        className={classNames('Form-row', {
          'Form-row--labelTop': labelTop,
          'Form-row--noLabelGap': noLabelGap
        })}
      >
        {this.props.children}
      </div>
    );
  }
}

export default FormRow;
