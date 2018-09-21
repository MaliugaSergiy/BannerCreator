import React from 'react';
import { shallow } from 'enzyme';
import Button from './button';

describe('<Button />', () => {
  it('renders a <button>', () => {
    const renderedComponent = shallow(<Button />);
    expect(renderedComponent.find('button').getElement()).toBeDefined();
  });

  it('renders its children', () => {
    const text = 'Click me!';
    const renderedComponent = shallow(<Button title={text} />);
    expect(renderedComponent.contains(text)).toEqual(true);
  });

  it('handles clicks', () => {
    const onClickSpy = jest.fn();
    const renderedComponent = shallow(<Button onClick={onClickSpy} />);
    renderedComponent.find('button').simulate('click');
    expect(onClickSpy).toHaveBeenCalled();
  });
});
