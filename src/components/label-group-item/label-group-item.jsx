import React, { Component } from 'react';

class LabelGroupItem extends Component {
  render() {
    return (
      <label className="LabelGroup-item">
        {this.props.children}
        <input
          className="LabelGroup-input"
          type="file"
          accept={this.props.accept}
        />
      </label>
    );
  }
}

export default LabelGroupItem;
