import React, { FC } from 'react'
import { postDataStructure } from './modules/postDataStructure'

const RecipeTitle: FC = () => {
  return (
    <div className="RecipeTitle">
      <div className="input__field__item input__field__item_title">
        <label>料理のタイトル</label>
        <div className="inputRecipeData__input__outer">
          <input
            type="text"
            name="recipe_title"
            className="inputRecipeData__input inputRecipeData__input_title"
            id="recipe_title"
            onChange={(e) => {
              postDataStructure.recipe_title = e.target.value
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default RecipeTitle