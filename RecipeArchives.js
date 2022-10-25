import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { useGetRecipeData } from '../modules/module'
import RecipeItem from './RecipeItem'

const RecipeArchives = () => {
  const [recipeData, setRecipeData] = useState([])

  useGetRecipeData(setRecipeData)

  return (
    <section className="recipe-archives">
      {recipeData.map((data) => (
        <RecipeItem data={data} setRecipeData={setRecipeData} key={uuidv4()}/>
      ))}
    </section>
  )
}

export default RecipeArchives