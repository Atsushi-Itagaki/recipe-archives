import React, { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import RecipeItem from './RecipeItem'

const RecipeArchives = () => {
  const [recipeData, setData] = useState([])

  useEffect(() => {
    fetch('/recipe_data')
      .then((res) => res.json())
      .then((data) => setData(
        data.recipe_data.map((data) => (
          {
            recipe_name: data.recipe_name,
            recipe_description: data.recipe_description,
            recipe_ID: data.id,
          }
        ))
      ))
      .catch(console.error)
  }, [])

  return (
    <section className="recipe-archives">
      {recipeData.map((data) => (
        <RecipeItem data={data} key={uuidv4()}/>
      ))}
    </section>
  )
}

export default RecipeArchives