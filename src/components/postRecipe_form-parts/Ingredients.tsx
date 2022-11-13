import React, { FC, useEffect, useState } from 'react'
import { postDataStructure } from './modules/postDataStructure'
import IngredientsInputRow from './IngredientsInputRow'

const Ingredients: FC = () => {
  const [ingredientArray, setIngredientArray] = useState(postDataStructure.ingredients.map((ingredient) => { return ingredient }))

  const addIngredientRows = (count: number) => {
    for (let i = 0; i < count; i++) {
      postDataStructure.ingredients.push({
        ingredient: '',
        quantity: '',
        unit: ''
      })
    }
  }

  const handleAddIngredientRows = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    addIngredientRows(2)
  }

  useEffect(() => {
    addIngredientRows(3)
  }, [])

  return (
    <div className="input__field__item input__field__item_ingredients">
      <label>材料</label>
      <div className="inputRecipeData__input__field__block">
        {postDataStructure.ingredients.map((ingredient, index) => (
          <IngredientsInputRow id={index}/>
        ))}
      </div>
      <button
        className="input__field__block_add"
        onClick={(e) => handleAddIngredientRows(e)}
      >
        入力欄を追加
      </button>
    </div>
  )
}


export default Ingredients

function uuidv4(): React.Key | null | undefined {
  throw new Error('Function not implemented.')
}
