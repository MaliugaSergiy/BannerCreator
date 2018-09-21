import React, { Component } from 'react';
import './button.css';
import classNames from 'classnames';

class Button extends Component {
  render() {
    const {
      accent,
      primary,
      inverted,
      htmlTitle,
      inline,
      biggerIcon,
      smallIndent,
      secondary,
      sorting,
      smaller,
      noBorder,
      vk,
      facebook,
      instagram,
      round,
      icon,
      title,
      active,
      ...rest
    } = this.props;

    const Icon = this.props.icon;
    return (
      <button
        title={htmlTitle}
        className={classNames('ButtonDeprecated', {
          'ButtonDeprecated--accent': accent,
          'ButtonDeprecated--primary': primary,
          'ButtonDeprecated--inverted': inverted,
          'ButtonDeprecated--inline': inline,
          'ButtonDeprecated--sorting': sorting,
          'ButtonDeprecated--secondary': secondary,
          'ButtonDeprecated--smaller': smaller,
          'ButtonDeprecated--round': round,
          'ButtonDeprecated--smallIndent': smallIndent,
          'ButtonDeprecated--biggerIcon': biggerIcon,
          'ButtonDeprecated--noBorder': noBorder,
          'ButtonDeprecated--vk': vk,
          'ButtonDeprecated--facebook': facebook,
          'ButtonDeprecated--instagram': instagram
        })}
        type="button"
        {...rest}
      >
        {Icon && (
          <span className="ButtonDeprecated-icon">
            <Icon active={active} />
          </span>
        )}
        <span className="ButtonDeprecated-title">{this.props.title}</span>
      </button>
    );
  }
}

export default Button;
