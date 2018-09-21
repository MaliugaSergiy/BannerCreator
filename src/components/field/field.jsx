import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './field.css';

const { string, arrayOf, element, oneOfType } = PropTypes;

class Field extends Component {
  static propTypes = {
    /** Label describes the field. Displays at the top of the field */
    label: string,

    /** Error if exists describes mistakes in field. Displays at the top */
    error: string,

    /** Подсказка. Отображается в поле лейбла с правой стороны */
    hint: oneOfType([string, element]),

    /**
     * Array of examples.
     * Begins with the word 'Например:'
     * Elements of the array are separated by the word 'или'
     **/
    exampleList: arrayOf(element)
  };

  static defaultProps = {
    label: '',
    error: '',
    hint: '',
    exampleList: []
  };

  render() {
    const { label, hint, children } = this.props;
    const meta = this.renderMeta();

    return (
      <div className="Field">
        {label && (
          <div className="Field-labelRow">
            <span className="Field-label">{label}</span>
            <span className="Field-hint">{hint}</span>
          </div>
        )}
        <div className="Field-instance">{children}</div>
        {meta}
      </div>
    );
  }

  renderMeta() {
    const { error } = this.props;
    const exampleList = this.renderExampleList();

    return (
      <div className="Field-meta">
        {error && <div className="Field-error">{error}</div>}
        {!error && exampleList}
      </div>
    );
  }

  renderExampleList() {
    const { exampleList } = this.props;

    if (!exampleList.length) {
      return null;
    }

    const renderedExampleList = exampleList.map(this.renderExample);

    return (
      <div className="Field-exampleList">
        <span className="Field-wordItroduction">Например:</span>
        {renderedExampleList}
      </div>
    );
  }

  renderExample = (item, index) => {
    return (
      <span key={index} className="Field-exampleItem">
        {index > 0 && <span className="Field-wordSeparator">или</span>}
        {item}
      </span>
    );
  };
}

export default Field;
