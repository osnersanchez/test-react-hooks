import React from 'react';
import '@testing-library/jest-dom';
import { shallow, ShallowWrapper } from 'enzyme';

import GitExpertApp from '../GifExpertApp';


describe('GitExpertApp test suite', () => {

  test('should render default template when default properties are set', () => {
    const wrapper: ShallowWrapper = shallow(<GitExpertApp />);
    expect(wrapper).toMatchSnapshot();
  });

  test('should render default template when default properties are set', () => {
    const categories = ['One Push', 'Dragon Ball'];

    const wrapper: ShallowWrapper = shallow(<GitExpertApp defaultCategory={categories} />);
    expect(wrapper).toMatchSnapshot();
  });
});