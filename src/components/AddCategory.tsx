import React, { ChangeEvent, Dispatch, FormEvent, SetStateAction, useState } from 'react';

interface PropsTypes {
  setCategories: Dispatch<SetStateAction<string[]>>
}

const AddCategory = ({ setCategories }: PropsTypes) => {
  const [inputValue, setInputValue] = useState<string>('');

  const handleinputChange = (e: ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value);
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (inputValue.trim().length > 2) {
      setCategories((categories: string[]) => [inputValue, ...categories]);
      setInputValue('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <p>{inputValue}</p>
      <input
        value={inputValue}
        onChange={handleinputChange}
        type="text"
      />
    </form>
  )
};

export default AddCategory;