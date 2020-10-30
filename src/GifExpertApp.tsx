import React, { useState } from 'react';
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

interface PropsTypes {
  defaultCategory?: string[]
}


const GitExpertApp = ({ defaultCategory = ['One punch'] }: PropsTypes) => {
  const [categories, setCategories] = useState(defaultCategory);

  // const handleAdd = () => setCategories([...categories, 'Marvel']);
  // const handleAdd = () => setCategories((categoriesState: string[]) => [...categoriesState, 'Marvel']);

  return (
    <>
      <h2>GifExpertApp</h2>
      <hr />
      <AddCategory setCategories={setCategories} />
      <ol>
        {
          categories?.map((category: string) => (
            <GifGrid key={category} category={category} />
          ))
        }
      </ol>
    </>
  )
};

export default GitExpertApp;