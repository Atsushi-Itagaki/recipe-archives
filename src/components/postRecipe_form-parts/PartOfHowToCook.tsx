import React, { useContext } from 'react'
import { setValueContext } from './HowToCook'

const PartOfHowToCook = (props: { id: number | string }) => {
  const stepOfNumber = props.id as number + 1
  const howtoMake = useContext(setValueContext)

  const handleAddHowto = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    howtoMake[props.id as number].howtoText = e.target.value
  }

  return (
    <div className="inputRecipeData__input__outer">
      <span>{stepOfNumber}</span>
      <textarea
        name="howto_text"
        id={props.id as string}
        onChange={(e) => handleAddHowto(e)}
      >
      </textarea>
    </div>
  )
}

export default PartOfHowToCook