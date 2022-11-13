import React, { FC } from 'react'
import { postDataStructure } from './modules/postDataStructure'

const RecipeDescription: FC = () => {
  return (
    <div className="input__field__item input__field__item_description">
      <label>料理の説明</label>
      <div className="inputRecipeData__input__field__block">
        <div className="inputRecipeData__input__outer">
          <textarea
            name="description"
            id=""
            onChange={(e) => {
              postDataStructure.description = e.target.value
            }}
          >
          </textarea>
        </div>
      </div>
    </div>
  )
}

export default RecipeDescription