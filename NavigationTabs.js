import React, { useContext, useState } from 'react'
import RecipeArchives from './RecipeArchives'
import RecipeForm from './RecipeForm'
import { setComponentContext } from '../App'
import { faKitchenSet, faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const NavigationTabs = () => {
  const setComponent = useContext(setComponentContext)
  const handleTabSet = (component) => {
    setComponent(component)
  }

  return (
    <nav className="navigation">
      <ul className="navigation-list">
        <li className="navigation-item">
          <button
            className="navigation-button"
            onClick={() => handleTabSet(<RecipeArchives />)}
          >
            <FontAwesomeIcon icon={faKitchenSet} />
          </button>
        </li>
        <li className="navigation-item">
          <button
            className="navigation-button"
            onClick={() => handleTabSet(<RecipeForm />)}
          >
            <FontAwesomeIcon icon={faPlus} />
          </button>
        </li>
      </ul>
    </nav>
  )
}

export default NavigationTabs