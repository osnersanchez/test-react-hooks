import React, { useState } from 'react';
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

const GitExpertApp = () => {
  const [categories, setCategories] = useState(['One punch']);

  // const handleAdd = () => setCategories([...categories, 'Marvel']);
  // const handleAdd = () => setCategories((categoriesState: string[]) => [...categoriesState, 'Marvel']);

  return (
    <>
      <h2>GifExpertApp</h2>
      <hr />
      <AddCategory setCategories={setCategories}/>
      <ol>
        {
          categories.map((category: string) => (
            <GifGrid key={category} category={category}/>
          ))
        }
      </ol>
    </>
  )
};


export default GitExpertApp;