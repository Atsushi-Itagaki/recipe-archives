import React, { FC } from 'react'
import QuantityInputRow from './QuantityInputRow'

const Quantity: FC = () => {
  return (
    <div className="input__field__item input__field__item_quantity">
      <label>分量</label>
      <div className="inputRecipeData__input__field__block">
        <QuantityInputRow />
      </div>
    </div>
  )
}

export default Quantity