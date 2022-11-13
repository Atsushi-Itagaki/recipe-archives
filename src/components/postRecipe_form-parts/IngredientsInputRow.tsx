import React, { FC } from 'react'
import { postDataStructure } from './modules/postDataStructure'

const IngredientsInputRow: FC<{ id: number }> = (props: { id: number }) => {
  return (
    <div className="inputRecipeData__input__outer">
      <input
        type="text"
        name="ingredient"
        className="inputRecipeData__inputinputRecipeData__input_ingredients"
        id={props.id as unknown as string}
        onChange={(e) => {
          console.log(e.target.id)
          postDataStructure.ingredients[props.id].ingredient = e.target.value
        }}
      />
      <input
        type="number"
        onChange={(e) => {
          postDataStructure.ingredients[props.id].quantity = e.target.value
        }}
      />
      <select
        name="quantity"
        defaultValue={"単位"}
        onChange={(e) => {
          postDataStructure.ingredients[props.id].unit = e.target.value
        }}
      >
        <option value="単位" disabled>単位</option>
        <option value="kg">kg</option>
        <option value="g">g</option>
        <option value="mg">mg</option>
      </select>
    </div>
  )
}

export default IngredientsInputRow

// import React, { forwardRef, Ref } from 'react'

// const IngredientsInputRow = (props: Record<string, unknown>, ref: Ref<HTMLInputElement>) => (
//   <div className="inputRecipeData__input__outer">
//     <input
//       type="text"
//       name=""
//       className="inputRecipeData__inputinputRecipeData__input_ingredients"
//       ref={ref}
//     />
//   </div>
// )

// const forwardIngredient = forwardRef<HTMLInputElement, Record<string, unknown>>(
//   IngredientsInputRow
// )

// export default forwardIngredient