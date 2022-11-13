import React, { createContext, useState } from 'react'
import PartOfHowToCook from './PartOfHowToCook'

export const setValueContext = createContext({} as Howto[])

type Howto = {
  id: number
  howtoText: string
}

const HowToCook: React.FC = (): JSX.Element => {
  const [howtoMake, setHowto] = useState<Howto[]>([
    { id: 0, howtoText: "" }
  ])

  const handleAddHowto = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    
    setHowto((prevHowto) => (
      [...prevHowto, { id: howtoMake.length, howtoText: "" }]
    ))
  }

  return (
    <div className="input__field__item input__field__item_howto">
      <label>作り方</label>
      <div className="inputRecipeData__input__field__block">
        <setValueContext.Provider value={howtoMake}>
          {howtoMake.map((howto): JSX.Element => {
            return <PartOfHowToCook id={howto.id} key={howto.id} />
          })}
        </setValueContext.Provider>
      </div>
      <button
        className="input__field__block_add"
        onClick={(e) => handleAddHowto(e)}
      >
        手順を追加する
      </button>
    </div>
  )
}

export default HowToCook