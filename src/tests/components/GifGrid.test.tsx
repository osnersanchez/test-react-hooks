import React from 'react';
import '@testing-library/jest-dom';
import { shallow, ShallowWrapper } from 'enzyme';

import GifGrid from '../../components/GifGrid';
import { useFetchGif } from '../../hooks/useFetchGifs';
import { Gif, ServiceRespond } from '../../shared/interfaces';

jest.mock('../../hooks/useFetchGifs');

const mockData = [{
  id: '1',
  title: 'Mygif',
  url: 'Any Url'
},{
  id: '2',
  title: 'Mygif',
  url: 'Any Url'
}];

describe('GifGrid test suite', () => {
  const mockFetch = useFetchGif as jest.Mock<ServiceRespond<Gif>>


  test('should render default template when default properties are set', () => {
    mockFetch.mockReturnValue({
      data: [],
      loading: true
    });
    const wrapper: ShallowWrapper = shallow(<GifGrid category='The Pepe' />);
    expect(wrapper).toMatchSnapshot();
  });

  test('should render default template when default properties are set', () => {
    mockFetch.mockReturnValue({
      data: mockData,
      loading: false
    });
    const wrapper: ShallowWrapper = shallow(<GifGrid category='The Pepe' />);
    expect(wrapper.find('p').exists()).toBeFalsy();
    expect(wrapper.find('GifGridItem').length).toBe(mockData.length);
  });

  //   test('should render in the p tag the title of props', () => {
  //     const pRef = wrapper.find('p');
  //     expect(pRef.text().trim()).toBe(gif.title);
  //   })

  //   test('should render in the img tag the url of props', () => {
  //     const imgRef = wrapper.find('img');
  //     expect(imgRef.prop('src')).toBe(gif.url);
  //     expect(imgRef.prop('alt')).toBe(gif.title);
  //   })

  //   test('should include the animate__bounceIn class in the div with the card-item class', () => {
  //     const divRef = wrapper.find('.card-item');
  //     expect(divRef.prop('className')?.includes('animate__bounceIn')).toBeTruthy();
  //   })
});