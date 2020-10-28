import React from 'react';
import '@testing-library/jest-dom';
import { shallow, ShallowWrapper } from 'enzyme';

import GifGridItem from '../components/GifGridItem';
import { Gif } from '../shared/interfaces';

const gif: Gif = {
  id: '0',
  title: 'test',
  url: 'http://tets'
}

describe('CounterApp test suite', () => {
  let wrapper: ShallowWrapper = shallow(<GifGridItem gif={gif} />);

  test('should render default template when default properties are set', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should render in the p tag the title of props', () => {
    const pRef = wrapper.find('p');
    expect(pRef.text().trim()).toBe(gif.title);
  })

  test('should render in the img tag the url of props', () => {
    const imgRef = wrapper.find('img');
    expect(imgRef.prop('src')).toBe(gif.url);
    expect(imgRef.prop('alt')).toBe(gif.title);
  })

  test('should include the animate__bounceIn class in the div with the card-item class', () => {
    const divRef = wrapper.find('.card-item');
    expect(divRef.prop('className')?.includes('animate__bounceIn')).toBeTruthy();
  })
});