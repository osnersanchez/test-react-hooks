import React, { ChangeEvent, Dispatch, FormEvent, SetStateAction, useState } from 'react';

interface PropsTypes {
  setCategories: Dispatch<SetStateAction<string[]>>
}

const AddCategory = ({ setCategories }: PropsTypes) => {
  const [inputValue, setInputValue] = useState<string>('');

  const handleinputChange = (e: ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value);
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setCategories((categories: string[]) => [inputValue, ...categories]);
    setInputValue('');
  };

  return (
    <form onSubmit={ handleSubmit }>
      <input
        value={ inputValue }
        onChange={ handleinputChange }
        type="text"
      />
    </form>
  )
};

export default AddCategory;