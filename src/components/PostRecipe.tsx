import React, { FC } from 'react'
import { postDataStructure } from './postRecipe_form-parts/modules/postDataStructure'
import SelectCookingImage from './postRecipe_form-parts/SelectCookingImage'
import RecipeTitle from './postRecipe_form-parts/RecipeTitle'
import Ingredients from './postRecipe_form-parts/Ingredients'
import HowToCook from './postRecipe_form-parts/HowToCook'
import RecipeDescription from './postRecipe_form-parts/RecipeDescription'

const RecipeForm: FC = (): JSX.Element => {
  const handlePostRecipe = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()

    console.log(postDataStructure)
  }

  return (
    <section className="recipe-form">
      <h2 className="section_title">レシピを作ってみよう！</h2>
      <form action="" method="POST" encType="">
          <SelectCookingImage />
          <RecipeTitle />
          <Ingredients />
          <HowToCook />
          <RecipeDescription />
          <button
          onClick={(e) => handlePostRecipe(e)}
          >
            レシピを投稿する！
          </button>
      </form>
    </section>
  )
}

export default RecipeForm