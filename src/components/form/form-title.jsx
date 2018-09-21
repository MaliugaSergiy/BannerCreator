import React, { Component } from 'react';

class FormTitle extends Component {
  render() {
    return <h3 className="Form-title">{this.props.children}</h3>;
  }
}

export default FormTitle;
