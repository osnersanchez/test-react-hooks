import { HTMLAttributes, shallow, ShallowWrapper } from 'enzyme';
import React from 'react';
import AddCategory from '../../components/AddCategory';

const expectValue = 'The Pepe';
const evetInputMock = { target: { value: expectValue } };
const evetFormMock = { preventDefault() { } };

describe('AddCategory test suit', () => {
  let wrapper: ShallowWrapper
  let setCategoryMock: jest.Mock;

  beforeEach(() => {
    setCategoryMock = jest.fn<void, string[]>()
    wrapper = shallow(<AddCategory setCategories={setCategoryMock} />);
  })

  test('should render default template when default properties are set', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should changed value input when setInputValue method is called', () => {
    const inputRef: ShallowWrapper<HTMLAttributes> = wrapper.find('input');
    inputRef.simulate('change', evetInputMock);

    expect(wrapper.find('p').text().trim()).toBe(expectValue);
  });

  test('should not call setCategoryMock method when submit method is called and input length is less than 2', () => {
    const formRef: ShallowWrapper<HTMLAttributes> = wrapper.find('form');
    formRef.simulate('submit', evetFormMock);

    expect(setCategoryMock).not.toHaveBeenCalled();
  });

  test('should call setCategoryMock method when submit method is called and input length is greater than 2', () => {
    const inputRef: ShallowWrapper<HTMLAttributes> = wrapper.find('input');
    inputRef.simulate('change', evetInputMock);
    wrapper.find('form').simulate('submit', evetFormMock);

    expect(setCategoryMock).toHaveBeenCalledWith(expect.any(Function));
    expect(inputRef.prop('value')).toBe('');
  });
})

