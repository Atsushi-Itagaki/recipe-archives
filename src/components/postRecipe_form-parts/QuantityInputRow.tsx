import React from 'react'

const QuantityInputRow = () => {
  return (
    <div className="inputRecipeData__input__outer">
      <label></label>
      <input type="number" />
      <select name="quantity">
        <option disabled>--- 単位を選択してください ---</option>
        <option value="kg">kg</option>
        <option value="g">g</option>
        <option value="mg">mg</option>
      </select>
    </div>
  )
}

export default QuantityInputRow