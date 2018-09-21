import React, { Component } from 'react';

import Title from './form-title';
import SmallTitle from './form-small-title';

import Row from './form-row';
import ActionRow from './form-action-row';
import LabeledRow from './form-labeled-row';
import LeftLabeledRow from './form-left-labeled-row';

import './form.css';

class Form extends Component {
  static Title = Title;
  static SmallTitle = SmallTitle;

  static Row = Row;
  static ActionRow = ActionRow;
  static LabeledRow = LabeledRow;
  static LeftLabeledRow = LeftLabeledRow;

  static defaultProps = {
    component: 'form'
  };

  render() {
    const {
      component: FormComponent,
      children,
      noLabelGap,
      ...rest
    } = this.props;

    return (
      <FormComponent className="Form" {...rest}>
        {children}
      </FormComponent>
    );
  }
}

export default Form;
